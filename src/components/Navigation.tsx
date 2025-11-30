import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoQuicep from "@/assets/logo-quicep.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Inovações", path: "/innovacoes" },
    { name: "Blog", path: "/blog" },
    { name: "Contactos", path: "/contactos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border shadow-soft">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container-custom flex flex-wrap items-center justify-center md:justify-end gap-4">
          <a href="tel:+244973003455" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            📞 973 003 455 / 957 600 902
          </a>
          <a href="mailto:quicepquicep@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            ✉️ quicepquicep@gmail.com
          </a>
        </div>
      </div>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoQuicep} 
              alt="Clínica QUICEP Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="ml-4">Marcar Consulta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full mt-4">Marcar Consulta</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
