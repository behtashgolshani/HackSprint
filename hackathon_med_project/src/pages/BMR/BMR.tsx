import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import * as styling from "./BMR.style";

const BMR: React.FC = () => {
  const [textValue, setTextValue] = useState<number>();
  const [gender, setGender] = useState<string>("");

  const handleChange = (event: any) => {
    setGender(event.target.value);
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
          <TextField
            size="medium"
            placeholder="Enter Value"
            onChange={(e) =>
              !isNaN(parseInt(e.target.value)) &&
              setTextValue(parseInt(e.target.value))
            }
          />
          <FormControl>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select value={gender} onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
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
