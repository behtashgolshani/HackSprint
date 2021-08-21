import { style as s } from "typestyle";
import { px } from "csx";

export const title = s({
  textAlign: "left",
  fontSize: px(24),
  marginLeft: px(120),
});

export const column = s({
  textAlign: "center",
  columnCount: 2,
});
