import React from "react";
import { SectionViewProps } from "./Section.model";
import "./Section.css";

const ImageView = ({ section }: SectionViewProps) => {
  return (
    <p className="center wide">
      <img src={section.url} alt={section.alt} className="wide" />
    </p>
  );
};

export default ImageView;
