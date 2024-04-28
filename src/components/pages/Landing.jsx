import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth-context'

const Landing = () => {
  const auth = useContext(AuthContext)

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-[1rem] text-[#0E1C36] md:gap-[2rem] m-[2rem]">
        <h1 className="font-bold text-2xl md:text-6xl">
          Welcome to Study Here
        </h1>
        <p className="font-semibold text-xl md:text-3xl">
          Your one-stop study material source
        </p>
        <section className="flex items-center gap-[2rem]">
          <Link to={"/auth"}>
            <p className="bg-green-600 text-white p-2 text-base md:text-xl rounded font-bold">
              Get started
            </p>
          </Link>
        </section>
      </section>
    </>
  );
}

export default Landing