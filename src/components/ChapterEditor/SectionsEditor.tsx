import React from "react";
import { Section } from "../Sections/Section.model";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { List, Button } from "antd";
import SectionEditor from "./SectionEditor";
import arrayMove from "array-move";
import "./SectionsEditor.css";

interface SectionsEditorProps {
  sections: Section[];
  onSectionsChange: (e: any) => void;
  createNewSection: (section: Section) => void;
}

const SectionsEditor = ({
  sections,
  onSectionsChange,
  createNewSection
}: SectionsEditorProps) => {
  const onSortSections = (oldIndex: number, newIndex: number) => {
    onSectionsChange(arrayMove(sections, oldIndex, newIndex));
  };

  const onSectionChange = (updatedSection: Section, newSection?: Section) => {
    console.log("HERE");

    const sectionIndex = sections.findIndex(section => {
      return updatedSection._id === section._id;
    });

    console.log(updatedSection);
    console.log(newSection);

    onSectionsChange([
      ...sections.slice(0, sectionIndex),
      newSection ? newSection : updatedSection,
      ...sections.slice(sectionIndex + 1)
    ]);
  };

  const triggerNewSection = () => {
    const defaultNewSection: Section = {
      _id: "",
      type: "definition",
      title: ""
    };
    createNewSection(defaultNewSection);
  };

  if (sections.length > 0) {
    return (
      <>
        {sections.map((section, i) => {
          return (
            <List.Item key={i}>
              <SectionEditor
                section={section}
                onSectionChange={onSectionChange}
              />
              <div className="right">
                {i !== 0 && (
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<UpOutlined />}
                    onClick={() => {
                      onSortSections(i, i - 1);
                    }}
                  />
                )}
                {i !== sections.length - 1 && (
                  <Button
                    type="dashed"
                    shape="circle"
                    icon={<DownOutlined />}
                    onClick={() => {
                      onSortSections(i, i + 1);
                    }}
                  />
                )}
              </div>
            </List.Item>
          );
        })}

        <List.Item>
          <Button onClick={triggerNewSection}>Add New Section</Button>
        </List.Item>
      </>
    );
  }
  return (
    <>
      <List.Item>
        <Button onClick={triggerNewSection}>Add New Section</Button>
      </List.Item>
    </>
  );
};

export default SectionsEditor;
