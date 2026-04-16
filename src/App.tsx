/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Phone, MapPin, Instagram, Facebook, Linkedin, Menu, X, Star, CheckCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center ${className}`}>
    <img 
      src="/ba.png" 
      alt="Dr. Benjamin Amaral - Logotipo" 
      className="h-full w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">
        <Logo className="h-6 md:h-8 origin-left opacity-90" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.15em] font-semibold">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors opacity-80 hover:opacity-100">{link.label}</a>
          ))}
          <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-1 h-9 tracking-widest text-[10px] transition-all duration-300">
            Agende sua Consulta
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-primary h-10 w-10">
                  <Menu className="w-6 h-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full bg-background border-l-0 p-0 flex flex-col">
              <div className="p-6 flex justify-between items-center border-b border-border/40">
                <Logo className="scale-75 origin-left" />
                <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center gap-10 p-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-serif italic hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none w-full py-6 text-xs uppercase tracking-[0.3em] h-auto mt-4 whitespace-normal"
                  onClick={() => setIsOpen(false)}
                >
                  Agende sua Consulta
                </Button>
              </div>
              <div className="p-10 border-t border-border/40 flex justify-center gap-8">
                <Instagram className="w-5 h-5 text-muted-foreground" />
                <Facebook className="w-5 h-5 text-muted-foreground" />
                <Linkedin className="w-5 h-5 text-muted-foreground" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 text-center overflow-hidden bg-primary">
    {/* Noise Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    
    {/* Radial Glows */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.03)_0%,transparent_60%)] -z-10 pointer-events-none" />

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="z-10 w-full max-w-5xl flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Logo className="mb-6 md:mb-8 h-12 md:h-20" />
      </motion.div>

      <div className="mb-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-base md:text-lg uppercase tracking-[0.4em] text-accent font-semibold mb-6 opacity-80">
            Dr. Benjamin Amaral
          </h2>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-light uppercase tracking-tighter leading-[1.05] text-primary-foreground mb-8">
            Reabilitação <span className="font-medium text-accent">Oral de Excelência</span>
          </h1>

          <div className="flex flex-col items-center">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-primary-foreground/40 font-bold">
              Implantodontia & Estética de Alta Performance
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-8"
      >
        <Button className="bg-accent text-primary hover:bg-accent/90 rounded-full px-12 py-6 text-[11px] uppercase tracking-[0.3em] h-auto font-bold shadow-xl shadow-accent/10 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]">
          Agende sua Consulta
        </Button>
        <a 
          href="#sobre" 
          className="text-[10px] uppercase tracking-[0.4em] text-primary-foreground/30 hover:text-accent transition-all duration-300 font-bold group flex flex-col items-center"
        >
          Conheça o Studio
          <motion.div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-500 mt-1" />
        </a>
      </motion.div>
    </motion.div>
    
    {/* Floating Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center hidden md:flex"
    >
      <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent to-transparent" />
    </motion.div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-20 md:py-32 px-6 bg-primary text-primary-foreground overflow-hidden">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden bg-muted order-2 md:order-1"
      >
        <img
          src="/benja.jpg"
          alt="Dr. Benjamin Amaral"
          className="object-cover w-full h-full contrast-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="order-1 md:order-2"
      >
        <span className="text-accent uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-4 block">O Especialista</span>
        <h2 className="text-3xl md:text-5xl font-light mb-6 md:mb-8">Dr. Benjamin Amaral</h2>
        <div className="space-y-4 md:space-y-6 text-primary-foreground/80 leading-relaxed font-normal text-base md:text-lg">
          <p>
            Com mais de uma década de dedicação exclusiva à reabilitação oral, o Dr. Benjamin Amaral consolidou-se como uma referência em procedimentos de alta complexidade.
          </p>
          <p>
            Sua formação internacional e o pioneirismo em técnicas de cirurgia guiada permitem resultados de extrema precisão, minimizando o desconforto e maximizando a estética funcional.
          </p>
          <p className="hidden sm:block">
            Cada sorriso é tratado como uma obra única, onde a ciência da odontologia encontra a arte da estética, sempre pautado pela ética e pelo cuidado humano.
          </p>
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-2 gap-6 md:gap-8">
          <div>
            <span className="text-2xl md:text-3xl font-serif block mb-1">12+</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Anos de Experiência</span>
          </div>
          <div>
            <span className="text-2xl md:text-3xl font-serif block mb-1">5k+</span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Sorrisos Transformados</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Implantes de Alta Precisão",
      description: "Especialista em implantes com foco em previsibilidade e segurança. Utilizamos as melhores tecnologias para garantir um sorriso funcional e natural, com foco no bem-estar do paciente.",
      tag: "Tecnologia SIN e Conforto",
      icon: "01"
    },
    {
      title: "Odontologia Digital",
      description: "Pioneirismo no Vale do Paraíba em Cirurgia Guiada Virtual. Realizamos o planejamento completo do seu tratamento em ambiente digital, permitindo procedimentos mais rápidos e sem cortes desnecessários.",
      tag: "Planejamento 3D e Cirurgia Guiada",
      icon: "02"
    },
    {
      title: "Reabilitação Oral",
      description: "Tratamentos complexos que devolvem a função mastigatória e a harmonia do sorriso. Uma abordagem completa que une tecnologia de ponta e cuidado humanizado.",
      tag: "Saúde e Estética Funcional",
      icon: "03"
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-4 block"
          >
            Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light leading-tight text-primary"
          >
            Excelência técnica em <br /> <span className="italic font-serif">cada detalhe.</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border border-border/50 bg-card rounded-3xl overflow-hidden shadow-sm">
                <CardContent className="p-8 md:p-10 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                      {service.tag}
                    </span>
                    <span className="font-serif text-2xl text-muted-foreground/20">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif mb-4 text-primary">
                    {service.title}
                  </h3>
                  
                  <Separator className="mb-6 bg-border/40" />
                  
                  <p className="text-muted-foreground font-normal leading-relaxed text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Excelente profissional! Fiz meus implantes com o Dr. Benjamin e a experiência foi impecável. Muito atencioso, técnico e o resultado ficou extremamente natural. Recomendo a todos.",
      author: "Mariana Santos",
      date: "há 1 mês",
      rating: 5,
    },
    {
      quote: "Atendimento nota 10. A clínica é moderna e o Dr. Benjamin passa muita segurança em todo o processo do tratamento. Resultado nota mil!",
      author: "Carlos Eduardo",
      date: "há 3 meses",
      rating: 5,
    },
    {
      quote: "Melhor dentista de Taubaté. Equipe super educada e o Dr. Benjamin é muito detalhista. O consultório no Square Offices é lindo e muito bem localizado.",
      author: "Ana Paula L.",
      date: "há 6 meses",
      rating: 5,
    }
  ];

  return (
    <section id="depoimentos" className="py-24 md:py-40 px-6 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Decorative background text removed */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6 block"
          >
            Prova Social
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light leading-tight mb-8"
          >
            Vidas transformadas por um <br /> <span className="italic font-serif text-accent">novo sorriso.</span>
          </motion.h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 bg-background/5 p-5 sm:p-6 rounded-3xl border border-white/10 w-full sm:w-fit backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold">4.9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            
            <div className="hidden sm:block h-8 w-[1px] bg-white/10" />
            
            <div className="flex items-center gap-3">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-4 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60">Avaliações</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:gap-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center"
            >
              <div className="relative shrink-0">
                <Avatar className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-accent/20 bg-accent/10">
                  <AvatarFallback className="bg-transparent">
                    <span className="text-xl md:text-3xl font-bold tracking-tighter text-accent">
                      {t.author.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)}
                    </span>
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-accent p-2 rounded-full shadow-lg">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-3xl font-serif italic mb-8 leading-relaxed text-primary-foreground/90">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                  <div>
                    <span className="block text-sm md:text-base font-bold uppercase tracking-widest">{t.author}</span>
                    <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-70">{t.date}</span>
                  </div>
                  <div className="h-8 w-[1px] bg-accent/30 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                      alt="G" 
                      className="w-12 h-auto brightness-0 invert opacity-60"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-60">Via Google Reviews</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center px-4"
        >
          <Button 
            variant="outline" 
            className="border-accent/30 text-accent hover:bg-accent hover:text-primary rounded-none w-full sm:w-auto px-4 sm:px-12 py-6 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.3em] h-auto whitespace-normal leading-relaxed text-center"
            onClick={() => window.open('https://share.google/HiiONyrJ2gxcNlyf4', '_blank')}
          >
            Ver todas as avaliações no Google
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative py-24 md:py-32 px-6 bg-background/80 backdrop-blur-md border-t border-border/40 overflow-hidden">
    {/* Noise Texture Overlay */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-20" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    
    {/* Radial Glow */}
    <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.05)_0%,transparent_70%)] -z-10 pointer-events-none blur-3xl" />

    <div className="max-w-7xl mx-auto z-10 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start mb-20">
        <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
          <Logo className="h-16 md:h-20 opacity-80" />
          <p className="text-[11px] text-foreground/60 max-w-sm leading-loose uppercase tracking-[0.4em] font-light">
            Excelência em Odontologia Estética e Reabilitação Oral de Alta Performance em Taubaté.
          </p>
        </div>
        
        <div className="md:col-span-4 space-y-10 text-center md:text-left">
          <h4 className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold text-accent">Localização & Contato</h4>
          <div className="space-y-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-foreground/40 uppercase tracking-[0.2em] text-[9px]">Endereço</span>
              <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed italic font-serif">
                Square Offices & Mall — Sl 4A Térreo<br />
                Av. Charles Schnneider, 1236 — Taubaté, SP
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-foreground/40 uppercase tracking-[0.2em] text-[9px]">Telefone</span>
              <p className="text-xl md:text-2xl font-light text-foreground tracking-widest">
                +55 (12) 99654-4010
              </p>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-3 flex flex-col items-center md:items-end gap-10">
          <h4 className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-bold text-accent">Presença Digital</h4>
          <div className="flex gap-10">
            <a href="#" className="text-foreground/40 hover:text-accent transition-all hover:scale-110"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-foreground/40 hover:text-accent transition-all hover:scale-110"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-foreground/40 hover:text-accent transition-all hover:scale-110"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-foreground/30 text-center md:text-left">
          &copy; {new Date().getFullYear()} Dr. Benjamin Amaral. Todos os direitos reservados.
        </div>
        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-foreground/30 flex gap-6">
          <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <main>
        <Hero />
        <div className="w-full flex justify-center bg-primary">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" 
          />
        </div>
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
