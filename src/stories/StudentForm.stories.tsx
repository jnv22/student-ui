import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import StudentForm, { StudentFormProps } from "../components/StudentForm";

export default {
  title: "Student/Form",
  component: StudentForm,
} as Meta;

const Template: Story<StudentFormProps> = (args) => <StudentForm {...args} />;

export const Modify = Template.bind({});
