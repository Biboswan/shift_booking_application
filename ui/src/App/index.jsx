import React, { useEffect, useState } from "react";
import { ThemeProvider, makeStyles } from "@material-ui/styles";
import theme from "../theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../components/Header";
import Home from "../pages/Home";

const App = () => {
  const [themeType, setThemeType] = useState("lightTheme");
  useEffect(() => {
    console.log("React App Running...");
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme[themeType]}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
