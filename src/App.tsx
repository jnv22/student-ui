import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, Container } from "theme-ui";
import theme from "./theme";

import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container pl={2} pr={2}>
          <Switch>
            <Route path="/" children={<Home />} />
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
