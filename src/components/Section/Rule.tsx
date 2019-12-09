import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";

const Rule = ({ section }: SectionProps) => {
  return <p className="text center bold rule">{section.content}</p>;
};

export default Rule;
