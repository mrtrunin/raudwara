import React, { FC } from "react";
import Chapter from "../../components/Chapter/Chapter";
import test from "./test.json";

export const Math: FC = () => {
  return <Chapter contentResponse={test}></Chapter>;
};
