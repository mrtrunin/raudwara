import React from "react";
import { SectionEditProps } from "./Section.model";
import { Input } from "antd";

const RuleEdit = ({ section, onSectionChange }: SectionEditProps) => {
  const onRuleChange = (newRule: string) => {
    onSectionChange({ ...section, content: newRule });
  };

  return (
    <Input
      value={section.content}
      style={{ width: "50%" }}
      onChange={e => onRuleChange(e.target.value)}
    />
  );
};

export default RuleEdit;
