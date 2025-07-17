import { Link } from "react-router-dom";

function DesktopNavbar({ isTop, menuItems, logo }) {
  return (
    <nav
      className={`hidden md:block shadow-lg uppercase z-[999] w-full transition-all duration-300 ease-in-out ${
        isTop ? "fixed h-20 py-2" : "fixed top-0 opacity-80 h-20 py-2"
      }`}
      style={{ backgroundColor: "white" }}
    >
      <div className="container mx-auto h-full flex px-4">
        <div className={`flex-1 md:w-auto  xl:ml-20 `}>
          <Link to="/" className="h-full">
            <img src={logo} alt="El Taller" className="h-full w-auto" />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <ul className="flex md:text-md xl:text-lg justify-center gap-3 lg:gap-8 text-white font-inter font-bold">
            {menuItems.map((path, idx) => (
              <li
                key={idx}
                className="basis-0 rounded-sm flex-1 hover:shadow-custom active:text-shadow-none active:shadow-none relative"
                style={{ color: "black" }}
              >
                <Link
                  to={`/${path}`}
                  className="w-full h-full flex items-center text-center px-2 whitespace-nowrap p-4"
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
