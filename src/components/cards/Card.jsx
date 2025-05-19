import React from "react";

const Card = ({ title, color = "pink", image }) => {
  return (
    <div
      className={`w-[90%] md:w-[30%] bg-${color} z-10 bg-gradient-to-t from-white/40 to-transparent shadow-custom hover:shadow-none`}
    >
      <h3 className="mt-2 mb-3 text-center uppercase text-xl text-white text-shadow-lg font-sigmar">
        {title}
      </h3>
      <div className="flex flex-row md:flox-col">
        <div className="w-[40%] ml-3 mr-3 mb-3 rounded-md overflow-hidden">
          <img src={image}></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
