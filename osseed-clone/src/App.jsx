import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./pages/Services";
import OurProcess from "./pages/OurProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <WhyChooseUs />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/our-process" element={<OurProcess />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;