import React from "react";
import * as style from "./Home.style";
import * as appStyle from "../../App.style";
import { Button } from "@material-ui/core";
import routes from "../../config/routes";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className={appStyle.body}>
      <div className={style.content}>
        <h1 className={style.title}>Welcome!</h1>
        <h3>Welcome to our MelbUni Hack Project!</h3>
        <p>
          This is a website that serves the purpose of informing people about
          metabloic diseases and how you can prevent yourself from succumbing to
          these diseases. Take the time to look at our features and discover how
          you can assess your risk!{" "}
        </p>
        <div className={style.block}>
          <hr color="black"></hr>
          <h2>Basal Metabolic Rate</h2>
          <p>Calculate your BMR with our BMR calculator!</p>
          <Button
            variant="contained"
            color="secondary"
            className={style.button}
            size="medium"
            component={Link}
            to={routes.bmr.path}
          >
            Go To BMR Calculator
          </Button>
        </div>
        <div className={style.block}>
          <hr color="black"></hr>
          <h2>Body Mass Index</h2>
          <p>Calculate your BMI with our BMI calculator!</p>
          <Button
            variant="contained"
            color="primary"
            className={style.button}
            size="medium"
            component={Link}
            to={routes.bmi.path}
          >
            Go To BMI Calculator
          </Button>
          <div className={appStyle.breakPage}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
