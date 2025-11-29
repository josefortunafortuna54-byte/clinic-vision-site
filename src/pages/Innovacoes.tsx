import { Bot, Calendar, Video, User, Map, Stethoscope, QrCode, Mic, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AIChat from "@/components/AIChat";
import AppointmentForm from "@/components/AppointmentForm";
import TeleconsultInterface from "@/components/TeleconsultInterface";
import InteractiveBodyMap from "@/components/InteractiveBodyMap";
import PriceTable from "@/components/PriceTable";

const Innovacoes = () => {
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
        <section id="assistente-virtual" className="section-spacing bg-muted/30 scroll-mt-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Bot className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Assistente Virtual com IA</h2>
                <p className="text-muted-foreground">Chat inteligente com respostas em tempo real sobre serviços, produtos e agendamentos</p>
              </div>
              
              <AIChat />
            </div>
          </div>
        </section>

        {/* Interactive Demo - Agendamento */}
        <section id="agendamento" className="section-spacing scroll-mt-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Agendamento Inteligente</h2>
                <p className="text-muted-foreground">Sistema automatizado que salva seus dados e envia direto para WhatsApp</p>
              </div>
              
              <AppointmentForm />
            </div>
          </div>
        </section>

        {/* Interactive Demo - Teleconsulta */}
        <section id="teleconsulta" className="section-spacing bg-muted/30 scroll-mt-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Video className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Teleconsulta Integrada</h2>
                <p className="text-muted-foreground">Consulte nossos especialistas por videochamada de qualquer lugar</p>
              </div>
              
              <TeleconsultInterface />
            </div>
          </div>
        </section>

        {/* Interactive Demo - Mapa de Saúde */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Map className="h-16 w-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Mapa Interativo da Saúde</h2>
                <p className="text-muted-foreground">Clique em partes do corpo para ver tratamentos e produtos recomendados</p>
              </div>
              
              <InteractiveBodyMap />
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <PriceTable />
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
