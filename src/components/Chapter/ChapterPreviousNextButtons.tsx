import React from "react";
import { Row, Col } from "antd";
import { Chapter } from "./Chapter.model";

interface ChapterPreviousNextButtonsProps {
  previousChapter?: Chapter;
  nextChapter?: Chapter;
}

const ChapterPreviousNextButtons = ({
  previousChapter,
  nextChapter
}: ChapterPreviousNextButtonsProps) => {
  return (
    <Row style={{ borderTop: "solid", paddingTop: 16 }}>
      <Col span={12} className="left">
        {previousChapter && (
          <a href={`/chapter/${previousChapter._id}`}>
            Eelmine peatükk
            <br />
            <strong>{previousChapter.title}</strong>
          </a>
        )}
      </Col>
      <Col span={12} className="right">
        {nextChapter && (
          <a href={`/chapter/${nextChapter._id}`}>
            Järgmine peatükk
            <br />
            <strong>{nextChapter.title}</strong>
          </a>
        )}
      </Col>
    </Row>
  );
};

export default ChapterPreviousNextButtons;
