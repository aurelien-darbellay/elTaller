import React, { useRef } from "react";

const DynamicCard = ({ title, color = "pink", image, text }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    cardRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      className={`
        group relative w-[90%] md:w-[30%] rounded shadow-custom hover:shadow-none cursor-pointer h-[10vh]
      `}
    >
      {/* Default centered title overlay */}
      <div
        className="
          absolute inset-0 flex items-center justify-center
          text-white text-4xl uppercase text-shadow-lg font-header
          transition-opacity duration-500 opacity-90
          group-hover:opacity-0 rounded
        "
        style={{ backgroundColor: color }}
      >
        {title}
      </div>

      {/* Hover content overlay (same design as before) */}
      <div
        className="
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          relative z-10 -top-30
          flex flex-col rounded
        "
        style={{ backgroundColor: color }}
      >
        {/* Title at the top */}
        <h3
          className="
            mt-2 mb-3 text-center uppercase text-2xl
            text-white text-shadow-lg font-header
          "
        >
          {title}
        </h3>

        {/* Image + Text container */}
        <div className="flex flex-row md:flex-col items-center m-3">
          {/* Image */}
          <div className="w-[40%] h-[50%] ml-3 mr-3 mb-3 rounded-md overflow-hidden md:w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text */}
          {text && (
            <div className="ml-3 mr-3 mb-3 md:w-full">
              <p
                className="font-info"
                dangerouslySetInnerHTML={{ __html: text }}
              ></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DynamicCard;
