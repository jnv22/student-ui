import React from "react";
import { render, screen, within } from "@testing-library/react";

import EmailList from "../StudentList";
import data from "../../data/students.json";

describe("<EmailList />", () => {
  it("renders list", () => {
    render(<EmailList data={data} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(data.students.length);

    listItems.forEach((item, index) => {
      const { getByText, getByTitle } = within(item);
      const { firstName, lastName } = data.students[index];
      expect(getByText(`${firstName} ${lastName}`)).toBeInTheDocument();
      const DeleteElement = getByTitle("delete");
      expect(DeleteElement).toBeInTheDocument();
    });
  });
});
