import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PriceTable from "@/components/PriceTable";

const Precario = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />
      
      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground section-spacing">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Tabela de Preçário
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Consulte os preços dos nossos produtos naturais
            </p>
          </div>
        </section>

        {/* Price Table */}
        <section className="section-spacing">
          <div className="container-custom">
            <PriceTable />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Precario;
