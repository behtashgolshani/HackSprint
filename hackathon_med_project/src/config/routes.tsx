import IRoute from "../interfaces/route";
import BMI from "../pages/BMI/BMI";
import BMR from "../pages/BMR/BMR";
import Home from "../pages/Home/Home";
import Acknowledgements from "../pages/Acknowldgements/Acknowledgements";

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

const acknowledgements: IRoute = {
  path: "/Acknowledgements",
  name: "Acknowledgements",
  component: Acknowledgements,
  exact: true,
};

const routes = { home, bmi, bmr, acknowledgements };

export default routes;
