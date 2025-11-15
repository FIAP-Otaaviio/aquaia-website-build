import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor, Leaf, Building2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portImage from "@/assets/port-operations.jpg";

const Clientes = () => {
  const sectors = [
    {
      icon: Building2,
      title: "Diretores de Operações Portuárias",
      pain: "Gestão de risco de navios terceiros, congestionamento, e compliance da área portuária.",
      solution: "Tenha visibilidade total das operações no seu porto e garanta o compliance de todas as embarcações atracadas.",
      benefits: [
        "Monitoramento em tempo real de todas as embarcações",
        "Alertas automáticos de não conformidade",
        "Relatórios consolidados para auditorias",
        "Redução de riscos operacionais"
      ]
    },
    {
      icon: Leaf,
      title: "Gerentes de Sustentabilidade (ESG)",
      pain: "Coleta manual de dados para relatórios, dificuldade em provar metas de ESG, pressão de investidores.",
      solution: "Automatize seus relatórios de sustentabilidade. Use dados invioláveis do NEPHTIS para comprovar suas metas e melhorar seu rating ESG.",
      benefits: [
        "Relatórios ESG automatizados e padronizados",
        "Dados auditáveis e rastreáveis",
        "Comprovação de metas ambientais",
        "Melhoria no rating de sustentabilidade"
      ]
    },
    {
      icon: Anchor,
      title: "CEOs e Diretores de Armadores",
      pain: "Risco de multas milionárias, custos de manutenção reativa, danos à reputação da marca.",
      solution: "Proteja sua frota. Implemente manutenção preditiva, evite paradas não programadas e garanta que sua operação seja 100% compliance.",
      benefits: [
        "Prevenção de multas e penalidades",
        "Redução de custos com manutenção reativa",
        "Proteção da reputação corporativa",
        "Otimização operacional da frota"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={portImage} 
              alt="Port Operations" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Soluções Focadas na Realidade da{" "}
                <span className="bg-gradient-to-r from-ocean-medium to-aqua-bright bg-clip-text text-transparent">
                  Economia Azul
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Não oferecemos uma solução genérica. Falamos a sua língua.
              </p>
            </div>
          </div>
        </section>

        {/* Sectors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <Card 
                    key={index} 
                    className="border-2 hover:border-accent hover:shadow-strong transition-all duration-300 overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Left Column - Info */}
                      <div>
                        <CardHeader>
                          <div className="w-16 h-16 bg-gradient-to-br from-accent to-aqua-glow rounded-xl flex items-center justify-center mb-4">
                            <Icon className="h-8 w-8 text-ocean-deep" />
                          </div>
                          <CardTitle className="text-2xl sm:text-3xl">{sector.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-6">
                            <h4 className="font-semibold text-lg mb-2 text-destructive">Desafio:</h4>
                            <p className="text-muted-foreground">{sector.pain}</p>
                          </div>
                          <div className="bg-gradient-to-br from-ocean-light to-muted p-6 rounded-lg">
                            <h4 className="font-semibold text-lg mb-2 text-ocean-deep">Solução NEPHTIS:</h4>
                            <p className="text-foreground">{sector.solution}</p>
                          </div>
                        </CardContent>
                      </div>

                      {/* Right Column - Benefits */}
                      <div className="bg-muted p-8 flex flex-col justify-center">
                        <h4 className="font-semibold text-xl mb-6 text-center">Benefícios Principais</h4>
                        <ul className="space-y-4">
                          {sector.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Case Studies CTA */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-ocean-deep to-ocean-medium border-0 text-white">
                <CardHeader>
                  <CardTitle className="text-3xl">Quer ver resultados reais?</CardTitle>
                  <CardDescription className="text-white/80 text-lg">
                    Descubra como empresas do setor marítimo estão transformando suas operações com NEPHTIS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/contato">
                        Falar com Especialista
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      asChild 
                      className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                    >
                      <Link to="/solucao">
                        Conhecer a Solução
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Clientes;
