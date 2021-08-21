import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import { useState } from "react";
import * as appStyle from "../../App.style";
import * as style from "./BMI.style";
import { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { px } from "csx";

import { truncate } from "fs";
import { height } from "@material-ui/system";

const BMI: React.FC = () => {
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const [enableSearch, setEnableSearch] = useState<boolean>(true);
  const [underweightSensor, setUnderweightSensor] = useState<boolean>(false);
  const [normalSensor, setNormalSensor] = useState<boolean>(false);
  const [overweightSensor, setOverweightSensor] = useState<boolean>(false);
  const [obesitySensor, setObesitySensor] = useState<boolean>(false);
  const [damnSensor, setDamnSensor] = useState<boolean>(false);

  const bmiCalculate = (heightValue: number, weightValue: number) => {
    return ((weightValue / heightValue / heightValue) * 10000 + 0.05).toFixed(
      1
    );
  };

  useEffect(() => {
    if (
      disableSearch &&
      parseFloat(bmiCalculate(heightValue, weightValue)) >= 35
    ) {
      setDamnSensor(true);
    } else {
      setDamnSensor(false);
    }
  });

  useEffect(() => {
    if (
      disableSearch &&
      parseFloat(bmiCalculate(heightValue, weightValue)) >= 30 &&
      parseFloat(bmiCalculate(heightValue, weightValue)) < 35
    ) {
      setObesitySensor(true);
    } else {
      setObesitySensor(false);
    }
  });

  useEffect(() => {
    if (
      disableSearch &&
      parseFloat(bmiCalculate(heightValue, weightValue)) >= 25 &&
      parseFloat(bmiCalculate(heightValue, weightValue)) < 30
    ) {
      setOverweightSensor(true);
    } else {
      setOverweightSensor(false);
    }
  });

  useEffect(() => {
    if (
      disableSearch &&
      parseFloat(bmiCalculate(heightValue, weightValue)) < 25 &&
      parseFloat(bmiCalculate(heightValue, weightValue)) >= 18.5
    ) {
      setNormalSensor(true);
    } else {
      setNormalSensor(false);
    }
  });

  useEffect(() => {
    if (
      disableSearch &&
      parseFloat(bmiCalculate(heightValue, weightValue)) < 18.5
    ) {
      setUnderweightSensor(true);
    } else {
      setUnderweightSensor(false);
    }
  });

  useEffect(() => {
    if (weightValue >= 1 && heightValue >= 1) {
      setDisableSearch(true);
      setEnableSearch(false);
    } else {
      setEnableSearch(true);
      setDisableSearch(false);
    }
  }, [weightValue, heightValue]);
  //{disableSearch ? "True" : "False";}
  return (
    <div>
      <h1 className={style.title}>BMI - Body Mass Index</h1>
      <p className={style.title}>
        {" "}
        The Body Mass Index measures the relationship between your height to
        weight to determine if you are healthy. Use our BMI calculator to see
        how healthy you are.
      </p>{" "}
      <h4 style={{ textAlign: "center" }}>Please enter your weight in kg:</h4>
      <div style={{ textAlign: "center" }}>
        <TextField
          size="medium"
          placeholder="Weight in kg"
          type="number"
          style={{ textAlign: "center" }}
          onChange={(e) => setWeightValue(parseFloat(e.target.value))}
        ></TextField>
      </div>
      <h4 style={{ textAlign: "center" }}>Please enter your height in cm:</h4>
      <div style={{ textAlign: "center" }}>
        <TextField
          size="medium"
          placeholder="Height in cm"
          type="number"
          style={{ textAlign: "center" }}
          onChange={(e) => setHeightValue(parseFloat(e.target.value))}
        ></TextField>{" "}
        <h1>{disableSearch ? "BMI Results" : ""}</h1>
        <p> {disableSearch ? bmiCalculate(heightValue, weightValue) : ""}</p>
        <h3 style={{ color: "#004DCF" }}>
          {underweightSensor ? "You are considered underweight" : ""}
        </h3>
        <p className={style.under}>
          {underweightSensor
            ? "Consider having a more nutrition-dense meal and some light exercises in your day-to-day routine or best if you consult your doctor for proper health directions to ensure you stay in the healthy range. You may find yourself to have more energy and be able to fight off infections if you strive for the normal range."
            : ""}
        </p>
        <h3 className={style.normal}>
          {normalSensor ? "You are healthy!" : ""}
        </h3>
        <p className={style.normal}>
          {" "}
          {normalSensor
            ? "You are healthy! You should try to maintain this feat by enjoying well-balanced diets and having a physically active day-to-day life. "
            : ""}
        </p>
        <h3 className={style.over}>
          {overweightSensor ? "You are considered overweight" : ""}
        </h3>
        <p className={style.over}>
          {overweightSensor
            ? "Keeping to a healthy weight is important and ideal. Consider keeping to a well-balanced diet and commit to a physically active lifestyle as being overweight may have many health complications involved."
            : ""}
        </p>
        <h3 className={style.obese}>
          {obesitySensor ? "You are considered obese" : ""}
        </h3>
        <p className={style.obese}>
          {obesitySensor
            ? "Having a high BMI correlates to having a high risk of being susceptible to cardiovascular diseases. Keeping to a physically active lifestyle and keeping to a well-balanced diet can help decrease your BMI. Remember, the little changes in life make significant changes."
            : ""}
        </p>
        <h3 className={style.damn}>
          {damnSensor ? "You are considered extremely obese" : ""}
        </h3>
        <p className={style.damn}>
          {damnSensor
            ? "It is important that you consult your health profession such as a doctor or a dietitian. Your health professional may offer you many options to support you in losing weight."
            : ""}
        </p>
        <h2 style={{ textAlign: "center" }}>Please enter your details</h2>
      </div>
      <p className={style.disclaimer}>
        {" "}
        Be aware that the BMI is not an accurate indicator of how healthy you
        are. It does not factor your age, how muscular you are, your ethnicity,
        your gender and many others… If you are worried about your well-being
        please consult your trusted health practitioner. Additionally, if you
        are not feeling well during these difficult times visit
      </p>
      <p style={{ textAlign: "center" }}>
        <a href={"https://www.beyondblue.org.au/"}>
          https://www.beyondblue.org.au/
        </a>
      </p>
    </div>
  );
};

export default BMI;
