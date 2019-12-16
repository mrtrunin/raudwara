import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";
import MathJax from "../common/MathJax/MathJax";

const Formula = ({ section }: SectionProps) => {
  return (
    <MathJax>
      {/* <p className="text center"> */}
      {section.content}
      {/* </p> */}
    </MathJax>
  );
};

export default Formula;
