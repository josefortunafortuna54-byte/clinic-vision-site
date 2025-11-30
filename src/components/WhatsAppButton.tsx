import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

const WhatsAppButton = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [customMessage, setCustomMessage] = useState("");
  const phoneNumber = "244973003455";

  const predefinedMessages = [
    {
      label: "Profissional",
      message: "Olá, gostaria de receber mais informações sobre os serviços da Clínica Quicep.",
    },
    {
      label: "Curta",
      message: "Olá, quero informações da Clínica Quicep.",
    },
    {
      label: "Agendamento",
      message: "Olá, gostaria de agendar um atendimento na Clínica Quicep.",
    },
    {
      label: "Orçamento",
      message: "Olá, gostaria de solicitar um orçamento da Clínica Quicep.",
    },
    {
      label: "Primeiro Contato",
      message: "Olá, é a minha primeira vez a contactar a Clínica Quicep. Podem informar como funciona o atendimento?",
    },
    {
      label: "Cliente Antigo",
      message: "Olá, já fui atendido na Clínica Quicep e gostaria de marcar um novo serviço.",
    },
    {
      label: "Formal",
      message: "Boa tarde, poderia fornecer informações sobre os serviços disponíveis na Clínica Quicep?",
    },
  ];

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    
    // Tentar abrir
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setShowMenu(false);
    setShowCustomModal(false);
    setCustomMessage("");
  };

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      openWhatsApp(customMessage);
    }
  };

  return (
    <>
      {/* Botão Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        {showMenu && (
          <div className="absolute bottom-20 right-0 bg-background border border-border rounded-lg shadow-xl p-4 w-72 mb-2 animate-in slide-in-from-bottom-2">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-sm">Escolha uma opção</h3>
              <button
                onClick={() => setShowMenu(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              {predefinedMessages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(item.message)}
                  className="w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setShowMenu(false);
                  setShowCustomModal(true);
                }}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-accent text-sm font-medium text-primary transition-colors border-t border-border pt-3 mt-2"
              >
                ✏️ Mensagem Personalizada
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contactar via WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Modal de Mensagem Personalizada */}
      <Dialog open={showCustomModal} onOpenChange={setShowCustomModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mensagem Personalizada</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Digite sua mensagem aqui..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={5}
            />
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCustomModal(false);
                  setCustomMessage("");
                }}
              >
                Cancelar
              </Button>
              <Button
                onClick={handleCustomMessage}
                disabled={!customMessage.trim()}
                className="bg-[#25D366] hover:bg-[#20BA5A]"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar via WhatsApp
              </Button>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              Se o WhatsApp não abrir automaticamente,{" "}
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                clique aqui
              </a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
