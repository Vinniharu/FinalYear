import React from 'react'
import { Link } from 'react-router-dom';

const LoggedOut = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-[1rem] text-[#0E1C36] md:gap-[2rem] m-[2rem]">
        <h1 className="font-bold text-2xl md:text-6xl text-center">
          You are not logged into an account
        </h1>
        <section className="flex items-center gap-[2rem] flex-wrap justify-center">
          <Link to={"/signup"}>
            <p className="bg-green-600 text-white p-2 text-base md:text-xl rounded font-bold">
              Create an account
            </p>
          </Link>
          <Link to={"/signin"}>
            <p className="text-center border-2 border-[#0E1C36] text-[#0E1C36] p-2 text-base md:text-xl rounded font-bold">
              Log into existing account
            </p>
          </Link>
        </section>
      </section>
    </>
  );
}

export default LoggedOut