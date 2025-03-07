export function ContactForm() {
  return (
    <section className="container mx-auto p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Contacta’ns</h2>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          placeholder="Missatge"
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400">
          Enviar
        </button>
      </form>
    </section>
  );
}
