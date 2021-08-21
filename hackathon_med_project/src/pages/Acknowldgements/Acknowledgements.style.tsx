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

export const references = {
  fontSize: px(20),
};
