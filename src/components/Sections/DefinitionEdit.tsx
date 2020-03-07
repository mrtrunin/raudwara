import React from "react";
import { Input } from "antd";
import { SectionEditProps } from "./Section.model";

const DefinitionEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onDefinitionTitleChange = (newDefinitionTitle: string) => {
    onSectionChange({ ...section, title: newDefinitionTitle });
  };

  const onDefinitionContentChange = (newDefinitionContent: string) => {
    onSectionChange({ ...section, content: newDefinitionContent });
  };

  return (
    <Input.Group compact>
      <Input
        value={section.title}
        defaultValue="Title"
        style={{ width: "30%" }}
        onChange={e => onDefinitionTitleChange(e.target.value)}
      />
      <Input.TextArea
        rows={4}
        value={section.content}
        style={{ width: "70%" }}
        onChange={e => onDefinitionContentChange(e.target.value)}
      />
    </Input.Group>
  );
};

export default DefinitionEdit;
