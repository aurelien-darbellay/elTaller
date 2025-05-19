import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-11 right-5 md:right-10 z-[9999] bg-green-600 rounded-md">
      <a
        href="https://wa.me/34633832789"
        target="_blank"
        rel="noopener noreferrer"
        className="text-3xl md:text-7xl text-green-400 hover:text-green-300"
      >
        <FaWhatsapp className="text-white" />
      </a>
    </div>
  );
};

export default WhatsappIcon;
