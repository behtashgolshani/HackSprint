import React from "react";
import { style } from "typestyle";
import * as styling from "./BMR.style";

const BMR = () => {
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
        <div className={styling.column}>
          <div className={styling.column}>
            <input></input>
          </div>
          <p>Talk</p>
          <p>More Stuff</p>
        </div>
      </div>
    </div>
  );
};

export default BMR;
