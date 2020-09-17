/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useReducer, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Flex, Text, Button, Input } from "theme-ui";
import unionBy from "lodash/unionBy";
import orderBy from "lodash/orderBy";

import Checkbox from "./Checkbox";
import StudentForm, { StudentFormValues } from "./StudentForm";

export interface Students extends StudentFormValues {
  id: number;
}

export interface StudentListProps {
  data: {
    students: Students[];
  };
}

const StudentList: React.FC<StudentListProps> = ({ data: { students } }) => {
  type State = {
    [key: string]: boolean;
  };

  type Action = {
    payload: number;
    type: string;
  };

  const checkedItemsReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "toggle":
        const currentCheckedState = state[action.payload];
        return { ...state, [action.payload]: !currentCheckedState };
      case "create":
        return { ...state, [action.payload]: false };
      // TODO:  Support ability to check/uncheck all items
      case "checkAll":
        return { ...state };
      case "uncheckAll":
        return { ...state };
      default:
        return { ...state };
    }
  };

  const [studentDataStore, setStudentDataStore] = useState<Students[] | null>(
    null
  );
  const [displayedStudentData, setDisplayedStudentData] = useState<
    Students[] | null
  >(null);

  const [isAddingStudent, setIsAddingStudent] = useState(false);

  const [selectedStudentId, setSelectedStudentId] = useState<number | null>(
    null
  );

  const [checkedItems, dispatchSetCheckedItems] = useReducer(
    checkedItemsReducer,
    {}
  );

  const setStudentData = (students: Students[]) => {
    setStudentDataStore(students);
    setDisplayedStudentData(students);
  };

  useEffect(() => {
    setStudentData(students);
  }, [students]);

  useEffect(() => {
    if (studentDataStore) {
      studentDataStore.forEach(({ id }) =>
        dispatchSetCheckedItems({ type: "create", payload: id })
      );
    }
  }, [studentDataStore]);

  const submitStudent = (values: StudentFormValues, id?: number) => {
    let updatedState = [...studentDataStore];
    //adding new student
    if (!id) {
      const generateStudentId =
        studentDataStore && studentDataStore.length
          ? studentDataStore[studentDataStore.length - 1].id + 1
          : 1;
      updatedState = [
        ...updatedState,
        { ...values, id: Number(generateStudentId) },
      ];
    }
    // editing existing student
    else {
      const unorderedState = unionBy(
        [{ id: Number(id), ...values }],
        studentDataStore,
        "id"
      );
      updatedState = orderBy(unorderedState, "id", "asc");
    }

    setStudentData(updatedState);
    setSelectedStudentId(null);
  };

  return (
    <div>
      <Button
        onClick={() => {
          if (studentDataStore) {
            let filteredStudentData = studentDataStore;
            for (const checkedItem in checkedItems) {
              if (checkedItems[checkedItem] && filteredStudentData) {
                filteredStudentData = filteredStudentData.filter(
                  ({ id }) => Number(checkedItem) !== id
                );
              }
            }
            setStudentData(filteredStudentData);
          }
        }}
        sx={{
          width: "30px",
        }}
      >
        <FontAwesomeIcon
          icon={faTrash}
          aria-label="Delete Multiple Students"
          title="delete-multiple"
        />
      </Button>
      <Button
        onClick={() => {
          setIsAddingStudent(true);
        }}
        sx={{
          width: "30px",
        }}
      >
        <FontAwesomeIcon icon={faPlus} aria-label="Add Student" title="add" />
      </Button>
      {isAddingStudent && (
        <StudentForm
          onSubmit={(values) => {
            submitStudent(values);
            setIsAddingStudent(false);
          }}
        />
      )}
      <Input
        placeholder="Search..."
        onChange={(e) => {
          if (studentDataStore) {
            const searchValue = e.target.value.toUpperCase();
            const filteredData = studentDataStore.filter(
              ({ firstName = "", lastName = "" }) =>
                firstName.toUpperCase().includes(searchValue) ||
                lastName.toUpperCase().includes(searchValue)
            );
            setDisplayedStudentData(filteredData);
          }
        }}
      />
      <ul
        sx={{
          padding: 0,
        }}
      >
        {displayedStudentData &&
          displayedStudentData.map(({ id, ...student }) => {
            const { firstName, lastName } = student;
            return (
              <li
                key={id}
                sx={{
                  boxShadow: "inset 0 -1px 0 0 rgba(100,121,143,0.122)",
                  listStyle: "none",
                }}
              >
                <Flex
                  sx={{
                    flexDirection: "column",
                  }}
                >
                  <Flex
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Checkbox
                      onChange={() =>
                        dispatchSetCheckedItems({ type: "toggle", payload: id })
                      }
                    />
                    <Text variant="list.new" mr={0}>
                      {firstName} {lastName}
                    </Text>
                    <Flex>
                      <Button
                        onClick={() => {
                          const selectedId = selectedStudentId ? null : id;
                          setSelectedStudentId(selectedId);
                        }}
                        sx={{
                          width: "30px",
                        }}
                        variant="icon"
                      >
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          aria-label="Student Information"
                          title="information"
                        />
                      </Button>
                      <Button
                        onClick={() => {
                          const filteredData = displayedStudentData.filter(
                            (student) => student.id !== id
                          );
                          setStudentData(filteredData);
                        }}
                        variant="icon"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          aria-label="Delete Student"
                          title="delete"
                        />
                      </Button>
                    </Flex>
                  </Flex>
                  {selectedStudentId === id && (
                    <StudentForm
                      {...student}
                      onSubmit={(values) => submitStudent(values, id)}
                    />
                  )}
                </Flex>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default StudentList;
