import { style as s } from "typestyle";
import { px, percent } from "csx";

export const title = s({
  textAlign: "left",
  fontSize: px(24),
  marginLeft: px(120),
});

export const content = s({
  marginLeft: percent(2),
  paddingTop: px(20),
  textAlign: "center",
  width: percent(90),
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
  color: "#C2185B",
});

export const blue = s({
  color: "#004DCF",
});

export const comment = s({
  fontStyle: "italic",
  color: "#194D33",
});
