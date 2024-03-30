import React from "react";

const Sidebar = (props) => {
  console.log(props.onClick);
  return (
    <div
      className={`bg-[#AFCBFF] z-50 fixed bottom-0 overflow-hidden box-border transition-all p-4 h-[90vh] ${
        props.onClick
          ? "w-0 opacity-0 -translate-x-52 "
          : "w-full opacity-100 md:w-[16rem] translate-x-0"
      }`}
    >
      Hello world
    </div>
  );
};

export default Sidebar;
