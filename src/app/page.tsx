"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, ArrowUpRight, Star, Clock, Coffee, Utensils, CalendarHeart } from "lucide-react";

export default function EtosCafePrototype() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const features = [
    { 
      title: "Artisan Brews", 
      desc: "Specialty beans roasted to perfection, crafted by master baristas.", 
      span: "md:col-span-2 md:row-span-2", 
      icon: <Coffee className="w-6 h-6 text-[#D4AF37]" />,
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" 
    },
    { 
      title: "Direct Orders", 
      desc: "Order directly through our platform. Zero third-party fees, perfectly packed.", 
      span: "md:col-span-1 md:row-span-1",
      icon: <Utensils className="w-5 h-5 text-white/50" />, 
      img: "" 
    },
    { 
      title: "Private Events", 
      desc: "Book our aesthetic space for your private gatherings and shoots.", 
      span: "md:col-span-1 md:row-span-1",
      icon: <CalendarHeart className="w-5 h-5 text-white/50" />, 
      img: "" 
    },
    { 
      title: "The Vibe", 
      desc: "A carefully curated aesthetic designed for deep conversations and creative focus.", 
      span: "md:col-span-2 md:row-span-1",
      icon: <Star className="w-5 h-5 text-white/50" />, 
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop" 
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* --- TAPECUT SIGNATURE NAV --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference"
      >
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase">ETOS</span>
          <span className="text-[9px] tracking-[0.4em] text-white/60 uppercase">Coffee & Culture</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-white/70">
          <span className="hover:text-white transition-colors cursor-pointer">Menu</span>
          <span className="hover:text-white transition-colors cursor-pointer">The Space</span>
          <span className="hover:text-white transition-colors cursor-pointer">Reservations</span>
        </div>

        <a href="#order" className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#D4AF37] transition-colors duration-300">
          Order Direct <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </a>
      </motion.nav>

      {/* --- MOODY CINEMATIC HERO --- */}
      <section className="relative w-full h-screen flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yHeroImage }} className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop" 
              alt="Etos Cafe Vibe" 
              className="w-full h-[120%] object-cover object-center opacity-40 brightness-75 contrast-125"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <motion.div style={{ opacity: opacityHero }} className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="flex flex-col">
            <h1 className="text-[14vw] md:text-[9vw] leading-[0.85] font-bold tracking-tighter uppercase mb-4">
              ETOS <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8c7324] italic font-serif">CAFE.</span>
            </h1>
          </div>

          <div className="max-w-xs pb-4">
            <p className="text-sm md:text-base text-white/50 leading-relaxed font-medium">
              A premium sanctuary for specialty coffee, curated aesthetics, and uninterrupted conversations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- THE BENTO GRID (Experience Setup) --- */}
      <section className="w-full bg-[#050505] py-32 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">The Experience</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">More than just <br/> <span className="text-white/30">coffee.</span></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
            {features.map((feat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative bg-[#0A0A0A] rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500 ${feat.span}`}
              >
                {feat.img && (
                  <img 
                    src={feat.img} 
                    alt={feat.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 blur-[2px] group-hover:blur-none" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    {feat.icon}
                  </div>
                </div>
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className={`font-bold tracking-tight mb-3 ${feat.span.includes('col-span-2') ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{feat.title}</h3>
                  <p className="text-white/50 text-sm font-medium leading-relaxed max-w-md">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE MARQUEE FLEX --- */}
      <section className="w-full py-16 bg-[#D4AF37] overflow-hidden flex items-center -rotate-2 scale-110">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          <span className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-black mx-8">
            ESPRESSO. POUR OVER. MATCHA. AESTHETICS. ESPRESSO. POUR OVER. MATCHA. AESTHETICS.
          </span>
        </motion.div>
      </section>

      {/* --- ORDER DIRECT / FOOTER --- */}
      <footer className="w-full bg-[#050505] text-white py-32 px-6 md:px-12 relative z-30 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
          <div className="w-full md:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-6 block">Zero Third-Party Fees</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none uppercase">
              Order <br/> <span className="text-white/30">Direct.</span>
            </h2>
            <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-white" /> South Delhi, India</span>
              <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-white" /> 11:00 AM - 11:00 PM</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-6">
            <p className="text-sm text-white/40 text-left md:text-right max-w-sm mb-4">
              Support local. Order directly through our platform for pickup or delivery and help us beat the 30% aggregator commissions.
            </p>
            <button className="group flex items-center gap-4 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:scale-95 transition-transform duration-300">
              <Coffee className="w-4 h-4" /> View Digital Menu
            </button>
          </div>
        </div>

        {/* TAPECUT SIGNATURE */}
        <div className="max-w-7xl mx-auto w-full mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">
          <span>© {new Date().getFullYear()} ETOS CAFE</span>
          <span className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
            Engineered by Tapecut Studios
          </span>
        </div>
      </footer>

    </main>
  );
}