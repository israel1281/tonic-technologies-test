import React, { useEffect } from "react";
import Intro from "./Intro/index";
import FeatureSectionOne from "./FeatureSectionOne/index";
import FeatureSectionTwo from "./FeatureSectionTwo/index";
import Comments from "./Comments/index";
import FeatureSectionThree from "./FeatureSectionThree/index";
import OurBlog from "./OurBlog/index";
import NewsLetter from "./NewsLetter/index";

const Main = () => {
  return (
    <main>
      <Intro />
      <FeatureSectionOne />
      <FeatureSectionTwo />
      <Comments />
      <FeatureSectionThree />
      <OurBlog />
      <NewsLetter />
    </main>
  );
};

export default Main;
