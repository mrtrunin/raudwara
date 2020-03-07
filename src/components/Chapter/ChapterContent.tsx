import React from "react";
import { Typography } from "antd";
import "./Chapter.css";
import { ChapterContentProps } from "./Chapter.model";
import ChapterPreviousNextButtons from "./ChapterPreviousNextButtons";
import Sections from "../Sections/Sections";
import AddNewSection from "../Sections/AddNewSection";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

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
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

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

      {isLoggedIn && <AddNewSection createNewSection={createNewSection} />}

      <ChapterPreviousNextButtons
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    </>
  );
};

export default ChapterContent;
