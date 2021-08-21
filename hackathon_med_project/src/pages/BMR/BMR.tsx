import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
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

  const bmrCalculate = (
    gender: Gender,
    ageValue: number,
    weightValue: number,
    heightValue: number
  ) => {
    return "True";

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
            size="medium"
            placeholder="Enter Value"
            onChange={(e) => setAgeValue(parseInt(e.target.value))}
            type="number"
          />
          <p>Enter Height</p>
          <TextField
            size="medium"
            placeholder="Enter Value"
            onChange={(e) => setHeightValue(parseInt(e.target.value))}
            type="number"
          />
          <p>Enter Weight</p>
          <TextField
            size="medium"
            placeholder="Enter Value"
            onChange={(e) => setWeightValue(parseInt(e.target.value))}
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
            Age: {ageValue} Height: {heightValue} Weight: {weightValue}
          </p>
          <h3>Results:</h3>
          <h4>
            {disableSearch
              ? bmrCalculate(gender, ageValue, weightValue, heightValue)
              : ""}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default BMR;
