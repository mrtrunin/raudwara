import React from "react";
import "./Section.css";
import { SectionViewProps } from "./Section.model";

const TitleView = ({ section }: SectionViewProps) => {
  return <p className="text title allcaps center">{section.content}</p>;
};

export default TitleView;
