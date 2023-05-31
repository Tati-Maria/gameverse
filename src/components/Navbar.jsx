import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import MenuDropDown from "./ui/MenuDropDown";



const Navbar = () => {
    
    return (
        <nav
        className="relative flex items-center justify-between py-4 border-b border-blue-200 dark:border-gray-800 mb-4" 
        >
            <Link 
            to={"/"} 
            className="logo"
            translate="no"
            >
                <img width={30} src={logo} alt="logo" />
                <h2 className=" font-flipahaus">
                    Game<span>Verse</span>
                </h2>
            </Link>
            <MenuDropDown />
        </nav>
    )
};


export default Navbar;