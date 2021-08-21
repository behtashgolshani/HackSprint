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
        <p>Insert links here</p>
      </div>
      <hr color="black"></hr>
      <div>
        <p>
          Thanks to the creators of this project - Behtash Golshani, Niko
          Verrios, Tim Jordan and Tim Han.{" "}
        </p>
        <p>Visit our github repository to clone this project:</p>
        <a href="https://github.com/behtashgolshani/HackSprint">
          https://github.com/behtashgolshani/HackSprint
        </a>
      </div>
    </div>
  );
};

export default Acknowledgements;
