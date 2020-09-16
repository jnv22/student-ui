/** @jsx jsx */
import { jsx, Flex } from "theme-ui";

import React, { useState } from "react";

import Navigation from "../components/Navigation";
import StudentList from "../components/StudentList";
import { MenuButton } from "theme-ui";

import data from "../data/students.json";

const Home: React.FC<{}> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
    >
      <MenuButton
        sx={{
          width: "55px",
        }}
        mb={0}
        onClick={() => setShowNavigation(!showNavigation)}
      />
      <Flex>
        {showNavigation && <Navigation />}
        <div
          sx={{
            flex: 1,
            ml: 1,
          }}
        >
          <StudentList data={data} />
        </div>
      </Flex>
    </Flex>
  );
};

export default Home;
