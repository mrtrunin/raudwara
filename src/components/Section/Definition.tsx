import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";

const Definition = ({ section }: SectionProps) => {
  return (
    <p className="text">
      <span className="bold">{section.title}</span>
      {" - "}
      <span>{section.content}</span>
    </p>
  );
};

export default Definition;
