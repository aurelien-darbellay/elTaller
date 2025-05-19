import Carousel from "../Carousel";
const DesktopHeader = ({ title, image, images, color }) => {
  return (
    <header
      className={`hidden md:block relative w-full h-150 font-sigmar text-7xl shadow-md overflow-hidden`}
      style={{
        background: !image && !images ? color || "gray" : undefined,
        ...{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 20% 100%, 0% 90%)",
        },
      }}
    >
      {images ? (
        <div className="absolute top-30 inset-0 z-0">
          <Carousel images={images} />
        </div>
      ) : image ? (
        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : null}
      <div className="relative top-40 flex flex-col items-center justify-start mt-20 w-full h-full z-10">
        <div className="text-center text-white text-shadow-lg z-10">
          {title}
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
// Compare this snippet from src/components/header/MobileHeader.jsx:
