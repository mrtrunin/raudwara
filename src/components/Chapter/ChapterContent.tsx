import React, { FC } from "react";
import { Typography } from "antd";
import "./ChapterContent.css";
import { ContentResponse, Paragraph } from "./ContentResponse.model";

const { Title } = Typography;

interface ChapterContent {
  titleSize?: 1 | 2 | 3 | 4 | undefined;
  contentResponse: ContentResponse;
}

const ChapterContent: FC<ChapterContent> = ({ titleSize, contentResponse }) => {
  return (
    <>
      <Title level={titleSize}>{contentResponse.title}</Title>
      {contentResponse.content.map((item: Paragraph, i: number) => {
        if (item.type === "text") {
          return (
            <p key={i} className="text">
              {item.content}
            </p>
          );
        } else return null;
      })}
    </>
  );
};

export default ChapterContent;
