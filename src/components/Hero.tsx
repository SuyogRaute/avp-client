import { ArrowRight, Globe, Wrench, Package } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-bg-enhanced.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AVP Engineers Manufacturing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
              Engineering Excellence in{" "}
              <span className="text-secondary-light">Fishnet Machinery</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Leading manufacturer and global exporter of fishnet machinery, spare parts, and custom-built solutions
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-accent hover:bg-accent/90 text-white font-semibold"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#about")}
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-secondary-light" />
                <div className="text-3xl font-heading font-bold">50+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <Wrench className="h-8 w-8 mx-auto mb-2 text-secondary-light" />
                <div className="text-3xl font-heading font-bold">25+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center">
                <Package className="h-8 w-8 mx-auto mb-2 text-secondary-light" />
                <div className="text-3xl font-heading font-bold">1000+</div>
                <div className="text-sm text-white/80">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
