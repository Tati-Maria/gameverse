import { ClockLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
        className="flex justify-center items-center h-screen"
        >
            <ClockLoader 
            className="text-blue-500 text-4xl"
            />
        </div>
    )
};

export default Loader;