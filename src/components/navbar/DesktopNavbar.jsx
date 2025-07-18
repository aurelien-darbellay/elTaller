import { Link } from "react-router-dom";
import capitalizeWords from "../../pureJs/capitalizeFirstLetter";

function DesktopNavbar({ isTop, menuItems, logo }) {
  return (
    <nav
      className={`hidden md:block shadow-lg z-[999] w-full transition-all duration-300 ease-in-out ${
        isTop ? "fixed h-20 py-2" : "fixed top-0 opacity-80 h-20 py-2"
      }`}
      style={{ backgroundColor: "white" }}
    >
      <div className="container mx-auto h-full flex">
        <div className={`flex-1 md:w-auto  xl:ml-20 `}>
          <Link to="/" className="h-full">
            <img src={logo} alt="El Taller" className="h-full w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <ul className="flex md:text-md xl:text-lg justify-center gap-3 lg:gap-4 text-white font-info">
            {menuItems.map((path, idx) => (
              <li
                key={idx}
                className="basis-0 rounded-sm flex-1 hover:shadow-custom active:text-shadow-none active:shadow-none relative"
                style={{ color: "black" }}
              >
                {path === "inscripcions" ? (
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfzhuqyNITIBPof_PKsquB3rXCVcLyYj0WGYk1YAOTzq0U8rQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center text-center px-2 whitespace-nowrap p-4"
                  >
                    Inscripcions
                  </a>
                ) : (
                  <Link
                    to={`/${path}`}
                    className="w-full h-full flex items-center text-center px-2 whitespace-nowrap p-4"
                  >
                    {capitalizeWords(path.replaceAll("-", " "))}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
