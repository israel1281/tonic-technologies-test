import React from "react";
import Backdrop from "./Backdrop";
import Card from "./Card";

const NewsLetter = () => {
  return (
    <div className="relative mt-24 sm:mt-32 sm:py-16">
      <Backdrop />
      <Card />
    </div>
  );
};

export default NewsLetter;
