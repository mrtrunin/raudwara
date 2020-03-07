import React from "react";
import { SectionEditProps } from "./Section.model";
import { Input } from "antd";

const TextEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onTextContentChange = (newTextContent: string) => {
    onSectionChange({ ...section, content: newTextContent });
  };

  return (
    <Input.TextArea
      rows={6}
      value={section.content}
      style={{ width: "100%" }}
      onChange={e => onTextContentChange(e.target.value)}
    />
  );
};

export default TextEdit;
