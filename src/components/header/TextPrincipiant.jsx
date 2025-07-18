import { Link } from "react-router-dom";

export const TextPrincipiant = () => {
  return (
    <div className="p-2 md:p-3 text-base md:text-lg font-info leading-relaxed">
      <p>
        Primer, mira la nostra pàgina sobre què és el{" "}
        <Link
          to="/racó-cultura"
          className="text-white font-bold hover:text-blue-800"
        >
          Lindy Hop
        </Link>{" "}
        així sabràs una mica sobre la història. Després pots mirar el{" "}
        <Link
          to="/horaris-i-tarifes"
          className="text-white font-bold hover:text-blue-800"
        >
          nostre horari
        </Link>{" "}
        per veure quina classe et pot encaixar millor. En tot cas{" "}
        <strong> no cal que t'inscriguis amb parella</strong>. Si tens dubtes,
        posa't en contacte amb{" "}
        <a
          href="https://wa.me/34613040716"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-bold cursor:pointer hover:text-blue-800"
        >
          nosaltres
        </a>
        .
      </p>
    </div>
  );
};
