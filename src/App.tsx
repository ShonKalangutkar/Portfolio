import Navbar from "./sections/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx"
import Projects from "./sections/Projects.tsx"
import Clients from "./sections/Clients.tsx"
import Contact from "./sections/Contact.tsx"
import Footer from "./sections/Footer.tsx"
import Experience from "./sections/Experience.tsx"

const App = () => {
  return (
    <main className="max-w-full mx-auto min-h-screen bg-black flex flex-col">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Clients/> */}
      <Experience/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;