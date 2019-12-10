import React, { PropsWithChildren } from "react";
import { Row } from "antd";

const CenterStructure = ({ children }: PropsWithChildren<any>) => {
  return (
    <Row justify="center" type="flex">
      {children}
    </Row>
  );
};

export default CenterStructure;
