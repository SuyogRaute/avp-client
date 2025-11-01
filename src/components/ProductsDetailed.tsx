import { Settings, Package, Network, Wrench, CheckCircle, Globe, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductsDetailed = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const machineryProducts = [
    { name: "Net Braiding Machines", specs: "High-speed production up to 200 RPM" },
    { name: "Net Extrusion Lines", specs: "HDPE/Nylon processing, 50-500kg/hr capacity" },
    { name: "Twisting Machines", specs: "Multi-strand rope & twine production" },
    { name: "Knotting Equipment", specs: "Automated knotting with precision control" },
  ];

  const sparePartsCategories = [
    { category: "Machine Components", items: "Gears, bearings, shafts, pulleys" },
    { category: "Electronic Parts", items: "Control panels, sensors, PLCs" },
    { category: "Wear Parts", items: "Needles, guides, cutters, dies" },
    { category: "Fishnet Accessories", items: "Floats, sinkers, ropes, connectors" },
  ];

  const fishnetTypes = [
    { type: "Nylon Monofilament Nets", use: "Deep sea fishing, trawling" },
    { type: "HDPE Multifilament Nets", use: "Aquaculture, fish farming" },
    { type: "PE Braided Nets", use: "Commercial fishing, gill nets" },
    { type: "Knotless Nets", use: "Sport fishing, aquaculture" },
  ];

  const exportBenefits = [
    { icon: Globe, text: "Worldwide shipping to 50+ countries" },
    { icon: Shield, text: "Full export documentation & customs support" },
    { icon: TrendingUp, text: "Competitive pricing for bulk orders" },
    { icon: CheckCircle, text: "Quality certification & warranty" },
  ];

  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Comprehensive Product Solutions for Global Markets
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Export-ready machinery, parts, and fishnets with international quality standards
          </p>
        </div>

        {/* Export Benefits Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16">
          {exportBenefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all"
            >
              <CardContent className="p-3 sm:p-4 md:p-6">
                <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
                <p className="text-xs sm:text-sm font-medium leading-tight">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Product Sections */}
        <Tabs defaultValue="machinery" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 mb-6 sm:mb-8 md:mb-12 h-auto bg-muted p-1 sm:p-2">
            <TabsTrigger value="machinery" className="py-2 sm:py-3 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Machinery</span>
            </TabsTrigger>
            <TabsTrigger value="spare-parts" className="py-2 sm:py-3 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Package className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Parts</span>
            </TabsTrigger>
            <TabsTrigger value="fishnets" className="py-2 sm:py-3 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Network className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Fishnets</span>
            </TabsTrigger>
            <TabsTrigger value="custom" className="py-2 sm:py-3 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
              <Wrench className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Custom</span>
            </TabsTrigger>
          </TabsList>

          {/* Machinery Tab */}
          <TabsContent value="machinery">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  Advanced Fishnet Manufacturing Machinery
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80">
                  Our state-of-the-art fishnet machinery is engineered for high-volume production with precision and reliability. 
                  Perfect for international buyers seeking to establish or upgrade their manufacturing capabilities.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-base sm:text-lg md:text-xl text-blue-600">Product Range:</h4>
                  {machineryProducts.map((product, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-muted rounded-lg">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-primary">{product.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">{product.specs}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3">Why Choose Our Machinery?</h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>ISO 9001 certified manufacturing process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Energy-efficient designs reducing operational costs by 30%</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Complete installation & training support worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>2-year comprehensive warranty with lifetime technical support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Export-ready packaging with full documentation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto text-sm sm:text-base">
                    Request Catalog
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                    Get Quote
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80"
                  alt="Fishnet Machinery"
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </TabsContent>

          {/* Spare Parts Tab */}
          <TabsContent value="spare-parts">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-1">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Spare Parts"
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="order-2 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  Genuine Spare Parts & Components
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80">
                  Maintain optimal performance with our comprehensive range of genuine spare parts. 
                  We supply original equipment parts for all major fishnet machinery brands, ensuring compatibility and longevity.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-base sm:text-lg md:text-xl text-blue-600">Available Categories:</h4>
                  {sparePartsCategories.map((category, idx) => (
                    <div key={idx} className="p-3 sm:p-4 bg-muted rounded-lg">
                      <p className="font-semibold text-sm sm:text-base text-primary mb-1">{category.category}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground break-words">{category.items}</p>
                    </div>
                  ))}
                </div>

                <Card className="bg-yellow-600 text-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3">International Export Benefits:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Bulk ordering discounts for international buyers (20-40% off)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Express shipping to all major ports worldwide</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Complete customs documentation and HS code classification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Technical datasheets in multiple languages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 flex-shrink-0">✓</span>
                        <span>Minimum order: $500 USD (negotiable for large orders)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto text-sm sm:text-base">
                    Request Catalog
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                    Bulk Inquiry
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Fishnets Tab */}
          <TabsContent value="fishnets">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  Premium Quality Ready Fishnets
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80">
                  Export-grade fishnets manufactured with international quality standards. 
                  Ideal for fishing fleets, aquaculture farms, and marine industry applications across the globe.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-semibold text-base sm:text-lg md:text-xl text-blue-600">Product Types:</h4>
                  {fishnetTypes.map((net, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 bg-muted rounded-lg">
                      <Network className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 sm:mt-1 flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base text-primary">{net.type}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground break-words">Application: {net.use}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3">Specifications & Standards:</h4>
                    <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                      <div>
                        <p className="font-semibold mb-1">Material Options:</p>
                        <p>Nylon PA6, HDPE, PE, PP - UV stabilized for extended life</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Mesh Sizes:</p>
                        <p>10mm to 300mm (custom sizes available)</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Thickness Range:</p>
                        <p>0.15mm to 3.0mm diameter filaments</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">International Standards:</p>
                        <p>Compliant with FAO, EU, and IMO fishing gear regulations</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">MOQ for Export:</p>
                        <p>1 ton (approximately 50-100 nets depending on size)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto text-sm sm:text-base">
                    Request Samples
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                    Get Pricing
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80"
                  alt="Fishnets"
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </TabsContent>

          {/* Custom Solutions Tab */}
          <TabsContent value="custom">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              <div className="order-1">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80"
                  alt="Custom Solutions"
                  className="w-full h-48 sm:h-64 md:h-96 lg:h-full object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="order-2 space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                  Custom-Built Fishnet Machinery Solutions
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-foreground/80">
                  Need specialized machinery tailored to your unique production requirements? 
                  Our engineering team designs and manufactures custom fishnet machines for international clients seeking competitive advantages.
                </p>

                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl text-primary">Our Custom Build Process:</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-3 sm:space-y-4">
                      {[
                        { title: "Requirements Analysis", desc: "Detailed consultation to understand your production needs" },
                        { title: "Engineering & Design", desc: "CAD modeling and technical drawings for approval" },
                        { title: "Manufacturing", desc: "Precision manufacturing with quality checkpoints" },
                        { title: "Testing & Delivery", desc: "Factory testing and worldwide shipping" },
                        { title: "Installation & Support", desc: "On-site installation and operator training" }
                      ].map((step, idx) => (
                        <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                          <div className="bg-blue-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 font-bold text-xs sm:text-sm">
                            {idx + 1}
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-sm sm:text-base text-primary">{step.title}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-900 text-white">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="font-semibold text-base sm:text-lg mb-3">Recent Custom Projects:</h4>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      <li>• High-speed monofilament net machine for Middle East (300 nets/day)</li>
                      <li>• Automated HDPE production line for African aquaculture</li>
                      <li>• Specialized knotless net system for European supplier</li>
                      <li>• Multi-layer net extrusion for Southeast Asian manufacturer</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button onClick={scrollToContact} size="lg" className="bg-orange-500 hover:bg-orange-600 w-full sm:w-auto text-sm sm:text-base">
                    Start Project
                  </Button>
                  <Button onClick={scrollToContact} size="lg" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                    Schedule Call
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <Card className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Export with AVP Engineers?
            </h3>
            <p className="text-sm sm:text-base md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of satisfied international clients. Get competitive pricing, reliable quality, and expert export support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-white text-blue-900 hover:bg-white/90 w-full sm:w-auto text-sm sm:text-base">
                Request Quote
              </Button>
              <Button onClick={scrollToContact} size="lg" variant="outline" className="border-white text-black
               hover:bg-white/10 w-full sm:w-auto text-sm sm:text-base">
                Download Catalog
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProductsDetailed;