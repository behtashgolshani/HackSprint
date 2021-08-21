import { px } from "csx";
import { TextField } from "@material-ui/core";
import React from "react";
import SplitPane, { Pane } from "react-split-pane";
import { useState } from "react";
import * as appStyle from "../../App.style";
import * as style from "./BMI.style";
import { useEffect } from "react";

const BMI: React.FC = () => {
  const [weightValue, setWeightValue] = useState<number>(0);
  const [heightValue, setHeightValue] = useState<number>(0);
  const [disableSearch, setDisableSearch] = useState<boolean>(false);

  useEffect(() => {
    if (weightValue >= 1 && heightValue >= 1) {
      setDisableSearch(true);
    } else {
      setDisableSearch(false);
    }
  }, [weightValue, heightValue]);
  //{disableSearch ? "True" : "False";}

  return (
    <div className={appStyle.body}>
      <h1 className={style.title}>BMI - Body Mass Index</h1>
      <p className={style.marginalise_left}>
        {" "}
        The Body Mass Index measures the relationship between your height to
        weight to determine if you are healthy. Use our BMI calculator to see
        how healthy you are.
      </p>{" "}
      <h4 style={{ marginLeft: px(510) }}>Please enter your weight in kg:</h4>
      <div style={{ marginLeft: px(550) }}>
        <TextField
          size="medium"
          placeholder="Weight in kg"
          type="number"
          style={{ textAlign: "center" }}
          onChange={(e) => setWeightValue(parseInt(e.target.value))}
        ></TextField>
      </div>
      <h4 style={{ marginLeft: px(510) }}>Please enter your height in cm:</h4>
      <div style={{ marginLeft: px(550) }}>
        <TextField
          size="medium"
          placeholder="Height in cm"
          type="number"
          style={{ textAlign: "center" }}
          onChange={(e) => setHeightValue(parseInt(e.target.value))}
        ></TextField>{" "}
      </div>
    </div>
  );
};

export default BMI;
