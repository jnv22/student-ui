import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Navigation from "../components/Navigation";
import data from "../data/students.json";

export default {
  title: "Student/Navigation",
  component: Navigation,
} as Meta;

const Template: Story = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: data,
};
