import React from "react";
import { Typography } from "antd";
import "./Chapter.css";
import { Section } from "../Section/Section.model";
import { ChapterContentProps } from "./Chapter.model";
import Image from "../Section/Image";
import SectionTitle from "../Section/Title";
import Definition from "../Section/Definition";
import Formula from "../Section/Formula";
import Rule from "../Section/Rule";
import Text from "../Section/Text";
import ChapterPreviousNextButtons from "./ChapterPreviousNextButtons";

const { Title } = Typography;

const ChapterContent = ({
  titlesize,
  chapter,
  previousChapter,
  nextChapter
}: ChapterContentProps) => {
  return (
    <>
      <Title level={titlesize} className="allcaps center">
        {chapter.title}
      </Title>

      {chapter.sections.map((section: Section, i: number) => {
        switch (section.type) {
          case "image":
            return <Image section={section} key={i} />;
          case "title":
            return <SectionTitle section={section} key={i} />;
          case "definition":
            return <Definition section={section} key={i} />;
          case "formula":
            return <Formula section={section} key={i} />;
          case "rule":
            return <Rule section={section} key={i} />;
          case "text":
            return <Text section={section} key={i} />;
          default:
            return null;
        }
      })}

      <ChapterPreviousNextButtons
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    </>
  );
};

export default ChapterContent;
