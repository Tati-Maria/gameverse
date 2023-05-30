/* eslint-disable react/prop-types */
import {BsSun, BsMoon} from "react-icons/bs"

const Toggle = ({
    toggle,
    setToggle
}) => {
    

  return (
    <div
    className="fixed bottom-10 right-10 z-50"
    >
        <button
        className="p-2 rounded-full bg-gray-800 text-gray-100 shadow-md"
        onClick={() => setToggle()}
        >
            {toggle ? <BsSun /> : <BsMoon />}
        </button>
    </div>
  )
}

export default Toggle