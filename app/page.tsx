import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ArtGallery from "@/components/ArtGallery";
import Activities from "@/components/Activities";
import VideoGallery from "@/components/VideoGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <ArtGallery />
        <Activities />
        <VideoGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
