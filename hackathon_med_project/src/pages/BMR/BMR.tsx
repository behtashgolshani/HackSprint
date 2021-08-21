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
import { style } from "typestyle";
import * as styling from "./BMR.style";

type Gender = "male" | "female" | null | unknown;

const BMR: React.FC = () => {
  const [ageValue, setAgeValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const [gender, setGender] = useState<Gender>();
  const [output, setOutput] = useState<string>("");
  const [enableSearch, setEnableSearch] = useState<boolean>(true);

  useEffect(() => {
    if (
      ageValue >= 1 &&
      heightValue >= 1 &&
      weightValue >= 1 &&
      gender !== null
    ) {
      setDisableSearch(true);
      setEnableSearch(false);
    } else {
      setDisableSearch(false);
      setEnableSearch(true);
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

  const calCalculate = (
    gender: Gender,
    ageValue: number,
    weightValue: number,
    heightValue: number
  ) => {
    let value: unknown;
    if (gender === "Male") {
      return (
        "Your caloric need is " +
        (
          (88.362 +
            13.397 * weightValue +
            4.799 * heightValue -
            5.677 * ageValue +
            0.5) *
          1.2
        )
          .toFixed(2)
          .toString() +
        " calories"
      );
    } else if (gender === "Female") {
      return (
        "Your caloric need is " +
        (
          (447.593 +
            9.247 * weightValue +
            3.098 * heightValue -
            4.33 * ageValue +
            0.5) *
          1.2
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
      <div className={styling.body}>
        <p>
          Basal Metabolic Rate (BMR) refers to the rate at which the body uses
          energy while at rest to maintain vital functions such as breathing and
          keeping warm. This is especially useful for those who are looking to
          eat in a caloric deficit to lose weight. Alternatively, it can be used
          to provide users with a caloric need. These are the calories required
          to maintain your current body weight.
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
          <h2>{disableSearch ? "Results:" : ""}</h2>
          <h3 className={styling.requirement1}>
            {disableSearch ? output : ""}
          </h3>
          <h3 className={styling.requirement2}>
            {enableSearch ? "Please enter details above" : ""}
            <h3 className={styling.requirement2}>
              {disableSearch
                ? calCalculate(gender, ageValue, weightValue, heightValue)
                : ""}
            </h3>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BMR;
