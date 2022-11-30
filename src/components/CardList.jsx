import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {robots.map((robot) => (
        <Card
          key={robot.id}
          {...robot}
        />
      ))}
    </div>
  );
};

export default CardList;
