import React from "react";
import "./DeleteSection.css";
import { Icon } from "antd";

interface DeleteSectionProps {
  sectionId: string;
  deleteSection: (sectionId: string) => void;
}

const DeleteSection = (props: DeleteSectionProps) => {
  const onDeleteSection = () => {
    return props.deleteSection(props.sectionId);
  };

  return (
    <div className="deleteSection">
      <Icon type="close-circle" onClick={onDeleteSection}></Icon>
    </div>
  );
};

export default DeleteSection;
