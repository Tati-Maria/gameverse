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
        className="h-14 w-14 flex items-center justify-center rounded-full bg-gray-800 text-gray-100 shadow-md"
        onClick={() => setToggle()}
        >
            {toggle ? <BsSun size={25} /> : <BsMoon size={25} />}
        </button>
    </div>
  )
}

export default Toggle