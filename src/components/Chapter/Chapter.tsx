import React, { useState, useEffect, useCallback } from "react";
import { Book } from "../Book/Book.model";
import {
  getChapter,
  getBookByChapterId,
  updateSection,
  updateChapter,
  createSection
} from "../../api/api";
import { RouteComponentProps } from "react-router";
import { Chapter as ChapterModel } from "./Chapter.model";
import PageStructure from "../common/PageStructure/PageStructure";
import ChapterContent from "./ChapterContent";
import { Section } from "../Sections/Section.model";
import StatusBar from "../common/StatusBar/StatusBar";
import { RootState } from "../../rootReducer";
import { useSelector } from "react-redux";
import { User } from "../User/User.model";

const Chapter = ({ match }: RouteComponentProps<{ id: string }>) => {
  const user: User = useSelector((state: RootState) => state.user.user);

  const [chapter, setChapter] = useState<ChapterModel>({
    _id: "",
    title: "",
    sections: []
  });
  const [newChapter, setNewChapter] = useState<ChapterModel>({
    _id: "",
    title: "",
    sections: []
  });

  const [previousChapter, setPreviousChapter] = useState<
    ChapterModel | undefined
  >(undefined);
  const [nextChapter, setNextChapter] = useState<ChapterModel | undefined>(
    undefined
  );

  const loadChapter = useCallback(currentChapterId => {
    getChapter(currentChapterId).then(chapter => {
      setChapter(chapter);
      setNewChapter(chapter);
    });
  }, []);

  useEffect(() => {
    const currentChapterId = match.params.id;
    loadChapter(currentChapterId);
    getBookByChapterId(currentChapterId).then(book =>
      getPreviousAndNextChaptersFromBook(book, currentChapterId)
    );
  }, [match.params.id, loadChapter]);

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

  const onSectionsChange = (newSections: Section[]) => {
    setNewChapter(prevChapter => {
      return { ...prevChapter, sections: newSections };
    });
  };

  const updateSections = () => {
    newChapter.sections.forEach((newSection, i) => {
      const oldSection = chapter.sections.find(oldSection => {
        return oldSection._id === newSection._id;
      });
      if (!Object.is(newSection, oldSection)) {
        updateSection(newSection);
      }
    });
  };

  const createNewSection = (
    section: Section,
    previousSectionId?: string
  ): void => {
    if (section._id === "") {
      delete section._id;

      createSection(section).then(createdSection => {
        let newSections = [...newChapter.sections];
        let previousSectionIndex = 0;
        if (previousSectionId) {
          previousSectionIndex =
            newSections.map(section => section._id).indexOf(previousSectionId) +
            1;
        }
        newSections.splice(previousSectionIndex, 0, createdSection);

        onSectionsChange(newSections);
      });
    } else {
      throw new Error("Something is wrong with newSection ID");
    }
  };

  const saveChapter = () => {
    updateSections();
    updateChapter(newChapter);
    loadChapter(newChapter._id);
  };

  const revertChapter = () => {
    setNewChapter(chapter);
  };

  if (!chapter) {
    return <div>No chapter</div>;
  }
  return (
    <div>
      {Object.keys(user).length ? (
        <StatusBar
          chaptersEqual={Object.is(newChapter, chapter)}
          saveChapter={saveChapter}
          revertChapter={revertChapter}
        />
      ) : (
        ""
      )}
      <PageStructure>
        <ChapterContent
          chapter={newChapter}
          previousChapter={previousChapter}
          nextChapter={nextChapter}
          onSectionsChange={onSectionsChange}
          saveChapter={saveChapter}
          createNewSection={createNewSection}
        />
      </PageStructure>
    </div>
  );
};

export default Chapter;
