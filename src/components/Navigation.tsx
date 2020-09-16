/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

import { Box, Button } from "theme-ui";

const Navigation: React.FC<{}> = () => {
  return (
    <Box p={4} bg="white">
      <ul
        sx={{
          padding: 0,
          margin: 0,
          "& > li": {
            listStyle: "none",
            textAlign: "center",
          },
        }}
      >
        {/* TODO: Make into links */}
        <li>
          <Button variant="primary">Main</Button>
        </li>
      </ul>
    </Box>
  );
};

export default Navigation;
