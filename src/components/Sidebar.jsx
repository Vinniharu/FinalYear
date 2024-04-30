import React, {useContext} from "react";
import LinkCard from "./UI/LinkCard";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import NavToggle from "./context/nav-context";
import AuthContext from "./context/auth-context";

const level = [100, 200, 300, 400, 500];

const Sidebar = () => {
  const navigate = useNavigate()
  const nav = useContext(NavToggle)
  const authcxt = useContext(AuthContext)

  const logOutHandler = () => {
    authcxt.onLogOut()
    navigate("/auth")
    nav.special()
  }

  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <div
        className={`bg-[#AFCBFF] justify-between flex flex-col items-start md:max-h-[90vh] z-50 fixed bottom-0 overflow-hidden box-border transition-all p-4 h-[100vh] md:min-h-[90vh] ${
          nav.toggle
            ? "w-0 opacity-0 -translate-x-52 "
            : "w-full opacity-100 md:w-[16rem] translate-x-0"
        }`}
      >
        <div className="w-full">
          <div className="flex md:hidden items-center justify-end ">
            <button
              className="text-2xl mb-[1rem]"
              onClick={() => nav.special()}
            >
              <p>
                <IoMdClose />
              </p>
            </button>
          </div>
          <LinkCard name="All Levels" link="/home" />
          {level.map((item) => (
            <LinkCard
              name={item + " level"}
              onClick={() => changeLevelFilter(item)}
              key={item}
              link={`/${item}`}
            />
          ))}
        </div>
        <div className="w-full">
          {user && (
            <div className="w-full">
              <LinkCard name="Add Note" link="/add" />
            </div>
          )}
          <div
            className={`text-[#0E1C36] text-lg font-semibold p-2 rounded w-full cursor-pointer`}
            onClick={logOutHandler}
          >
            Log Out
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
