import React from "react";
import { SectionViewProps } from "./Section.model";
import "./Section.css";
import MathJax from "../common/MathJax/MathJax";

const DefinitionView = ({ section }: SectionViewProps) => {
  return (
    <MathJax>
      <p className="text">
        <span className="bold">{section.title}</span>
        {" - "}
        <span>{section.content}</span>
      </p>
    </MathJax>
  );
};

export default DefinitionView;
