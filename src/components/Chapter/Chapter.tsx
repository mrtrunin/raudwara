import React, { useState, useEffect } from "react";
import { Book } from "../../components/Book/Book.model";
import { getChapter, getBookByChapterId } from "../../api/api";
import { RouteComponentProps } from "react-router";
import { Chapter as ChapterModel } from "../../components/Chapter/Chapter.model";
import ChapterStructure from "../../components/Chapter/ChapterStructure";

const Chapter = ({ match }: RouteComponentProps<{ id: string }>) => {
  const [chapter, setChapter] = useState<ChapterModel | undefined>(undefined);
  const [previousChapter, setPreviousChapter] = useState<
    ChapterModel | undefined
  >(undefined);
  const [nextChapter, setNextChapter] = useState<ChapterModel | undefined>(
    undefined
  );

  useEffect(() => {
    const currentChapterId = match.params.id;
    getChapter(currentChapterId).then(chapter => setChapter(chapter));
    getBookByChapterId(currentChapterId).then(book =>
      getPreviousAndNextChaptersFromBook(book, currentChapterId)
    );
  }, [match.params.id]);

  const getPreviousAndNextChaptersFromBook = (
    book: Book,
    currentChapterId: string
  ): void => {
    const bookLength = book.chapters.length;

    let previousChapter = undefined;
    let nextChapter = undefined;

    if (bookLength <= 1) {
      return;
    }

    const currentChapterIndex = book.chapters.findIndex(
      chapter => chapter._id === currentChapterId
    );

    const currentChapterIndexIsFirst = currentChapterIndex === 0;
    const currentChapterIndexIsLast = currentChapterIndex === bookLength - 1;
    const currentChapterIndexisNth =
      currentChapterIndex > 0 && !currentChapterIndexIsLast;

    if (currentChapterIndexIsFirst) {
      nextChapter = book.chapters[1];
    }

    if (currentChapterIndexIsLast) {
      previousChapter = book.chapters[bookLength - 2];
    }

    if (currentChapterIndexisNth) {
      nextChapter = book.chapters[currentChapterIndex + 1];
      previousChapter = book.chapters[currentChapterIndex + 1];
    }

    setPreviousChapter(previousChapter);
    setNextChapter(nextChapter);
  };

  if (!chapter) {
    return <div>No chapter</div>;
  } else
    return (
      <ChapterStructure
        chapter={chapter}
        previousChapter={previousChapter}
        nextChapter={nextChapter}
      />
    );
};

export default Chapter;
