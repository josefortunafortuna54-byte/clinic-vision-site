import { Users, Target, Eye, Heart, Award, Calendar, Phone, Mail, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

const values = [
  { icon: Heart, title: "Amor e Cuidado", description: "Tratamos cada paciente com amor, respeito e dedicação integral." },
  { icon: Award, title: "Excelência", description: "Comprometidos com os mais altos padrões de qualidade e profissionalismo." },
  { icon: Users, title: "Humanização", description: "Atendimento personalizado e humanizado em todas as interações." },
  { icon: Target, title: "Inovação", description: "Tecnologia e métodos naturais trabalhando em harmonia." },
];

const Sobre = () => {
  const { data: conteudo, isLoading: loadingConteudo } = useQuery({
    queryKey: ["sobre_conteudo"],
    queryFn: async () => {
      const { data, error } = await supabase.from("sobre_conteudo").select("*").limit(1).single();
      if (error) throw error;
      return data;
    },
  });

  const { data: equipa, isLoading: loadingEquipa } = useQuery({
    queryKey: ["equipa"],
    queryFn: async () => {
      const { data, error } = await supabase.from("equipa").select("*").order("ordem");
      if (error) throw error;
      return data;
    },
  });

  const { data: config } = useQuery({
    queryKey: ["configuracoes_clinica"],
    queryFn: async () => {
      const { data, error } = await supabase.from("configuracoes_clinica").select("*").limit(1).single();
      if (error) throw error;
      return data;
    },
  });

  // Parse jornada text into timeline items
  const timeline = conteudo?.jornada
    ?.split("\n")
    .filter((line: string) => line.trim())
    .map((line: string) => {
      const parts = line.split(" - ");
      return { year: parts[0]?.trim(), event: parts.slice(1).join(" - ").trim() };
    }) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />

      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero */}
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
              {loadingConteudo ? (
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>
              ) : (
                conteudo?.historia?.split("\n\n").map((p: string, i: number) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
                ))
              )}
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
            {loadingEquipa ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-card rounded-lg overflow-hidden">
                    <Skeleton className="w-full h-64" />
                    <div className="p-6 space-y-2">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {equipa?.map((member, index) => (
                  <div key={member.id} className="bg-card rounded-lg overflow-hidden card-hover">
                    <img
                      src={member.foto_url || "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"}
                      alt={member.nome}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{member.nome}</h3>
                      <p className="text-primary font-medium mb-1">{member.cargo}</p>
                      <p className="text-sm text-muted-foreground">{member.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Timeline / Jornada */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">A Nossa Jornada</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item: { year: string; event: string }, index: number) => (
                  <div key={index} className="flex gap-6 items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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

        {/* Contactos da Clínica */}
        {config && (
          <section className="section-spacing">
            <div className="container-custom">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Informações de Contacto</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {config.telefone && (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{config.telefone}</span>
                    </div>
                  )}
                  {config.email && (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{config.email}</span>
                    </div>
                  )}
                  {config.endereco && (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{config.endereco}</span>
                    </div>
                  )}
                  {config.horario && (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{config.horario}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Cuidar da Sua Saúde?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Marque a sua consulta hoje e descubra como podemos ajudar no seu bem-estar integral.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">Agendar Consulta</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sobre;
