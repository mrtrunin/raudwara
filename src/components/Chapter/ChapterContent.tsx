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
      <Title level={titleSize} className="allcaps center">
        {contentResponse.title}
      </Title>
      {contentResponse.content.map((item: Paragraph, i: number) => {
        if (item.type === "image") {
          return (
            <p className="center wide" key={i}>
              <img
                src={"images/" + item.filename}
                alt={item.alt}
                className="wide"
              />
            </p>
          );
        }
        if (item.type === "title") {
          return (
            <p className="text title allcaps center" key={i}>
              {item.content}
            </p>
          );
        }

        if (item.type === "definition") {
          return (
            <p className="text" key={i}>
              <span className="bold">{item.title}</span>
              {" - "}
              <span>{item.content}</span>
            </p>
          );
        }

        if (item.type === "formula") {
          return (
            <p key={i} className="text center">
              {item.content}
            </p>
          );
        }

        if (item.type === "rule") {
          return (
            <p key={i} className="text center bold rule">
              {item.content}
            </p>
          );
        }

        if (item.type === "text") {
          return (
            <p key={i} className="text">
              {item.content}
            </p>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default ChapterContent;
