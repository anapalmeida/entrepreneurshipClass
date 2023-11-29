import "./App.css";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import Section1 from "./pages/Section1";
import Section2 from "./pages/Section2";
import Section3 from "./pages/Section3";
import Section4 from "./pages/Section4";

function App() {
  return (
    <div className="scroll-smooth ">
      <Hero />
      <Section1 />
      <Section4 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
