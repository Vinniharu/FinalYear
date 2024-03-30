import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const closeSidebarHandler = () => {
    setIsOpened(!isOpened)

    props.onClick(isOpened)
  }

  return (
    <div className="box-border p-4 bg-[#0E1C36] text-white h-[10vh] flex items-center justify-between">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-extrabold">StudyHere</h1>
        </Link>
      </div>
      <button className="text-2xl" onClick={closeSidebarHandler}>
        <p>{isOpened ? <IoMdClose /> : <RxHamburgerMenu />}</p>
      </button>
    </div>
  );
};

export default Navbar;
