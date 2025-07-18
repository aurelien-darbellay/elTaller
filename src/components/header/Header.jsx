import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { TextPrincipiant } from "./TextPrincipiant";

const Header = ({ title, color }) => {
  const images = [
    "pictures/indoor/SocPrincipiant.jpg",
    "pictures/indoor/CanTravi1.jpg",
    "pictures/indoor/EstelaIñaki_Olivo.jpg",
  ];
  const textPrincipiant = <TextPrincipiant />;
  return (
    <>
      <DesktopHeader
        title={title}
        images={images}
        color={color}
        textPrincipiant={textPrincipiant}
      />
      <MobileHeader
        title={title}
        images={images}
        color={color}
        textPrincipiant={textPrincipiant}
      />
    </>
  );
};

export default Header;
