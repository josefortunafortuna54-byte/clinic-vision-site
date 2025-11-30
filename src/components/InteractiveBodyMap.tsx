import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";

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

  return (
    <div className="w-full">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Clique numa parte do corpo</h3>
          <p className="text-muted-foreground">Descubra tratamentos e produtos recomendados</p>
        </div>

        {/* Interactive Body Diagram */}
        <div className="relative mx-auto max-w-md aspect-[3/4] bg-gradient-to-b from-muted/20 to-muted/40 rounded-3xl p-8">
          <svg viewBox="0 0 300 500" className="w-full h-full">
            {/* Head */}
            <ellipse
              cx="150"
              cy="60"
              rx="50"
              ry="60"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'head' ? 'fill-primary/70' : 'fill-primary/30'
              } hover:fill-primary/70 stroke-primary stroke-2`}
              onClick={() => setSelectedPart(bodyParts.head)}
              onMouseEnter={() => setHoveredPart('head')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Chest */}
            <rect
              x="100"
              y="120"
              width="100"
              height="80"
              rx="20"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'chest' ? 'fill-accent/70' : 'fill-accent/30'
              } hover:fill-accent/70 stroke-accent stroke-2`}
              onClick={() => setSelectedPart(bodyParts.chest)}
              onMouseEnter={() => setHoveredPart('chest')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Abdomen */}
            <rect
              x="110"
              y="200"
              width="80"
              height="70"
              rx="15"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'abdomen' ? 'fill-secondary/70' : 'fill-secondary/30'
              } hover:fill-secondary/70 stroke-secondary stroke-2`}
              onClick={() => setSelectedPart(bodyParts.abdomen)}
              onMouseEnter={() => setHoveredPart('abdomen')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Reproductive System */}
            <ellipse
              cx="150"
              cy="310"
              rx="40"
              ry="30"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'reproductive' ? 'fill-primary/70' : 'fill-primary/30'
              } hover:fill-primary/70 stroke-primary stroke-2`}
              onClick={() => setSelectedPart(bodyParts.reproductive)}
              onMouseEnter={() => setHoveredPart('reproductive')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Joints - Left Arm */}
            <circle
              cx="70"
              cy="160"
              r="20"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'joints' ? 'fill-accent/70' : 'fill-accent/30'
              } hover:fill-accent/70 stroke-accent stroke-2`}
              onClick={() => setSelectedPart(bodyParts.joints)}
              onMouseEnter={() => setHoveredPart('joints')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Joints - Right Arm */}
            <circle
              cx="230"
              cy="160"
              r="20"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'joints' ? 'fill-accent/70' : 'fill-accent/30'
              } hover:fill-accent/70 stroke-accent stroke-2`}
              onClick={() => setSelectedPart(bodyParts.joints)}
              onMouseEnter={() => setHoveredPart('joints')}
              onMouseLeave={() => setHoveredPart(null)}
            />
            
            {/* Urinary System */}
            <ellipse
              cx="150"
              cy="280"
              rx="35"
              ry="25"
              className={`cursor-pointer transition-all duration-300 ${
                hoveredPart === 'urinary' ? 'fill-secondary/70' : 'fill-secondary/30'
              } hover:fill-secondary/70 stroke-secondary stroke-2`}
              onClick={() => setSelectedPart(bodyParts.urinary)}
              onMouseEnter={() => setHoveredPart('urinary')}
              onMouseLeave={() => setHoveredPart(null)}
            />
          </svg>
        </div>
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
