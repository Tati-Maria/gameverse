import { Link } from "react-router-dom";
import SearchGame from "./SearchGame";
import logo from "../assets/logo.png"
import MenuDropDown from "./ui/MenuDropDown";



const Navbar = () => {
    
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
            <div
            className="flex items-center justify-between w-1/2"
            >
                <SearchGame />
                <MenuDropDown />
            </div>
        </nav>
    )
};


export default Navbar;