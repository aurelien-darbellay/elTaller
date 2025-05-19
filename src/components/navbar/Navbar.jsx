import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import logo from "../../assets/logo_white.png";

function Navbar() {
  const [isTopMobile, setIsTopMobile] = useState(true);
  const [isTopDesktop, setIsTopDesktop] = useState(true);

  const menuItems = [
    "classes",
    "inscripcions",
    "agenda",
    "contacte",
    "racó-cultura",
    "faq",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTopMobile(window.scrollY < 20);
      setIsTopDesktop(window.scrollY < 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MobileNavbar isTop={isTopMobile} menuItems={menuItems} logo={logo} />
      <DesktopNavbar isTop={isTopDesktop} menuItems={menuItems} logo={logo} />
    </>
  );
}

export default Navbar;
