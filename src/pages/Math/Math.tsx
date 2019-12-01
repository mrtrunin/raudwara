import React, { FC } from "react";
import Chapter from "../../components/Chapter/Chapter";
// import test from "./test.json";
import Arvuhulgad from "./Arvuhulgad.json";

export const Math: FC = () => {
  return <Chapter contentResponse={Arvuhulgad}></Chapter>;
};
