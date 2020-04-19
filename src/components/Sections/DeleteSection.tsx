import React from "react";
import "./DeleteSection.css";
import { CloseCircleOutlined } from "@ant-design/icons";

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
      <CloseCircleOutlined onClick={onDeleteSection}></CloseCircleOutlined>
    </div>
  );
};

export default DeleteSection;
