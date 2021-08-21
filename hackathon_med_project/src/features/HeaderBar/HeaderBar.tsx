import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import * as style from "./HeaderBar.style";

const HeaderBar: React.FC = () => {
  return (
    <nav className={style.navbar}>
      <h1 className={style.medihelp}>MediHelp</h1>
      <div className={style.links}>
        <Button
          color="secondary"
          className={style.indLinks}
          size="small"
          component={Link}
          to={routes.home.path}
        >
          Home
        </Button>
        <Button
          color="secondary"
          className={style.indLinks}
          size="small"
          component={Link}
          to={routes.bmr.path}
        >
          BMR
        </Button>
        <Button
          color="secondary"
          className={style.indLinks}
          size="small"
          component={Link}
          to={routes.bmi.path}
        >
          BMI Calculator
        </Button>
        <Button
          color="secondary"
          className={style.indLinks}
          size="small"
          component={Link}
          to={routes.riskPredictor.path}
        >
          Risk Predictor
        </Button>
        {/* <Link to={routes.home.path} className={style.indLinks}>
          Home
        </Link>
        <Link to={routes.bmr.path} className={style.indLinks}>
          BMR
        </Link>
        <Link to={routes.bmi.path} className={style.indLinks}>
          BMI Calculator
        </Link>
        <Link to={routes.riskPredictor.path} className={style.indLinks}>
          Risk Predictor
        </Link> */}
      </div>
    </nav>
  );
};

export default HeaderBar;
