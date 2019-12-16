import React from "react";
import { Input } from "antd";

interface TitleProps {
  title: string | undefined;
  onTitleChange: (e: any) => void;
}

const TitleEditor = ({ title, onTitleChange }: TitleProps) => {
  return (
    <Input
      value={title}
      size="large"
      onChange={onTitleChange}
      addonBefore="Chapter title"
    />
  );
};

export default TitleEditor;
