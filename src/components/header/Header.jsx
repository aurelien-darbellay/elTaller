import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import { TextPrincipiant } from "./TextPrincipiant";

const Header = ({ title, image, images, color }) => {
  const textPrincipiant = <TextPrincipiant />;
  return (
    <>
      <DesktopHeader
        title={title}
        image={image}
        images={images}
        color={color}
        textPrincipiant={textPrincipiant}
      />
      <MobileHeader
        title={title}
        image={image}
        images={images}
        color={color}
        textPrincipiant={textPrincipiant}
      />
    </>
  );
};

export default Header;
