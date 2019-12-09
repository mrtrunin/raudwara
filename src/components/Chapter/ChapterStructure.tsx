import React from "react";
import { Row, Col } from "antd";
import "./Chapter.css";
import { ChapterProps } from "./Chapter.model";
import ChapterContent from "./ChapterContent";

const ChapterStructure = (props: ChapterProps) => {
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={16} offset={4} className="large">
        <ChapterContent titleSize={1} {...props} />
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
        <ChapterContent titleSize={2} {...props} />
      </Col>

      <Col xs={0} sm={24} md={0} lg={0} xl={0} xxl={0} className="medium">
        <ChapterContent titleSize={3} {...props} />
      </Col>

      <Col xs={24} sm={0} md={0} lg={0} xl={0} xxl={0} className="small">
        <ChapterContent titleSize={3} {...props} />
      </Col>
    </Row>
  );
};

export default ChapterStructure;
