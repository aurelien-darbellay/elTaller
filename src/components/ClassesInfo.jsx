import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

const ClassesInfos = () => {
  const { primaryMedium } = useTheme();
  return (
    <div className="p-4 md:p-6 text-base md:text-lg font-info leading-relaxed">
      <p>
        Els nostres cursos compten amb <strong>10 classes d'una hora</strong>,
        impartides per profes apassionats i compromesos amb la nostra comunitat.
      </p>
      <p>
        <strong>TOTES LES NOSTRES CLASSES TENEN LLOC AL BARRI DE GRÀCIA</strong>
        . Pots consultar els horaris{" "}
        <Link
          to="#horaris"
          style={{ color: primaryMedium, fontWeight: "bold" }}
        >
          aquí
        </Link>{" "}
        i el calendari{" "}
        <Link
          to="#calendari"
          style={{ color: primaryMedium, fontWeight: "bold" }}
        >
          {" "}
          aquí
        </Link>
        .
      </p>
    </div>
  );
};

export default ClassesInfos;
