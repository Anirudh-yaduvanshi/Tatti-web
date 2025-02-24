import react, { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bndkar = () => { 
    setIsOpen(!isOpen);
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="top-0 static w-full flex justify-between items-center  h-fit p-3 bg-amber-500 ">
      <Link to="/">
        <img
          src="https://th.bing.com/th?id=OIP.znkFQpyWGlQzHK__xXbWmwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2"
          width={80}
          alt="logo"
          className="object-cover mix-blend-multiply "
        />
      </Link>

      <ul className="md:flex justify-between w-lg hidden items-center ">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-black text-2xl px-3 duration-500 py-1 text-yellow-400 font-medium rounded-lg"
                : "bg-yellow-400 text-2xl duration-500 px-3 py-1 text-black font-medium rounded-lg"
            }
            to="about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-black text-2xl px-3 duration-500 py-1 text-yellow-400 font-medium rounded-lg"
                : "bg-yellow-400 text-2xl duration-500 px-3 py-1 text-black font-medium rounded-lg"
            }
            to="services"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-black text-2xl duration-500 px-3 py-1 text-yellow-400 font-medium rounded-lg"
                : "bg-yellow-400 text-2xl px-3 duration-500 py-1 text-black font-medium rounded-lg"
            }
            to="contact"
          >
            Contact Us{" "}
          </NavLink>
        </li>
      </ul>

      <div className="block top-8 right-0 px-10 absolute  md:hidden">
        <button
          onClick={toggleMenu}
          className={`text-black text-4xl font-bold duration-500 focus:outline-none ${
            isOpen ? "hidden" : "block"
          }`}
        >
          &#9776; {/* This is the hamburger icon */}
        </button>
        <button
          onClick={toggleMenu}
          className={`text-black text-4xl font-bold duration-500 focus:outline-none ${
            !isOpen ? "hidden" : "block"
          }`}
        >
          X{" "}
        </button>

        <ul
          className={`flex flex-col items-center gap-4 w-60 bg-amber-300    rounded-lg absolute top-10 right-0  transform transition-all translate-x-0 duration-500 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink
              to="about"
              onClick={bndkar}
              className={({ isActive }) => {
                `${
                  !isActive
                    ? "block rounded-t-lg py-1 opacity-70  px-10  font-medium  bg-yellow-400 text-white"
                    : "text-black  opacity-0 bg-yellow-300 block rounded-t-lg py-1  px-10  font-medium"
                } `;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={bndkar}
              to="services"
              className={({ isActive }) => {
                `${
                  !isActive
                    ? "block py-1  px-10  font-medium bg-yellow-400 text-white"
                    : "text-black bg-yellow-300 block py-1  px-10  font-medium"
                } `;
              }}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={bndkar}
              to="contact"
              className={({ isActive }) => {
                `${
                  !isActive
                    ? "bg-yellow-400 text-white block py-1  px-10  font-medium"
                    : "text-black bg-yellow-300 block py-1  px-10  font-medium"
                }`;
              }}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
