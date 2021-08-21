import { TextField } from "@material-ui/core";
import { px } from "csx";
import React from "react";
import { useState } from "react";
import * as style from "./Home.style";
import * as appStyle from "../../App.style";

const Home: React.FC = () => {
  const [textValue, setTextValue] = useState<string>("");
  return (
    <div className={appStyle.body}>
      <h1 className={style.title}>
        Welcome to our Melbourne Hackathon Project!
      </h1>
      <div style={{ paddingLeft: px(90) }}>
        <TextField
          size="medium"
          value={textValue}
          placeholder="Holder text"
          onChange={(e) => setTextValue(e.target.value)}
        ></TextField>
      </div>
    </div>
  );
};

export default Home;
