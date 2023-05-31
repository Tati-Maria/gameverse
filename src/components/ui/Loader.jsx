import { ClockLoader } from "react-spinners";

const Loader = () => {
    return (
        <div
        className="flex justify-center items-center h-screen"
        >
            <ClockLoader
            color="#3B82F6" 
            className="text-4xl"
            />
        </div>
    )
};

export default Loader;