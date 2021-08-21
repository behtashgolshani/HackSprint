import { style as s } from "typestyle";
import { percent, px } from "csx";

export const title = s({
  textAlign: "center",
  marginBottom: px(50),
});

export const content = s({
  paddingLeft: percent(2),
  paddingTop: px(20),
  width: percent(90),
  textAlign: "center",
});

export const references = s({
  fontSize: px(20),
});

export const behtash = s({
  marginLeft: px(20),
  color: "red",
});

export const niko = s({
  marginLeft: px(20),
  color: "orange",
});

export const han = s({
  marginLeft: px(20),
  color: "navy",
});

export const jordan = s({
  marginLeft: px(20),
  color: "purple",
});
