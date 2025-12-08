import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Stethoscope, Pill, Video, Microscope, Leaf, Users, Bot, Calendar, Sparkles, Star, ShoppingCart, Play, Headphones, MessageCircle, X } from "lucide-react";
import spermPowerImg from "@/assets/sperm-power.jpg";
import cd4ImmuneImg from "@/assets/cd4-immune.jpg";
import afyaUbongoImg from "@/assets/afya-ubongo.jpg";
import yaBongoImg from "@/assets/ya-bongo.jpg";
import loveKingdomImg from "@/assets/love-kingdom.jpg";
import babalaoOilImg from "@/assets/babalao-oil.jpg";
import royalJellyImg from "@/assets/royal-jelly.jpg";
import ginsengImg from "@/assets/ginseng.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [videoModal, setVideoModal] = useState<{ open: boolean; youtubeId: string; title: string }>({
    open: false,
    youtubeId: "",
    title: ""
  });
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

  const popularProducts = [
    { id: 1, name: "SPERM POWER", category: "Saúde Masculina", description: "Suplemento premium para fertilidade masculina.", image: spermPowerImg, price: "18.000 Kz" },
    { id: 2, name: "CD4 Immune", category: "Imunidade", description: "Suporte premium ao sistema imunológico.", image: cd4ImmuneImg, price: "18.000 Kz" },
    { id: 3, name: "AFYA UBONGO", category: "Cognitivo", description: "Suplemento premium para saúde cerebral.", image: afyaUbongoImg, price: "18.000 Kz" },
    { id: 4, name: "YA BONGO", category: "Cognitivo", description: "Suplemento premium para função cerebral.", image: yaBongoImg, price: "18.000 Kz" },
    { id: 5, name: "LOVE KINGDOM", category: "Energia & Vitalidade", description: "Suplemento premium para vitalidade e intimidade.", image: loveKingdomImg, price: "18.000 Kz" },
    { id: 6, name: "BABALAO Oil", category: "Energia & Vitalidade", description: "Óleo natural para massagem e bem-estar.", image: babalaoOilImg, price: "18.000 Kz" },
    { id: 7, name: "Royal Jelly", category: "Energia & Vitalidade", description: "Geleia real para energia e vitalidade.", image: royalJellyImg, price: "18.000 Kz" },
    { id: 8, name: "Ginseng", category: "Energia & Vitalidade", description: "Raiz de ginseng para energia e resistência.", image: ginsengImg, price: "18.000 Kz" },
  ];

  // Helper function to get YouTube thumbnail from video ID
  const getYouTubeThumbnail = (videoId: string, quality: 'maxresdefault' | 'hqdefault' | 'mqdefault' | 'sddefault' = 'hqdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  };

  const podcastEpisodes = [
    {
      id: 1,
      title: "Saúde Reprodutiva Masculina",
      description: "Dicas para melhorar a fertilidade masculina naturalmente.",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      get thumbnail() { return getYouTubeThumbnail(this.youtubeId); }
    },
    {
      id: 2,
      title: "Cuidados na Gravidez",
      description: "Orientações sobre alimentação e bem-estar durante a gestação.",
      youtubeId: "jNQXAC9IVRw", // Replace with actual YouTube video ID
      get thumbnail() { return getYouTubeThumbnail(this.youtubeId); }
    },
    {
      id: 3,
      title: "Terapias Naturais",
      description: "Como as terapias naturais podem ajudar na sua saúde.",
      youtubeId: "kJQP7kiw5Fk", // Replace with actual YouTube video ID
      get thumbnail() { return getYouTubeThumbnail(this.youtubeId); }
    },
    {
      id: 4,
      title: "Menopausa e Bem-Estar",
      description: "Dicas naturais para lidar com as mudanças hormonais.",
      youtubeId: "9bZkp7q19f0", // Replace with actual YouTube video ID
      get thumbnail() { return getYouTubeThumbnail(this.youtubeId); }
    }
  ];

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWhatsAppVideo = (episodeTitle: string) => {
    const message = `Olá! Assisti ao vídeo "${episodeTitle}" no site da Clínica Quicep e gostaria de saber mais sobre o assunto abordado.`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

      {/* Popular Products Section */}
      <section className="section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold">Produtos Populares</h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Produtos premium de alta qualidade para o seu bem-estar
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden card-hover border-2 border-primary/20">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-yellow-500 text-yellow-950 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Popular
                  </span>
                </div>
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-primary">{product.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" onClick={() => handleWhatsAppOrder(product.name)}>
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Pedir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      {/* Institutional Video Section */}
      <section className="section-spacing bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="text-center mb-10">
            <Video className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Conheça o Espaço da Clínica Quicep</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja onde realizamos consultas, terapias e tratamentos tradicionais e modernos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <Play className="h-10 w-10 text-primary ml-1" />
                  </div>
                  <p className="text-white font-medium text-lg">Clique para assistir</p>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=450&fit=crop" 
                alt="Clínica Quicep - Espaço"
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                size="lg" 
                onClick={() => openWhatsApp("Olá! Gostaria de agendar uma visita à Clínica Quicep.")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Visita
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => openWhatsApp("Olá! Gostaria de falar com um atendente da Clínica Quicep.")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com Atendente
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Podcasts & Interviews Section */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <Headphones className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">Entrevistas e Podcasts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Histórias reais, conhecimento e saúde ao seu alcance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcastEpisodes.map((episode) => (
              <Card key={episode.id} className="overflow-hidden card-hover group">
                <div 
                  className="relative aspect-video cursor-pointer"
                  onClick={() => setVideoModal({ open: true, youtubeId: episode.youtubeId, title: episode.title })}
                >
                  <img 
                    src={episode.thumbnail} 
                    alt={episode.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="h-7 w-7 text-primary ml-1" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{episode.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{episode.description}</p>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => setVideoModal({ open: true, youtubeId: episode.youtubeId, title: episode.title })}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Assistir
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleWhatsAppVideo(episode.title)}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={videoModal.open} onOpenChange={(open) => setVideoModal({ ...videoModal, open })}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>{videoModal.title}</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full">
            {videoModal.open && (
              <iframe
                src={`https://www.youtube.com/embed/${videoModal.youtubeId}?autoplay=1`}
                title={videoModal.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
          <div className="p-4 pt-2">
            <Button 
              className="w-full"
              onClick={() => {
                handleWhatsAppVideo(videoModal.title);
                setVideoModal({ ...videoModal, open: false });
              }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Saber Mais via WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* About Preview */}
      <section className="section-spacing bg-muted/30">
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
