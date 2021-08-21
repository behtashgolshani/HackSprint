import { TextField } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styling from "./BMR.style";

const BMR: React.FC = () => {
  const [ageValue, setAgeValue] = useState<number>(0);
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);

  useEffect(() => {
    if (ageValue >= 1 && heightValue >= 1 && weightValue >= 1) {
      setDisableSearch(true);
    } else {
      setDisableSearch(false);
    }
  }, [ageValue, heightValue, weightValue]);

  // const myFunc = (param: number) => {
  //   return 0;
  // };

  // {disableSearch ? "True" : "False"}
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
          <p>
            Age: {ageValue} Height: {heightValue} Weight: {weightValue}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BMR;
