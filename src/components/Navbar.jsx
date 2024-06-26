import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import AuthContext from "./context/auth-context";
import NavToggle from "./context/nav-context";

const Navbar = () => {
  const auth = useContext(AuthContext);
  const nav = useContext(NavToggle)

  return (
    <div className="box-border p-4 bg-[#0E1C36] w-full text-white h-[10vh] flex items-center justify-between sticky top-0">
      <div>
        <Link to={"/"}>
          <h1 className="text-xl md:text-3xl font-extrabold">StudyHere</h1>
        </Link>
      </div>
      {auth.isLoggedIn ? (
        <button className="text-2xl" onClick={nav.toggleFunction}>
          <p>{!nav.toggle ? <IoMdClose /> : <RxHamburgerMenu />}</p>
        </button>
      ) : (
        <section className="flex items-center gap-[1rem]">
          <Link to={"/auth"}>
            <p className="text-center bg-green-600 text-white p-1 md:p-2 text-sm md:text-base rounded font-bold">
              Get started
            </p>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Navbar;
