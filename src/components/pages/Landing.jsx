import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/auth-context'

const Landing = () => {
   const cxt = useContext(AuthContext)

  return (
    <div>
      {cxt.isLoggedIn ? (
        <div>
          <p>Logged In</p>
          <button
            className="bg-green-600 text-white p-2 rounded font-bold"
            onClick={cxt.onLogOut}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <p>Logged Out</p>
          <button
            className="bg-green-600 text-white p-2 rounded font-bold"
            onClick={cxt.onLogIn}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Landing