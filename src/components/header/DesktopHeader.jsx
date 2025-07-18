import { useTheme } from "../../contexts/ThemeContext";
import DynamicCard from "../cards/DynamicCard";
import Carousel from "../Carousel";
import CardSetDesktop from "../cards/CardSetDesktop";

const DesktopHeader = ({ title, image, images, color, textPrincipiant }) => {
  const { primaryMedium } = useTheme();
  const imagesForCarrousel = images.slice(1);
  return (
    <header className="hidden md:block relative w-full h-150 shadow-md overflow-visible">
      {/* CLIPPED BACKGROUND LAYER */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          background: !image && !images ? color || "gray" : undefined,
        }}
      >
        {images ? (
          <Carousel images={imagesForCarrousel} />
        ) : image ? (
          <img
            src={image}
            alt="Background"
            className="w-full h-full object-cover"
          />
        ) : null}
        {/* Overlay blanket on the background only */}
        <div className="absolute inset-0 bg-black opacity-25" />
      </div>

      {/* UNCLIPPED CONTENT */}
      <div className="container mx-auto h-full flex px-4">
        <div className="pt-70 z-10 flex flex-col justify-center items-start w-full h-full">
          <CardSetDesktop>
            <DynamicCard
              title="soc principiant"
              color={primaryMedium}
              image={images[0]}
              textPrincipiant={textPrincipiant}
            />
          </CardSetDesktop>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
