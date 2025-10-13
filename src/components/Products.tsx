import { Settings, Package, Network, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import machineryImage from "@/assets/machinery.jpg";
import fishnetsImage from "@/assets/fishnets.jpg";
import sparePartsImage from "@/assets/spare-parts.jpg";
import customImage from "@/assets/custom-solutions.jpg";

const Products = () => {
  const products = [
    {
      id: "machinery",
      icon: Settings,
      title: "Fishnet Machinery",
      description: "Advanced machinery for fishnet production with precision engineering and reliability",
      image: machineryImage,
      features: [
        "High-speed production equipment",
        "Automated control systems",
        "Energy-efficient operation",
        "Durable construction",
      ],
    },
    {
      id: "spare-parts",
      icon: Package,
      title: "Spare Parts",
      description: "Comprehensive range of genuine spare parts for machinery and fishnet equipment",
      image: sparePartsImage,
      features: [
        "Original equipment parts",
        "Global shipping available",
        "Technical support included",
        "Bulk order discounts",
      ],
    },
    {
      id: "fishnets",
      icon: Network,
      title: "Ready Fishnets",
      description: "Premium quality fishnets for fishing, aquaculture, and industrial applications",
      image: fishnetsImage,
      features: [
        "Nylon & HDPE variants",
        "Multi & mono-filament options",
        "Custom sizes available",
        "International quality standards",
      ],
    },
    {
      id: "custom",
      icon: Wrench,
      title: "Custom Solutions",
      description: "Tailored machine design and manufacturing to meet your specific requirements",
      image: customImage,
      features: [
        "Consultation & design",
        "Prototype development",
        "Installation support",
        "After-sales service",
      ],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-primary">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your fishnet machinery and equipment needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              id={product.id}
              className="overflow-hidden hover:shadow-lg transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <product.icon className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-secondary mr-2">✓</span>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-secondary hover:bg-secondary-light"
                >
                  Request Information
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
