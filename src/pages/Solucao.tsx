import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cpu, Cloud, Brain, Package, Wrench, GraduationCap, FileCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import iotImage from "@/assets/iot-sensors.jpg";

const Solucao = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-deep to-ocean-medium text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                NEPHTIS - O Ecossistema Completo de Monitoramento e Compliance
              </h1>
              <p className="text-xl text-white/90">
                Como transformamos dados em previsibilidade
              </p>
            </div>
          </div>
        </section>

        {/* Components Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Hardware Component */}
              <Card className="border-2 hover:border-accent hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-ocean-deep" />
                  </div>
                  <CardTitle className="text-2xl">O Componente Físico (Hardware)</CardTitle>
                  <CardDescription className="text-base">
                    Nossos sensores IoT robustos, projetados para o ambiente marítimo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={iotImage} 
                    alt="IoT Sensors" 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground">
                    <strong>O que faz:</strong> Coleta dados em tempo real (vibração, qualidade da água, temperatura) 
                    diretamente dos seus ativos (navios, portos).
                  </p>
                </CardContent>
              </Card>

              {/* Software Component */}
              <Card className="border-2 hover:border-accent hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-ocean-deep" />
                  </div>
                  <CardTitle className="text-2xl">O Software Cloud (SaaS)</CardTitle>
                  <CardDescription className="text-base">
                    Seu Centro de Controle baseado na AWS
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-3 h-3 bg-green-accent rounded-full animate-pulse" />
                      <span className="text-sm font-medium">Sistema Online</span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Uptime</span>
                        <span className="font-semibold">99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sensores Ativos</span>
                        <span className="font-semibold">1,247</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>O que faz:</strong> Um dashboard centralizado que mostra a saúde de toda a sua frota. 
                    Armazena dados de forma segura para auditoria, exibe alertas e gera relatórios de compliance.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Component - Full Width */}
            <Card className="border-2 border-accent shadow-strong mb-16">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-ocean-deep" />
                </div>
                <CardTitle className="text-3xl">A Inteligência (IA Preditiva)</CardTitle>
                <CardDescription className="text-lg">
                  O "cérebro" do NEPHTIS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-ocean-light to-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-ocean-deep">Detecção de Anomalias</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifica padrões sutis que precedem falhas antes que aconteçam
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-ocean-light to-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-ocean-deep">Manutenção Preditiva</h4>
                    <p className="text-sm text-muted-foreground">
                      Receba alertas antecipados para prevenir despejos ilegais
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-ocean-light to-muted p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2 text-ocean-deep">Análise Contínua</h4>
                    <p className="text-sm text-muted-foreground">
                      Algoritmos em constante evolução para melhor precisão
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Soluções completas para garantir o sucesso da sua implementação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <Package className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Pacote Principal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Assinatura (SaaS + HaaS) com acesso total à plataforma
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <Wrench className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Instalação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Setup completo e integração com seus sistemas existentes
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <FileCheck className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Consultoria ESG</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Especialistas em dados de sustentabilidade e compliance
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <GraduationCap className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Treinamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Capacitação completa da sua equipe para usar o sistema
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center bg-gradient-to-r from-ocean-deep to-ocean-medium rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Pronto para transformar sua operação?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Fale com nossos especialistas e descubra como o NEPHTIS pode proteger sua frota
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contato">
                  Solicitar Demonstração
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

export default Solucao;
