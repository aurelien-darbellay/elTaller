import { useTheme } from "../../contexts/ThemeContext";
import DynamicCardCell from "../cards/DynamicCardCell";
import CardSet from "../cards/CardSet";
import Carousel from "../Carousel";

const MobileHeader = ({ title, image, images, color, textPrincipiant }) => {
  const { primaryMedium } = useTheme();
  const imagesForCarrousel = images.slice(1);
  return (
    <div className="md:hidden">
      <header
        className={`relative w-full h-70  text-2xl shadow-sm`}
        style={{
          background: !image && !images ? color || "gray" : undefined,
        }}
      >
        {images ? (
          <div className="absolute top-20 left-0 bottom-0 right-0 z-0">
            <Carousel images={imagesForCarrousel} />
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : null}
      </header>
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <div className="mt-2">
          {/* <div className="text-center text-white text-shadow-lg font-header">
            {title}
          </div> */}
          <CardSet xOffSetDesk="20" xOffSetCell="20">
            <DynamicCardCell
              title="soc principiant"
              color={primaryMedium}
              image={images[0]}
              textPrincipiant={textPrincipiant}
            />
          </CardSet>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
