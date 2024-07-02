import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Pricing from "./components/Pricing/Pricing";
import Process from "./components/Process/Process";
import Projects from "./components/Projects/Projects";
import SideBtns from "./components/SideBtns/SideBtns";

function App() {
  return (
    <>
      <SideBtns />
      <Header />
      <Hero />
      {/* <About /> */}
      <About />
      <Projects />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
