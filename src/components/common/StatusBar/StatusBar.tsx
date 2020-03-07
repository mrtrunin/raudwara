import React from "react";
import "./StatusBar.css";

interface StatusBarProps {
  chaptersEqual: boolean;
}

const StatusBar = ({ chaptersEqual }: StatusBarProps) => {
  if (chaptersEqual) {
    return <div>Saved</div>;
  }

  return <div>Not saved!</div>;
};

export default StatusBar;
