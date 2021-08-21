import { style as s } from "typestyle";
import { px } from "csx";

export const title = s({
  textAlign: "center",
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

export const under = s({
  color: "#004DCF",
  marginLeft: px(300),
  textAlign: "center",
  marginRight: px(300),
});

export const normal = s({
  color: "#008B02",
  marginLeft: px(300),
  textAlign: "center",
  marginRight: px(300),
});

export const over = s({
  color: "#FF9800",
  marginLeft: px(300),
  textAlign: "center",
  marginRight: px(300),
});

export const obese = s({
  color: "#F44336",
  marginLeft: px(300),
  textAlign: "center",
  marginRight: px(300),
});

export const damn = s({
  color: "#C2185B",
  marginLeft: px(300),
  textAlign: "center",
  marginRight: px(300),
});

export const disclaimer = s({
  textAlign: "center",
  marginLeft: px(150),
  marginRight: px(150),
});
