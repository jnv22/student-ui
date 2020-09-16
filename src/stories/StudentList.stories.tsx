import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import StudentList, { StudentListProps } from "../components/StudentList";
import data from "../data/students.json";

export default {
  title: "Student/List",
  component: StudentList,
} as Meta;

const Template: Story<StudentListProps> = (args) => <StudentList {...args} />;

export const Student = Template.bind({});
Student.args = {
  data: data,
};
