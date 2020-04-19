import React, { useState } from "react";

import { Section as SectionModel } from "./Section.model";
// import { useSelector } from "react-redux";
// import { RootState } from "../../rootReducer";
import DeleteSection from "./DeleteSection";
import Section from "./Section";
import AddNewSection from "./AddNewSection";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";

interface SectionsProps {
  sections: SectionModel[];
  onSectionsChange: (e: any) => void;
  createNewSection: (section: SectionModel, previousSectionId?: string) => void;
  saveChapter: () => void;
}

const Sections = ({
  sections,
  onSectionsChange,
  createNewSection,
  saveChapter
}: SectionsProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [highlightedSection, setHighlightedSection] = useState("");
  // const [sectionsToDelete, setSectionsToDelete] = useState([]);

  const onMouseOver = (id: string) => {
    isLoggedIn && setHighlightedSection(id);
  };

  const onMouseLeave = (e: any) => {
    isLoggedIn && setHighlightedSection("");
  };

  const onSectionChange = (updatedSection: SectionModel) => {
    const sectionIndex = sections.findIndex(section => {
      return updatedSection._id === section._id;
    });

    onSectionsChange([
      ...sections.slice(0, sectionIndex),
      updatedSection,
      ...sections.slice(sectionIndex + 1)
    ]);
  };

  const deleteSection = (sectionId: string) => {
    const sectionIndex = sections.findIndex(section => {
      return sectionId === section._id;
    });

    const array = [...sections];
    array.splice(sectionIndex, 1);
    onSectionsChange(array);
  };

  return (
    <div>
      {isLoggedIn && <AddNewSection createNewSection={createNewSection} />}
      {sections.map((section: SectionModel, i: number) => {
        return (
          <div key={i}>
            <div
              onMouseOver={() => onMouseOver(section._id)}
              onMouseLeave={onMouseLeave}
              className={
                highlightedSection === section._id ? "hover" : "noHover"
              }
            >
              {isLoggedIn && highlightedSection === section._id && (
                <DeleteSection
                  deleteSection={deleteSection}
                  sectionId={section._id}
                />
              )}
              <Section
                section={section}
                onSectionChange={onSectionChange}
                saveChapter={saveChapter}
              />
            </div>

            {isLoggedIn && (
              <AddNewSection
                createNewSection={createNewSection}
                previousSectionId={section._id}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
