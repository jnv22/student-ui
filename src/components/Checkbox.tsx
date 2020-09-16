/** @jsx jsx */

import React from "react";

import { Label, Checkbox as CheckboxComponent, jsx } from "theme-ui";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <Label sx={{ width: "auto" }}>
      <CheckboxComponent checked={checked} onChange={onChange} />
    </Label>
  );
};

export default Checkbox;
