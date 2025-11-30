import { useState } from "react";
import { Search, ShoppingCart, Info } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = ["Todos", "Saúde Reprodutiva", "Energia & Vitalidade", "Cardiovascular", "Beleza", "Digestão", "Imunidade"];

  const products = [
    {
      id: 1,
      name: "Marion 4 Woman",
      category: "Saúde Reprodutiva",
      description: "Suplemento natural para saúde reprodutiva feminina.",
      longDescription: "Marion 4 Woman é uma fórmula completa desenvolvida especialmente para apoiar a saúde reprodutiva e hormonal feminina. Contém ingredientes naturais que ajudam a equilibrar o ciclo menstrual, reduzir cólicas e promover o bem-estar geral.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 2,
      name: "P.I.D Syrup",
      category: "Saúde Reprodutiva",
      description: "Tratamento herbal para inflamações pélvicas.",
      longDescription: "P.I.D Syrup é um xarope herbal formulado para ajudar no tratamento natural de inflamações pélvicas. Com propriedades anti-inflamatórias e antimicrobianas naturais.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 3,
      name: "ZAIN Hormone Imbalance",
      category: "Saúde Reprodutiva",
      description: "Regulação natural de hormonas femininas.",
      longDescription: "ZAIN Hormone Imbalance é uma formulação natural que ajuda a regular o equilíbrio hormonal feminino, aliviando sintomas de desequilíbrio hormonal e promovendo bem-estar geral.",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 4,
      name: "Energy Plus",
      category: "Energia & Vitalidade",
      description: "Suplemento energético natural para combater fadiga.",
      longDescription: "Energy Plus combina vitaminas do complexo B, ginseng e guaraná para fornecer energia sustentada ao longo do dia.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 5,
      name: "CardioHealth",
      category: "Cardiovascular",
      description: "Suporte natural para saúde cardiovascular.",
      longDescription: "CardioHealth contém ômega-3, CoQ10 e antioxidantes para apoiar a saúde do coração e circulação sanguínea.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 6,
      name: "GlowSkin",
      category: "Beleza",
      description: "Suplemento para pele, cabelo e unhas saudáveis.",
      longDescription: "GlowSkin oferece colágeno, biotina e vitaminas essenciais para promover beleza de dentro para fora.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 7,
      name: "DigestEase",
      category: "Digestão",
      description: "Apoio natural para digestão saudável.",
      longDescription: "DigestEase combina enzimas digestivas e probióticos para melhorar a digestão e saúde intestinal.",
      image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=400&fit=crop",
      price: "—"
    },
    {
      id: 8,
      name: "ImmuneBoost",
      category: "Imunidade",
      description: "Fortalecimento natural do sistema imunológico.",
      longDescription: "ImmuneBoost contém vitamina C, zinco, equinácea e própolis para fortalecer as defesas naturais do corpo.",
      image: "https://images.unsplash.com/photo-1550572017-4840134d9e27?w=400&h=400&fit=crop",
      price: "—"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />
      
      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground section-spacing">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Produtos Naturais
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Suplementos e produtos naturais de alta qualidade para o seu bem-estar
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30 sticky top-[100px] z-40">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Pesquisar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-center">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">Nenhum produto encontrado.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-card rounded-lg overflow-hidden card-hover">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary">{product.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Info className="h-4 w-4 mr-2" />
                          Detalhes
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleWhatsAppOrder(product.name)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Encomendar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.name}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedProduct?.category}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={selectedProduct?.image} 
              alt={selectedProduct?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-muted-foreground leading-relaxed">
              {selectedProduct?.longDescription}
            </p>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-primary">{selectedProduct?.price}</span>
              <Button onClick={() => selectedProduct && handleWhatsAppOrder(selectedProduct.name)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Encomendar via WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Produtos;
