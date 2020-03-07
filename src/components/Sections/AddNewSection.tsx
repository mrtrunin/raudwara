import React from "react";
import { Section } from "./Section.model";
import { Button } from "antd";
import "./AddNewSection.css";

interface AddNewSectionProps {
  createNewSection: (section: Section) => void;
}

const AddNewSection = ({ createNewSection }: AddNewSectionProps) => {
  const newSection = (type: string): Section => {
    switch (type) {
      case "definition":
        return {
          _id: "",
          type,
          title: "New Definition",
          content: "new Definition Content"
        };
      case "text":
        return {
          _id: "",
          type,
          content: "New Text"
        };
      case "title":
        return {
          _id: "",
          type,
          content: "New title"
        };

      case "formula":
        return {
          _id: "",
          type,
          content: "$$ a+b=c $$"
        };
      case "rule":
        return {
          _id: "",
          type,
          content: "New rule"
        };
      case "image":
        return {
          _id: "",
          type,
          url:
            "https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/gaussian1.svg"
        };
      default:
        return {
          _id: "",
          type: "",
          title: ""
        };
    }
  };

  const triggerNewSection = (type: string) => {
    const defaultNewSection = newSection(type);
    createNewSection(defaultNewSection);
  };

  return (
    <div className="buttons">
      Add New Section
      <br />
      <Button.Group size="large">
        <Button onClick={() => triggerNewSection("definition")}>
          Definition
        </Button>
        <Button onClick={() => triggerNewSection("text")}>Text</Button>
        <Button onClick={() => triggerNewSection("formula")}>Formula</Button>
        <Button onClick={() => triggerNewSection("title")}>Title</Button>
        <Button onClick={() => triggerNewSection("rule")}>Rule</Button>
        <Button onClick={() => triggerNewSection("image")}>Image</Button>
      </Button.Group>
    </div>
  );
};

export default AddNewSection;
