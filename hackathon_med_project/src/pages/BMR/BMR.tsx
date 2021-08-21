import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { type } from "os";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styling from "./BMR.style";

type Gender = "male" | "female" | null | unknown;

const BMR: React.FC = () => {
  const [ageValue, setAgeValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const [gender, setGender] = useState<Gender>();
  const [bmrOutput, setBmrOutput] = useState<string>("");
  const [bmr, setBmr] = useState<number>(0);
  const [calorie, setCalorie] = useState<number>(0);
  const [calorieOutput, setCalorieOutput] = useState<string>("");

  useEffect(() => {
    if (
      ageValue >= 1 &&
      heightValue >= 1 &&
      weightValue >= 1 &&
      gender !== null
    ) {
      setDisableSearch(true);
    } else {
      setDisableSearch(false);
    }
  }, [ageValue, heightValue, weightValue]);

  useEffect(() => {
    setBmr(bmrCalculate(gender, ageValue, weightValue, heightValue));
  }, [gender, ageValue, weightValue, heightValue]);

  useEffect(() => {
    setBmrOutput("BMR = " + bmr?.toString() + " calories per day");
  }, [bmr]);

  useEffect(() => {
    setCalorie(calorieCalculate(bmr));
  }, [bmr, bmrOutput]);

  useEffect(() => {
    setCalorieOutput(
      "Daily food energy intake required to maintain BMR: " +
        calorie.toString() +
        " calories"
    );
  }, [calorie]);

  const bmrCalculate = (
    gender: Gender,
    ageValue: number,
    weightValue: number,
    heightValue: number
  ) => {
    let value: number;
    value = 0;
    if (gender === "Male") {
      value = parseFloat(
        (
          88.362 +
          13.397 * weightValue +
          4.799 * heightValue -
          5.677 * ageValue +
          0.5
        ).toFixed(2)
      );
    } else if (gender === "Female") {
      value = parseFloat(
        (
          447.593 +
          9.247 * weightValue +
          3.098 * heightValue -
          4.33 * ageValue +
          0.5
        ).toFixed(2)
      );
    }
    return value;
  };

  const calorieCalculate = (bmr: number) => {
    return parseFloat((bmr * 1.2 + 0.5).toFixed(0));
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>BMR - Basal Metabolic Rate Calculator</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <p>
          Basal Metabolic Rate (BMR) refers to the rate at which the body uses
          energy while at rest to maintain vital functions such as breathing and
          keeping warm.
        </p>
        <div className={styling.center}>
          <p>Enter Age </p>
          <TextField
            className={styling.center}
            size="medium"
            placeholder="Enter Age in Years"
            onChange={(e) => setAgeValue(parseFloat(e.target.value))}
            type="number"
          />
          <p>Enter Height</p>
          <TextField
            size="medium"
            placeholder="Enter Height in cm"
            onChange={(e) => setHeightValue(parseFloat(e.target.value))}
            type="number"
          />
          <p>Enter Weight</p>
          <TextField
            size="medium"
            placeholder="Enter Weight in kg"
            onChange={(e) => setWeightValue(parseFloat(e.target.value))}
            type="number"
          />
          <p></p>
          <FormControl>
            <InputLabel>Gender</InputLabel>
            <Select
              className={styling.menu}
              label="select-gender"
              autoWidth={true}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
          <p className={styling.comment}>
            Please be aware that BMR measures the amount of calories burned when
            sedentary. This does not take into account other health factors and
            amount of exercise done. It is only an average estimate.
          </p>
          <h1 className={styling.red}>
            {disableSearch && bmr !== 0 ? "Results:" : ""}
          </h1>
          <h2 className={styling.blue}>
            {disableSearch && bmr !== 0 ? bmrOutput : ""}
          </h2>
          <h2 className={styling.blue}>
            {disableSearch && bmr !== 0 ? calorieOutput : ""}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BMR;
