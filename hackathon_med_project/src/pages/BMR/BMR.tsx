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
  const [output, setOutput] = useState<string>("");

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
    setOutput(bmrCalculate(gender, ageValue, weightValue, heightValue));
  }, [gender, ageValue, weightValue, heightValue]);
  const bmrCalculate = (
    gender: Gender,
    ageValue: number,
    weightValue: number,
    heightValue: number
  ) => {
    let value: unknown;
    if (gender === "Male") {
      return (
        "Your BMR is " +
        (
          88.362 +
          13.397 * weightValue +
          4.799 * heightValue -
          5.677 * ageValue +
          0.5
        )
          .toFixed(2)
          .toString() +
        " calories"
      );
    } else if (gender === "Female") {
      return (
        "Your BMR is " +
        (
          447.593 +
          9.247 * weightValue +
          3.098 * heightValue -
          4.33 * ageValue +
          0.5
        )
          .toFixed(2)
          .toString() +
        " calories"
      );
    } else {
      return "";
    }
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
          <p>
            Age: {ageValue} Height: {heightValue} Weight: {weightValue} Gender:{" "}
            {gender}
          </p>
          <h3>Results:</h3>
          <h4>{disableSearch ? output : ""}</h4>
        </div>
      </div>
    </div>
  );
};

export default BMR;
