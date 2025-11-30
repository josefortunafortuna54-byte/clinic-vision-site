import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contactos = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo seu contacto. Responderemos em breve.",
    });
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
              Contactos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Estamos aqui para ajudar. Entre em contacto connosco
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="p-6 text-center card-hover">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Rua da Fesa, Vila do Gamek<br />
                  Município da Samba<br />
                  Próximo ao Café da Vila
                </p>
              </Card>

              <Card className="p-6 text-center card-hover">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Telefones / WhatsApp</h3>
                <div className="space-y-1 mb-3">
                  <a href="tel:+244973003455" className="text-sm text-primary hover:underline block">
                    973 003 455 / 957 600 902
                  </a>
                  <a href="tel:+244956166491" className="text-sm text-primary hover:underline block">
                    956 166 491 / 957 600 092
                  </a>
                </div>
                <Button 
                   size="sm" 
                   variant="outline"
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
                  Abrir WhatsApp
                </Button>
              </Card>

              <Card className="p-6 text-center card-hover">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Email</h3>
                <a 
                  href="mailto:quicepquicep@gmail.com" 
                  className="text-sm text-primary hover:underline"
                >
                  quicepquicep@gmail.com
                </a>
              </Card>

              <Card className="p-6 text-center card-hover">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Horário</h3>
                <p className="text-sm text-muted-foreground">
                  Domingo - Quinta: 08:00 - 17:00<br />
                  Sexta-feira: 08:00 - 14:00<br />
                  Feriados: 08:00 - 14:00<br />
                  <span className="mt-2 block font-semibold">Sábado: Encerrado</span>
                </p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Envie-nos uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <Input placeholder="Digite seu nome" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="seu@email.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="+244" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Assunto *</label>
                    <Input placeholder="Assunto da mensagem" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem *</label>
                    <Textarea 
                      placeholder="Digite sua mensagem..." 
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>

              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Localização</h2>
                <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.631743717935!2d13.229415!3d-8.838333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTAnMTguMCJTIDEzwrAxMyc0NS45IkU!5e0!3m2!1spt-PT!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-4"
                  onClick={() => window.open('https://maps.google.com/?q=Rua+da+Fesa+Gamek+Vila+Luanda', '_blank')}
                >
                  Traçar Rota no Google Maps
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-spacing bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prefere Agendar Directamente?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Entre em contacto via WhatsApp para agendamento rápido e fácil.
            </p>
            <Button 
               size="lg" 
               variant="secondary" 
               className="text-lg px-8"
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
              Contactar via WhatsApp
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contactos;
