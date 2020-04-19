import React from "react";
import "./StatusBar.css";
import { Icon, Button } from "antd";

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
            <Icon
              type="check-circle"
              theme="filled"
              style={{ color: "#1DA57A" }}
            />{" "}
            Saved
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
              <Icon
                type="warning"
                theme="filled"
                style={{ color: "#faad14" }}
              />{" "}
              Not saved
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
