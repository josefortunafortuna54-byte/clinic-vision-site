import { useState, useEffect } from "react";
import { Search, ShoppingCart, Info, TableIcon, Filter, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Produto {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number;
  categoria: string;
  imagem_url: string | null;
}

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Produto | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("Todos");
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProdutos = async () => {
    const { data } = await supabase.from("produtos").select("*").order("created_at", { ascending: false });
    setProdutos(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProdutos();
    const channel = supabase
      .channel("produtos-public")
      .on("postgres_changes", { event: "*", schema: "public", table: "produtos" }, () => fetchProdutos())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const categories = ["Todos", ...Array.from(new Set(produtos.map(p => p.categoria))).sort()];

  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity },
    { label: "Até 5.000 Kz", min: 0, max: 5000 },
    { label: "5.000 - 10.000 Kz", min: 5000, max: 10000 },
    { label: "10.000 - 15.000 Kz", min: 10000, max: 15000 },
    { label: "Acima de 15.000 Kz", min: 15000, max: Infinity },
  ];

  const filteredProducts = produtos.filter(product => {
    const matchesSearch = product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (product.descricao ?? "").toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.categoria === selectedCategory;
    
    const priceRange = priceRanges.find(r => r.label === selectedPriceRange);
    const matchesPrice = selectedPriceRange === "Todos" || 
      (priceRange && product.preco >= priceRange.min && product.preco <= priceRange.max);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const formatPrice = (preco: number) => `${Number(preco).toLocaleString("pt-AO")} Kz`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />
      
      <main className="flex-1 pt-[88px] md:pt-[104px]">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-8 md:py-16">
          <div className="container-custom">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 animate-fade-in">
              Produtos Naturais
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl animate-fade-in mb-4">
              {produtos.length} suplementos e produtos naturais de alta qualidade
            </p>
            <Link to="/precario">
              <Button variant="secondary" size="sm" className="animate-fade-in md:text-base md:px-6 md:py-3">
                <TableIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Ver Tabela de Preçário
              </Button>
            </Link>
          </div>
        </section>

        {/* Filters */}
        <section className="py-4 md:py-6 bg-muted/30 sticky top-[88px] md:top-[104px] z-40 border-b border-border">
          <div className="container-custom space-y-3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 md:pl-10 h-10 text-sm"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">Preço:</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                {priceRanges.map((range) => (
                  <Button
                    key={range.label}
                    variant={selectedPriceRange === range.label ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPriceRange(range.label)}
                    className="shrink-0 text-xs md:text-sm h-8 px-3"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-2 w-max md:w-auto md:flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className="shrink-0 text-xs md:text-sm h-8 px-3 whitespace-nowrap"
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
            {loading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="animate-spin w-8 h-8 text-primary" />
              </div>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">{filteredProducts.length} produtos encontrados</p>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-xl text-muted-foreground">Nenhum produto encontrado.</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="bg-card rounded-lg overflow-hidden card-hover">
                        {product.imagem_url ? (
                          <img 
                            src={product.imagem_url} 
                            alt={product.nome}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-56 bg-muted flex items-center justify-center text-muted-foreground">
                            Sem imagem
                          </div>
                        )}
                        <div className="p-6">
                          <span className="text-xs font-medium text-primary">{product.categoria}</span>
                          <h3 className="text-xl font-bold mt-2 mb-2">{product.nome}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.descricao}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-primary">{formatPrice(product.preco)}</span>
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
                              onClick={() => handleWhatsAppOrder(product.nome)}
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
              </>
            )}
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.nome}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedProduct?.categoria}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {selectedProduct?.imagem_url && (
              <img 
                src={selectedProduct.imagem_url} 
                alt={selectedProduct.nome}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}
            <p className="text-muted-foreground leading-relaxed">
              {selectedProduct?.descricao}
            </p>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-primary">
                {selectedProduct && formatPrice(selectedProduct.preco)}
              </span>
              <Button onClick={() => selectedProduct && handleWhatsAppOrder(selectedProduct.nome)}>
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
