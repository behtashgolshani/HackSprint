import { style as s } from "typestyle";
import { percent, px } from "csx";

export const title = s({
  textAlign: "center",
  marginBottom: px(50),
});

export const content = s({
  marginLeft: percent(2),
  paddingTop: px(20),
  textAlign: "center",
  width: percent(90),
});

export const block = s({
  marginTop: px(100),
});
