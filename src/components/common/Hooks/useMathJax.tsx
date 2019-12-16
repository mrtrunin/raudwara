// import { useEffect } from "react";

declare global {
  interface Window {
    MathJax: any;
    typeset: any;
    convertToFormula: any;
  }
}

const useMathJax = () => {
  //   useEffect(() => {
  //     window.MathJax = {
  //       tex: {
  //         inlineMath: [
  //           ["$", "$"],
  //           ["\\(", "\\)"]
  //         ]
  //       },
  //       svg: {
  //         fontCache: "global"
  //       },
  //       options: {
  //         renderActions: {
  //           compile: [MathItem.STATE.COMPILED],
  //           metrics: [MathItem.STATE.METRICS, "getMetrics", "", false]
  //         }
  //       }
  //     };
  //     const script = document.createElement("script");
  //     script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);
};

export default useMathJax;
