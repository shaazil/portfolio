import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import SiteNav from "../components/layout/SiteNav";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <Hero />
      <main>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
