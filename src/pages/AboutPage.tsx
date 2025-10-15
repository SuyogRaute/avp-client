import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/About";
import WhatsAppButton from "@/components/WhatsAppButton";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
