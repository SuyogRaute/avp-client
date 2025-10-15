import { Package, Wrench, Settings, Cpu, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import apePartsImage from "@/assets/ape-parts.jpg";
import bearingImage from "@/assets/bearing-component.jpg";
import bladesImage from "@/assets/cutting-blades.jpg";
import combImage from "@/assets/fishnet-comb.jpg";
import materialImage from "@/assets/fishnet-material.jpg";

const SpareParts = () => {
  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  const sparePartsCategories = [
    {
      id: 1,
      title: "Machine Components",
      description: "Essential mechanical parts for all fishnet machinery",
      image: apePartsImage,
      icon: Settings,
      items: [
        "Precision gears and gear assemblies",
        "High-grade bearings and bushings",
        "Stainless steel shafts",
        "Industrial pulleys and belts",
        "Coupling systems",
        "Motor mounts and brackets"
      ],
      specifications: "ISO 9001 certified • Premium grade materials • Extended warranty available"
    },
    {
      id: 2,
      title: "Bearing & Rotary Parts",
      description: "High-performance bearings for smooth operation",
      image: bearingImage,
      icon: Cpu,
      items: [
        "Ball bearings (all sizes)",
        "Roller bearings",
        "Thrust bearings",
        "Pillow block bearings",
        "Linear bearings",
        "Bearing housings"
      ],
      specifications: "SKF/NSK/FAG compatible • Heat-resistant • Low maintenance"
    },
    {
      id: 3,
      title: "Cutting & Trimming Blades",
      description: "Precision cutting tools for net manufacturing",
      image: bladesImage,
      icon: Package,
      items: [
        "Tungsten carbide blades",
        "Hot knife cutting blades",
        "Rotary cutting discs",
        "Trimming knives",
        "Serrated edge cutters",
        "Replacement blade sets"
      ],
      specifications: "Extended lifespan • Razor-sharp precision • Easy installation"
    },
    {
      id: 4,
      title: "Net Weaving Accessories",
      description: "Specialized components for net production",
      image: combImage,
      icon: Wrench,
      items: [
        "Net weaving combs",
        "Needle sets (various gauges)",
        "Guide rails and sliders",
        "Tension springs",
        "Thread guides",
        "Mesh forming tools"
      ],
      specifications: "Corrosion-resistant • High-precision manufacturing • Universal compatibility"
    },
    {
      id: 5,
      title: "Raw Materials & Filaments",
      description: "Quality materials for fishnet production",
      image: materialImage,
      icon: Package,
      items: [
        "HDPE filament spools",
        "Nylon PA6 raw material",
        "PE braided threads",
        "UV-stabilized polymers",
        "Color masterbatch",
        "Anti-bacterial additives"
      ],
      specifications: "Food-grade certified • UV protected • Multiple diameter options"
    }
  ];

  const exportBenefits = [
    "Worldwide shipping to 50+ countries",
    "Bulk discounts: 20-40% off on large orders",
    "Express delivery to major ports",
    "Complete customs documentation",
    "Technical support in multiple languages",
    "Payment terms: LC, TT, Western Union"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Genuine Spare Parts & Components
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Comprehensive inventory of original equipment parts for all major fishnet machinery brands. 
                Ensuring optimal performance, longevity, and minimal downtime.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={scrollToContact}
                >
                  Request Catalog
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={scrollToContact}
                >
                  Get Bulk Quote
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Export Benefits */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-primary">
              International Export Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {exportBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 bg-background p-4 rounded-lg shadow-sm animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Spare Parts Categories */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
                Complete Parts Catalog
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse our extensive range of spare parts organized by category
              </p>
            </div>

            <div className="space-y-12">
              {sparePartsCategories.map((category, index) => (
                <Card 
                  key={category.id}
                  className="overflow-hidden animate-fade-in hover:shadow-xl transition-smooth"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className={`relative h-64 lg:h-full ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-secondary text-white text-sm px-3 py-1">
                          In Stock
                        </Badge>
                      </div>
                    </div>
                    
                    <div className={`p-6 md:p-8 ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <category.icon className="h-8 w-8 text-secondary" />
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary">
                          {category.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {category.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-secondary">Available Items:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {category.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <span className="text-secondary mr-2">✓</span>
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted p-4 rounded-lg mb-6">
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-secondary">Specifications:</span> {category.specifications}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Button 
                          onClick={scrollToContact}
                          className="bg-accent hover:bg-accent/90"
                        >
                          Request Quote
                        </Button>
                        <Button 
                          onClick={scrollToContact}
                          variant="outline"
                        >
                          Check Availability
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Orders CTA */}
        <section className="py-16 bg-gradient-accent text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
              We can source or manufacture custom spare parts to your exact specifications
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={scrollToContact}
            >
              Contact Our Parts Specialist
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SpareParts;
