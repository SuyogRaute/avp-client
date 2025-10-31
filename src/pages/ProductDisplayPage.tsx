import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X, ShoppingCart, Phone, Mail, Package, Settings, Network, Wrench, CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductDisplayPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Comprehensive product catalog organized by category
  const productsByCategory = {
    machinery: [
      {
        id: 1,
        title: "High-Speed Net Braiding Machine NBM-500",
        category: "Fishnet Machinery",
        shortDescription: "High-speed production up to 200 RPM with precision control",
        description: "Our flagship net braiding machine combines precision engineering with high-speed production capabilities. Perfect for manufacturers looking to scale their fishnet production.",
        detailedDescription: "The NBM-500 represents the pinnacle of fishnet manufacturing technology. Engineered for continuous operation, this machine features advanced servo motor controls, automated tension adjustment, and real-time quality monitoring. ISO 9001 certified with complete installation & training support worldwide.",
        specifications: [
          { label: "Production Speed", value: "Up to 200 RPM" },
          { label: "Material Compatibility", value: "Nylon, HDPE, PE, PP" },
          { label: "Mesh Size Range", value: "10mm - 300mm" },
          { label: "Power Consumption", value: "15 kW" },
          { label: "Dimensions", value: "3.5m x 2.2m x 2.8m" },
          { label: "Weight", value: "2,800 kg" },
          { label: "Warranty", value: "2 years comprehensive" },
          { label: "Energy Efficiency", value: "30% improved vs standard models" },
        ],
        features: [
          "ISO 9001 certified manufacturing process",
          "30% energy efficiency improvement over competitors",
          "Automated tension control system with real-time monitoring",
          "Touch-screen HMI interface in multiple languages",
          "2-year comprehensive warranty with lifetime technical support",
          "Export-ready packaging with full documentation",
          "Installation & training support worldwide",
        ],
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Contact for Export Quote",
      },
      {
        id: 2,
        title: "Net Extrusion Line NEL-300",
        category: "Fishnet Machinery",
        shortDescription: "HDPE/Nylon processing with 50-500kg/hr capacity",
        description: "Advanced extrusion technology for high-quality fishnet production. Ideal for processing various materials with consistent output quality.",
        detailedDescription: "The NEL-300 extrusion line offers unmatched versatility in fishnet manufacturing. With precise temperature control and automated material feeding, it ensures uniform net quality across all production runs. Energy-efficient designs reduce operational costs by 30%.",
        specifications: [
          { label: "Processing Capacity", value: "50-500 kg/hr" },
          { label: "Material Types", value: "HDPE, Nylon PA6, PP" },
          { label: "Screw Diameter", value: "90mm" },
          { label: "Power Rating", value: "45 kW" },
          { label: "Temperature Range", value: "150-280°C" },
          { label: "Line Length", value: "12 meters" },
          { label: "Control System", value: "PLC-based automation" },
        ],
        features: [
          "PLC-based automation system with remote monitoring",
          "Multi-zone temperature control for precise processing",
          "Automatic thickness adjustment system",
          "Energy-efficient heating system (30% cost reduction)",
          "Quick material changeover capability",
          "Complete export documentation & customs support",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Contact for Export Quote",
      },
      {
        id: 3,
        title: "Twisting Machine TM-200",
        category: "Fishnet Machinery",
        shortDescription: "Multi-strand rope & twine production equipment",
        description: "Professional-grade twisting machine for producing high-strength fishing ropes and twines with consistent quality and minimal waste.",
        detailedDescription: "Our TM-200 twisting machine is designed for heavy-duty rope and twine production. It handles multiple strands simultaneously with precision tension control, making it ideal for commercial fishing rope manufacturing.",
        specifications: [
          { label: "Strand Capacity", value: "2-16 strands" },
          { label: "Twisting Speed", value: "150 RPM" },
          { label: "Rope Diameter", value: "2-25mm" },
          { label: "Motor Power", value: "7.5 kW" },
          { label: "Machine Length", value: "4.5 meters" },
          { label: "Production Rate", value: "80-120 kg/hr" },
        ],
        features: [
          "Variable speed control for different rope types",
          "Automatic bobbin changing system",
          "Real-time tension monitoring",
          "Low maintenance design with easy access",
          "Compact footprint for space efficiency",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Contact for Export Quote",
      },
      {
        id: 4,
        title: "Knotting Equipment KE-150",
        category: "Fishnet Machinery",
        shortDescription: "Automated knotting with precision control",
        description: "State-of-the-art automated knotting system for efficient fishnet production with consistent knot quality throughout the manufacturing process.",
        detailedDescription: "The KE-150 brings automation to the knotting process with intelligent sensors and precise actuation. Reduces labor costs while improving knot consistency and production speed.",
        specifications: [
          { label: "Knotting Speed", value: "120 knots/min" },
          { label: "Knot Types", value: "Single, Double, Sheet Bend" },
          { label: "Thread Diameter", value: "0.5-5mm" },
          { label: "Power Consumption", value: "3 kW" },
          { label: "Dimensions", value: "1.8m x 1.2m x 1.5m" },
          { label: "Weight", value: "450 kg" },
        ],
        features: [
          "Programmable knot patterns with memory storage",
          "Automatic thread tensioning system",
          "Digital knot counter with batch tracking",
          "Easy maintenance access panels",
          "Compact design suitable for small facilities",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Contact for Export Quote",
      },
    ],
    spareParts: [
      {
        id: 5,
        title: "Machine Component Kit - Premium Series",
        category: "Spare Parts",
        shortDescription: "Gears, bearings, shafts, and pulleys for all machinery",
        description: "Comprehensive spare parts kit including high-quality gears, bearings, shafts, and pulleys. Compatible with all major fishnet machinery brands.",
        detailedDescription: "Our premium machine component kits ensure optimal performance and longevity of your fishnet manufacturing equipment. Each component is manufactured to exacting standards and comes with quality certification. Perfect for maintenance schedules and emergency replacements.",
        specifications: [
          { label: "Kit Contents", value: "20+ essential components" },
          { label: "Material Grade", value: "Industrial grade steel/alloy" },
          { label: "Compatibility", value: "Universal fit for major brands" },
          { label: "Quality Standard", value: "ISO 9001 certified" },
          { label: "Warranty", value: "12 months" },
          { label: "Packaging", value: "Export-ready, moisture-proof" },
        ],
        features: [
          "Bulk ordering discounts (20-40% off for international buyers)",
          "Express shipping to all major ports worldwide",
          "Complete customs documentation and HS code classification",
          "Technical datasheets in English, Arabic, French, Spanish",
          "Minimum order: $500 USD (negotiable for large orders)",
          "Payment terms: LC, TT, or Western Union accepted",
        ],
        images: [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Starting from $850 USD",
      },
      {
        id: 6,
        title: "Electronic Control Panel Package",
        category: "Spare Parts",
        shortDescription: "Control panels, sensors, and PLCs for automation",
        description: "Complete electronic control system including control panels, precision sensors, and programmable logic controllers (PLCs) for automated fishnet machinery.",
        detailedDescription: "Upgrade or replace your machinery's electronic systems with our comprehensive control panel package. Features modern PLC technology, intuitive interfaces, and reliable sensors for optimal machine performance.",
        specifications: [
          { label: "Panel Type", value: "Industrial touch-screen HMI" },
          { label: "PLC Brand", value: "Siemens/Mitsubishi compatible" },
          { label: "Sensor Count", value: "12 precision sensors" },
          { label: "Voltage Range", value: "220-440V AC" },
          { label: "Protection Rating", value: "IP65 dust/water resistant" },
          { label: "Programming", value: "Pre-configured, customizable" },
        ],
        features: [
          "Multi-language interface support",
          "Remote diagnostics capability",
          "Data logging and production tracking",
          "Emergency stop safety systems",
          "Installation guide and technical support included",
          "Compatible with existing machinery systems",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Starting from $1,200 USD",
      },
      {
        id: 7,
        title: "Wear Parts Maintenance Kit",
        category: "Spare Parts",
        shortDescription: "Needles, guides, cutters, and dies for regular maintenance",
        description: "Essential wear parts kit for routine maintenance and replacement. Includes needles, guides, cutters, and dies for uninterrupted production.",
        detailedDescription: "Keep your production running smoothly with our comprehensive wear parts kit. These high-quality components are designed to withstand intensive use and provide consistent performance throughout their lifecycle.",
        specifications: [
          { label: "Kit Contents", value: "50+ wear components" },
          { label: "Material", value: "Hardened steel, carbide tips" },
          { label: "Expected Lifespan", value: "6-12 months (depending on use)" },
          { label: "Compatibility", value: "All AVP machinery models" },
          { label: "Packaging", value: "Individual protective cases" },
        ],
        features: [
          "Premium hardened steel construction",
          "Extended lifespan compared to standard parts",
          "Easy replacement with minimal downtime",
          "Detailed replacement instructions included",
          "Bulk discount available for annual supply contracts",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Starting from $650 USD",
      },
    ],
    fishnets: [
      {
        id: 8,
        title: "Nylon Monofilament Fishing Nets",
        category: "Fishnets",
        shortDescription: "Deep sea fishing and trawling grade nets",
        description: "Premium quality nylon monofilament nets designed for deep sea fishing and commercial trawling operations. UV stabilized for extended lifespan.",
        detailedDescription: "Our nylon monofilament nets are manufactured to international quality standards, perfect for deep sea fishing and trawling applications. UV stabilized material ensures durability in harsh marine environments. Compliant with FAO, EU, and IMO fishing gear regulations.",
        specifications: [
          { label: "Material", value: "Nylon PA6, UV stabilized" },
          { label: "Mesh Sizes", value: "10mm to 300mm available" },
          { label: "Filament Diameter", value: "0.15mm to 3.0mm" },
          { label: "Breaking Strength", value: "High tensile (certified)" },
          { label: "UV Protection", value: "5+ years marine environment" },
          { label: "MOQ for Export", value: "1 ton (~50-100 nets)" },
        ],
        features: [
          "Compliant with FAO, EU, and IMO regulations",
          "UV stabilized for 5+ years lifespan",
          "High breaking strength and durability",
          "Custom sizes and mesh configurations available",
          "Compressed bale packaging, container optimized",
          "Technical specifications in multiple languages",
        ],
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "From $8.50/kg (bulk orders)",
      },
      {
        id: 9,
        title: "HDPE Multifilament Aquaculture Nets",
        category: "Fishnets",
        shortDescription: "Fish farming and aquaculture applications",
        description: "High-density polyethylene multifilament nets specifically designed for aquaculture and fish farming operations. Resistant to algae and bio-fouling.",
        detailedDescription: "Our HDPE multifilament nets are the preferred choice for aquaculture farms worldwide. The material resists bio-fouling and maintains structural integrity in both freshwater and saltwater environments.",
        specifications: [
          { label: "Material", value: "HDPE, UV stabilized" },
          { label: "Construction", value: "Multifilament braided" },
          { label: "Mesh Range", value: "15mm to 200mm" },
          { label: "Thickness", value: "0.5mm to 2.5mm" },
          { label: "Bio-fouling", value: "Resistant coating available" },
          { label: "Packaging", value: "Moisture-proof bales" },
        ],
        features: [
          "Anti-fouling treatment for extended use",
          "Excellent water flow characteristics",
          "Resistant to saltwater corrosion",
          "Flexible and easy to install",
          "Available in various colors for fish species",
          "Export certified with phytosanitary documents",
        ],
        images: [
          "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "From $6.80/kg (bulk orders)",
      },
      {
        id: 10,
        title: "PE Braided Gill Nets",
        category: "Fishnets",
        shortDescription: "Commercial fishing and gill netting",
        description: "Durable PE braided gill nets for commercial fishing operations. Available in multiple mesh sizes for different fish species targeting.",
        detailedDescription: "Manufactured with high-quality PE materials, these braided gill nets offer excellent catch rates while maintaining durability in demanding commercial fishing conditions.",
        specifications: [
          { label: "Material", value: "PE (Polyethylene)" },
          { label: "Construction", value: "Braided knotless" },
          { label: "Mesh Sizes", value: "20mm to 150mm" },
          { label: "Net Depth", value: "Customizable 2m to 10m" },
          { label: "Net Length", value: "30m to 100m standard" },
          { label: "Float/Sinker Line", value: "Included in package" },
        ],
        features: [
          "Knotless design reduces fish damage",
          "High visibility options available",
          "Complete with floats and sinker lines",
          "Easy to repair and maintain",
          "Suitable for various fish species",
          "Meets international fishing standards",
        ],
        images: [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "From $7.20/kg (bulk orders)",
      },
      {
        id: 11,
        title: "Knotless Sport Fishing Nets",
        category: "Fishnets",
        shortDescription: "Sport fishing and aquaculture applications",
        description: "Premium knotless nets ideal for sport fishing and selective aquaculture. Gentle on fish with superior strength and durability.",
        detailedDescription: "Our knotless net design provides superior fish protection while maintaining excellent strength characteristics. Perfect for catch-and-release sport fishing and delicate aquaculture species.",
        specifications: [
          { label: "Material", value: "Nylon/PE blend" },
          { label: "Construction", value: "Knotless weave" },
          { label: "Mesh Range", value: "8mm to 100mm" },
          { label: "Softness", value: "Fish-friendly coating" },
          { label: "Colors", value: "Multiple options available" },
        ],
        features: [
          "Fish-friendly knotless design",
          "Reduces scale damage and stress",
          "High strength-to-weight ratio",
          "UV and water resistant",
          "Available in custom colors",
          "Ideal for catch-and-release fishing",
        ],
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "From $9.50/kg (bulk orders)",
      },
    ],
    custom: [
      {
        id: 12,
        title: "Custom Fishnet Machinery Solution",
        category: "Custom Solutions",
        shortDescription: "Tailored machinery for unique production requirements",
        description: "Bespoke fishnet manufacturing equipment designed and built to your exact specifications. Our engineering team creates custom solutions for specialized production needs.",
        detailedDescription: "From concept to commissioning, we design and manufacture custom fishnet machinery that meets your specific production requirements. Our process includes detailed consultation, CAD modeling, precision manufacturing, testing, and worldwide installation support.",
        specifications: [
          { label: "Design Process", value: "CAD modeling & virtual prototyping" },
          { label: "Manufacturing", value: "Precision CNC machining" },
          { label: "Quality Control", value: "Factory acceptance testing" },
          { label: "Installation", value: "On-site with training" },
          { label: "Timeline", value: "8-16 weeks (project dependent)" },
          { label: "Support", value: "Lifetime technical assistance" },
        ],
        features: [
          "Requirements analysis and consultation",
          "CAD modeling with virtual prototypes",
          "Precision manufacturing at Kudal MIDC facility",
          "Factory acceptance testing before shipment",
          "Export packaging and worldwide shipping",
          "On-site installation and operator training",
          "Lifetime technical support and spare parts",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee67e77c8a7b?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Custom Quote Required",
      },
      {
        id: 13,
        title: "Production Line Integration Package",
        category: "Custom Solutions",
        shortDescription: "Complete turnkey fishnet production facility",
        description: "Comprehensive production line solution from raw material input to finished product packaging. Includes all machinery, automation, and quality control systems.",
        detailedDescription: "Transform your facility with a complete turnkey fishnet production line. We handle everything from layout design to final commissioning, ensuring optimal workflow and maximum productivity.",
        specifications: [
          { label: "Capacity Range", value: "100-1000 kg/hr" },
          { label: "Automation Level", value: "Semi to fully automated" },
          { label: "Quality Systems", value: "Integrated QC checkpoints" },
          { label: "Footprint", value: "500-2000 sq meters" },
          { label: "ROI Period", value: "18-36 months typical" },
          { label: "Project Timeline", value: "4-8 months" },
        ],
        features: [
          "Complete facility layout and design",
          "All machinery and auxiliary equipment",
          "Automation and control systems",
          "Quality control and testing stations",
          "Material handling and storage solutions",
          "Comprehensive training program",
          "Post-installation support and optimization",
        ],
        images: [
          "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        price: "Custom Quote Required",
      },
    ],
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    setShowVideo(false);
    document.body.style.overflow = 'hidden';
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setShowVideo(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
    }
  };

  const watchDemo = () => {
    setShowVideo(true);
  };

  const scrollToContact = () => {
    closeProductDetail();
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <Navigation />
      <div className="h-10 bg-gray-50 mb-20 " >
        {/* Hero Header */}
        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,.05) 50px, rgba(255,255,255,.05) 51px)",
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 my-16">
                Complete Product Catalog
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-6">
                Explore our comprehensive range of fishnet machinery, genuine spare parts,
                premium fishnets, and custom solutions for global markets
              </p>

              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span className="hidden sm:inline">Exported to 50+ Countries</span>
                  <span className="sm:hidden">50+ Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle className="h-5 w-5 text-teal-400" />
                  <span>2 Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Main Content with Tabs */}
        <div className="container mx-auto px-4 py-12 md:py-16">
          <Tabs defaultValue="machinery" className="w-full">
            {/* Category Tabs */}
            <div className="mb-8 md:mb-12">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 h-auto bg-white p-2 rounded-xl shadow-md">
                <TabsTrigger
                  value="machinery"
                  className="flex flex-col md:flex-row items-center gap-2 py-3 md:py-4 px-3 md:px-6 text-sm md:text-base font-semibold transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Settings className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="hidden sm:inline">Machinery</span>
                  <span className="sm:hidden">Machines</span>
                </TabsTrigger>
                <TabsTrigger
                  value="spareParts"
                  className="flex flex-col md:flex-row items-center gap-2 py-3 md:py-4 px-3 md:px-6 text-sm md:text-base font-semibold transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Package className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="hidden sm:inline">Spare Parts</span>
                  <span className="sm:hidden">Parts</span>
                </TabsTrigger>
                <TabsTrigger
                  value="fishnets"
                  className="flex flex-col md:flex-row items-center gap-2 py-3 md:py-4 px-3 md:px-6 text-sm md:text-base font-semibold transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Network className="h-5 w-5 md:h-6 md:w-6" />
                  <span>Fishnets</span>
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="flex flex-col md:flex-row items-center gap-2 py-3 md:py-4 px-3 md:px-6 text-sm md:text-base font-semibold transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg"
                >
                  <Wrench className="h-5 w-5 md:h-6 md:w-6" />
                  <span>Custom</span>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Machinery Products */}
            <TabsContent value="machinery">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Fishnet Manufacturing Machinery
                </h2>
                <p className="text-gray-600">
                  Advanced equipment for high-volume production with precision and reliability
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {productsByCategory.machinery.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animation: `scaleIn 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {product.category}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium line-clamp-2">{product.shortDescription}</p>
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => openProductDetail(product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Package className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Spare Parts */}
            <TabsContent value="spareParts">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Genuine Spare Parts & Components
                </h2>
                <p className="text-gray-600">
                  Original equipment parts with bulk discounts for international buyers
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {productsByCategory.spareParts.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animation: `scaleIn 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {product.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
                        {product.price}
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => openProductDetail(product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Package className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Fishnets */}
            <TabsContent value="fishnets">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Premium Quality Ready Fishnets
                </h2>
                <p className="text-gray-600">
                  Export-grade fishnets with international quality standards
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {productsByCategory.fishnets.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animation: `scaleIn 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {product.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-xs md:text-sm font-bold shadow-lg">
                        {product.price}
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => openProductDetail(product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Package className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Custom Solutions */}
            <TabsContent value="custom">
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                  Custom-Built Solutions
                </h2>
                <p className="text-gray-600">
                  Tailored machinery and complete production lines for your unique needs
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {productsByCategory.custom.map((product, index) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    style={{ animation: `scaleIn 0.5s ease-out ${index * 0.1}s both` }}
                  >
                    <div className="relative h-56 md:h-64 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {product.description}
                      </p>

                      <div className="flex gap-2 md:gap-3">
                        <button
                          onClick={() => openProductDetail(product)}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 md:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                        >
                          <Package className="h-4 w-4" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 md:p-4 overflow-y-auto backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative my-4 shadow-2xl">
              <button
                onClick={closeProductDetail}
                className="sticky top-4 float-right mr-4 md:mr-6 bg-red-500 hover:bg-red-600 text-white p-2 md:p-2.5 rounded-full transition-all duration-300 z-10 shadow-lg"
              >
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="p-4 md:p-8">
                {/* Image Carousel or Video */}
                {!showVideo ? (
                  <div className="relative mb-6 md:mb-8">
                    <div className="relative h-64 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={selectedProduct.images[currentImageIndex]}
                        alt={`${selectedProduct.title} - View ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />

                      {selectedProduct.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
                          >
                            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
                          >
                            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-blue-900" />
                          </button>

                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {selectedProduct.images.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-teal-500' : 'w-2 bg-white/70'
                                  }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {selectedProduct.images.length > 1 && (
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 mt-3 md:mt-4">
                        {selectedProduct.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`h-16 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === currentImageIndex
                                ? 'border-teal-500 scale-105 shadow-lg'
                                : 'border-gray-200 opacity-60 hover:opacity-100 hover:scale-105'
                              }`}
                          >
                            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="relative mb-6 md:mb-8">
                    <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={selectedProduct.videoUrl}
                        title="Product Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <button
                      onClick={() => setShowVideo(false)}
                      className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300"
                    >
                      ← Back to Images
                    </button>
                  </div>
                )}

                {/* Product Info */}
                <div className="mb-6">
                  <span className="inline-block bg-teal-100 text-teal-700 text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {selectedProduct.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                    {selectedProduct.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 leading-relaxed">
                    {selectedProduct.detailedDescription}
                  </p>
                  <p className="text-xl md:text-2xl font-bold text-teal-600">{selectedProduct.price}</p>
                </div>

                {/* Watch Demo Button */}
                {!showVideo && (
                  <button
                    onClick={watchDemo}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-6 md:mb-8 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Play className="h-5 w-5 md:h-6 md:w-6" />
                    <span className="text-sm md:text-base">Watch Product Demo</span>
                  </button>
                )}

                {/* Features and Specs Grid */}
                <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 md:p-6 shadow-md border border-blue-100">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-teal-500" />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-teal-500 mt-1 font-bold text-lg">✓</span>
                          <span className="text-sm md:text-base text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 md:p-6 shadow-md border border-blue-100">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5 md:h-6 md:w-6 text-teal-500" />
                      Technical Specifications
                    </h3>
                    <div className="space-y-3">
                      {selectedProduct.specifications.map((spec, idx) => (
                        <div key={idx} className="border-b border-gray-200 pb-2">
                          <p className="text-xs md:text-sm text-gray-500">{spec.label}</p>
                          <p className="text-sm md:text-base text-gray-900 font-semibold">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                  <button
                    onClick={scrollToContact}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Request Quote</span>
                  </button>
                  <a
                    href="tel:+919404442293"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Phone className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Call Now</span>
                  </a>
                  <button
                    onClick={scrollToContact}
                    className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Mail className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Email Us</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}
        {/* cta */}
          <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">
                Ready to Order?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get competitive pricing, bulk discounts, and custom solutions tailored to your needs. Our team is ready to help you find the perfect products for your requirements.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Competitive wholesale pricing</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Custom manufacturing available</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>International export support</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Fast delivery & quality assurance</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white group"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = 'tel:+919926202282'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right Content - Quick Contact */}
            <div className="bg-gradient-to-br from-secondary/10 to-primary/5 p-8 lg:p-12">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                Quick Contact
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="tel:+919926202282"
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Call or WhatsApp
                    </p>
                    <p className="text-primary font-medium">+91-9926202282</p>
                    <p className="text-primary font-medium">+91-8830101938</p>
                  </div>
                </a>

                <a 
                  href="mailto:apengineer83@gmail.com"
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg hover:shadow-md transition-all group cursor-pointer"
                >
                  <div className="bg-secondary/10 p-3 rounded-lg group-hover:bg-secondary/20 transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Email Us
                    </p>
                    <p className="text-primary font-medium break-all">
                      apengineer83@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">
                      Response Time
                    </p>
                    <p className="text-primary font-medium">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-center font-medium text-accent">
                  🌍 Export inquiries welcome - Worldwide shipping available
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
        <Footer />

        <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
      </div>

    </>
  );

};
export default ProductDisplayPage;