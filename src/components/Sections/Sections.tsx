import React from "react";

import { Section as SectionModel } from "./Section.model";
// import { useSelector } from "react-redux";
// import { RootState } from "../../rootReducer";
import Section from "./Section";

interface SectionsProps {
  sections: SectionModel[];
  onSectionsChange: (e: any) => void;
  createNewSection: (section: SectionModel) => void;
  saveChapter: () => void;
}

const Sections = ({
  sections,
  onSectionsChange,
  createNewSection,
  saveChapter
}: SectionsProps) => {
  // const user = useSelector((state: RootState) => state.user.user);

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
      {sections.map((section: SectionModel, i: number) => {
        return (
          <div key={i}>
            <Section
              section={section}
              onSectionChange={onSectionChange}
              saveChapter={saveChapter}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sections;
