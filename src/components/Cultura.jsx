import { Link } from "react-router-dom";

const Cultura = () => {
  return (
    <div className="mt-20 bg-white text-gray-800 font-info">
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Què és el Lindy Hop?</h1>
        <p className="mb-6 text-justify">
          El Lindy Hop és un ball de parella amb el seu origen als anys 20 i 30
          a Harlem, Nova York. És una dansa afroamericana que va reunir molts
          balls de jazz més petits que el van precedir per convertir-se en el
          que s’ha anomenat la dansa popular d’Amèrica.
        </p>
        <Link
          to="/contacte"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          T'informem
        </Link>
      </section>

      <section className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h4 className="text-xl font-semibold mb-2">Harlem</h4>
          <p className="text-justify">
            En la dècada del 1930, els veïnats per sobre del Central Park de
            Nova York, conegut com a Harlem, es van convertir en un lloc de moda
            per al nou so, el swing. Harlem era un veïnat principalment negre,
            encara que el seu costat aquest també tenia fortes comunitats
            italianes i hispanes. Encara que va afectar en gran manera la vida
            dels seus residents, la Depressió no va impedir que Harlem swingara.
            En molts sentits, l’alegre música swing i el ball de la zona van ser
            un alleujament benvingut dels temps difícils.
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Savoy Ballroom</h4>
          <p className="text-justify">
            La primera generació de Lindy Hoppers, com{" "}
            <a
              href="https://www.youtube.com/watch?v=7Sdk3mqVSRA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Shorty George i Big Bea
            </a>
            , va ballar amb el ritme dels tambors de Chick Webb, el líder de la
            banda resident del Savoy Ballroom. A mitjans dels anys 30, la
            següent generació va començar a destacar amb una nova energia, com
            Frankie Manning, Norma Miller i altres.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <img
          src="/pictures/cultura/Al-Minns.png"
          alt="Al Minns"
          className="rounded shadow-md"
        />
        <div>
          <h4 className="text-xl font-semibold mb-2">La música canvia</h4>
          <p className="text-justify">
            Després de la Segona Guerra Mundial, el Lindy Hop ja no va ser el
            ball de moda. Tot i això, es continuava ballant en comunitats
            negres, i van néixer altres balls com el{" "}
            <a
              href="https://www.youtube.com/watch?v=VOQeXfDwsiM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Chicago Steppin’
            </a>{" "}
            i el{" "}
            <a
              href="https://www.youtube.com/watch?v=l4AIRnhM3JM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              DC Hand Dancing
            </a>
            .
          </p>
        </div>
        <img
          src="/pictures/cultura/Marie-Bryant.png"
          alt="Marie Bryant"
          className="rounded shadow-md"
        />
      </section>

      <section className="bg-gray-100 py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="/pictures/cultura/Tiny-y-Dorothy.png"
          alt="Tiny y Dorothy"
          className="rounded shadow-md"
        />
        <div>
          <h4 className="text-xl font-semibold mb-2">Noves generacions</h4>
          <p className="text-justify">
            Als anys 80 va tornar a despertar l'interès pel Lindy Hop.
            Aficionats van estudiar vídeos antics i van contactar amb llegendes
            com Frankie Manning, Norma Miller i Al Minns, que es van convertir
            en mentors per a les noves generacions.
          </p>
          <Link
            to="/contacte"
            className="mt-5 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Contacta amb nosaltres
          </Link>
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Vull saber més</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Frankie Manning Foundation
            </h4>
            <p className="text-justify">
              Si vols llegir més sobre el Lindy Hop, pots visitar el web de la
              fundació Frankie Manning.
            </p>
            <a
              href="https://www.frankiemanningfoundation.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pictures/cultura/Frankie-bien.png"
                alt="Frankie Manning"
                className="mt-4 rounded shadow-md"
              />
            </a>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Bobby White – Swungover
            </h4>
            <p className="text-justify">
              Bobby White escriu sobre formes d’art negre com el Jazz. El seu
              blog és una gran font per descobrir més sobre els inicis del Lindy
              Hop.
            </p>
            <a
              href="https://swungover.wordpress.com/2013/10/02/swing-history-101-the-birth-of-lindy-hop-early-1900s-1929/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/pictures/cultura/Parella.png"
                alt="Parella Lindy Hop"
                className="mt-4 rounded shadow-md"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cultura;
