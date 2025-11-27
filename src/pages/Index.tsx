import { Link } from "react-router-dom";
import { ArrowRight, Heart, Stethoscope, Pill, Video, Microscope, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Gerais",
      description: "Atendimento médico completo para toda a família",
    },
    {
      icon: Heart,
      title: "Ginecologia",
      description: "Cuidados especializados em saúde feminina",
    },
    {
      icon: Video,
      title: "Consultas Online",
      description: "Atendimento à distância com tecnologia segura",
    },
    {
      icon: Microscope,
      title: "Análises Clínicas",
      description: "Exames laboratoriais com resultados rápidos",
    },
    {
      icon: Leaf,
      title: "Farmácia Natural",
      description: "Produtos naturais e suplementos de qualidade",
    },
    {
      icon: Users,
      title: "Aconselhamento",
      description: "Suporte terapêutico e psicológico",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative hero-gradient text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMmMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6 leading-tight">
              Cuidados de Saúde que Transformam Vidas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Tecnologia inovadora e atendimento humanizado para toda a família
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Marcar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-section-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços de saúde com qualidade e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-border/50 shadow-soft">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button variant="outline" size="lg">
                Ver Todos os Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Highlight */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Inovação em Saúde
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Descubra como estamos revolucionando o atendimento médico com IA, agendamento inteligente e muito mais.
              </p>
              <Link to="/innovacoes">
                <Button size="lg" variant="secondary">
                  Conheça Nossas Inovações
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-spacing bg-section-bg">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Sobre a Nossa Clínica
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Somos uma clínica moderna dedicada a proporcionar cuidados de saúde de excelência, 
                combinando experiência médica com as mais recentes tecnologias.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipa multidisciplinar trabalha com paixão para garantir que cada paciente 
                receba o melhor atendimento possível.
              </p>
              <Link to="/sobre">
                <Button variant="default" size="lg">
                  Saber Mais Sobre Nós
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center p-8">
                <Heart className="h-24 w-24 text-primary mx-auto mb-4" />
                <p className="text-xl font-poppins font-semibold">Cuidado com Paixão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
