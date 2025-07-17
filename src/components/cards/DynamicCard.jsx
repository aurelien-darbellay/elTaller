import React, { useRef, useState } from "react";

const DynamicCard = ({ title, color = "pink", image, text }) => {
  const cardRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <div
      ref={cardRef}
      className={`
        relative ${
          !open ? "w-[20%]" : "w-[35%]"
        } rounded shadow-custom hover:shadow-none cursor-pointer h-[8vh]
      `}
    >
      {/* Default centered title overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center
          text-white text-2xl uppercase text-shadow-lg font-header
          transition-opacity duration-200
          ${open ? "opacity-0 z-0" : "opacity-100 z-1"} rounded`}
        style={{ backgroundColor: color }}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
      </div>

      {/* Hover content overlay (same design as before) */}
      <div
        className={`${!open ? "opacity-0 z-0" : "opacity-100 z-20 -top-40"}
          transition-opacity duration-200
          relative
          flex flex-col rounded
        `}
        style={{ backgroundColor: color }}
        onClick={() => setOpen((prev) => !prev)}
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
        <div className="flex flex-col items-center m-3">
          {/* Image */}
          <div className="w-[80%] ml-3 mr-3 mb-3 rounded-md overflow-hidden">
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
