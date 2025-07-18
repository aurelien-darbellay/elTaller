import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Missatge enviat correctament!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          setStatus("Hi ha hagut un error. Torna-ho a intentar.");
        }
      );
  };

  return (
    <section className="mt-10 py-16 px-6 max-w-3xl mx-auto bg-white text-gray-800 font-info">
      <h2 className="text-3xl font-bold text-center mb-8">
        Contacta amb nosaltres
      </h2>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium" htmlFor="name">
            Nom
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="telephone">
            Telèfon
          </label>
          <input
            type="tel"
            name="user_phone"
            id="telephone"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Correu electrònic
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="subject">
            Assumpte
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium" htmlFor="message">
            Missatge
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Envia
        </button>

        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </section>
  );
};

export default ContactForm;
