import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";

function MobileNavbar({ isTop, menuItems, logo }) {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryDeep } = useTheme();

  return (
    <nav
      className={`uppercase z-[999]  w-full fixed top-0   ${
        isTop ? "h-23 py-1" : `h-15 ${isOpen ? "opacity-100" : "opacity-85"}`
      } transition-all duration-300 ease-in-out md:hidden`}
      style={{ backgroundColor: "white" }}
    >
      <div className="mx-5 h-full flex justify-between items-center">
        <div
          className={`h-full flex justify-between items-center md:w-auto ${
            isTop ? "" : "hidden"
          }`}
        >
          <Link to="/" className="h-full py-3 flex-[1_1_0%]">
            <img src={logo} alt="El Taller" className="h-full " />
          </Link>
        </div>

        <button
          className="h-full mt-2 text-3xl text-black md:hidden  p-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`absolute top-7/8 w-full p-4 transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100 z-[9999]" : "scale-0"
        }`}
      >
        <ul className="flex flex-col text-base pb-5 whitespace-normal gap-1 z-[9999]">
          {menuItems.map((path, idx) => (
            <li key={idx} className="relative p-2 bg-white active:shadow-none">
              <Link
                to={`/${path}`}
                className="flex justify-center items-center text-center hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {path.replace("-", " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MobileNavbar;
