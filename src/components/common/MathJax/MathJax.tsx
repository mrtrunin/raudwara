import React, { useRef, useCallback, useEffect } from "react";
import useMathJax from "../Hooks/useMathJax";

const MathJax = ({ children }: any) => {
  useMathJax();
  const node = useRef() as React.MutableRefObject<HTMLDivElement>;

  //   const mathJaxTypeset = useCallback(async (code: any) => {
  //     try {
  //       await code();
  //       return await window.MathJax.typesetPromise();
  //     } catch (error) {
  //       console.log("Typeset failed: " + error.message);
  //     }
  //   }, []);

  const renderMath = useCallback(() => {
    window.typeset(() => {
      //   console.log(node.current);
      return node.current.innerText;
    });
  }, [node]);

  useEffect(() => {
    return renderMath();
  });

  return <div ref={node}>{children}</div>;
};

export default MathJax;
