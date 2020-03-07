import React, { useEffect, useState, useCallback } from "react";
import {
  getChapter,
  updateSection,
  updateChapter,
  createSection
} from "../../api/api";
import {} from "../../api/api";
import { Chapter } from "../Chapter/Chapter.model";
import TitleEditor from "./TitleEditor";
import { Button, List } from "antd";
import SectionsEditor from "./SectionsEditor";
import { Section } from "../Sections/Section.model";

interface ChapterEditorProps {
  chapterId: string;
  onChapterSave: () => void;
}

const ChapterEditor = ({ chapterId, onChapterSave }: ChapterEditorProps) => {
  const [chapter, setChapter] = useState<Chapter>({
    _id: "",
    title: "",
    sections: []
  });

  const [newChapter, setNewChapter] = useState<Chapter>({
    _id: "",
    title: "",
    sections: []
  });

  const loadChapter = useCallback(async () => {
    if (chapterId) {
      getChapter(chapterId).then(chapter => {
        setChapter(chapter);
        setNewChapter(chapter);
      });
    }
  }, [chapterId]);

  useEffect(() => {
    // here come if chapter, then POST chapter, else get
    loadChapter();
  }, [loadChapter]);

  const onTitleChange = (newTitle: string) => {
    setNewChapter(prevChapter => {
      return { ...prevChapter, title: newTitle };
    });
  };

  const onSectionsChange = (newSections: Section[]) => {
    console.log("ON SECTIONS CHANGE");
    setNewChapter(prevChapter => {
      return { ...prevChapter, sections: newSections };
    });
  };

  const createNewSection = (section: Section): void => {
    if (section._id === "") {
      delete section._id;
      createSection(section).then(createdSection => {
        const newSections = [...newChapter.sections, createdSection];
        onSectionsChange(newSections);
      });
    } else {
      throw new Error("Something is wrong with newSection ID");
    }
  };

  const updateSections = () => {
    console.log("UPDATE SECTIONS");
    newChapter.sections.forEach((newSection, i) => {
      const oldSection = chapter.sections.find(oldSection => {
        return oldSection._id === newSection._id;
      });
      if (!Object.is(newSection, oldSection)) {
        updateSection(newSection);
      }
    });
  };

  const saveChapter = () => {
    console.log("SAVE CHAPTER");
    updateSections();
    updateChapter(newChapter);
    onChapterSave();
    loadChapter();
  };

  if (!chapter) {
    return <div>Loading...</div>;
  }

  return (
    <List itemLayout="horizontal">
      <List.Item key="title">
        <TitleEditor
          title={newChapter.title}
          onTitleChange={e => onTitleChange(e.target.value)}
        />
      </List.Item>

      <SectionsEditor
        sections={newChapter.sections}
        onSectionsChange={newSections => onSectionsChange(newSections)}
        createNewSection={createNewSection}
      />

      {Object.is(chapter, newChapter) ? (
        ""
      ) : (
        <Button onClick={saveChapter} style={{ marginTop: 20 }}>
          Save Chapter
        </Button>
      )}
    </List>
  );
};

export default ChapterEditor;
