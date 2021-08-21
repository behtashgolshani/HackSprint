import React from "react";
import * as style from "./Acknowledgements.style";
import * as appStyle from "../../App.style";

const Acknowledgements: React.FC = () => {
  return (
    <div className={appStyle.body}>
      <div className={style.content}>
        <h1 className={style.title}>Aknowledgements</h1>
        <h3>
          We would like to aknowledge these websites where we have got our
          information from.
        </h3>
        <div>
          <p>
            Thanks to{" "}
            <a href="https://wallpapercave.com/w/wp8387901">Wallpaper Cave</a>{" "}
            for the background of the website.
          </p>
          <p>
            Also thanks to{" "}
            <a href="https://fonts.google.com/specimen/Quicksand">
              Google Fonts
            </a>{" "}
            for the Quicksand font found on this website.
          </p>
        </div>
        <hr color="black"></hr>
        <div>
          <p>
            Thanks to the creators of this project - Behtash Golshani, Niko
            Verrios, Tim Jordan and Tim Han.{" "}
          </p>
          <p>
            Visit our{" "}
            <a href="https://github.com/behtashgolshani/HackSprint">
              github repository
            </a>{" "}
            to clone this project:
          </p>
        </div>
        <div className={appStyle.breakPage}></div>
      </div>
    </div>
  );
};

export default Acknowledgements;
