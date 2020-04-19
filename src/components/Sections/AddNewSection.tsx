import React, { useState } from "react";
import { Section } from "./Section.model";
import { Button, Icon } from "antd";
import "./AddNewSection.css";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

interface AddNewSectionProps {
  createNewSection: (section: Section, previousSectionId?: string) => void;
  previousSectionId?: string;
}

const AddNewSection = ({
  createNewSection,
  previousSectionId
}: AddNewSectionProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [showHighlight, setShowHighlight] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const onMouseOver = (e: any) => {
    isLoggedIn && setShowHighlight(true);
  };

  const onClick = (e: any) => {
    isLoggedIn && setShowButtons(!showButtons);
  };

  const onMouseLeave = (e: any) => {
    isLoggedIn && setShowHighlight(false);
  };

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
          url: "https://storage.cloud.google.com/raudwara-test/kiwi.svg"
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
    createNewSection(defaultNewSection, previousSectionId);
    setShowButtons(false);
  };

  return (
    <>
      <div
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className="addNewSection"
      >
        {showHighlight && (
          <Icon theme="filled" onClick={onClick} type="plus-circle"></Icon>
        )}
      </div>

      {showHighlight && <div className="border"></div>}

      {showButtons && (
        <div className="buttons">
          Add New Section
          <br />
          <Button.Group size="default">
            <Button onClick={() => triggerNewSection("definition")}>
              Definition
            </Button>
            <Button onClick={() => triggerNewSection("text")}>Text</Button>
            <Button onClick={() => triggerNewSection("formula")}>
              Formula
            </Button>
            <Button onClick={() => triggerNewSection("title")}>Title</Button>
            <Button onClick={() => triggerNewSection("rule")}>Rule</Button>
            <Button onClick={() => triggerNewSection("image")}>Image</Button>
          </Button.Group>
        </div>
      )}
    </>
  );
};

export default AddNewSection;
