const PricesInfo = () => {
  return (
    <div className="p-4 md:p-6 text-base md:text-lg font-info leading-relaxed space-y-4">
      <p>
        Els cursos de <strong>Solo Jazz</strong> i de <strong>Lindy Hop</strong>{" "}
        tenen el mateix preu. El preu depèn de quan facis la inscripció.
      </p>

      <div>
        <p className="font-semibold mb-2">
          La escaleta de preus és la següent:
        </p>
        <ul className="list-none space-y-1 pl-2">
          <li>
            📌 <strong>fins al 31 juliol</strong> — 120 euros
          </li>
          <li>
            📌 <strong>durant l’agost</strong> — 125 euros
          </li>
          <li>
            📌 <strong>a partir de setembre</strong> — 130 euros
          </li>
        </ul>
      </div>

      <p>
        El curs de <strong>Lindy Hop Team</strong>, per tenir un número de
        places limitades (8 parelles) i per requerir una preparació especial per
        part de les professores, té un cost de
        <strong> 150 euros</strong> per trimestre.
      </p>

      <p className="font-semibold">
        👉 Si fas més d'una classe amb nosaltres, et fem un descompte del{" "}
        <strong>10%</strong>! 🎉
      </p>
    </div>
  );
};

export default PricesInfo;
