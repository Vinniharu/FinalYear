import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const NoteCard = (props) => {
  const [ open, setOpen ] = useState(true);

  return (
    <div className="shadow-md box-border border rounded-md w-[100vw]">
      <div className="p-2 flex items-center justify-between">
        <div>
          <h2>Course Title: {props.title}</h2>
          <p>{props.code}</p>
        </div>
        <button
          className="text-xl w-[2rem] h-[2rem]"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </button>
      </div>
      <div className={`bg-gray-200 overflow-hidden ${open ? "hidden" : ""}`}>
        {Object.values(props.links).map((link, id) => (
          <Link
            to={link}
            key={Object.keys(props.links)[id]}
            className="z-20 box-border"
          >
            <div className="hover:bg-gray-500 p-2 hover:text-white">
              <p>
                {props.title} {Object.keys(props.links)[id]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;
