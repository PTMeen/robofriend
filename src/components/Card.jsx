import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="p-4 text-center duration-300 rounded-lg bg-emerald-200 text-slate-800 hover:scale-105">
      <img
        className="mx-auto"
        src={`https://robohash.org/${id}?200x200`}
        alt={name}
      />
      <div className="mx-auto mt-2">
        <h2 className="text-3xl font-bold">{name}</h2>
        <p className="text-slate-500">{email}</p>
      </div>
    </div>
  );
};

export default Card;
