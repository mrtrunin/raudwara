import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";

const Formula = ({ section }: SectionProps) => {
  return <p className="text center">{section.content}</p>;
};

export default Formula;
