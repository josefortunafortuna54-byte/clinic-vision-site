import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Clínica Saúde Integral</h3>
            <p className="text-background/80 mb-4">
              Cuidados de saúde modernos com tecnologia inovadora e atendimento humanizado.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-background/80 hover:text-background transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-background/80 hover:text-background transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-background/80 hover:text-background transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/innovacoes" className="text-background/80 hover:text-background transition-colors">
                  Inovações
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-background/80">Maputo, Moçambique</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-background/80">+258 84 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-background/80">info@clinica.co.mz</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Horário</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p className="font-medium">Segunda - Sexta</p>
                  <p>08:00 - 18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <div className="text-background/80">
                  <p className="font-medium">Sábado</p>
                  <p>08:00 - 13:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Clínica Saúde Integral. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
