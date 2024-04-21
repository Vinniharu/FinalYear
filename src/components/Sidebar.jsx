import React from "react";
import LinkCard from "./UI/LinkCard";

const Sidebar = (props) => {

  return (
    <div
      className={`bg-[#AFCBFF] flex flex-col items-start justify-between max-h-[90vh] z-50 fixed bottom-0 overflow-hidden box-border transition-all p-4 min-h-[90vh] ${
        props.onClick
          ? "w-0 opacity-0 -translate-x-52 "
          : "w-full opacity-100 md:w-[16rem] translate-x-0"
      }`}
    >
      <div className="w-full">
        <LinkCard name="All Books" link="/" />
      </div>
      <div className="w-full">
        <LinkCard name="Add Note" link="/Add" />
      </div>
    </div>
  );
};

export default Sidebar;