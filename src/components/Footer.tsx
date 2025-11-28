import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-4">Clínica QUICEP</h3>
            <p className="text-background/80 mb-4">
              Saúde Natural com Amor — Clínica de Saúde Reprodutiva.
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
                <span className="text-background/80">Rua da Fesa, Vila do Gamek, Município da Samba, próximo ao Café da Vila</span>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+244973003455" className="text-background/80 hover:text-background transition-colors">973 003 455 / 957 600 902</a>
                </div>
                <div className="ml-7">
                  <a href="tel:+244956166491" className="text-background/80 hover:text-background transition-colors">956 166 491 / 957 600 092</a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:quicepquicep@gmail.com" className="text-background/80 hover:text-background transition-colors">quicepquicep@gmail.com</a>
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
                  <p className="font-medium">Domingo - Quinta</p>
                  <p>08:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <div className="text-background/80">
                  <p className="font-medium">Sexta-feira</p>
                  <p>08:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <div className="text-background/80">
                  <p className="font-medium">Feriados</p>
                  <p>08:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <div className="text-background/80">
                  <p className="font-medium">Sábado</p>
                  <p>Encerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
          <p>&copy; {new Date().getFullYear()} Clínica QUICEP — Saúde Natural com Amor — Tel: 973 003 455 / 957 600 902 — Email: quicepquicep@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
