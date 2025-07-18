import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { Home } from "./components/Home";
import { ClassesSection } from "./components/ClassesSection";
import ContactForm from "./components/ContactForm";
import { Footer } from "./components/Footer";
import WhatsappIcon from "./components/WhatsappIcon";
import { ThemeProvider } from "./contexts/ThemeProvider";
import SignupButton from "./components/SignUpButton";
import ButtonGroup from "./components/ButtonGroup";
import Cultura from "./components/Cultura";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ThemeProvider>
          <Navbar />
          <ButtonGroup>
            <SignupButton />
            <WhatsappIcon />
          </ButtonGroup>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/horaris-i-tarifes" element={<ClassesSection />} />
              <Route path="/contacte" element={<ContactForm />} />
              <Route path="racó-cultura" element={<Cultura />} />
            </Routes>
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}
