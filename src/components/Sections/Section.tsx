import React, { useState, useEffect, useCallback, useRef } from "react";
import ImageView from "./ImageView";
import { Section as SectionModel } from "./Section.model";
import DefinitionView from "./DefinitionView";
import DefinitionEdit from "./DefinitionEdit";
import TextView from "./TextView";
import TextEdit from "./TextEdit";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import TitleView from "./TitleView";
import TitleEdit from "./TitleEdit";
import FormulaView from "./FormulaView";
import FormulaEdit from "./FormulaEdit";
import RuleView from "./RuleView";
import RuleEdit from "./RuleEdit";
import ImageEdit from "./ImageEdit";
import "./Section.css";

interface SectionProps {
  section: SectionModel;
  onSectionChange: (section: SectionModel) => void;
  saveChapter: () => void;
}

const Section = (props: SectionProps) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const [edit, setEdit] = useState(false);

  const node = useRef() as React.MutableRefObject<HTMLDivElement>;

  const onClick = (e: any) => {
    isLoggedIn && setEdit(currentEdit => !currentEdit);
  };

  const onClickOutside = useCallback(
    (e: any) => {
      if (node.current && node.current.contains(e.target)) {
        return;
      } else {
        isLoggedIn && setEdit(false);
      }
    },
    [node, isLoggedIn]
  );

  const onCommandEnter = useCallback(
    (e: any) => {
      if (e.keyCode === 13 && e.metaKey && node.current) {
        isLoggedIn && props.saveChapter();
        isLoggedIn && setEdit(false);
      }
    },
    [node, isLoggedIn, props]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onCommandEnter);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onCommandEnter);
    };
  }, [node, onClickOutside, onCommandEnter]);

  const sectionViews = () => {
    switch (props.section.type) {
      case "definition":
        return <DefinitionView {...props} />;
      case "image":
        return <ImageView {...props} />;
      case "title":
        return <TitleView {...props} />;
      case "formula":
        return <FormulaView {...props} />;
      case "rule":
        return <RuleView {...props} />;
      case "text":
        return <TextView {...props} />;
      default:
        return <div></div>;
    }
  };

  const sectionEdits = () => {
    switch (props.section.type) {
      case "definition":
        return <DefinitionEdit {...props} />;
      case "text":
        return <TextEdit {...props} />;
      case "title":
        return <TitleEdit {...props} />;
      case "formula":
        return <FormulaEdit {...props} />;
      case "rule":
        return <RuleEdit {...props} />;
      case "image":
        return <ImageEdit {...props} />;

      default:
        return <div></div>;
    }
  };

  function titleCase(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  if (edit) {
    return (
      <div ref={node} style={{ margin: "24px" }}>
        {titleCase(props.section.type) + ":"}
        {sectionEdits()}
      </div>
    );
  }

  return <div onClick={onClick}>{sectionViews()}</div>;
};

export default Section;
