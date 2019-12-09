import React from "react";
import { SectionProps } from "./Section.model";
import "./Section.css";

const Image = ({ section }: SectionProps) => {
  return (
    <p className="center wide">
      <img
        src={"images/" + section.filename}
        alt={section.alt}
        className="wide"
      />
    </p>
  );
};

export default Image;
