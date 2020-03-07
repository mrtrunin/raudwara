import React from "react";
import { SectionViewProps } from "./Section.model";
import "./Section.css";
import MathJax from "../common/MathJax/MathJax";

const RuleView = ({ section }: SectionViewProps) => {
  return (
    <MathJax>
      <p className="text center bold rule">{section.content}</p>
    </MathJax>
  );
};

export default RuleView;
