import React from "react";

const Loading = () => {
  return (
    <div className="grid w-screen h-screen place-items-center">
      <div className="border-8 border-indigo-800 border-l-transparent rounded-full w-[50px] h-[50px] animate-spin"></div>
    </div>
  );
};

export default Loading;
