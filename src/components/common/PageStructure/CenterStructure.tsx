import React, { PropsWithChildren } from "react";
import { Row } from "antd";

const CenterStructure = ({ children }: PropsWithChildren<any>) => {
  return <Row justify="center">{children}</Row>;
};

export default CenterStructure;
