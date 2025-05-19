import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/Home";
import { ClassesSection } from "./components/ClassesSection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import { ThemeProvider } from "./contexts/ThemeProvider";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          <WhatsappIcon />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<ClassesSection />} />
              <Route path="/contact" element={<ContactForm />} />
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}
