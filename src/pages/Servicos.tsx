import { Heart, Stethoscope, Video, Microscope, Leaf, Users, Baby, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Servicos = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Gerais",
      description: "Atendimento médico completo com profissionais experientes para diagnóstico, tratamento e acompanhamento de saúde geral.",
      features: ["Check-up completo", "Diagnóstico preciso", "Planos de tratamento personalizados"],
    },
    {
      icon: Heart,
      title: "Ginecologia",
      description: "Cuidados especializados em saúde da mulher, desde consultas de rotina até tratamentos específicos.",
      features: ["Exames preventivos", "Acompanhamento pré-natal", "Saúde reprodutiva"],
    },
    {
      icon: Baby,
      title: "Saúde Sexual e Reprodutiva",
      description: "Serviços dedicados ao bem-estar sexual e planeamento familiar com abordagem moderna e confidencial.",
      features: ["Planeamento familiar", "Tratamentos de fertilidade", "Aconselhamento"],
    },
    {
      icon: Video,
      title: "Consultas Online",
      description: "Atendimento médico à distância com tecnologia segura, permitindo consultas no conforto da sua casa.",
      features: ["Videochamadas seguras", "Prescrição digital", "Disponível 24/7"],
    },
    {
      icon: Microscope,
      title: "Análises Clínicas",
      description: "Laboratório equipado com tecnologia moderna para exames precisos e resultados rápidos.",
      features: ["Análises completas", "Resultados em 24h", "Colheita ao domicílio"],
    },
    {
      icon: Leaf,
      title: "Farmácia Natural",
      description: "Produtos naturais e suplementos de alta qualidade para complementar seu tratamento de saúde.",
      features: ["Produtos certificados", "Consultoria especializada", "Soluções naturais"],
    },
    {
      icon: Brain,
      title: "Aconselhamento Terapêutico",
      description: "Suporte psicológico e emocional com profissionais qualificados para seu bem-estar mental.",
      features: ["Terapia individual", "Terapia de casal", "Gestão de stress"],
    },
    {
      icon: Users,
      title: "Medicina Familiar",
      description: "Cuidados integrados para toda a família, desde pediatria até geriatria.",
      features: ["Vacinação", "Pediatria", "Geriatria"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-white/90">
              Oferecemos uma gama completa de serviços de saúde com qualidade, inovação e humanização
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="card-hover border-border/50 shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-poppins font-semibold mb-2">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-section-bg">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Pronto para Cuidar da Sua Saúde?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Marque sua consulta hoje e experimente cuidados de saúde de excelência
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105">
              Marcar Consulta Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
