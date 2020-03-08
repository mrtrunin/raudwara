import React from "react";
import { Typography } from "antd";
import "./Chapter.css";
import { ChapterContentProps } from "./Chapter.model";
import ChapterPreviousNextButtons from "./ChapterPreviousNextButtons";
import Sections from "../Sections/Sections";

const { Title } = Typography;

const ChapterContent = ({
  titlesize,
  chapter,
  previousChapter,
  nextChapter,
  onSectionsChange,
  createNewSection,
  saveChapter
}: ChapterContentProps) => {
  if (!chapter.sections) {
    return <div>No chapters</div>;
  }
  return (
    <>
      <Title level={titlesize} className="allcaps center">
        {chapter.title}
      </Title>

      <Sections
        sections={chapter.sections}
        onSectionsChange={onSectionsChange}
        createNewSection={createNewSection}
        saveChapter={saveChapter}
      />

      <ChapterPreviousNextButtons
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    </>
  );
};

export default ChapterContent;
