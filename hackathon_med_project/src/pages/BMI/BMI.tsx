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
  }),
    [heightValue, weightValue];

  useEffect(() => {
    if (weightValue >= 1 && heightValue >= 1) {
      setDisableSearch(true);
    } else {
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
        <h1>BMI Results</h1>
        <p> {disableSearch ? bmiCalculate(heightValue, weightValue) : ""}</p>
        <p>{underweightSensor ? "You are a skinny fuck" : ""}</p>
        <p>{normalSensor ? "You're an average joe" : ""}</p>
        <p>{overweightSensor ? "A bit worrying there mate" : ""}</p>
        <p>{obesitySensor ? "Dw you're just fluffy" : ""}</p>
        <p>{damnSensor ? "DAMMNNNN you dead" : ""}</p>
      </div>
    </div>
  );
};

export default BMI;
