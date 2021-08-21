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

export const body = s({
  textAlign: "center",
  marginLeft: px(100),
  marginRight: px(100),
});

export const requirement1 = s({
  color: "red",
  textAlign: "center",
});

export const requirement2 = s({
  color: "navy",
  textAlign: "center",
});
