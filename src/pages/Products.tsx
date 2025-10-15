import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductsDetailed from "@/components/ProductsDetailed";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ProductsDetailed />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;
