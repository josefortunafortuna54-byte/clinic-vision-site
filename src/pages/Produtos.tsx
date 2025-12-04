import { useState } from "react";
import { Search, ShoppingCart, Info, TableIcon } from "lucide-react";
import { Link } from "react-router-dom";
import zainHormoneImg from "@/assets/zain-hormone.jpg";
import pidSyrupImg from "@/assets/pid-syrup.jpg";
import marion4WomanImg from "@/assets/marion-4-woman.jpg";
import energyPlusImg from "@/assets/energy-plus.jpg";
import cardioHealthImg from "@/assets/cardio-health.jpg";
import glowSkinImg from "@/assets/glow-skin.jpg";
import digestEaseImg from "@/assets/digest-ease.jpg";
import immuneBoostImg from "@/assets/immune-boost.jpg";
import spermPowerImg from "@/assets/sperm-power.jpg";
import cd4ImmuneImg from "@/assets/cd4-immune.jpg";
import afyaUbongoImg from "@/assets/afya-ubongo.jpg";
import babalaoOilImg from "@/assets/babalao-oil.jpg";
import loveKingdomImg from "@/assets/love-kingdom.jpg";
import coldSyrupImg from "@/assets/cold-syrup.jpg";
import prostateCareImg from "@/assets/prostate-care.jpg";
import fertilityPlusImg from "@/assets/fertility-plus.jpg";
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

  const categories = ["Todos", "Saúde Reprodutiva", "Saúde Masculina", "Energia & Vitalidade", "Cardiovascular", "Beleza", "Digestão", "Imunidade", "Respiratório", "Cognitivo"];

  const products = [
    {
      id: 1,
      name: "Marion 4 Woman",
      category: "Saúde Reprodutiva",
      description: "Suplemento natural para saúde reprodutiva feminina.",
      longDescription: "Marion 4 Woman é uma fórmula completa desenvolvida especialmente para apoiar a saúde reprodutiva e hormonal feminina. Contém ingredientes naturais que ajudam a equilibrar o ciclo menstrual, reduzir cólicas e promover o bem-estar geral.",
      image: marion4WomanImg,
      price: "10.000 Kz"
    },
    {
      id: 2,
      name: "P.I.D Syrup",
      category: "Saúde Reprodutiva",
      description: "Tratamento herbal para inflamações pélvicas.",
      longDescription: "P.I.D Syrup é um xarope herbal formulado para ajudar no tratamento natural de inflamações pélvicas. Com propriedades anti-inflamatórias e antimicrobianas naturais.",
      image: pidSyrupImg,
      price: "10.000 Kz"
    },
    {
      id: 3,
      name: "ZAIN Hormone Imbalance",
      category: "Saúde Reprodutiva",
      description: "Regulação natural de hormonas femininas.",
      longDescription: "ZAIN Hormone Imbalance é uma formulação natural que ajuda a regular o equilíbrio hormonal feminino, aliviando sintomas de desequilíbrio hormonal e promovendo bem-estar geral.",
      image: zainHormoneImg,
      price: "10.000 Kz"
    },
    {
      id: 4,
      name: "SPERM POWER",
      category: "Saúde Masculina",
      description: "Suplemento premium para fertilidade masculina.",
      longDescription: "SPERM POWER é uma fórmula avançada desenvolvida para aumentar a qualidade e quantidade espermática, melhorar a motilidade e apoiar a saúde reprodutiva masculina.",
      image: spermPowerImg,
      price: "18.000 Kz"
    },
    {
      id: 5,
      name: "Prostate Care",
      category: "Saúde Masculina",
      description: "Suporte natural para saúde da próstata.",
      longDescription: "Prostate Care contém saw palmetto, zinco e licopeno para apoiar a saúde da próstata e função urinária masculina.",
      image: prostateCareImg,
      price: "10.000 Kz"
    },
    {
      id: 6,
      name: "Fertility Plus",
      category: "Saúde Reprodutiva",
      description: "Apoio natural à fertilidade feminina.",
      longDescription: "Fertility Plus é uma combinação de ervas e nutrientes que ajudam a preparar o corpo para a concepção, regulando os ciclos e promovendo a saúde uterina.",
      image: fertilityPlusImg,
      price: "10.000 Kz"
    },
    {
      id: 7,
      name: "LOVE KINGDOM",
      category: "Energia & Vitalidade",
      description: "Suplemento premium para vitalidade e intimidade.",
      longDescription: "LOVE KINGDOM é uma fórmula premium desenvolvida para casais que desejam melhorar a vitalidade e qualidade da vida íntima de forma natural.",
      image: loveKingdomImg,
      price: "18.000 Kz"
    },
    {
      id: 8,
      name: "Energy Plus",
      category: "Energia & Vitalidade",
      description: "Suplemento energético natural para combater fadiga.",
      longDescription: "Energy Plus combina vitaminas do complexo B, ginseng e guaraná para fornecer energia sustentada ao longo do dia.",
      image: energyPlusImg,
      price: "10.000 Kz"
    },
    {
      id: 9,
      name: "BABALAO Oil",
      category: "Energia & Vitalidade",
      description: "Óleo natural para massagem e bem-estar.",
      longDescription: "BABALAO Oil é um óleo herbal tradicional africano para massagens terapêuticas, relaxamento muscular e promoção do bem-estar geral.",
      image: babalaoOilImg,
      price: "18.000 Kz"
    },
    {
      id: 10,
      name: "CD4 Immune",
      category: "Imunidade",
      description: "Suporte premium ao sistema imunológico.",
      longDescription: "CD4 Immune é uma fórmula premium desenvolvida para fortalecer o sistema imunológico, aumentar as defesas naturais e promover a saúde celular.",
      image: cd4ImmuneImg,
      price: "18.000 Kz"
    },
    {
      id: 11,
      name: "ImmuneBoost",
      category: "Imunidade",
      description: "Fortalecimento natural do sistema imunológico.",
      longDescription: "ImmuneBoost contém vitamina C, zinco, equinácea e própolis para fortalecer as defesas naturais do corpo.",
      image: immuneBoostImg,
      price: "10.000 Kz"
    },
    {
      id: 12,
      name: "AFYA UBONGO",
      category: "Cognitivo",
      description: "Suplemento premium para saúde cerebral.",
      longDescription: "AFYA UBONGO é uma fórmula avançada para melhorar a memória, concentração e saúde cognitiva geral com ingredientes naturais nootrópicos.",
      image: afyaUbongoImg,
      price: "18.000 Kz"
    },
    {
      id: 13,
      name: "Cold Syrup",
      category: "Respiratório",
      description: "Xarope natural para gripes e constipações.",
      longDescription: "Cold Syrup é um xarope herbal que ajuda a aliviar sintomas de gripe, tosse e constipação, fortalecendo o sistema respiratório.",
      image: coldSyrupImg,
      price: "3.000 Kz"
    },
    {
      id: 14,
      name: "CardioHealth",
      category: "Cardiovascular",
      description: "Suporte natural para saúde cardiovascular.",
      longDescription: "CardioHealth contém ômega-3, CoQ10 e antioxidantes para apoiar a saúde do coração e circulação sanguínea.",
      image: cardioHealthImg,
      price: "10.000 Kz"
    },
    {
      id: 15,
      name: "GlowSkin",
      category: "Beleza",
      description: "Suplemento para pele, cabelo e unhas saudáveis.",
      longDescription: "GlowSkin oferece colágeno, biotina e vitaminas essenciais para promover beleza de dentro para fora.",
      image: glowSkinImg,
      price: "10.000 Kz"
    },
    {
      id: 16,
      name: "DigestEase",
      category: "Digestão",
      description: "Apoio natural para digestão saudável.",
      longDescription: "DigestEase combina enzimas digestivas e probióticos para melhorar a digestão e saúde intestinal.",
      image: digestEaseImg,
      price: "10.000 Kz"
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
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in mb-6">
              Suplementos e produtos naturais de alta qualidade para o seu bem-estar
            </p>
            <Link to="/precario">
              <Button variant="secondary" size="lg" className="animate-fade-in">
                <TableIcon className="h-5 w-5 mr-2" />
                Ver Tabela de Preçário
              </Button>
            </Link>
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
