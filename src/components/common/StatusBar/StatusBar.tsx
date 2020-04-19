import React from "react";
import "./StatusBar.css";
import { CheckCircleFilled, WarningFilled } from "@ant-design/icons";
import { Button } from "antd";

interface StatusBarProps {
  chaptersEqual: boolean;
  saveChapter: () => void;
  revertChapter: () => void;
}

const StatusBar = ({
  chaptersEqual,
  revertChapter,
  saveChapter
}: StatusBarProps) => {
  return (
    <div className="statusBarContainer">
      <div className="statusBar">
        {chaptersEqual ? (
          <div className="status success">
            <CheckCircleFilled style={{ color: "#1DA57A" }} /> Saved
          </div>
        ) : (
          <>
            <div>
              <Button
                onClick={e => {
                  if (
                    window.confirm(
                      "Are you sure you wish to revert all changes?"
                    )
                  )
                    revertChapter();
                }}
              >
                Revert
              </Button>
            </div>

            <div className="status warning">
              <WarningFilled style={{ color: "#faad14" }} /> Not saved
            </div>

            <div>
              <Button type="primary" onClick={saveChapter}>
                Save
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default StatusBar;
