import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Instagram, ArrowRight, Sparkles, Palette, FileText, Monitor, Users, Type, Image, LayoutTemplate, ChevronRight } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = [heroRef, servicesRef, projectsRef, instagramRef];
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const whatsappLink = 'https://wa.me/5511997079312?text=Olá, Gabriel! Vi o seu portfólio e queria fazer um orçamento. Me chamo...';
  const instagramLink = 'https://www.instagram.com/byandrade.design/';

  const services = [
    { icon: Sparkles, title: 'Branding', description: 'Estratégia de marca completa' },
    { icon: Palette, title: 'Identidade Visual', description: 'Design que transmite confiança' },
    { icon: Type, title: 'Logo & Tipografia', description: 'Criação e curadoria tipográfica' },
    { icon: LayoutTemplate, title: 'Variações de Logo', description: 'Versões para todos os usos' },
    { icon: FileText, title: 'Manual de Marca', description: 'Diretrizes completas' },
    { icon: Monitor, title: 'Sites', description: 'Presença digital profissional' },
    { icon: Users, title: 'Reuniões', description: 'Acompanhamento durante o projeto' },
    { icon: Image, title: 'Mockups', description: 'Visualizações realistas' },
  ];

  const projects = [
    {
      image: '/project1.jpg',
      title: 'Samara',
      category: 'Identidade Visual Completa'
    },
    {
      image: '/project2.jpg',
      title: 'Lumi',
      category: 'Psicologia Infantil'
    },
    {
      image: '/project3.jpg',
      title: 'Essentia',
      category: 'Psicologia Clínica'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F2ED] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 50 ? 'glass py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-xl font-light tracking-wider">
            BY <span className="text-[#D4C4B0]">ANDRADE</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[#D4C4B0] hover:text-[#E07A5F] transition-colors"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        id="hero"
        className="min-h-screen flex items-center justify-center relative px-6 pt-20"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#1a1512] pointer-events-none" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#E07A5F]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#D4C4B0]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Glow effect behind photo */}
                <div className="absolute inset-0 bg-[#E07A5F]/20 rounded-full blur-xl scale-110" />
                {/* Photo container */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-[#D4C4B0]/30 p-1">
                  <img 
                    src="/profile.png" 
                    alt="Gabriel Andrade - Brand Designer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <p className="text-[#D4C4B0] text-sm tracking-[0.3em] uppercase mb-6">
              Brand Designer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Identidades que{' '}
              <span className="gradient-text font-normal">transmitem confiança</span>
            </h1>
            <p className="text-[#8B6F5C] text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              Especializado em estratégias visuais para psicólogos e profissionais da saúde
            </p>
            <p className="text-[#8B6F5C]/70 text-base max-w-xl mx-auto mb-12">
              Transformo a essência do seu trabalho em uma identidade visual que conecta, 
              emociona e atrai seus pacientes ideais.
            </p>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#E07A5F] hover:bg-[#c96a52] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 animate-pulse-glow hover:scale-105 group"
            >
              <MessageCircle size={22} />
              Fazer Orçamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${visibleSections.has('hero') ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-6 h-10 border-2 border-[#8B6F5C]/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-[#D4C4B0] rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        id="services"
        className="py-24 sm:py-32 px-6 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#E07A5F] text-sm tracking-[0.3em] uppercase mb-4">Serviços</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              Tudo que você precisa para{' '}
              <span className="text-[#D4C4B0]">sua marca</span>
            </h2>
            <p className="text-[#8B6F5C] max-w-xl mx-auto">
              Soluções completas de design pensadas para profissionais da saúde 
              que querem se destacar no mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group p-6 rounded-2xl bg-[#141414] border border-[#1f1f1f] hover:border-[#E07A5F]/30 transition-all duration-500 hover-lift ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#E07A5F]/10 flex items-center justify-center mb-4 group-hover:bg-[#E07A5F]/20 transition-colors">
                  <service.icon size={24} className="text-[#E07A5F]" />
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#F5F2ED]">{service.title}</h3>
                <p className="text-sm text-[#8B6F5C]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#8B6F5C] text-sm">
              E muito mais: Paleta de cores, templates editáveis, materiais de divulgação...
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef}
        id="projects"
        className="py-24 sm:py-32 px-6 relative"
      >
        {/* Background accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B6F5C]/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-[#E07A5F] text-sm tracking-[0.3em] uppercase mb-4">Projetos</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              Últimos <span className="text-[#D4C4B0]">trabalhos</span>
            </h2>
            <p className="text-[#8B6F5C] max-w-2xl mx-auto">
              Cada projeto é uma história única. Aqui estão algumas identidades visuais 
              que criei para profissionais da saúde.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl image-zoom ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '700ms' }}
              >
                <div className="aspect-[4/5] bg-[#141414]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[#E07A5F] text-sm mb-1">{project.category}</p>
                  <h3 className="text-2xl font-light text-[#F5F2ED]">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section 
        ref={instagramRef}
        id="instagram"
        className="py-24 sm:py-32 px-6 relative"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 ${visibleSections.has('instagram') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-[2px]">
              <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center">
                <Instagram size={32} className="text-[#F5F2ED]" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
              Quer ver mais?
            </h2>
            <p className="text-[#8B6F5C] max-w-lg mx-auto mb-10">
              Acompanhe meu trabalho no Instagram e descubra como posso ajudar 
              a transformar a identidade visual do seu consultório.
            </p>
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-[#8B6F5C] hover:border-[#D4C4B0] text-[#F5F2ED] px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-[#8B6F5C]/10 group"
            >
              <Instagram size={22} />
              @byandrade.design
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-light tracking-wider mb-2">
              BY <span className="text-[#D4C4B0]">ANDRADE</span>
            </p>
            <p className="text-[#8B6F5C] text-sm">
              Brand Designer especializado em saúde mental
            </p>
          </div>
          
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            <span className="font-medium">Falar no WhatsApp</span>
          </a>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-[#1f1f1f] text-center">
          <p className="text-[#8B6F5C]/60 text-sm">
            © 2026 by andrade design. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
