import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import humanBodyImg from "@/assets/human-body-map.png";

interface BodyPart {
  id: string;
  name: string;
  treatments: string[];
  products: string[];
  description: string;
}

const InteractiveBodyMap = () => {
  const [selectedPart, setSelectedPart] = useState<BodyPart | null>(null);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const bodyParts: Record<string, BodyPart> = {
    head: {
      id: "head",
      name: "Cabeça e Cérebro",
      treatments: ["Terapia para enxaquecas", "Tratamento de stress", "Estimulação cognitiva"],
      products: ["AFYA UBONGO", "CELEBRO", "NASAL CURE"],
      description: "Tratamentos para saúde mental, enxaquecas, sinusite e função cognitiva."
    },
    chest: {
      id: "chest",
      name: "Peito e Coração",
      treatments: ["Saúde cardiovascular", "Tratamento respiratório", "Hipertensão"],
      products: ["STROKE", "Q-10", "OMEGA 3"],
      description: "Apoio à saúde cardíaca, circulação e sistema respiratório."
    },
    abdomen: {
      id: "abdomen",
      name: "Abdómen e Sistema Digestivo",
      treatments: ["Problemas digestivos", "Úlceras", "Hepatite"],
      products: ["STOMACH", "ULCERA", "HEPATITES", "ALOE VERA"],
      description: "Tratamentos para problemas digestivos, fígado e sistema gastrointestinal."
    },
    reproductive: {
      id: "reproductive",
      name: "Sistema Reprodutivo",
      treatments: ["Fertilidade", "Saúde hormonal", "Disfunções sexuais"],
      products: ["MED FERT", "ZAIN WOMAN HORMONE IMBALANCE", "PID", "SPERM POWER", "MAXIMIZER"],
      description: "Soluções para fertilidade, equilíbrio hormonal e saúde reprodutiva."
    },
    joints: {
      id: "joints",
      name: "Articulações e Ossos",
      treatments: ["Artrite", "Dores articulares", "Inflamação"],
      products: ["ARTRITE", "JOINT PAIN", "MAUMIVU"],
      description: "Alívio de dores articulares, artrite e inflamações ósseas."
    },
    urinary: {
      id: "urinary",
      name: "Sistema Urinário",
      treatments: ["Infecções urinárias", "Próstata", "Rins"],
      products: ["UTI", "PROSTATE", "KIDNG", "PROSTIO"],
      description: "Tratamento de infecções urinárias, saúde da próstata e rins."
    }
  };

  const handleWhatsAppInquiry = (product: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${product}`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const hotspots = [
    { id: 'head', top: '5%', left: '50%', label: 'Cabeça' },
    { id: 'chest', top: '25%', left: '50%', label: 'Peito' },
    { id: 'abdomen', top: '38%', left: '50%', label: 'Abdómen' },
    { id: 'reproductive', top: '50%', left: '50%', label: 'Reprodutivo' },
    { id: 'joints', top: '28%', left: '22%', label: 'Articulações' },
    { id: 'urinary', top: '45%', left: '50%', label: 'Urinário' },
  ];

  return (
    <div className="w-full">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Clique numa parte do corpo</h3>
          <p className="text-muted-foreground">Descubra tratamentos e produtos recomendados</p>
        </div>

        {/* Interactive Body Map with Real Image */}
        <div className="relative mx-auto max-w-md">
          <img 
            src={humanBodyImg} 
            alt="Mapa interativo do corpo humano" 
            className="w-full h-auto rounded-2xl"
          />
          
          {/* Interactive Hotspots */}
          {hotspots.map((spot) => (
            <button
              key={spot.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center group ${
                hoveredPart === spot.id 
                  ? 'bg-primary/80 border-primary scale-125 shadow-lg shadow-primary/30' 
                  : 'bg-primary/40 border-primary/60 hover:bg-primary/70 hover:scale-110'
              }`}
              style={{ top: spot.top, left: spot.left }}
              onClick={() => setSelectedPart(bodyParts[spot.id])}
              onMouseEnter={() => setHoveredPart(spot.id)}
              onMouseLeave={() => setHoveredPart(null)}
              aria-label={`Ver tratamentos para ${spot.label}`}
            >
              <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
              
              {/* Tooltip */}
              <span className={`absolute whitespace-nowrap bg-primary text-primary-foreground text-xs px-2 py-1 rounded transition-all duration-200 ${
                spot.left === '22%' ? 'left-full ml-2' : 'bottom-full mb-2'
              } ${hoveredPart === spot.id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                {spot.label}
              </span>
            </button>
          ))}

          {/* Right side joint hotspot */}
          <button
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center group ${
              hoveredPart === 'joints' 
                ? 'bg-primary/80 border-primary scale-125 shadow-lg shadow-primary/30' 
                : 'bg-primary/40 border-primary/60 hover:bg-primary/70 hover:scale-110'
            }`}
            style={{ top: '28%', left: '78%' }}
            onClick={() => setSelectedPart(bodyParts.joints)}
            onMouseEnter={() => setHoveredPart('joints')}
            onMouseLeave={() => setHoveredPart(null)}
            aria-label="Ver tratamentos para Articulações"
          >
            <span className="w-3 h-3 bg-white rounded-full animate-pulse" />
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Toque nos pontos iluminados para ver os tratamentos disponíveis
        </p>
      </Card>

      {/* Details Modal */}
      <Dialog open={!!selectedPart} onOpenChange={() => setSelectedPart(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedPart?.name}</DialogTitle>
            <DialogDescription>
              {selectedPart?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-primary">Tratamentos Disponíveis</h4>
              <ul className="space-y-2">
                {selectedPart?.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3 text-accent">Produtos Recomendados</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedPart?.products.map((product, index) => (
                  <div key={index} className="p-3 bg-muted rounded-lg flex items-center justify-between">
                    <span className="font-medium text-sm">{product}</span>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={() => handleWhatsAppInquiry(product)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t">
              <Button 
                className="w-full" 
                onClick={() => {
                  const message = 'Gostaria de marcar uma consulta';
                  const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
                  const link = document.createElement("a");
                  link.href = url;
                  link.target = "_blank";
                  link.rel = "noopener noreferrer";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Marcar Consulta para Avaliação
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveBodyMap;
