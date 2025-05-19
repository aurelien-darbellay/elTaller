import { Link } from "react-router-dom";

function DesktopNavbar({ isTop, menuItems, logo }) {
  return (
    <nav
      className={`hidden md:block bg-deepblue uppercase z-[999] w-full transition-all duration-300 ease-in-out ${
        isTop ? "fixed py-3 h-35" : "fixed top-0 opacity-80 h-20"
      }`}
    >
      <div className=" mx-2 lg:mx-10 h-full flex">
        <div
          className={`flex-1 md:w-auto ${!isTop ? "h-20" : "h-full"} xl:ml-20 `}
        >
          <Link to="/" className="h-full">
            <img src={logo} alt="El Taller" className="h-full w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <ul className="flex md:text-lg xl:text-xl justify-center gap-3 lg:gap-6 text-white font-inter font-bold">
            {menuItems.map((path, idx) => (
              <li
                key={idx}
                className="basis-0 rounded-sm flex-1 text-shadow-md  hover:shadow-custom active:text-shadow-none active:shadow-none relative"
              >
                <Link
                  to={`/${path}`}
                  className="w-full h-full flex items-center text-center px-2"
                >
                  {path.replace("-", " ")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavbar;
