import React, { useRef, useCallback, useEffect } from "react";

declare global {
  interface Window {
    MathJax: any;
  }
}

const MathJax = ({ children }: any) => {
  const node = useRef() as React.MutableRefObject<HTMLDivElement>;

  const renderMath = useCallback(() => {
    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, node.current]);
  }, [node]);

  useEffect(() => {
    return renderMath();
  });

  return <div ref={node}>{children}</div>;
};

export default MathJax;
