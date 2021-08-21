import { px } from "csx";
import { style as s } from "typestyle";

export const body = s({
  textAlign: "left",
  marginLeft: px(80),
  fontSize: px(22),
});

export const app = s({
  backgroundImage: `url(${process.env.PUBLIC_URL + "/bluebackground.jpg"})`,
  backgroundRepeat: "repeat",
});

export const breakPage = s({ marginTop: px(50) });
