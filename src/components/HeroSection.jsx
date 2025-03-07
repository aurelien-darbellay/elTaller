import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white text-center px-4"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">
          Benvinguts a El Taller Swing
        </h1>
        <p className="text-xl mb-6">Viu la passió del Lindy Hop a Barcelona</p>
        <Link
          to="/classes"
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Descobreix les nostres classes
        </Link>
      </div>
    </section>
  );
}
