import React from "react";
import { SectionViewProps } from "./Section.model";
import "./Section.css";

const TextView = ({ section }: SectionViewProps) => {
  return <p className="text">{section.content}</p>;
};

export default TextView;
