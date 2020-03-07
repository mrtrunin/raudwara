import React from "react";
import { SectionEditProps } from "./Section.model";
import { Input } from "antd";

const TitleEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onTitleChange = (newTitle: string) => {
    onSectionChange({ ...section, content: newTitle });
  };

  return (
    <Input
      value={section.content}
      style={{ width: "50%" }}
      onChange={e => onTitleChange(e.target.value)}
    />
  );
};

export default TitleEdit;
