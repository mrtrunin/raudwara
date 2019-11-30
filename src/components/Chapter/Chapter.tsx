import React, { FC } from "react";
import ChapterContent from "./ChapterContent";
import { ContentResponse } from "./ContentResponse.model";
import { Row, Col } from "antd";
import "./Chapter.css";

interface Chapter {
  contentResponse: ContentResponse;
}

const Chapter: FC<Chapter> = ({ contentResponse }) => {
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={16} offset={4} className="large">
        <ChapterContent titleSize={1} contentResponse={contentResponse} />
      </Col>
      <Col
        xs={0}
        sm={0}
        md={20}
        lg={0}
        xl={0}
        xxl={0}
        offset={2}
        className="large"
      >
        <ChapterContent titleSize={2} contentResponse={contentResponse} />
      </Col>

      <Col xs={0} sm={24} md={0} lg={0} xl={0} xxl={0} className="medium">
        <ChapterContent titleSize={3} contentResponse={contentResponse} />
      </Col>

      <Col xs={24} sm={0} md={0} lg={0} xl={0} xxl={0} className="small">
        <ChapterContent titleSize={4} contentResponse={contentResponse} />
      </Col>
    </Row>
  );
};

export default Chapter;
