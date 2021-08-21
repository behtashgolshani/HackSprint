import { style as s } from "typestyle";
import { px } from "csx";

export const title = s({
  textAlign: "left",
  fontSize: px(24),
  marginLeft: px(120),
});

export const column = s({
  columns: 2,
  columnWidth: 10,
});

export const center = s({
  textAlign: "center",
});

export const menu = s({
  minWidth: 176,
});

export const red = s({
  color: "red",
});

export const blue = s({
  color: "blue",
});
