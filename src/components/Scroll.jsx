import React from "react";

const Scroll = ({ children }) => {
  return (
    <div className="h-[800px] py-3 overflow-y-scroll w-fit mx-auto">
      {children}
    </div>
  );
};

export default Scroll;
