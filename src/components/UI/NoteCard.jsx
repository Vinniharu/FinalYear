import React from "react";
import { Link } from "react-router-dom";

const NoteCard = (props) => {
  return (
    <div className="shadow-md box-content border rounded-md">
      <div className="p-2">
        <h2>Course Title: {props.title}</h2>
        <div>
          <p>{props.code}</p>
        </div>
      </div>
      <div className="bg-gray-200">
        {Object.values(props.links).map((link, id) => (
          <Link to={link} key={id} className="z-20">
            <div className="hover:bg-gray-500 p-2 hover:text-white">
              <p>
                {props.title} {id + 1}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteCard;
