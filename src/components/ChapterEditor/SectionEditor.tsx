import React from "react";
import { Input, Select } from "antd";
import { Section } from "../Sections/Section.model";

interface SectionEditorProps {
  section: Section;
  onSectionChange: (section: Section, newSection?: Section) => void;
}

interface SectionTypes {
  [key: string]: string;
}

const SectionEditor = ({ section, onSectionChange }: SectionEditorProps) => {
  const onSectionTypeChange = (newSectionType: string) => {
    onSectionChange({ ...section, type: newSectionType });
  };

  const onSectionTitleChange = (newSectionTitle: string) => {
    onSectionChange({ ...section, title: newSectionTitle });
  };

  const onSectionContentChange = (newSectionContent: string) => {
    onSectionChange({ ...section, content: newSectionContent });
  };

  const sectionTypes: SectionTypes = {
    definition: "Definition",
    formula: "Formula",
    title: "Title",
    image: "Image",
    rule: "Rule",
    text: "Text"
  };

  const sectionTypesDropdown = (
    <Select
      defaultValue={section.type}
      style={{ width: 120 }}
      onChange={onSectionTypeChange}
    >
      {Object.keys(sectionTypes).map((sectionTypeKey, i) => {
        return (
          <Select.Option key={i} value={sectionTypeKey}>
            {sectionTypes[sectionTypeKey]}
          </Select.Option>
        );
      })}
    </Select>
  );

  return (
    <div style={{ width: "100%" }}>
      <p>ID: {section._id}</p>
      <Input
        value={section.title}
        addonBefore={sectionTypesDropdown}
        onChange={e => onSectionTitleChange(e.target.value)}
      />
      <Input.TextArea
        value={section.content}
        rows={4}
        onChange={e => onSectionContentChange(e.target.value)}
      />
    </div>
  );
};

export default SectionEditor;
