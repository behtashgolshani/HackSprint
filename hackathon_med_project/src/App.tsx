import React from "react";
import * as style from "./App.style";
import HeaderBar from "./features/HeaderBar/HeaderBar";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import routes from "./config/routes";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: { main: "#f1356d" },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className={style.app}>
          <HeaderBar />
          <Switch>
            {Object.values(routes).map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps) => (
                    <route.component
                      name={route.name}
                      {...props}
                      {...route.props}
                    />
                  )}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
