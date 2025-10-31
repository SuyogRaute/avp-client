import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className={`text-2xl sm:text-3xl font-heading font-bold transition-all duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            AVP{" "}
            <span
              className={`transition-all duration-300 ${
                isScrolled ? "text-secondary" : "text-secondary-light"
              }`}
            >
              Engineers
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <a
              href="/"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-secondary-light"
              }`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-primary" : "bg-secondary-light"
                }`}
              />
            </a>

            <a
              href="/Product"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white hover:text-secondary-light"
              }`}
            >
              Product Catalog
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? "bg-primary" : "bg-secondary-light"
                }`}
              />
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-secondary-light"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-primary" : "bg-secondary-light"
                  }`}
                />
              </a>
            ))}

            <button
              onClick={() => scrollToSection("#contact")}
              className={`ml-4 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                isScrolled
                  ? "bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl hover:scale-105"
                  : "bg-secondary-light hover:bg-secondary text-primary shadow-lg hover:shadow-2xl hover:scale-105"
              }`}
            >
              Get Quote
              <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-foreground hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in bg-white/95 backdrop-blur-xl rounded-b-2xl shadow-2xl">
            <div className="flex flex-col space-y-2">
              <a
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium flex items-center justify-between group"
              >
                Home
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="/Product"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium flex items-center justify-between group"
              >
                Product Catalog
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 py-3 px-4 rounded-lg font-medium flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}

              <button
                onClick={() => scrollToSection("#contact")}
                className="bg-accent hover:bg-accent/90 text-white w-full mt-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-3 px-4 rounded-lg flex items-center justify-center"
              >
                Get Quote
                <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;