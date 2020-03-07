import React from "react";
import { SectionEditProps } from "./Section.model";
import { Input } from "antd";

const FormulaEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onFormulaChange = (newFormula: string) => {
    onSectionChange({ ...section, content: newFormula });
  };

  return (
    <Input
      value={section.content}
      style={{ width: "100%" }}
      onChange={e => onFormulaChange(e.target.value)}
    />
  );
};

export default FormulaEdit;
