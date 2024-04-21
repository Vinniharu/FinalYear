import { useState, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

const LinkCard = (props) => {
  const linkRef = useRef();
  const [selected, setSelected] = useState("All Books");

  const selectedHandler = () => {
    setSelected(linkRef.current.value);
  };

  return (
    <Link to={props.link} className="w-full block" onClick={selectedHandler}>
      <div
        ref={linkRef}
        className={`text-white text-lg font-semibold p-2 rounded w-full `}
      >
        {props.name}
      </div>
    </Link>
  );
};

export default LinkCard;
