import { useTheme } from "../../contexts/ThemeContext";
import DynamicCard from "../cards/DynamicCard";
import CardSet from "../cards/CardSet";
import Carousel from "../Carousel";

const DesktopHeader = ({ title, image, images, color }) => {
  const { primaryBright, primaryMedium, primaryLight } = useTheme();

  const textClasses = `A <strong>El Taller</strong> t’oferim classes de <em>Lindy Hop</em> i altres balls del jazz per a tots els nivells!
  Vine a gaudir del swing i a compartir la passió pel ball en un ambient
  proper i comunitari.`;

  return (
    <header className="hidden md:block relative w-full h-200 shadow-md overflow-visible">
      {/* CLIPPED BACKGROUND LAYER */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 20% 100%, 0% 90%)",
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
      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <div className="mt-110">
          {/* <div className="text-center text-white text-shadow-lg font-header">
            {title}
          </div> */}
          <CardSet xOffSetDesk="20" xOffSetCell="20">
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
          </CardSet>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
