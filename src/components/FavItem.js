import React from "react";
import { useDispatch } from "react-redux";
import { removeFav } from "../actions";

function FavItem({ title, id, key }) {
  const dispatch = useDispatch();

  const deleteFav = () => {
    dispatch(removeFav(id));
  };

  return (
    <div className="bg-white shadow hover:shadow-lg p-3 pl-5 flex items-center group transition duration-300 ease-in-out">
      <div className="flex-1 pr-4 text-lg font-bold">{title}</div>
      <button
        onClick={() => deleteFav(id)}
        className="transition duration-300 ease-in-out px-3 py-2 text-sm rounded bg-red-500 hover:bg-red-700 text-white"
      >
        Sil
      </button>
    </div>
  );
}

export default FavItem;
