import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Roadmap from "./components/Roadmap";
// import Pricing from "./components/Pricing";
// import Services from "./components/Services";
import { Element } from "react-scroll";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Element name="hero">
          <Hero />
        </Element>

        <Element name="services">
          <Benefits />
        </Element>

        <Element name="about">
          <Collaboration />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>

        <Footer />
        {/* <Services /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
