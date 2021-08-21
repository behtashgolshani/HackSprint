import { style as s } from "typestyle";
import { px } from "csx";

export const title = s({
  textAlign: "left",
  fontSize: px(36),
  marginLeft: px(120),
});

export const marginalise_left = s({
  textAlign: "left",
  marginLeft: px(24),
});

export const bmi_results = s({
  textAlign: "center",
  marginTop: px(10),
});

export const col = s({
  columnCount: 2,
  columnFill: "balance",
  textAlign: "center",
  marginTop: px(10),
});
