import React from "react";
import { render, screen } from "@testing-library/react";

import Navigation from "../Navigation";

describe("<Navigation />", () => {
  it("renders list", () => {
    // 5 list items total
    const LISTITEMS = 1;

    render(<Navigation />);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(LISTITEMS);
  });
});
