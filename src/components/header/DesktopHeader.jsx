import { useTheme } from "../../contexts/ThemeContext";
import DynamicCard from "../cards/DynamicCard";
import CardSet from "../cards/CardSet";
import Carousel from "../Carousel";
import CardSetDesktop from "../cards/CardSetDesktop";

const DesktopHeader = ({ title, image, images, color }) => {
  const { primaryBright, primaryMedium, primaryLight } = useTheme();

  const textClasses = `A <strong>El Taller</strong> t’oferim classes de <em>Lindy Hop</em> i altres balls del jazz per a tots els nivells!
  Vine a gaudir del swing i a compartir la passió pel ball en un ambient
  proper i comunitari.`;

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
          <Carousel images={images} />
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
              title="classes"
              color={primaryBright}
              image={images[0]}
              text={textClasses}
            />
            <DynamicCard
              title="soc principiant"
              color={primaryMedium}
              image={images[1]}
              text={textClasses}
            />
            <DynamicCard
              title="trobades"
              color={primaryLight}
              image={images[2]}
              text={textClasses}
            />
          </CardSetDesktop>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
