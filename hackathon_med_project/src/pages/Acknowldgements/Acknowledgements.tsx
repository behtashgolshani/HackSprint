import React from "react";
import * as style from "./Acknowledgements.style";
import { body as appStyle } from "../../App.style";

const Acknowledgements: React.FC = () => {
  return (
    <div className={appStyle}>
      <h1 className={style.title}>Acknowledgements</h1>
      <h3>
        We would like to aknowledge these websites where we have got our
        information from.
      </h3>
      <div>
        <p>https://localhost:3000</p>
        <a href="https://www.heartfoundation.org.au/bmi-calculator">
          https://www.heartfoundation.org.au/bmi-calculator
        </a>
        <p></p>
        <a href="https://www.medicinenet.com/weight_gain_shockers_pictures_slideshow/article.htm">
          https://www.medicinenet.com/weight_gain_shockers_pictures_slideshow/article.htm
        </a>
        <p></p>
        <a href="https://www.beyondblue.org.au/">
          https://www.beyondblue.org.au/
        </a>
        <p></p>
        <a href="https://www.calculator.net/bmr-calculator.html?ctype=metric&cage=25&csex=m&cheightfeet=5&cheightinch=10&cpound=160&cheightmeter=180&ckg=70&cmop=1&coutunit=j&cformula=m&cfatpct=20&x=81&y=11">
          https://www.calculator.net/bmr-calculator.html?ctype=metric&cage=25&csex=m&cheightfeet=5&cheightinch=10&cpound=160&cheightmeter=180&ckg=70&cmop=1&coutunit=j&cformula=m&cfatpct=20&x=81&y=11
        </a>
        <p></p>
        <a href="https://academic.oup.com/ajcn">
          https://academic.oup.com/ajcn
        </a>
        <p></p>
        <a href="https://inbodyusa.com/blogs/inbodyblog/49311425-how-to-use-bmr-to-hack-your-diet/">
          https://inbodyusa.com/blogs/inbodyblog/49311425-how-to-use-bmr-to-hack-your-diet/
        </a>
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
