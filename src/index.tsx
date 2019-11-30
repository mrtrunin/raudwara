import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App/App";

import "./fonts/AdobeCaslonProRegular.ttf";
import "./fonts/AdobeCaslonProBoldItalic.ttf";
import "./fonts/AdobeCaslonProBold.ttf";
import "./fonts/AdobeCaslonProItalic.ttf";
import "./fonts/AdobeCaslonProSemiboldItalic.ttf";
import "./fonts/AdobeCaslonProSemibold.ttf";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
