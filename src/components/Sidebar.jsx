import React, { useContext } from "react";
import LinkCard from "./UI/LinkCard";
import AuthContext from "./context/auth-context";
import { useNavigate } from "react-router-dom";

const level = [100, 200, 300, 400, 500];

const Sidebar = (props) => {
  const authcxt = useContext(AuthContext);
  const navigate = useNavigate()

  const logOutHandler = () => {
    authcxt.onLogOut()
    navigate("/auth")
    props.onClick(true)
  }

  return (
    <div
      className={`bg-[#AFCBFF] flex flex-col items-start justify-between max-h-[90vh] z-50 fixed bottom-0 overflow-hidden box-border transition-all p-4 min-h-[90vh] ${
        props.control
          ? "w-0 opacity-0 -translate-x-52 "
          : "w-full opacity-100 md:w-[16rem] translate-x-0"
      }`}
    >
      <div className="w-full">
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
        <LinkCard name="Add Note" link="/add" />
      </div>
      <div className="w-full">
        <div
          className={`text-[#0E1C36] text-lg font-semibold p-2 rounded w-full cursor-pointer`}
          onClick={logOutHandler}
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
