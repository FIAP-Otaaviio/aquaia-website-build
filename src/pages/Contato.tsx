import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contato = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-ocean-deep to-ocean-medium text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Entre em Contato
              </h1>
              <p className="text-xl text-white/90">
                Estamos prontos para transformar sua operação marítima
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-2 hover:border-accent hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-3">
                      <Mail className="h-6 w-6 text-ocean-deep" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:contato@aquaia.com" 
                      className="text-accent hover:text-aqua-glow transition-colors"
                    >
                      contato@aquaia.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-3">
                      <Phone className="h-6 w-6 text-ocean-deep" />
                    </div>
                    <CardTitle>Telefone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="tel:+5511999999999" 
                      className="text-accent hover:text-aqua-glow transition-colors"
                    >
                      +55 11 9999-9999
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-accent hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-aqua-glow rounded-lg flex items-center justify-center mb-3">
                      <MapPin className="h-6 w-6 text-ocean-deep" />
                    </div>
                    <CardTitle>Endereços</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-semibold text-ocean-deep">São Paulo</p>
                      <p className="text-sm text-muted-foreground">Hub de Tecnologia</p>
                    </div>
                    <div>
                      <p className="font-semibold text-ocean-deep">Santos</p>
                      <p className="text-sm text-muted-foreground">Centro de Operações</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-accent shadow-strong">
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie sua mensagem</CardTitle>
                    <CardDescription>
                      Preencha o formulário abaixo e entraremos em contato em breve
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Seu nome"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Empresa *</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nome da empresa"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mensagem *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Como podemos ajudar você?"
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
