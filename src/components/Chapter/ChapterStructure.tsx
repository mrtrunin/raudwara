import React from "react";
import "./Chapter.css";
import { ChapterProps } from "./Chapter.model";
import ChapterContent from "./ChapterContent";
import PageStructure from "../common/PageStructure/PageStructure";
import MathJax from "../common/MathJax/MathJax";

const ChapterStructure = (props: ChapterProps) => {
  return (
    <MathJax>
      <PageStructure>
        <ChapterContent {...props} />
      </PageStructure>
    </MathJax>
  );
};

export default ChapterStructure;
