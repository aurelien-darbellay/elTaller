import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed top-11 md:top-9 right-5 md:right-10 z-[9999]">
      <a
        href="https://wa.me/34633832789"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl md:text-5xl text-green-400 hover:text-green-300"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsappIcon;
