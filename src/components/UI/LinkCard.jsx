import { useRef } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

const LinkCard = (props) => {
  const linkRef = useRef();

  const selectedHandler = () => {
    setSelected(linkRef.current.value);
  };
 
  return (
    <NavLink to={props.link} className="w-full block" onClick={selectedHandler}>
      <div
        ref={linkRef}
        className={`text-[#0E1C36] text-lg font-semibold p-2 rounded w-full `}
      >
        {props.name}
      </div>
    </NavLink>
  );
};

export default LinkCard;
