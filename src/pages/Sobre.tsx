import { Users, Target, Eye, Heart, Award, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

const Sobre = () => {
  const team = [
    {
      name: "Dra. Maria Silva",
      role: "Diretora Clínica",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
      bio: "Especialista em Naturopatia e Medicina Integrativa"
    },
    {
      name: "Dr. João Santos",
      role: "Ginecologista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
      bio: "Especialista em Saúde Reprodutiva e Ginecologia"
    },
    {
      name: "Dra. Ana Costa",
      role: "Nutricionista",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
      bio: "Especialista em Nutrição Natural e Terapêutica"
    },
    {
      name: "Dr. Paulo Mendes",
      role: "Terapeuta",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
      bio: "Especialista em Terapias Naturais e Aconselhamento"
    }
  ];

  const timeline = [
    { year: "2015", event: "Fundação da Clínica QUICEP" },
    { year: "2017", event: "Expansão dos serviços de Naturopatia" },
    { year: "2019", event: "Inauguração da Farmácia Natural" },
    { year: "2021", event: "Implementação de Teleconsultas" },
    { year: "2023", event: "Lançamento do Assistente Virtual IA" },
    { year: "2024", event: "Reconhecimento como Centro de Excelência" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Amor e Cuidado",
      description: "Tratamos cada paciente com amor, respeito e dedicação integral."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos com os mais altos padrões de qualidade e profissionalismo."
    },
    {
      icon: Users,
      title: "Humanização",
      description: "Atendimento personalizado e humanizado em todas as interações."
    },
    {
      icon: Target,
      title: "Inovação",
      description: "Tecnologia e métodos naturais trabalhando em harmonia."
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
              Sobre a Clínica QUICEP
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Saúde Natural com Amor — A sua parceira em saúde integral
            </p>
          </div>
        </section>

        {/* História */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">A Nossa História</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                A Clínica QUICEP nasceu em 2015 com a missão de proporcionar cuidados de saúde naturais e integrais à comunidade de Luanda. Fundada por profissionais apaixonados pela medicina natural e pelo bem-estar holístico, a clínica rapidamente se tornou uma referência em saúde integrativa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ao longo dos anos, expandimos os nossos serviços para incluir ginecologia, naturopatia, farmácia natural e inovações tecnológicas como teleconsultas e assistente virtual. Mantemos sempre o nosso compromisso com o cuidado personalizado e o amor em cada atendimento.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoje, somos orgulhosamente reconhecidos como um centro de excelência em saúde natural, servindo milhares de pacientes com dedicação e profissionalismo.
              </p>
            </div>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Proporcionar cuidados de saúde naturais e integrais, combinando tradição e inovação para promover o bem-estar completo dos nossos pacientes.
                </p>
              </div>
              <div className="text-center p-6">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a clínica de referência em saúde natural e integrativa em Angola, reconhecida pela excelência, inovação e amor no cuidado.
                </p>
              </div>
              <div className="text-center p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Amor, excelência, humanização, inovação, ética e compromisso com o bem-estar integral de cada pessoa.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg card-hover">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipa */}
        <section className="section-spacing">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">A Nossa Equipa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card rounded-lg overflow-hidden card-hover">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">A Nossa Jornada</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex gap-6 items-start animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        <Calendar className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="bg-card p-6 rounded-lg card-hover">
                        <span className="text-2xl font-bold text-primary">{item.year}</span>
                        <p className="text-lg mt-2">{item.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para Cuidar da Sua Saúde?
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Marque a sua consulta hoje e descubra como podemos ajudar no seu bem-estar integral.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Agendar Consulta
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
