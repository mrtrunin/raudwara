import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router";
import { Row, Col } from "antd";
import PageStructure from "../common/PageStructure/PageStructure";
import ChapterEditor from "../ChapterEditor/ChapterEditor";
import { getChapter } from "../../api/api";
import { Chapter as ChapterModel } from "../Chapter/Chapter.model";
// import Chapter from "../Chapter/Chapter";

const WriteChapter = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [chapter, setChapter] = useState<ChapterModel | undefined>(undefined);

  const loadChapter = useCallback(() => {
    const currentChapterId = match.params.id;
    getChapter(currentChapterId).then(chapter => setChapter(chapter));
  }, [match.params.id]);

  useEffect(() => {
    loadChapter();
  }, [loadChapter]);

  if (!chapter) {
    return <div>Loading</div>;
  }

  return (
    <Row>
      <Col span={12}>
        <PageStructure>
          <ChapterEditor chapterId={chapter._id} onChapterSave={loadChapter} />
        </PageStructure>
      </Col>
      <Col span={12}>{/* <Chapter chapter={chapter} /> */}</Col>
    </Row>
  );
};

export default WriteChapter;
