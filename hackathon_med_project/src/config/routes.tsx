import IRoute from "../interfaces/route";
import BMI from "../pages/BMI/BMI";
import BMR from "../pages/BMR/BMR";
import RiskPredictor from "../pages/RiskPredictor/RiskPredictor";
import Home from "../pages/Home/Home";

const home: IRoute = {
  path: "/",
  name: "Home Page",
  component: Home,
  exact: true,
};

const bmi: IRoute = {
  path: "/bmi",
  name: "BMI",
  component: BMI,
  exact: true,
};

const bmr: IRoute = {
  path: "/bmr",
  name: "BMR",
  component: BMR,
  exact: true,
};

const riskPredictor: IRoute = {
  path: "/RiskPredictor",
  name: "Risk Predictor",
  component: RiskPredictor,
  exact: true,
};

const routes = { home, bmi, bmr, riskPredictor };

export default routes;
