import React from "react";
import * as style from "./App.style";
import { HeaderBar } from "./features/HeaderBar";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import routes from "./config/routes";

const App: React.FC = () => {
  return (
    <Router>
      <div className={style.app}>
        <HeaderBar />
        <div className={style.content}>
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
      </div>
    </Router>
  );
};

export default App;
