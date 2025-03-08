import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-deepblue text-gray-300 font-calibri uppercase py-6 relative">
      <div className="container mx-auto flex flex-row justify-around md:justify-between items-center">
        <div className="flex justify-between items-center md:w-auto">
          <Link to="/">
            <img
              src={logo}
              alt="El Taller Swing Logo"
              className="h-20 w-auto"
            />
          </Link>
        </div>
        <div>
          <button
            className="text-3xl md:hidden focus:outline-none mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div
          className={`absolute top-full left-0 w-full bg-deepblue shadow-md sm:p-4 transition-all duration-300 ease-in-out ${
            isOpen ? "block opacity-95 z-[9999]" : "hidden"
          } md:static md:flex md:w-auto md:shadow-none`}
        >
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col md:flex md:flex-row md:space-x-4 text-base pl-10 md:pl-0 pb-5 md:pb-0npm mt-4 md:mt-0 whitespace-nowrap gap-2 md:justify-center md:flex-wrap z-[9999]`}
          >
            <li>
              <Link to="/" className="hover:text-white">
                Inici
              </Link>
            </li>
            <li>
              <Link to="/que-es-lindy-hop" className="hover:text-white">
                Què és Lindy Hop?
              </Link>
            </li>
            <li>
              <Link to="/les-classes" className="hover:text-white">
                Les Classes
              </Link>
            </li>
            <li>
              <Link to="/inscriu-te" className="hover:text-white">
                Inscriu-te
              </Link>
            </li>
            <li>
              <Link to="/ball-social" className="hover:text-white">
                Ball social
              </Link>
            </li>
            <li>
              <Link to="/contacta-ns" className="hover:text-white">
                Contacta’ns
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
