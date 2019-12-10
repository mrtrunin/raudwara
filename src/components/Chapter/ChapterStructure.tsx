import React from "react";
import "./Chapter.css";
import { ChapterProps } from "./Chapter.model";
import ChapterContent from "./ChapterContent";
import PageStructure from "../common/PageStructure/PageStructure";

const ChapterStructure = (props: ChapterProps) => {
  return (
    <PageStructure>
      <ChapterContent {...props} />
    </PageStructure>
  );
};

export default ChapterStructure;
