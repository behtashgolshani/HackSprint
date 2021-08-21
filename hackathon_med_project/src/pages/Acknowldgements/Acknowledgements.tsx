import React from "react";
import * as style from "./Acknowledgements.style";
import { body as appStyle } from "../../App.style";

const Acknowledgements: React.FC = () => {
  return (
    <div className={appStyle}>
      <h1 className={style.title}>Aknowledgements</h1>
      <h3>
        We would like to aknowledge these websites where we have got our
        information from.
      </h3>
      <div>
        <p>https://localhost:3000</p>
      </div>
    </div>
  );
};

export default Acknowledgements;
