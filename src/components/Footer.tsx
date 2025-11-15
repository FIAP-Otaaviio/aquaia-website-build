import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-aqua-bright to-aqua-glow bg-clip-text text-transparent mb-4">
              AQUAIA
            </h3>
            <p className="text-white/80 mb-4 max-w-md">
              Inteligência Preditiva para a Conformidade Ambiental Marítima. 
              Protegendo os ecossistemas marinhos através de tecnologia de ponta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-aqua-bright transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/solucao" className="text-white/80 hover:text-aqua-bright transition-colors">
                  Solução NEPHTIS
                </Link>
              </li>
              <li>
                <Link to="/clientes" className="text-white/80 hover:text-aqua-bright transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white/80 hover:text-aqua-bright transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-aqua-bright flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  São Paulo, SP | Santos, SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-aqua-bright flex-shrink-0" />
                <a href="mailto:contato@aquaia.com" className="text-white/80 hover:text-aqua-bright transition-colors text-sm">
                  contato@aquaia.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-aqua-bright flex-shrink-0" />
                <a href="tel:+5511999999999" className="text-white/80 hover:text-aqua-bright transition-colors text-sm">
                  +55 11 9999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} AQUAIA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
