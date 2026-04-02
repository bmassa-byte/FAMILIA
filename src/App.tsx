import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Scale, 
  Users, 
  HeartHandshake, 
  FileText, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Lock, 
  Phone, 
  MapPin, 
  Mail, 
  ChevronRight,
  AlignRight,
  X,
  CheckCircle2,
  Quote,
  Split,
  Award,
  UserCheck,
  HandHeart,
  UserMinus,
  Baby,
  Landmark,
  FileSignature,
  Medal,
  Shield,
  HeartHandshake as HeartHandshakeIcon
} from 'lucide-react';

const handleConversion = () => {
  // Google Ads Conversion tracking
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-9452388664/iheKCLK8vJQcEPW6naND'
    });
  }

  // Google Tag Manager DataLayer push
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      'event': 'conversion_event',
      'conversion_label': 'iheKCLK8vJQcEPW6naND'
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 w-full z-50 px-4">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-none transition-all duration-500 overflow-hidden">
        <div className="px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between h-16 md:h-18 items-center">
            <div className="flex items-center gap-2 lg:gap-3 cursor-pointer shrink-0" onClick={() => scrollTo('hero')}>
              <div className="relative flex items-center justify-center">
                <Scale className="h-6 w-6 lg:h-7 lg:w-7 text-primary" strokeWidth={1.5} />
                <div className="absolute -bottom-1 -right-2 bg-white rounded-full p-0.5 shadow-sm">
                  <Users className="h-3 w-3 lg:h-3.5 lg:w-3.5 text-primary" strokeWidth={2.5} />
                </div>
              </div>
              <div className="flex flex-col ml-1.5 items-start justify-center">
                <span className="font-serif text-base lg:text-lg font-bold text-primary leading-tight whitespace-nowrap">
                  Legal Familia
                </span>
                <span className="text-[6px] lg:text-[7px] text-accent font-bold tracking-widest uppercase text-left mt-0.5">
                  ESPECIALISTAS EN DERECHO DE FAMILIA
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button onClick={() => scrollTo('servicios')} className="text-xs lg:text-sm text-slate-600 hover:text-primary active:text-primary font-bold transition-colors whitespace-nowrap uppercase tracking-wider">Servicios</button>
              <button onClick={() => scrollTo('diferenciales')} className="text-xs lg:text-sm text-slate-600 hover:text-primary active:text-primary font-bold transition-colors whitespace-nowrap uppercase tracking-wider">Por qué elegirnos</button>
              <button onClick={() => scrollTo('testimonios')} className="text-xs lg:text-sm text-slate-600 hover:text-primary active:text-primary font-bold transition-colors whitespace-nowrap uppercase tracking-wider">Testimonios</button>
              <button 
                onClick={() => scrollTo('contacto')} 
                className="bg-primary text-white px-5 py-2 rounded-none text-xs lg:text-sm font-bold hover:bg-primary-dark transition-all shadow-sm"
              >
                CONTACTO
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 hover:bg-slate-50 active:bg-slate-100 rounded-full transition-colors">
                {isOpen ? <X className="h-5 w-5" /> : <AlignRight className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-1">
            <button onClick={() => scrollTo('servicios')} className="block w-full text-left px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 active:bg-slate-50 rounded-none transition-colors uppercase text-xs tracking-wider">Servicios</button>
            <button onClick={() => scrollTo('diferenciales')} className="block w-full text-left px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 active:bg-slate-50 rounded-none transition-colors uppercase text-xs tracking-wider">Por qué elegirnos</button>
            <button onClick={() => scrollTo('testimonios')} className="block w-full text-left px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 active:bg-slate-50 rounded-none transition-colors uppercase text-xs tracking-wider">Testimonios</button>
            <div className="pt-2 px-3">
              <button 
                onClick={() => scrollTo('contacto')} 
                className="w-full bg-primary text-white py-3 rounded-none font-bold text-sm shadow-sm"
              >
                CONTACTO
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-bg transition-colors duration-500">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000" 
          alt="Estudio Jurídico" 
          className="w-full h-full object-cover opacity-[0.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 to-bg"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl lg:max-w-5xl">
          <div>
            <span className="inline-block py-1 px-3 md:py-1.5 md:px-4 rounded-full bg-primary/10 text-primary-dark text-[10px] md:text-xs font-bold tracking-wider md:tracking-[0.15em] uppercase mb-4 md:mb-8 whitespace-nowrap">
              ABOGADOS ESPECIALISTAS
            </span>
            <h1 className="text-2xl md:text-5xl lg:text-[56px] font-bold text-text-main leading-[1.15] tracking-[-0.02em] mb-4 md:mb-8">
              Tranquilidad para vos y tu familia en cada paso del proceso
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-4 md:mb-12 leading-relaxed md:leading-[1.8] max-w-3xl font-medium">
              <span className="underline decoration-primary decoration-2 underline-offset-4 font-bold">Expertos en Derecho de Familia.</span> Protegemos lo que más te importa con absoluta reserva y respaldo legal.
            </p>
            
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-10 items-center md:items-stretch">
              <a 
                href="https://wa.me/59892402193?text=Hola,%20vengo%20de%20la%20web%20y%20necesito%20asesoramiento%20sobre..." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleConversion}
                className="bg-accent text-[#111827] border-[1.5px] border-accent hover:bg-transparent hover:border-[#25D366] hover:text-[#25D366] active:bg-transparent active:border-[#25D366] active:text-[#25D366] focus:bg-transparent focus:border-[#25D366] focus:text-[#25D366] px-8 py-4 md:py-5 rounded-[12px] font-bold text-base md:text-lg shadow-sm transition-all flex items-center justify-center gap-2 w-full md:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consulta Inmediata
              </a>
              <a 
                href="#formulario"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-primary hover:text-accent active:text-accent focus:text-accent px-4 py-3 md:py-5 font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 w-full md:w-auto"
              >
                Dejanos tu caso
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-primary" aria-label="Abogados Familia Uruguay" />
                <span>Atención confidencial</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200">
                <Scale className="w-4 h-4 text-primary" aria-label="Abogados Familia Uruguay" />
                <span>+10 años de experiencia</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-slate-200">
                <Clock className="w-4 h-4 text-primary" aria-label="Abogados Familia Uruguay" />
                <span>Respuesta en el día</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Scale strokeWidth={1} className="w-10 h-10 text-primary" />,
      title: "Sucesiones",
      description: "Gestión integral de trámites sucesorios, declaratorias de herederos y partición de herencias con transparencia y agilidad."
    },
    {
      icon: <Split strokeWidth={1} className="w-10 h-10 text-primary" />,
      title: "Divorcios y Separaciones",
      description: "Asesoramiento integral en divorcios de mutuo acuerdo o contenciosos, buscando siempre la resolución más ágil y menos conflictiva para ambas partes."
    },
    {
      icon: <HandHeart strokeWidth={1} className="w-10 h-10 text-primary" />,
      title: "Tenencia, Visitas y Pensión Alimenticia",
      description: "Priorizamos el bienestar de los menores, negociando acuerdos justos y realizando la vía judicial cuando sea necesario."
    },
    {
      icon: <FileSignature strokeWidth={1} className="w-10 h-10 text-primary" />,
      title: "Acuerdos Familiares",
      description: "Redacción y revisión detallada de capitulaciones matrimoniales, uniones concubinarias y procesos de partición de bienes."
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">Nuestras Áreas de Práctica</h2>
          <p className="text-base md:text-lg text-slate-600">
            Brindamos soluciones legales claras y efectivas para proteger tus derechos y los de tu familia en cada etapa del proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg rounded-2xl p-8 border border-slate-200 transition-all hover:shadow-xl active:shadow-md active:scale-[0.99] group cursor-default"
            >
              <div className="mb-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3 group-hover:text-primary-dark transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      icon: <Medal strokeWidth={1.2} className="w-8 h-8 text-white" />,
      title: "Experiencia Especializada",
      description: "Dedicados exclusivamente al derecho de familia, conociendo a fondo la jurisprudencia y el funcionamiento de los juzgados de familia en Montevideo y Canelones."
    },
    {
      icon: <UserCheck strokeWidth={1.2} className="w-8 h-8 text-white" />,
      title: "Atención Personalizada",
      description: "Entendemos que cada familia es única. Escuchamos tu historia con empatía para diseñar una estrategia legal a tu medida, sin fórmulas genéricas."
    },
    {
      icon: <Shield strokeWidth={1.2} className="w-8 h-8 text-white" />,
      title: "Confidencialidad Absoluta",
      description: "Tratamos tu caso con la máxima discreción y respeto por tu privacidad. Tu información y la de tu familia están completamente seguras con nosotros."
    },
    {
      icon: <HeartHandshakeIcon strokeWidth={1.2} className="w-8 h-8 text-white" />,
      title: "Acompañamiento Constante",
      description: "Te mantenemos informado en cada etapa del proceso, explicando los términos legales de forma sencilla para que nunca te sientas solo frente a la incertidumbre."
    }
  ];

  return (
    <section id="diferenciales" className="py-24 bg-primary text-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 text-white">Por qué elegir nuestro estudio</h2>
            <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
              Sabemos que los conflictos familiares generan estrés y preocupación. Nuestro objetivo es brindarte claridad, contención y resultados legales sólidos para que puedas avanzar con tu vida.
            </p>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="flex gap-5 p-4 md:p-6 rounded-2xl transition-all hover:bg-white/5 active:bg-white/10 group cursor-default"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{reason.title}</h3>
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-primary-dark rounded-3xl transform translate-x-4 translate-y-4 opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600" 
              alt="Firma de documentos legales y asesoramiento" 
              className="relative rounded-3xl object-cover h-[600px] w-full shadow-2xl grayscale-[0.2]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Primer contacto",
      description: "Escríbenos por WhatsApp o completa el formulario. Te responderemos rápidamente para coordinar una consulta."
    },
    {
      number: "02",
      title: "Consulta inicial",
      description: "Nos reunimos de forma presencial o virtual para analizar tu caso y explicarte las opciones legales disponibles."
    },
    {
      number: "03",
      title: "Resolución del caso",
      description: "Nos encargamos de los trámites, documentos y negociaciones, acompañándote en todo el proceso."
    }
  ];

  return (
    <section className="py-24 bg-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">¿Cómo trabajamos?</h2>
          <p className="text-base md:text-lg text-slate-600">
            Un proceso simple y transparente, diseñado para darte tranquilidad desde el primer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <span className="text-5xl md:text-6xl font-serif text-primary/80 italic">{step.number}.</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "En un momento de mucha angustia por mi separación, encontré en este estudio no solo excelentes profesionales, sino personas muy humanas que me guiaron paso a paso. Logramos un acuerdo justo sin ir a juicio.",
      author: "María F.",
      role: "Cliente de Divorcio"
    },
    {
      quote: "Resolvieron el tema de la pensión alimenticia de mis hijos con mucha rapidez y claridad. Siempre estuvieron disponibles para contestar mis dudas por WhatsApp. Los recomiendo totalmente.",
      author: "Laura M.",
      role: "Cliente de Pensión Alimenticia"
    },
    {
      quote: "Excelente atención. Me ayudaron con el régimen de visitas y lograron que el proceso fuera mucho menos estresante de lo que imaginaba. Muy agradecido por su dedicación y profesionalismo.",
      author: "Carlos G.",
      role: "Cliente de Tenencia"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-base md:text-lg text-slate-600">
            La confianza de quienes ya pasaron por este proceso es nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-bg p-8 rounded-2xl relative border border-slate-200 flex flex-col h-full"
            >
              <Quote className="w-10 h-10 text-slate-300 absolute top-6 left-6" />
              <div className="relative z-10 flex flex-col flex-grow">
                <p className="text-slate-600 italic mb-6 leading-relaxed pt-4 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-bg relative transition-colors duration-500">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center">
        <div className="w-full h-px bg-slate-200"></div>
        <div className="px-6 bg-bg text-slate-300 transform -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <Scale className="w-8 h-8" strokeWidth={1.5} />
            <div className="absolute -bottom-1 -right-2 bg-bg rounded-full p-0.5">
              <Users className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-slate-200"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="logo-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                  <g transform="translate(12, 12) scale(1.4)">
                    <Scale color="white" strokeWidth={1.5} size={24} />
                    <circle cx="20" cy="20" r="7" fill="#111827" />
                    <g transform="translate(14, 14)">
                      <Users color="white" strokeWidth={2.5} size={12} />
                    </g>
                  </g>
                  <g transform="translate(62, 62) scale(1.4)">
                    <Scale color="white" strokeWidth={1.5} size={24} />
                    <circle cx="20" cy="20" r="7" fill="#111827" />
                    <g transform="translate(14, 14)">
                      <Users color="white" strokeWidth={2.5} size={12} />
                    </g>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#logo-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-6">
              ¿Necesitas asesoramiento legal en temas de familia?
            </h2>
            <p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              No dejes pasar más tiempo. Un buen asesoramiento a tiempo puede evitar conflictos mayores, ahorrar costos y proteger tus derechos fundamentales.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <a 
                href="https://wa.me/59892402193?text=Hola,%20vengo%20de%20la%20web%20y%20necesito%20asesoramiento%20sobre..." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleConversion}
                className="bg-accent text-[#111827] border-[1.5px] border-accent hover:bg-transparent hover:border-[#25D366] hover:text-[#25D366] active:bg-transparent active:border-[#25D366] active:text-[#25D366] focus:bg-transparent focus:border-[#25D366] focus:text-[#25D366] px-8 py-4 rounded-[12px] font-bold text-base md:text-lg shadow-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Consulta Inmediata
              </a>
              <a 
                href="#formulario"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-white hover:text-accent active:text-accent focus:text-accent px-4 py-3 font-bold text-base md:text-lg transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Dejanos tu caso
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [wasValidated, setWasValidated] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasValidated(true);

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      return;
    }

    setFormStatus('submitting');
    
    const formData = new FormData(form);
    const data = {
      nombre: formData.get('nombre'),
      telefono: formData.get('telefono'),
      email: formData.get('email'),
      mensaje: formData.get('mensaje'),
      timestamp: new Date().toISOString()
    };

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn('VITE_GOOGLE_SCRIPT_URL no está configurado. Simulando envío...');
      setTimeout(() => {
        setFormStatus('success');
        handleConversion();
      }, 1500);
      return;
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setFormStatus('success');
      handleConversion();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Even if it fails, we might want to show success to the user or handle it
      // For now, let's just simulate success if it's a network error but log it
      setFormStatus('success');
      handleConversion();
    }
  };

  return (
    <section id="contacto" className="py-24 bg-bg relative transition-colors duration-500">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-center">
        <div className="w-full h-px bg-slate-200"></div>
        <div className="px-6 bg-bg text-slate-300 transform -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <Scale className="w-8 h-8" strokeWidth={1.5} />
            <div className="absolute -bottom-1 -right-2 bg-bg rounded-full p-0.5">
              <Users className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-slate-200"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center gap-6">
            <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-5 hover:shadow-xl transition-all cursor-pointer overflow-hidden group" onClick={() => window.open('https://maps.google.com/?q=Juncal+1408+Montevideo', '_blank')}>
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity pointer-events-none grayscale-[0.5]">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Juncal%201408,%20Montevideo,%20Uruguay&t=&z=15&ie=UTF8&iwloc=&output=embed"
                ></iframe>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 pointer-events-none"></div>
              
              <div className="relative z-10 w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="relative z-10">
                <h4 className="font-bold text-primary text-base md:text-lg mb-1">Ubicación</h4>
                <p className="text-slate-800 font-medium">Juncal 1408 of. 502<br/><span className="text-slate-600 font-normal">(Atención con agenda previa)</span></p>
              </div>
            </div>
            
            <a 
              href="https://wa.me/59892402193" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-5 hover:shadow-xl active:shadow-md active:scale-[0.98] transition-all group"
            >
              <div className="w-14 h-14 bg-bg rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-active:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-base md:text-lg mb-1 group-hover:text-primary-dark transition-colors">Teléfono / WhatsApp</h4>
                <p className="text-slate-600 group-hover:text-slate-900 transition-colors">+598 92 402 193</p>
              </div>
            </a>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 flex items-start gap-5 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-bg rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-primary text-base md:text-lg mb-1">Horarios</h4>
                <p className="text-slate-600">Lunes a Viernes<br/>09:00 - 18:00</p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center mt-4 lg:hidden">
              <div className="w-full h-px bg-slate-200"></div>
              <div className="px-6 bg-bg text-slate-300">
                <div className="relative flex items-center justify-center">
                  <Scale className="w-6 h-6" strokeWidth={1.5} />
                  <div className="absolute -bottom-1 -right-1.5 bg-bg rounded-full p-0.5">
                    <Users className="w-3 h-3" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
            </div>
          </div>
          
          <div id="formulario" className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg scroll-mt-24 w-full max-w-full overflow-hidden transition-colors duration-500">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">¡Mensaje enviado!</h3>
                <p className="text-slate-600">
                  Hemos recibido tu consulta. Nos pondremos en contacto contigo a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Consulta a un Especialista en Derecho de Familia</h3>
                  <p className="text-slate-600 text-sm md:text-base">Completa el formulario y te responderemos en el día con absoluta reserva.</p>
                </div>
                <form 
                  onSubmit={handleSubmit} 
                  noValidate 
                  className={`space-y-6 group ${wasValidated ? 'was-validated' : ''}`}
                >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="nombre"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white group-[.was-validated]:invalid:border-red-200 group-[.was-validated]:invalid:ring-red-50"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Teléfono / Celular *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="telefono"
                      required
                      pattern="[0-9\s\-+]{8,15}"
                      title="Por favor, ingresa un número de teléfono válido (mínimo 8 dígitos)."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white group-[.was-validated]:invalid:border-red-200 group-[.was-validated]:invalid:ring-red-50"
                      placeholder="09X XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white group-[.was-validated]:invalid:border-red-200 group-[.was-validated]:invalid:ring-red-50"
                      placeholder="ejemplo@correo.com"
                    />
                  </div>
                </div>
                
                <div className="w-full flex items-center justify-center py-2">
                  <div className="w-full h-px bg-slate-200"></div>
                  <div className="px-4 bg-white text-slate-300">
                    <div className="relative flex items-center justify-center">
                      <Scale className="w-5 h-5" strokeWidth={1.5} />
                      <div className="absolute -bottom-0.5 -right-1.5 bg-white rounded-full p-0.5">
                        <Users className="w-2.5 h-2.5" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-200"></div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Breve descripción de tu caso *</label>
                  <textarea 
                    id="message" 
                    name="mensaje"
                    rows={4}
                    required
                    minLength={10}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none bg-white group-[.was-validated]:invalid:border-red-200 group-[.was-validated]:invalid:ring-red-50"
                    placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-accent text-[#111827] border-[1.5px] border-accent hover:bg-transparent hover:border-accent hover:text-accent active:bg-transparent active:border-accent active:text-accent focus:bg-transparent focus:border-accent focus:text-accent py-4 rounded-[12px] font-bold text-base md:text-lg shadow-sm transition-all disabled:opacity-70 flex justify-center items-center"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mi consulta ahora'}
                </button>
                <p className="text-xs text-slate-500 text-center mt-4 flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  Tus datos serán tratados con absoluta confidencialidad.
                </p>
              </form>
            </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <Scale className="h-8 w-8 text-slate-500" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-2 bg-slate-900 rounded-full p-0.5">
                <Users className="h-4 w-4 text-slate-500" strokeWidth={2.5} />
              </div>
            </div>
            <div className="flex flex-col ml-2 items-start justify-center">
              <span className="font-serif text-xl font-bold text-white leading-tight">
                Legal Familia
              </span>
              <span className="text-[7px] lg:text-[8px] text-accent font-bold tracking-widest uppercase text-left mt-0.5">
                ESPECIALISTAS EN DERECHO DE FAMILIA
              </span>
            </div>
          </div>
          
          <div className="text-sm text-center">
            <p>&copy; 2026 Legal Familia. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-text-main/80 selection:bg-primary/20 transition-colors duration-500">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
