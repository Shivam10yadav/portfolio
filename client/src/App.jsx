import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
// import { Experience } from "@/sections/Experience";
// import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./layout/Footer";
import { Services } from "./sections/Service";
import { BlurFadeIn, SlideIn, PopUp, ScrollAnimation } from "./components/AnimationComponents";
import Certificates from "./sections/Certificates";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero - No animation for instant first impression */}
        <Hero />
        
        {/* About - Blur effect */}
        <ScrollAnimation variant="blur" delay={0.1}>
          <About />
        </ScrollAnimation>
        
        {/* Projects - Coming from right of screen */}
        <ScrollAnimation variant="slideRight" delay={0.1}>
          <Projects />
        </ScrollAnimation>
        
        {/* Services - Scale animation for card pop out effect */}
        <ScrollAnimation variant="scale" delay={0.1}>
          <Services />
        </ScrollAnimation>
        
         <ScrollAnimation variant="scale" delay={0.1}>
 <Certificates/>
         </ScrollAnimation>
      
        
        {/* Contact - Coming from left of screen */}
        <ScrollAnimation variant="slideLeft" delay={0.1}>
          <Contact />
        </ScrollAnimation>
      </main>
      
      
      
        <Footer />
    
    </div>
  );
}

export default App;