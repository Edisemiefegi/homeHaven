import AboutSection from "../components/AboutSection";
import NavBar from "../components/base/NavBar";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ConsultationForm from "../components/ConsultationForm";
import DesignProcess from "../components/DesignProcess";
import FeaturedProjects from "../components/FeaturedProjects";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InspirationGallery from "../components/InspirationalGallery";
import ServicesSection from "../components/ServiceSection";
import Story from "../components/Story";
import StyleFinder from "../components/StyleFinder";
import TestimonialsSection from "../components/TestimonialsSection";


function Index() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <HeroSection />
      <Story />
      <FeaturedProjects />
      <BeforeAfterSlider/>
      <AboutSection/>
      <ServicesSection/>
      <DesignProcess/>
      <InspirationGallery/>
      <StyleFinder/>
      <TestimonialsSection/>
      <FinalCTA/>
      <ConsultationForm/>
      <Footer/>
    </div>
  );
}

export default Index;
