import { style as s } from "typestyle";
import { percent, px } from "csx";

export const title = s({
  textAlign: "left",
});

export const content = s({
  paddingLeft: percent(5),
  paddingTop: px(20),
  width: percent(90),
});

export const block = s({
  marginTop: px(100),
});
