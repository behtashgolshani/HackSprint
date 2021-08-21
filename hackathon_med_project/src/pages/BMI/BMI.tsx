import { px } from "csx";
import { TextField } from "@material-ui/core";
import React from "react";
import * as style from "./BMI.style";

const BMI = () => {
  return (
    <div>
      <h1 className={style.title}>BMI- Body Mass Index</h1>
      <p className={style.marginalise_left}>
        {" "}
        The Body Mass Index measures the relationship between your height to
        weight to determine if you are healthy. Use our BMI calculator to see
        how healthy you are.
      </p>{" "}
      <div className={style.col}>
        <h2> BMI Calculator </h2>
        <p> This is </p>
        <h2 className={style.bmi_results}> BMI Results </h2>
      </div>
      <form>
        <label></label>
      </form>
    </div>
  );
};

export default BMI;
