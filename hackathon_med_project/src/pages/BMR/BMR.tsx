import { TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import * as styling from "./BMR.style";

const BMR: React.FC = () => {
  const [textValue, setTextValue] = useState<number>();

  // const myFunc = (param: number) => {
  //   return 0;
  // };

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
          <TextField
            size="medium"
            placeholder="Enter Value"
            onChange={(e) =>
              !isNaN(parseInt(e.target.value)) &&
              setTextValue(parseInt(e.target.value))
            }
          />
          <p>{textValue}</p>
          {/* <form>
            <label>
              Age:
              <Input type="number" name="age" />
              Height:
              <Input type="number" name="height" />
              Weight:
              <Input type="number" name="weight" />
            </label>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default BMR;
