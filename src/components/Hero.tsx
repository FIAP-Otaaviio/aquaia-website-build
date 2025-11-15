import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, TrendingUp, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-ocean-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Ocean Technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/95 via-ocean-deep/90 to-ocean-medium/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-aqua-bright/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-aqua-bright/10 backdrop-blur-sm border border-aqua-bright/20 rounded-full px-4 py-2 mb-8">
            <Shield className="h-4 w-4 text-aqua-bright" />
            <span className="text-sm font-medium text-aqua-bright">
              Tecnologia Preditiva para Compliance Marítimo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">AQUAIA:</span>
            <br />
            <span className="bg-gradient-to-r from-aqua-bright to-aqua-glow bg-clip-text text-transparent">
              Inteligência Preditiva
            </span>
            <br />
            <span className="text-white">para a Conformidade Ambiental Marítima</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O setor marítimo enfrenta pressão regulatória (ESG, IMO) e multas milionárias por "cegueira operacional". 
            Monitorar o compliance é complexo, manual e reativo.
          </p>

          {/* Solution Statement */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-white text-lg font-medium">
              <span className="text-aqua-bright font-bold">Conheça o NEPHTIS:</span> O sistema de IA e IoT que prevê 
              falhas de equipamentos e despejos ilegais antes que eles aconteçam.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
              <Link to="/solucao">
                Conheça o NEPHTIS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Link to="/contato">
                Fale com Especialista
              </Link>
            </Button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <Shield className="h-8 w-8 text-aqua-bright mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Evite Multas</h3>
              <p className="text-white/70 text-sm">
                Mitigue riscos financeiros e operacionais
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <CheckCircle className="h-8 w-8 text-aqua-bright mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Comprove seu Compliance</h3>
              <p className="text-white/70 text-sm">
                Gere relatórios de ESG automáticos
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <TrendingUp className="h-8 w-8 text-aqua-bright mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Ganhe Eficiência</h3>
              <p className="text-white/70 text-sm">
                Use IA Preditiva para otimizar a manutenção
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-aqua-bright rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
