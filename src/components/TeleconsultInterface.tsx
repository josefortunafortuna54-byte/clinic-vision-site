import { useState } from "react";
import { Video, Phone, Mic, MicOff, VideoOff, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const TeleconsultInterface = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [consultType, setConsultType] = useState("Ginecologia");
  const { toast } = useToast();

  const consultTypes = [
    "Ginecologia",
    "Naturopatia",
    "Urologia",
    "Nutrição",
    "Consulta Geral",
  ];

  const startConsult = () => {
    if (!patientName) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, digite seu nome para iniciar a teleconsulta.",
        variant: "destructive",
      });
      return;
    }

    setIsConnected(true);
    
    // Enviar informação via WhatsApp
    const message = `*Solicitação de Teleconsulta*%0A%0A` +
      `*Nome:* ${patientName}%0A` +
      `*Tipo:* ${consultType}%0A` +
      `*Data/Hora:* ${new Date().toLocaleString('pt-BR')}`;

    const url = `https://wa.me/244973003455?text=${message}`;

    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Teleconsulta iniciada",
      description: "Nossa equipa irá contactá-lo em breve.",
    });
  };

  const endConsult = () => {
    setIsConnected(false);
    setIsMuted(false);
    setIsVideoOff(false);
    setPatientName("");
    
    toast({
      title: "Consulta encerrada",
      description: "Obrigado por usar nosso serviço de teleconsulta.",
    });
  };

  return (
    <div className="space-y-6">
      {!isConnected ? (
        <Card className="p-8">
          <div className="max-w-md mx-auto space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                <Video className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Iniciar Teleconsulta</h3>
              <p className="text-muted-foreground">
                Consulte nossos especialistas de onde estiver
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome Completo</label>
                <Input 
                  placeholder="Digite seu nome" 
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo de Consulta</label>
                <select 
                  className="w-full p-2 border rounded-lg bg-background"
                  value={consultType}
                  onChange={(e) => setConsultType(e.target.value)}
                >
                  {consultTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <Button 
                onClick={startConsult} 
                className="w-full"
                size="lg"
              >
                <Video className="mr-2 h-5 w-5" />
                Solicitar Teleconsulta
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Nossa equipa irá contactá-lo via WhatsApp para agendar a videochamada
              </p>
            </div>
          </div>
        </Card>
      ) : (
        <Card className="p-4">
          <div className="space-y-4">
            {/* Video Preview Area */}
            <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center">
              {isVideoOff ? (
                <div className="text-center">
                  <VideoOff className="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Câmera desligada</p>
                </div>
              ) : (
                <div className="text-center">
                  <Monitor className="h-16 w-16 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Aguardando conexão com o médico...</p>
                </div>
              )}
              
              {/* Small preview for own video */}
              <div className="absolute bottom-4 right-4 w-32 h-24 bg-secondary rounded-lg flex items-center justify-center">
                <p className="text-xs">Você</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button
                variant={isMuted ? "destructive" : "secondary"}
                size="lg"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </Button>

              <Button
                variant={isVideoOff ? "destructive" : "secondary"}
                size="lg"
                onClick={() => setIsVideoOff(!isVideoOff)}
              >
                {isVideoOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              </Button>

              <Button
                variant="destructive"
                size="lg"
                onClick={endConsult}
              >
                <Phone className="h-5 w-5 rotate-135" />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Teleconsulta com: <span className="font-medium text-foreground">{consultType}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Em caso de problemas, contacte: 973 003 455
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default TeleconsultInterface;
