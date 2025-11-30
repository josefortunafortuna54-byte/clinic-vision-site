import { Link } from "react-router-dom";
import { ArrowRight, Heart, Stethoscope, Pill, Video, Microscope, Leaf, Users, Bot, Calendar, Sparkles } from "lucide-react";
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
      icon: Leaf,
      title: "Naturopatia",
      description: "Tratamentos naturais e holísticos",
    },
    {
      icon: Video,
      title: "Teleconsultas",
      description: "Atendimento online com especialistas",
    },
    {
      icon: Microscope,
      title: "Análises & Ecografias",
      description: "Exames laboratoriais e diagnósticos",
    },
    {
      icon: Pill,
      title: "Farmácia Natural",
      description: "Produtos e suplementos naturais certificados",
    },
  ];

  const innovations = [
    {
      icon: Bot,
      title: "Assistente Virtual IA",
      description: "Chat inteligente disponível 24/7"
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Marque consultas online automaticamente"
    },
    {
      icon: Video,
      title: "Teleconsulta Integrada",
      description: "Consultas por vídeo seguras"
    }
  ];

  const testimonials = [
    {
      name: "Maria Costa",
      text: "Excelente atendimento! A equipa é muito profissional e atenciosa.",
      rating: 5
    },
    {
      name: "João Silva",
      text: "Os produtos naturais são de alta qualidade. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Santos",
      text: "A teleconsulta facilitou muito minha vida. Muito prático!",
      rating: 5
    }
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
              Clínica QUICEP<br />Saúde Natural com Amor
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Clínica de Saúde Reprodutiva — Tratamentos 100% naturais
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg">
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                 size="lg" 
                 variant="outline" 
                 className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-primary"
                 onClick={() => {
                   const url = 'https://wa.me/244973003455';
                   const link = document.createElement("a");
                   link.href = url;
                   link.target = "_blank";
                   link.rel = "noopener noreferrer";
                   document.body.appendChild(link);
                   link.click();
                   document.body.removeChild(link);
                 }}
               >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovations Highlight */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Inovações em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia inovadora para melhorar o seu cuidado de saúde
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/innovacoes#assistente-virtual">
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bot className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Assistente Virtual IA</h3>
                  <p className="text-muted-foreground">Chat inteligente disponível 24/7</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/innovacoes#agendamento">
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Agendamento Inteligente</h3>
                  <p className="text-muted-foreground">Marque consultas online automaticamente</p>
                </CardContent>
              </Card>
            </Link>
            
            <Link to="/innovacoes#teleconsulta">
              <Card className="card-hover text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Teleconsulta Integrada</h3>
                  <p className="text-muted-foreground">Consultas por vídeo seguras</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/innovacoes">
              <Button variant="default" size="lg">
                Ver Todas as Inovações
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Serviços Principais</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos cuidados completos de saúde natural e integrativa
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

      {/* Products Preview */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Produtos Populares</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suplementos naturais de alta qualidade para o seu bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop" 
                alt="Marion 4 Woman"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Marion 4 Woman</h3>
                <p className="text-sm text-muted-foreground mb-4">Saúde reprodutiva feminina</p>
                <Button variant="outline" size="sm" className="w-full">Ver Detalhes</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop" 
                alt="P.I.D Syrup"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">P.I.D Syrup</h3>
                <p className="text-sm text-muted-foreground mb-4">Tratamento herbal natural</p>
                <Button variant="outline" size="sm" className="w-full">Ver Detalhes</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden card-hover">
              <img 
                src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=300&fit=crop" 
                alt="ZAIN Hormone Imbalance"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">ZAIN Hormone</h3>
                <p className="text-sm text-muted-foreground mb-4">Equilíbrio hormonal feminino</p>
                <Button variant="outline" size="sm" className="w-full">Ver Detalhes</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/produtos">
              <Button variant="default" size="lg">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Sobre a Clínica QUICEP
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Fundada com a missão de proporcionar cuidados de saúde reprodutiva naturais e integrais, a Clínica QUICEP é especializada em saúde feminina e masculina.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Combinamos naturopatia, tratamentos naturais e tecnologia para oferecer o melhor em saúde reprodutiva. Cada atendimento é feito com amor, dedicação e respeito.
              </p>
              <Link to="/sobre">
                <Button variant="default" size="lg">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="bg-primary/5 rounded-2xl aspect-square flex items-center justify-center p-8">
              <div className="text-center">
                <Heart className="h-32 w-32 text-primary mx-auto mb-6" />
                <p className="text-2xl font-poppins font-bold text-primary">Saúde Natural com Amor</p>
                <p className="text-muted-foreground mt-2">Cuidado integral para você</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">O Que Dizem Nossos Pacientes</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Depoimentos de quem confia na Clínica QUICEP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="mb-4 text-white/90">"{testimonial.text}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
