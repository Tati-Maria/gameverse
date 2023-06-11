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
        className="h-14 w-14 flex items-center justify-center rounded-full shadow-md bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-blue-700 lg:w-16 lg:h-16 lg:shadow-lg"
        onClick={() => setToggle()}
        >
            {toggle ? <BsSun size={25} /> : <BsMoon size={25} />}
        </button>
    </div>
  )
}

export default Toggle