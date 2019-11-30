import React from "react";
import ReactDOM from "react-dom";
import { Math } from "./Math";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Math />, div);
  ReactDOM.unmountComponentAtNode(div);
});
