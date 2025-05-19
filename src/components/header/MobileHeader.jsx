import Card from "../cards/Card";
import Carousel from "../Carousel";

const MobileHeader = ({ title, image, images, color }) => {
  return (
    <>
      <header
        className={`md:hidden relative w-full h-70  text-2xl shadow-sm`}
        style={{
          background: !image && !images ? color || "gray" : undefined,
        }}
      >
        {images ? (
          <div className="absolute top-30 left-0 bottom-0 right-0 z-0">
            <Carousel images={images} />
          </div>
        ) : image ? (
          <img
            src={image}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : null}
        <div className="relative top-15 flex flex-col items-center justify-center w-full h-full z-10">
          <div className="text-center font-sigmar text-white text-shadow-lg z-10 uppercase">
            {title}
          </div>
        </div>
      </header>
    </>
  );
};

export default MobileHeader;
