const Header = ({ title, image, color, shape = "rounded" }) => {
  return (
    <header
      className={`w-full h-150 flex items-center justify-center text-white text-2xl font-bold p-4 shadow-md transition-all duration-300}`}
      style={{
        background: image
          ? `url(${image}) center/cover no-repeat`
          : color || "gray",
        ...(shape === "trapezoid"
          ? {
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 20% 100%, 0% 90%)",
            }
          : {}),
      }}
    >
      {title}
    </header>
  );
};

export default Header;
