import React from "react";
import "./StatusBar.css";

interface StatusBarProps {
  chaptersEqual: boolean;
}

const StatusBar = ({ chaptersEqual }: StatusBarProps) => {
  return (
    <div></div>
    // <div className="statusBar">{chaptersEqual ? "Saved" : "Not saved!"}</div>
  );
};

export default StatusBar;
