import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";

const Text = ({ section }: SectionProps) => {
  return <p className="text">{section.content}</p>;
};

export default Text;
