import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./Card.css";

const DynamicCardCell = ({ title, color = "pink", image, textPrincipiant }) => {
  const [showText, setShowText] = useState(false);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  // Scroll logic: Show text when card enters upper third
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const upperThird = windowHeight / 3;

      setShowText(rect.top >= 0 && rect.top < upperThird);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically adjust container height to match the taller content
  useLayoutEffect(() => {
    const imageHeight = imgRef.current?.offsetHeight || 0;
    const textHeight = textRef.current?.offsetHeight || 0;
    const maxHeight = Math.max(imageHeight, textHeight);

    if (containerRef.current) {
      containerRef.current.style.height = `${maxHeight}px`;
    }
  }, [showText, image, textPrincipiant]);

  return (
    <div
      ref={cardRef}
      className="relative w-full rounded shadow-custom cursor-pointer p-4 overflow-hidden"
      style={{ backgroundColor: color }}
    >
      {/* Title */}
      <h3 className="text-center uppercase text-2xl text-white text-shadow-lg font-header mb-4 z-10 relative">
        {title}
      </h3>

      {/* Content container */}
      <div
        ref={containerRef}
        className="relative w-full transition-all duration-500 ease-in-out"
      >
        {/* Image container */}
        <div
          ref={imgRef}
          className={`absolute inset-0 w-full h-auto transition-clip duration-500 ${
            showText ? "clip-hide" : "clip-show"
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        {/* Text container */}
        <div
          ref={textRef}
          className={`inset-0 w-full h-auto px-4 flex items-center justify-center text-white transition-clip duration-500 ${
            showText ? "clip-show" : "clip-hide"
          }`}
        >
          <div className="text-justify font-info">{textPrincipiant}</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCardCell;
