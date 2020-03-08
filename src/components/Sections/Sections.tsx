import React from "react";

import { Section as SectionModel } from "./Section.model";
// import { useSelector } from "react-redux";
// import { RootState } from "../../rootReducer";
import Section from "./Section";
import AddNewSectionTest from "./AddNewSectionTest";
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

  return (
    <div>
      {isLoggedIn && <AddNewSection createNewSection={createNewSection} />}
      {sections.map((section: SectionModel, i: number) => {
        return (
          <div key={i}>
            <Section
              section={section}
              onSectionChange={onSectionChange}
              saveChapter={saveChapter}
            />
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
