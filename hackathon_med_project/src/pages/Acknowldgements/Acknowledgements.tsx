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
      <p>
        {" "}
        <a href="https://www.heartfoundation.org.au/bmi-calculator">
          Heart Foundation - Whats Your BMI
        </a>{" "}
      </p>
      <p>
        <a href="https://www.medicinenet.com/weight_gain_shockers_pictures_slideshow/article.htm">
          MedicineNet - Surprising Causes of Weight Gain{" "}
        </a>
      </p>
      <p>
        {" "}
        <a href="https://www.beyondblue.org.au/">Beyond Blue</a>
      </p>
      <p>
        <a href="https://www.calculator.net/bmr-calculator.html?ctype=metric&cage=25&csex=m&cheightfeet=5&cheightinch=10&cpound=160&cheightmeter=180&ckg=70&cmop=1&coutunit=j&cformula=m&cfatpct=20&x=81&y=11">
          BMR
        </a>
      </p>
      <div>
        <h2>Created by</h2>
        <h3 className={style.behtash}>Behtash Golshani</h3>
        <h3 className={style.niko}>Niko Gabriel Verrios</h3>
        <h3 className={style.han}>Timothy Han</h3>
        <h3 className={style.jordan}>Timothy John Jordan</h3>
      </div>
    </div>
  );
};

export default Acknowledgements;
