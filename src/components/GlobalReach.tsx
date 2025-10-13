import { Globe2, DollarSign, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import globalImage from "@/assets/global-export.jpg";

const GlobalReach = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Cost Advantage",
      description: "Competitive pricing with uncompromised quality",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient logistics and on-time shipment",
    },
    {
      icon: Shield,
      title: "Export Expertise",
      description: "Complete documentation and compliance support",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Serving 50+ countries worldwide",
    },
  ];

  const regions = [
    "Middle East",
    "Africa",
    "Southeast Asia",
    "Europe",
    "South America",
    "Australia",
  ];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={globalImage}
          alt="Global Export"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Trusted Exporter of Fishnet Machinery
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Delivering excellence across continents with professional export solutions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <advantage.icon className="h-12 w-12 mx-auto mb-4 text-secondary-light" />
                <h3 className="font-heading font-semibold mb-2 text-lg">
                  {advantage.title}
                </h3>
                <p className="text-sm text-white/80">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold mb-8">
            Our Global Presence
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {regions.map((region, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-medium">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
