import React from "react";
import { SectionViewProps } from "./Section.model";
import "./Section.css";
import MathJax from "../common/MathJax/MathJax";

const FormulaView = ({ section }: SectionViewProps) => {
  return (
    <MathJax>
      <p className="text center">{section.content}</p>
    </MathJax>
  );
};

export default FormulaView;
