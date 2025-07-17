import { FaCircle, FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="z-[9999]">
      <a
        href="https://wa.me/34613040716"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full hover:shadow-custom"
      >
        <FaCircle className="absolute text-green-600 w-full h-full" />
        <FaWhatsapp className="relative text-white w-6 h-6 md:w-8 md:h-8" />
      </a>
    </div>
  );
};

export default WhatsappIcon;
