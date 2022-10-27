import React from "react";
import Heading from "./Heading";
import CommentLists from "./CommentLists";



const Comments = () => {
  return (
    <div className="pt-10 bg-[#0A2640] sm:pt-16 pb-14 lg:pt-1 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-16">
        <Heading />
        <CommentLists />
      </div>
    </div>
  );
};

export default Comments;
