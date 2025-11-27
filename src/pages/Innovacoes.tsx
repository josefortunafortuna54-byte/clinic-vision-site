import { useState } from "react";
import { Bot, Calendar, Video, User, Map, Stethoscope, QrCode, Mic, Eye, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Innovacoes = () => {
  const [chatMessages, setChatMessages] = useState<Array<{role: string, text: string}>>([]);
  const [chatInput, setChatInput] = useState("");

  const innovations = [
    {
      icon: Bot,
      title: "Assistente Virtual Médico (IA)",
      description: "Chat inteligente que responde dúvidas sobre saúde, produtos e serviços 24/7.",
      color: "from-primary to-accent"
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema automatizado que mostra horários disponíveis e permite agendar consultas online.",
      color: "from-accent to-primary"
    },
    {
      icon: Video,
      title: "Teleconsulta Integrada",
      description: "Consultas por vídeo com nossos especialistas, de onde estiver.",
      color: "from-primary to-accent"
    },
    {
      icon: User,
      title: "Painel do Paciente",
      description: "Área pessoal para acompanhar histórico, exames e tratamentos.",
      color: "from-accent to-primary"
    },
    {
      icon: Map,
      title: "Mapa Interativo da Saúde",
      description: "Clique em partes do corpo para ver tratamentos e produtos recomendados.",
      color: "from-primary to-accent"
    },
    {
      icon: Stethoscope,
      title: "Simulador de Diagnóstico",
      description: "Questionário inteligente que sugere tratamentos baseados em sintomas.",
      color: "from-accent to-primary"
    },
    {
      icon: QrCode,
      title: "Leitor de QR / Scan",
      description: "Escaneie códigos para obter informações instantâneas sobre produtos.",
      color: "from-primary to-accent"
    },
    {
      icon: Mic,
      title: "Blog com IA Writer",
      description: "Crie artigos de saúde através de comandos de voz.",
      color: "from-accent to-primary"
    },
    {
      icon: Eye,
      title: "Acessibilidade Total",
      description: "Modo alto contraste, texto para fala e fonte ajustável.",
      color: "from-primary to-accent"
    }
  ];

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    
    setChatMessages(prev => [...prev, { role: "user", text: chatInput }]);
    
    // Simulação de resposta do assistente
    setTimeout(() => {
      const responses = [
        "Olá! Como posso ajudá-lo hoje?",
        "Para agendar uma consulta, pode usar o nosso sistema de agendamento online ou contactar +244 926 149 661.",
        "Os nossos produtos naturais são certificados e de alta qualidade. Qual produto lhe interessa?",
        "Estamos localizados na Rua da Fesa, Gamek Vila, próximo ao Café da Vila em Luanda.",
        "Oferecemos teleconsultas! Pode agendar através do WhatsApp ou online."
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { role: "assistant", text: randomResponse }]);
    }, 1000);
    
    setChatInput("");
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
              Inovações Tecnológicas
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Tecnologia ao serviço da sua saúde — Descubra as nossas soluções inovadoras
            </p>
          </div>
        </section>

        {/* Innovations Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <Card 
                  key={index} 
                  className="p-6 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${innovation.color} flex items-center justify-center mb-4`}>
                    <innovation.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{innovation.title}</h3>
                  <p className="text-muted-foreground mb-4">{innovation.description}</p>
                  <Button variant="outline" size="sm">Experimentar</Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Demo - Assistente Virtual */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experimente o Assistente Virtual</h2>
                <p className="text-muted-foreground">Faça perguntas sobre serviços, produtos ou agende consultas</p>
              </div>
              
              <Card className="p-6">
                <div className="space-y-4 mb-4 h-96 overflow-y-auto">
                  {chatMessages.length === 0 ? (
                    <div className="text-center text-muted-foreground py-20">
                      <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Inicie uma conversa com o nosso assistente virtual</p>
                    </div>
                  ) : (
                    chatMessages.map((msg, idx) => (
                      <div 
                        key={idx} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[70%] p-4 rounded-lg ${
                          msg.role === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted'
                        }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Digite sua mensagem..." 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                  />
                  <Button onClick={handleChatSubmit}>Enviar</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Para assistência real, contacte +244 926 149 661
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Interactive Demo - Agendamento */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Agendamento Inteligente</h2>
                <p className="text-muted-foreground">Escolha o dia e horário ideal para sua consulta</p>
              </div>
              
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <Input placeholder="Digite seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="+244" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Consulta</label>
                    <select className="w-full p-2 border rounded-lg">
                      <option>Ginecologia</option>
                      <option>Naturopatia</option>
                      <option>Consulta Geral</option>
                      <option>Teleconsulta</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Data Preferida</label>
                    <Input type="date" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Mensagem (Opcional)</label>
                    <Textarea placeholder="Descreva brevemente o motivo da consulta" rows={3} />
                  </div>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button className="flex-1">Confirmar Agendamento</Button>
                  <Button variant="outline" onClick={() => window.open('https://wa.me/244926149661', '_blank')}>
                    Agendar via WhatsApp
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Após submeter, entraremos em contacto para confirmar
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para Experimentar o Futuro da Saúde?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Entre em contacto connosco e descubra como a tecnologia pode transformar o seu cuidado de saúde.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Contactar Agora
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Innovacoes;
