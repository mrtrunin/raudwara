import React, { PropsWithChildren } from "react";
import { Row, Col } from "antd";
import "./PageStructure.css";

const PageStructure = ({ children }: PropsWithChildren<any>) => {
  return (
    <Row>
      <Col xs={0} sm={0} md={0} lg={16} offset={4} className="large">
        {React.cloneElement(children, { titlesize: 1 })}
      </Col>
      <Col xs={0} sm={0} md={20} lg={0} offset={2} className="large">
        {React.cloneElement(children, { titlesize: 2 })}
      </Col>

      <Col xs={0} sm={24} md={0} lg={0} className="medium">
        {React.cloneElement(children, { titlesize: 3 })}
      </Col>

      <Col xs={24} sm={0} md={0} lg={0} className="small">
        {React.cloneElement(children, { titlesize: 3 })}
      </Col>
    </Row>
  );
};

export default PageStructure;
