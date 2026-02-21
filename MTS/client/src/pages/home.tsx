import { motion } from "framer-motion";
import { Mail, Instagram, MessageCircle, Bot, Users, Calendar, ArrowRight, BarChart, Settings, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "../assets/logo.png";

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-baseline gap-0.5">
            <span style={{ fontFamily: '"Press Start 2P", cursive' }} className="text-xl text-white tracking-tighter">MTS</span>
            <span className="w-2 h-2 bg-red-600 rounded-full self-end mb-1"></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-red-500 transition-colors">About</a>
            <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
            <a href="#industries" className="hover:text-red-500 transition-colors">Industries</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://wa.me/96560012471" target="_blank" rel="noreferrer" className="text-white/70 hover:text-red-500 transition-colors" aria-label="WhatsApp">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/thauheeeedddd" target="_blank" rel="noreferrer" className="text-white/70 hover:text-red-500 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:thauheed1624@gmail.com" className="text-white/70 hover:text-red-500 transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            className="relative z-10 max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div variants={fadeInUp} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Automation Specialist for Service Businesses
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-tight text-white">
              Turn Missed Messages Into <span className="text-red-600">Paying Clients</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 font-light">
              Stop losing leads to slow response times. I build intelligent WhatsApp and Instagram systems that capture, qualify, and convert leads while you focus on delivering your service.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={scrollToContact} size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto h-14 px-8 text-lg rounded-none border border-red-500 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">About <span className="text-red-600">Me</span></h2>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                20 y/o tech explorer | Building automation bots for service businesses | Turning missed messages into clients :)
              </p>
            </div>
          </div>
        </section>
        <section className="py-24 bg-zinc-950 border-y border-white/5 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Automation <span className="text-red-600">Matters</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">The speed of your response determines the quality of your lead. Here's how my systems instantly upgrade your business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: <MessageCircle className="w-8 h-8 text-red-500" />,
                  title: "Instant Replies",
                  desc: "Engage prospects the exact second they message you, stopping them from contacting your competitors."
                },
                {
                  icon: <BarChart className="w-8 h-8 text-red-500" />,
                  title: "Lead Tracking",
                  desc: "Never lose a conversation. Organize contacts, track lead status, and know exactly who to follow up with."
                },
                {
                  icon: <Calendar className="w-8 h-8 text-red-500" />,
                  title: "24/7 Availability",
                  desc: "Your business stays open even when you sleep. Answer FAQs, book appointments, and capture info around the clock."
                }
              ].map((item, i) => (
                <Card key={i} className="bg-black border-white/10 hover:border-red-500/50 transition-colors group">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-xl bg-red-500/10 inline-block group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-red-600">Services</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">Specialized automation solutions tailored for the platforms your clients actually use.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: <Smartphone className="w-6 h-6 text-white" />,
                  title: "WhatsApp Automation Bot",
                  desc: "Turn your WhatsApp into a fully automated sales channel. Handle inquiries, send catalogs, and capture lead info instantly."
                },
                {
                  icon: <Instagram className="w-6 h-6 text-white" />,
                  title: "Instagram DM Automation",
                  desc: "Convert story replies, comments, and DMs into qualified leads without manually typing the same answers over and over."
                },
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Lead Management & Tracking",
                  desc: "Centralize all your incoming leads into a simple, organized dashboard. Know exactly where every prospect is in your pipeline."
                },
                {
                  icon: <Settings className="w-6 h-6 text-white" />,
                  title: "Custom Setup & Strategy",
                  desc: "Not just software—I analyze your specific business flow and build a custom conversational architecture that actually converts."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 border border-white/5 bg-zinc-950/50 hover:bg-zinc-900 transition-colors">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="industries" className="py-24 bg-red-950/20 border-y border-red-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Who I <span className="text-red-500">Help</span></h2>
              <p className="text-white/60 max-w-2xl mx-auto">If your business relies on booking appointments, answering quotes, or managing client conversations, automation will revolutionize your operations.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "Medical Clinics", "Gyms & Fitness", "Car Services & Detailing", 
                "Construction", "Interior Design", "Event Planners", 
                "Salons & Spas", "Real Estate", "Home Repair & Maintenance"
              ].map((industry, i) => (
                <span key={i} className="px-6 py-3 bg-black border border-red-500/20 text-white font-medium hover:border-red-500 hover:bg-red-500/5 transition-all cursor-default">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black pointer-events-none" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Ready to Stop <span className="text-red-600">Losing Leads?</span></h2>
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Contact me today to discuss how we can build an automated system tailored for your specific service business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="https://wa.me/96560012471" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-white hover:bg-zinc-200 text-black font-bold h-16 px-8 text-lg rounded-none gap-3 border border-white">
                  <MessageCircle className="w-6 h-6" />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href="mailto:thauheed1624@gmail.com" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 px-8 text-lg rounded-none border-white/20 hover:bg-white/5 hover:text-white gap-3">
                  <Mail className="w-6 h-6" />
                  Email Me
                </Button>
              </a>
            </div>
            
            <div className="mt-12 flex justify-center gap-6 text-white/40">
              <a href="https://wa.me/96560012471" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                +965 60012471
              </a>
              <span className="opacity-30">|</span>
              <a href="https://instagram.com/thauheeeedddd" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors">
                @thauheeeedddd
              </a>
              <span className="opacity-30">|</span>
              <a href="mailto:thauheed1624@gmail.com" className="hover:text-red-500 transition-colors">
                thauheed1624@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Mohammed Thauheed Sheikh. All rights reserved.</p>
      </footer>
    </div>
  );
}