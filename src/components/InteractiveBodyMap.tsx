import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle, Calendar } from "lucide-react";
import { toast } from "sonner";
import humanBodyImg from "@/assets/human-body-map.png";

interface Product {
  name: string;
  description: string;
  price: number;
}

interface BodyPart {
  id: string;
  name: string;
  treatments: string[];
  products: Product[];
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

const InteractiveBodyMap = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  const phoneNumber = "244973003455";

  const bodyParts: Record<string, BodyPart> = {
    head: {
      id: "head",
      name: "Cabeça e Cérebro",
      treatments: ["Terapia para enxaquecas", "Tratamento de stress", "Estimulação cognitiva"],
      products: [
        { name: "AFYA UBONGO", description: "Suplemento para saúde cerebral e memória", price: 18000 },
        { name: "CELEBRO", description: "Vitaminas para função cognitiva", price: 10000 },
        { name: "NASAL CURE", description: "Tratamento para sinusite e congestão", price: 10000 },
      ],
      description: "Tratamentos para saúde mental, enxaquecas, sinusite e função cognitiva."
    },
    chest: {
      id: "chest",
      name: "Peito e Coração",
      treatments: ["Saúde cardiovascular", "Tratamento respiratório", "Hipertensão"],
      products: [
        { name: "STROKE", description: "Prevenção e tratamento cardiovascular", price: 10000 },
        { name: "Q-10", description: "Coenzima Q10 para saúde do coração", price: 10000 },
        { name: "OMEGA 3", description: "Ácidos graxos essenciais para circulação", price: 10000 },
      ],
      description: "Apoio à saúde cardíaca, circulação e sistema respiratório."
    },
    abdomen: {
      id: "abdomen",
      name: "Abdómen e Sistema Digestivo",
      treatments: ["Problemas digestivos", "Úlceras", "Hepatite"],
      products: [
        { name: "STOMACH", description: "Alívio para problemas estomacais", price: 10000 },
        { name: "ULCERA", description: "Tratamento natural para úlceras", price: 10000 },
        { name: "HEPATITES", description: "Suporte para saúde do fígado", price: 10000 },
        { name: "ALOE VERA", description: "Desintoxicante natural digestivo", price: 10000 },
      ],
      description: "Tratamentos para problemas digestivos, fígado e sistema gastrointestinal."
    },
    reproductive: {
      id: "reproductive",
      name: "Sistema Reprodutivo",
      treatments: ["Fertilidade", "Saúde hormonal", "Disfunções sexuais"],
      products: [
        { name: "MED FERT", description: "Suplemento para fertilidade", price: 10000 },
        { name: "ZAIN WOMAN HORMONE", description: "Equilíbrio hormonal feminino", price: 10000 },
        { name: "SPERM POWER", description: "Suplemento para saúde masculina", price: 18000 },
        { name: "MAXIMIZER", description: "Potenciador de desempenho", price: 10000 },
      ],
      description: "Soluções para fertilidade, equilíbrio hormonal e saúde reprodutiva."
    },
    joints: {
      id: "joints",
      name: "Articulações e Ossos",
      treatments: ["Artrite", "Dores articulares", "Inflamação"],
      products: [
        { name: "ARTRITE", description: "Alívio para artrite e inflamação", price: 10000 },
        { name: "JOINT PAIN", description: "Suplemento para dores articulares", price: 10000 },
        { name: "MAUMIVU", description: "Tratamento natural para dores", price: 10000 },
      ],
      description: "Alívio de dores articulares, artrite e inflamações ósseas."
    },
    urinary: {
      id: "urinary",
      name: "Sistema Urinário",
      treatments: ["Infecções urinárias", "Próstata", "Rins"],
      products: [
        { name: "UTI", description: "Tratamento para infecções urinárias", price: 10000 },
        { name: "PROSTATE", description: "Saúde da próstata", price: 10000 },
        { name: "KIDNEY CARE", description: "Suporte para saúde renal", price: 10000 },
      ],
      description: "Tratamento de infecções urinárias, saúde da próstata e rins."
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price) + ' Kz';
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const updateQuantity = (productName: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.name === productName) {
          const newQuantity = item.quantity + delta;
          if (newQuantity <= 0) return null;
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[];
    });
  };

  const removeFromCart = (productName: string) => {
    setCart(prev => prev.filter(item => item.name !== productName));
    toast.info("Produto removido do carrinho");
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScheduleEvaluation = (bodyPartName: string) => {
    const message = `Olá! Gostaria de marcar uma avaliação. Estou com dor em: ${bodyPartName}.`;
    openWhatsApp(message);
  };

  const handleCartCheckout = () => {
    if (cart.length === 0) {
      toast.error("O carrinho está vazio!");
      return;
    }

    const productsList = cart.map(item => 
      `- ${item.name} (Quantidade: ${item.quantity}, Preço: ${formatPrice(item.price * item.quantity)})`
    ).join('\n');

    const message = `Olá! Gostaria de comprar os seguintes produtos:\n${productsList}\n\nTotal: ${formatPrice(getCartTotal())}`;
    openWhatsApp(message);
  };

  const hotspots = [
    { id: 'head', top: '8%', left: '50%', label: 'Cabeça' },
    { id: 'chest', top: '28%', left: '50%', label: 'Peito' },
    { id: 'abdomen', top: '42%', left: '50%', label: 'Abdómen' },
    { id: 'reproductive', top: '52%', left: '50%', label: 'Reprodutivo' },
    { id: 'joints', top: '30%', left: '18%', label: 'Articulações' },
    { id: 'urinary', top: '48%', left: '42%', label: 'Urinário' },
  ];

  return (
    <div className="w-full">
      <Card className="p-4 md:p-8">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Clique numa parte do corpo</h3>
          <p className="text-muted-foreground text-sm md:text-base">Descubra tratamentos e produtos recomendados</p>
        </div>

        {/* Cart Button */}
        {cart.length > 0 && (
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => setShowCart(true)}
              variant="outline"
              className="relative"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Carrinho
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            </Button>
          </div>
        )}

        {/* Interactive Body Map with Real Image */}
        <div className="relative mx-auto max-w-lg">
          <img 
            src={humanBodyImg} 
            alt="Mapa interativo do corpo humano" 
            className="w-full h-auto rounded-2xl"
          />
          
          {/* Interactive Hotspots */}
          {hotspots.map((spot, index) => (
            <button
              key={spot.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-3 transition-all duration-300 flex items-center justify-center group ${
                hoveredPart === spot.id 
                  ? 'bg-primary/90 border-primary scale-130 shadow-xl shadow-primary/40' 
                  : 'bg-primary/50 border-primary/70 hover:bg-primary/80 hover:scale-115'
              }`}
              style={{ 
                top: spot.top, 
                left: spot.left,
                animation: `pulse-ring 2s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
              onClick={() => setSelectedPart(bodyParts[spot.id])}
              onMouseEnter={() => setHoveredPart(spot.id)}
              onMouseLeave={() => setHoveredPart(null)}
              aria-label={`Ver tratamentos para ${spot.label}`}
            >
              <span className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping absolute" />
              <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full relative z-10" />
              
              {/* Tooltip */}
              <span className={`absolute whitespace-nowrap bg-primary text-primary-foreground text-xs md:text-sm font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-lg transition-all duration-200 ${
                spot.left === '18%' ? 'left-full ml-2 md:ml-3' : 'bottom-full mb-2 md:mb-3'
              } ${hoveredPart === spot.id ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-90'}`}>
                {spot.label}
              </span>
            </button>
          ))}

          {/* Right side joint hotspot */}
          <button
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-3 transition-all duration-300 flex items-center justify-center group ${
              hoveredPart === 'joints-right' 
                ? 'bg-primary/90 border-primary scale-130 shadow-xl shadow-primary/40' 
                : 'bg-primary/50 border-primary/70 hover:bg-primary/80 hover:scale-115'
            }`}
            style={{ 
              top: '30%', 
              left: '82%',
              animation: `pulse-ring 2s ease-in-out infinite`,
              animationDelay: '1.8s'
            }}
            onClick={() => setSelectedPart(bodyParts.joints)}
            onMouseEnter={() => setHoveredPart('joints-right')}
            onMouseLeave={() => setHoveredPart(null)}
            aria-label="Ver tratamentos para Articulações"
          >
            <span className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping absolute" />
            <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full relative z-10" />
          </button>

          {/* Legs hotspot */}
          <button
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-3 transition-all duration-300 flex items-center justify-center group ${
              hoveredPart === 'legs' 
                ? 'bg-primary/90 border-primary scale-130 shadow-xl shadow-primary/40' 
                : 'bg-primary/50 border-primary/70 hover:bg-primary/80 hover:scale-115'
            }`}
            style={{ 
              top: '72%', 
              left: '50%',
              animation: `pulse-ring 2s ease-in-out infinite`,
              animationDelay: '2.1s'
            }}
            onClick={() => setSelectedPart(bodyParts.joints)}
            onMouseEnter={() => setHoveredPart('legs')}
            onMouseLeave={() => setHoveredPart(null)}
            aria-label="Ver tratamentos para Pernas"
          >
            <span className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping absolute" />
            <span className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full relative z-10" />
            <span className={`absolute whitespace-nowrap bg-primary text-primary-foreground text-xs md:text-sm font-medium px-2 md:px-3 py-1 md:py-1.5 rounded-lg shadow-lg transition-all duration-200 bottom-full mb-2 md:mb-3 ${hoveredPart === 'legs' ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-90'}`}>
              Pernas
            </span>
          </button>
        </div>
        
        <style>{`
          @keyframes pulse-ring {
            0%, 100% {
              box-shadow: 0 0 0 0 hsl(var(--primary) / 0.4);
            }
            50% {
              box-shadow: 0 0 0 12px hsl(var(--primary) / 0);
            }
          }
        `}</style>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">
          Toque nos pontos iluminados para ver os tratamentos disponíveis
        </p>
      </Card>

      {/* Details Modal */}
      <Dialog open={!!selectedPart} onOpenChange={() => setSelectedPart(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl">{selectedPart?.name}</DialogTitle>
            <DialogDescription>
              {selectedPart?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base md:text-lg mb-3 text-primary">Tratamentos Disponíveis</h4>
              <ul className="space-y-2">
                {selectedPart?.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm md:text-base">
                    <span className="text-primary mt-1">•</span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-base md:text-lg mb-3 text-accent">Produtos Recomendados</h4>
              <div className="space-y-3">
                {selectedPart?.products.map((product, index) => (
                  <div key={index} className="p-3 md:p-4 bg-muted rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex-1">
                        <h5 className="font-semibold text-sm md:text-base">{product.name}</h5>
                        <p className="text-xs md:text-sm text-muted-foreground">{product.description}</p>
                        <p className="text-primary font-bold mt-1">{formatPrice(product.price)}</p>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => addToCart(product)}
                        className="shrink-0"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Adicionar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <Button 
                className="w-full" 
                onClick={() => selectedPart && handleScheduleEvaluation(selectedPart.name)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Marcar Avaliação via WhatsApp
              </Button>
              
              {cart.length > 0 && (
                <Button 
                  variant="outline"
                  className="w-full" 
                  onClick={() => {
                    setSelectedPart(null);
                    setShowCart(true);
                  }}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Ver Carrinho ({getCartCount()} itens)
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Cart Modal */}
      <Dialog open={showCart} onOpenChange={setShowCart}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Carrinho de Compras
            </DialogTitle>
          </DialogHeader>
          
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-3" />
              <p className="text-muted-foreground">O carrinho está vazio</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="flex-1">
                    <h5 className="font-semibold text-sm">{item.name}</h5>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <p className="text-primary font-bold text-sm mt-1">
                      {formatPrice(item.price)} × {item.quantity} = {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.name, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.name, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => removeFromCart(item.name)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">Total:</span>
                  <span className="font-bold text-xl text-primary">{formatPrice(getCartTotal())}</span>
                </div>
                
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A]" 
                  onClick={handleCartCheckout}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enviar Pedido via WhatsApp
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveBodyMap;