import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

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
    // { name: "Machinery", href: "#product" },
    // { name: "Spare Parts", href: "#product" },
    // { name: "Fishnets", href: "#product" },
    // { name: "Custom Solutions", href: "#custom" },
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
  className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-lg shadow-lg border-b border-gray-200/50 transition-all duration-300"
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-20">
      {/* ✅ Logo → Redirects to home */}
      <Link
        to="/"
        className="text-3xl font-heading font-bold text-blue-950"
      >
        AVP <span className="text-secondary">Engineers</span>
      </Link>

      {/* ✅ Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link
          to="/"
          className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium"
        >
          Home
        </Link>

        <Link
          to="/Product"
          className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium "
        >
          Product catalog
        </Link>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.href);
            }}
            className="text-base font-medium text-foreground hover:text-primary transition-smooth"
          >
            {link.name}
          </a>
        ))}

        <Button
          onClick={() => scrollToSection("#contact")}
          variant="default"
          className="bg-accent hover:bg-accent/90"
        >
          Get Quote
        </Button>
      </div>

      {/* ✅ Mobile Menu Button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>
    </div>

    {/* ✅ Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="lg:hidden py-4 border-t border-border animate-fade-in bg-white/95 backdrop-blur-md">
        <div className="flex flex-col space-y-3">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium"
          >
            Home
          </Link>

          <Link
            to="/Product"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium"
          >
            Product
          </Link>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-foreground hover:text-primary transition-smooth py-3 px-2 rounded-md hover:bg-muted font-medium"
            >
              {link.name}
            </a>
          ))}

          <Button
            onClick={() => scrollToSection("#contact")}
            variant="default"
            size="lg"
            className="bg-accent hover:bg-accent/90 w-full mt-2"
          >
            Get Quote
          </Button>
        </div>
      </div>
    )}
  </div>
</nav>

  );
};

export default Navigation;
