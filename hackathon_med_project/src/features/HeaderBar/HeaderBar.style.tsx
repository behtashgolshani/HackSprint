import { style as s } from "typestyle";
import { px } from "csx";

export const navbar = s({
  padding: px(2),
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  borderBottom: "2px solid #f2f2f2",
});

export const medihelp = s({
  color: "#f1356d",
  fontSize: px(56),
  marginLeft: px(200),
});

export const links = s({ marginLeft: "auto", marginRight: px(200) });

export const indLinks = s({
  marginLeft: px(40),
  fontSize: px(20),
});
