import React from "react";
import { Row, Col, Icon } from "antd";
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
    <Row
      style={{
        borderTop: "solid",
        paddingTop: 16,
        paddingBottom: 64
      }}
    >
      <Col span={12} className="left">
        {previousChapter && (
          <a href={`/chapter/${previousChapter._id}`}>
            <strong>
              <Icon type="left" />
              {previousChapter.title}
            </strong>
          </a>
        )}
      </Col>
      <Col span={12} className="right">
        {nextChapter && (
          <a href={`/chapter/${nextChapter._id}`}>
            <strong>
              {nextChapter.title} <Icon type="right" />
            </strong>
          </a>
        )}
      </Col>
    </Row>
  );
};

export default ChapterPreviousNextButtons;
