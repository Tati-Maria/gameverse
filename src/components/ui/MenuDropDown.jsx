import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { GiGameConsole } from "react-icons/gi";
import {
  IoGameControllerOutline,
  IoHomeOutline,
  IoCodeOutline,
  IoMenu,
  IoHeartOutline,
} from "react-icons/io5";

const links = [
  {
    name: "Home",
    icon: <IoHomeOutline className="w-5 h-5 mr-2" />,
    href: "/",
  },
  {
    name: "Games",
    icon: <IoGameControllerOutline className="w-5 h-5 mr-2" />,
    href: "/games",
  },
  {
    name: "Developers",
    icon: <IoCodeOutline className="w-5 h-5 mr-2" />,
    href: "/developers",
  },
  {
    name: "Platforms",
    icon: <GiGameConsole className="w-5 h-5 mr-2" />,
    href: "/platforms",
  },
  {
    name: "Favorites",
    icon: <IoHeartOutline className="w-5 h-5 mr-2" />,
    href: "/favorites",
  },
];

const MenuDropDown = () => {
  return (
    <Menu as="ul" className="relative inline-block text-left z-50">
      <Menu.Button>
        <IoMenu size={35} />
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-56  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800 dark:divide-gray-700 dark:ring-gray-700 dark:text-gray-300">
        <div className="px-1 py-1 ">
          {links.map((link, index) => (
            <Menu.Item as="li" key={index}>
              {({ active }) => (
                <NavLink
                  to={link.href}
                  className={`${
                    active
                      ? "bg-indigo-300 bg:gray-100 dark:bg-gray-700 dark:text-gray-300"
                      : "text-gray-700 dark:text-gray-200"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm md:text-base`}
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default MenuDropDown;
