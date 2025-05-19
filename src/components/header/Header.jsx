import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = ({ title, image, images, color }) => {
  return (
    <>
      <DesktopHeader
        title={title}
        image={image}
        images={images}
        color={color}
      />
      <MobileHeader title={title} image={image} images={images} color={color} />
    </>
  );
};

export default Header;
