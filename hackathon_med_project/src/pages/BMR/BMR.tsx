import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import {} from "react";
import * as styling from "./BMR.style";
import * as appStyle from "../../App.style";

type Gender = "male" | "female" | null | unknown;

const BMR: React.FC = () => {
  const [ageValue, setAgeValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);
  const [gender, setGender] = useState<Gender>();
  const [enableSearch, setEnableSearch] = useState<boolean>(true);
  const [bmr, setBmr] = useState<number>(0);
  const [bmrOutput, setBmrOutput] = useState<string>("");

  useEffect(() => {
    let value: unknown;
    if (
      ageValue >= 1 &&
      heightValue >= 1 &&
      weightValue >= 1 &&
      gender !== null &&
      gender !== value
    ) {
      setDisableSearch(true);
      setEnableSearch(false);
    } else {
      setDisableSearch(false);
      setEnableSearch(true);
    }
  }, [ageValue, heightValue, weightValue, gender]);

  useEffect(() => {
    setBmr(bmrCalculate(gender, ageValue, weightValue, heightValue));
  }, [gender, ageValue, weightValue, heightValue]);

  useEffect(() => {
    setBmrOutput("BMR is " + bmr?.toString() + " calories per day");
  }, [bmr]);

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

  const calCalculate = (
    gender: Gender,
    ageValue: number,
    weightValue: number,
    heightValue: number
  ) => {
    if (gender === "Male") {
      return (
        "Daily calorie intake needed to maintain BMR is " +
        (
          (88.362 +
            13.397 * weightValue +
            4.799 * heightValue -
            5.677 * ageValue +
            0.5) *
          1.2
        )
          .toFixed(0)
          .toString() +
        " calories"
      );
    } else if (gender === "Female") {
      return (
        "Daily calorie intake needed to maintain BMR is " +
        (
          (447.593 +
            9.247 * weightValue +
            3.098 * heightValue -
            4.33 * ageValue +
            0.5) *
          1.2
        )
          .toFixed(0)
          .toString() +
        " calories"
      );
    } else {
      return "";
    }
  };

  return (
    <div className={appStyle.body}>
      <div style={{ textAlign: "center" }}>
        <h1>BMR - Basal Metabolic Rate Calculator</h1>
      </div>
      <div className={styling.content}>
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

          <h2 className={styling.red}>
            {disableSearch && bmr !== 0 ? "Results:" : ""}
          </h2>
          <h3 className={styling.requirement2}>
            {" "}
            {disableSearch && bmr !== 0 ? bmrOutput : ""}
          </h3>
          <h3 className={styling.requirement2}>
            {enableSearch ? "Please enter details above" : ""}
          </h3>
          <h3 className={styling.requirement2}>
            {disableSearch
              ? calCalculate(gender, ageValue, weightValue, heightValue)
              : ""}
          </h3>
          <p className={styling.comment}>
            Please be aware that BMR measures the amount of calories burned when
            sedentary. This does not take into account other health factors and
            amount of exercise done. It is only an average estimate.
          </p>
        </div>
        <div className={appStyle.breakPage}></div>
      </div>
    </div>
  );
};

export default BMR;
