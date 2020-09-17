/** @jsx jsx */

import React from "react";

import { Label, Checkbox as CheckboxComponent, jsx } from "theme-ui";

export interface CheckboxProps {
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange }) => {
  return (
    <Label sx={{ width: "auto" }}>
      <CheckboxComponent onChange={onChange} defaultChecked={false} />
    </Label>
  );
};

export default Checkbox;
