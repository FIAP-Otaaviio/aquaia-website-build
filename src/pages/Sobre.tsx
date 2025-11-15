import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, History, MapPin, Users, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Sobre = () => {
  const timeline = [
    {
      year: "2025",
      phase: "Conceito",
      description: "Nascemos da necessidade de aplicar IA preditiva para resolver o desafio do compliance no setor marítimo."
    },
    {
      year: "2026-2027",
      phase: "Fundação",
      description: "Estruturamos nossas operações com duas bases estratégicas: um hub de Tecnologia em São Paulo e um Centro de Operações em Santos, no coração do setor."
    }
  ];

  const teams = [
    {
      icon: Briefcase,
      name: "Tecnologia",
      size: "15 pessoas",
      focus: "IA, Produto e Cloud"
    },
    {
      icon: MapPin,
      name: "Operações",
      size: "10 pessoas",
      focus: "Instalação e Logística (Santos)"
    },
    {
      icon: Users,
      name: "Comercial",
      size: "13 pessoas",
      focus: "Marketing B2B, Vendas e Sucesso do Cliente"
    },
    {
      icon: Target,
      name: "Administrativo",
      size: "11 pessoas",
      focus: "Suporte Operacional"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-deep to-ocean-medium text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Sobre a AQUAIA
              </h1>
              <p className="text-xl text-white/90">
                Protegendo os ecossistemas marinhos através de tecnologia de ponta
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Mission */}
              <Card className="border-2 hover:border-accent hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-aqua-glow rounded-xl flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-ocean-deep" />
                  </div>
                  <CardTitle className="text-3xl">Nossa Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Proteger os ecossistemas marinhos através de tecnologia de ponta, capacitando empresas a 
                    operarem de forma sustentável e em compliance total com regulamentações ambientais globais.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-2 hover:border-accent hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-aqua-glow rounded-xl flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-ocean-deep" />
                  </div>
                  <CardTitle className="text-3xl">Nossa Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Ser a plataforma global líder em inteligência oceânica até 2030, presente em 50+ países e 
                    reconhecida pela ONU como aliada estratégica na preservação dos Objetivos de Desenvolvimento 
                    Sustentável (ODS 14).
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* History Timeline */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <History className="h-12 w-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Nossa História</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Uma jornada de inovação e compromisso com o futuro dos oceanos
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 pb-12 last:pb-0">
                    {/* Timeline Line */}
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-accent/30" />
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-2 w-8 h-8 bg-gradient-to-br from-accent to-aqua-glow rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>

                    <Card className="ml-4 hover:shadow-medium transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-accent">{item.year}</span>
                          <span className="text-lg font-semibold text-muted-foreground">• {item.phase}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Structure */}
            <div className="mb-16">
              <Card className="bg-gradient-to-br from-ocean-light to-muted border-2 border-accent/20">
                <CardHeader className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-3xl">Nossa Estrutura</CardTitle>
                  <CardDescription className="text-lg">
                    Duas sedes estratégicas para máxima eficiência
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <div className="bg-background p-6 rounded-lg border-2 border-ocean-medium">
                      <h4 className="font-bold text-xl mb-2 text-ocean-deep">São Paulo - SP</h4>
                      <p className="text-muted-foreground">
                        Hub de Tecnologia focado em desenvolvimento de IA, produto e infraestrutura cloud
                      </p>
                    </div>
                    <div className="bg-background p-6 rounded-lg border-2 border-ocean-medium">
                      <h4 className="font-bold text-xl mb-2 text-ocean-deep">Santos - SP</h4>
                      <p className="text-muted-foreground">
                        Centro de Operações para instalação rápida e suporte técnico no coração do setor portuário
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Teams */}
            <div>
              <div className="text-center mb-12">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Nossos Times</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Estamos crescendo. Nossas vagas se concentram em 4 grandes áreas:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teams.map((team, index) => {
                  const Icon = team.icon;
                  return (
                    <Card key={index} className="hover:shadow-medium hover:border-accent transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mx-auto mb-3">
                          <Icon className="h-6 w-6 text-ocean-deep" />
                        </div>
                        <CardTitle className="text-xl">{team.name}</CardTitle>
                        <CardDescription className="font-semibold text-accent">
                          {team.size}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-muted-foreground">{team.focus}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-ocean-deep to-ocean-medium rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Junte-se à Vanguarda da Blue Economy
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Faça parte de um time que está revolucionando o compliance ambiental marítimo
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">
                  Entre em Contato
                </Link>
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
