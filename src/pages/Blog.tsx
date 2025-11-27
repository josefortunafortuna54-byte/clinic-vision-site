import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Benefícios da Naturopatia na Saúde Feminina",
      excerpt: "Descubra como a naturopatia pode ajudar no equilíbrio hormonal e bem-estar feminino através de métodos naturais e eficazes.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop",
      author: "Dra. Maria Silva",
      date: "15 Nov 2024",
      category: "Naturopatia"
    },
    {
      id: 2,
      title: "Alimentação Natural: Guia Completo",
      excerpt: "Um guia prático sobre como incorporar alimentos naturais e orgânicos na sua dieta diária para melhorar a saúde.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
      author: "Dra. Ana Costa",
      date: "10 Nov 2024",
      category: "Nutrição"
    },
    {
      id: 3,
      title: "Saúde Reprodutiva: Cuidados Essenciais",
      excerpt: "Tudo o que precisa saber sobre cuidados com a saúde reprodutiva e como prevenir problemas comuns.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      author: "Dr. João Santos",
      date: "5 Nov 2024",
      category: "Ginecologia"
    },
    {
      id: 4,
      title: "Terapias Naturais para Gestão do Stress",
      excerpt: "Aprenda técnicas naturais e terapias alternativas para reduzir o stress e melhorar a qualidade de vida.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=500&fit=crop",
      author: "Dr. Paulo Mendes",
      date: "1 Nov 2024",
      category: "Terapias"
    },
    {
      id: 5,
      title: "Suplementos Naturais: Como Escolher",
      excerpt: "Guia completo sobre como escolher suplementos naturais de qualidade e adequados às suas necessidades.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=500&fit=crop",
      author: "Equipa QUICEP",
      date: "28 Out 2024",
      category: "Produtos"
    },
    {
      id: 6,
      title: "Teleconsulta: O Futuro da Saúde",
      excerpt: "Como as teleconsultas estão revolucionando o acesso aos cuidados de saúde e quando são a melhor opção.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
      author: "Equipa QUICEP",
      date: "25 Out 2024",
      category: "Inovação"
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
              Blog & Notícias
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl animate-fade-in">
              Artigos, dicas e novidades sobre saúde natural e bem-estar
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-spacing">
          <div className="container-custom">
            <Card className="overflow-hidden card-hover">
              <div className="grid md:grid-cols-2 gap-0">
                <img 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  className="w-full h-full object-cover min-h-[300px]"
                />
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-primary mb-3">{posts[0].category}</span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-muted-foreground mb-6 text-lg">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{posts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{posts[0].date}</span>
                    </div>
                  </div>
                  <Button>
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="section-spacing bg-muted/30">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Artigos Recentes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post, index) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Ler Mais
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-spacing">
          <div className="container-custom">
            <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Receba Novidades no Seu Email
              </h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Subscreva a nossa newsletter e receba artigos, dicas e promoções exclusivas.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input 
                  type="email" 
                  placeholder="Seu email" 
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button size="lg" variant="secondary">
                  Subscrever
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
