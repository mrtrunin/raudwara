import React from "react";
import "./Section.css";
import { SectionProps } from "./Section.model";

const Title = ({ section }: SectionProps) => {
  return <p className="text title allcaps center">{section.content}</p>;
};

export default Title;
