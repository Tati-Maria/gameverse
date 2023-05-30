import { useState } from "react"
import Toggle from "./Toggle";

// eslint-disable-next-line react/prop-types
const Container = ({children}) => {
  const [toggle, setToggle] = useState(false);

  const toggleTheme = () => {
    setToggle(!toggle);
  }

  return (
    <div
    className={`${toggle ? "dark" : ""}`}
    >
      <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
        <Toggle
        toggle={toggle}
        setToggle={toggleTheme}
        />
      </div>
    </div>
  )
}

export default Container