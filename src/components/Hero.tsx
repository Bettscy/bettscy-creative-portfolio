import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(8, 27, 66, 0.85), rgba(8, 27, 66, 0.85)), url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Bettscy Doyal</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Building Smart Web Solutions with AI & Code
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
            Senior Computer Science student specializing in AI development, automation testing, and full-stack solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all"
            >
              Let's Connect
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/Bettscy_Doyal_Resume.pdf" download="Bettscy_Doyal_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
