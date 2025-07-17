import React, { useState, useEffect, useRef } from "react";
import "./Card.css";

const DynamicCardCell = ({ title, color = "pink", image, text }) => {
  const [showText, setShowText] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const upperThird = windowHeight / 3;

      // Check if card is entering upper third of screen
      const isInUpperThird = rect.top >= 0 && rect.top < upperThird;

      setShowText(isInUpperThird);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full rounded shadow-custom cursor-pointer p-4 overflow-hidden"
      style={{ backgroundColor: color, height: "auto", minHeight: "300px" }}
    >
      {/* Title */}
      <h3 className="text-center uppercase text-2xl text-white text-shadow-lg font-header mb-4 z-10 relative">
        {title}
      </h3>

      {/* Content container */}
      <div className="relative w-full h-full mt-2">
        {/* Image */}
        <div
          className={`inset-0 transition-clip duration-500 ease-in-out ${
            showText ? "clip-hide" : "clip-show"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Text */}
        <div
          className={`absolute inset-0 transition-clip duration-500 ease-in-out flex items-center text-justify px-4 ${
            showText ? "clip-show" : "clip-hide"
          }`}
        >
          <p
            className="font-info text-center"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default DynamicCardCell;
