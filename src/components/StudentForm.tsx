import React from "react";
import { Formik, FormikProps } from "formik";
import { Input, Button } from "theme-ui";

export interface StudentFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number | undefined;
}

export interface StudentFormProps extends StudentFormValues {
  onSubmit: (values: StudentFormValues) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({
  firstName,
  lastName,
  email,
  age,
  onSubmit,
}) => (
  <Formik
    initialValues={{ firstName, lastName, email, age }}
    onSubmit={(values) => {
      onSubmit(values);
    }}
  >
    {({
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }: FormikProps<StudentFormValues>) => (
      <form onSubmit={handleSubmit}>
        <Input
          type="firstName"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        <Input
          type="lastName"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <Input
          type="age"
          name="age"
          placeholder="Age"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.age}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="primary"
          sx={{ display: "block", margin: "0 auto" }}
        >
          Submit
        </Button>
      </form>
    )}
  </Formik>
);

export default StudentForm;
