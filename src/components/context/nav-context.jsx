import { createContext, useState } from "react"

const NavToggle = createContext({
   toggle: false,
   toggleFunction: () => {}, 
   special: () => {}
})

export const NavProvider = (props) => {
   const [toggle, setToggle] = useState(true)

   const toggleFunction = () => {
      setToggle(!toggle)
   }

   const special = () => {
      setToggle(true)
   }

   const NavValue = {
      toggle,
      toggleFunction,
      special
   }

   return (
      <NavToggle.Provider value={NavValue}>
         {props.children}
      </NavToggle.Provider>
   )
}

export default NavToggle