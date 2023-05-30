import { Link, NavLink } from "react-router-dom";
import SearchGame from "./SearchGame";
import logo from "../assets/logo.png"
import {useGetAllGenres} from "../actions/useGetAllGenres"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"
import { useState } from "react";

const DropdownMenu = () => {

    const {data, isLoading, isError} = useGetAllGenres();

    const genres = data?.results;

    return (
        <div
        className="absolute bg-gray-200 top-10 -left-24 w-[200px] shadow-lg py-2 px-4 rounded-md dark:bg-gray-800 dark:text-gray-100 z-50"
        >
            <ul
            className="flex flex-col space-y-2 overflow-y-scroll max-h-60 pr-1"
            >
               {genres?.map((genre) => (
                    <li
                    className="py-1 px-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700" 
                    key={genre.id}
                    >
                        {isLoading && <p>Loading...</p>}
                        {isError && <p>Error...</p>}
                        <NavLink to={`/genres/${genre.slug}`}>
                            {genre.name}
                        </NavLink>
                    </li>
               ))}
            </ul>
        </div>
    )
}


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <nav
        className="relative flex items-center justify-between py-6" 
        >
            <Link 
            to={"/"} 
            className="logo"
            >
                <img width={30} src={logo} alt="logo" />
                <h2 className=" font-flipahaus">
                    Game<span>Verse</span>
                </h2>
            </Link>
            <ul 
            className="flex items-center space-x-10"
            >
                <li>
                    <SearchGame />
                </li>
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/games"}>
                        Games
                    </NavLink>
                </li>
                <li className="flex items-center gap-x-2 cursor-pointer relative">
                    <span>
                        Categories
                    </span>
                    <button
                    onClick={() => setDropdown(!dropdown)}
                    >
                        {dropdown ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {dropdown && <DropdownMenu />}
                </li>
            </ul>
        </nav>
    )
};


export default Navbar;