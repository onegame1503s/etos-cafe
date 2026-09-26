"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowUpRight, Star, Clock, Coffee, Utensils, CalendarHeart } from "lucide-react";

export default function EtosCafePremium() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yHeroImage = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scaleHeroImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Animation variants for advanced stagger effect (TS fixed)
  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const textItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const features = [
    { 
      title: "Signature Cafe Classics", 
      desc: "From rich Hazelnut Frappes to the perfect classic Cold Coffee, crafted for the local palate.", 
      span: "md:col-span-2 md:row-span-2", 
      icon: <Coffee className="w-6 h-6 text-[#D4AF37]" />,
      img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" 
    },
    { 
      title: "Direct Orders", 
      desc: "Order directly through our platform. Zero third-party fees, perfectly packed.", 
      span: "md:col-span-1 md:row-span-1",
      icon: <Utensils className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />, 
      img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "Private Events", 
      desc: "Book our aesthetic space for your private gatherings and shoots.", 
      span: "md:col-span-1 md:row-span-1",
      icon: <CalendarHeart className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />, 
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop" 
    },
    { 
      title: "The Vibe", 
      desc: "A carefully curated aesthetic designed for deep conversations and creative focus.", 
      span: "md:col-span-2 md:row-span-1",
      icon: <Star className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />, 
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop" 
    },
  ];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#141210] text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      
      {/* --- TAPECUT SIGNATURE NAV --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-6 flex justify-between items-center z-50 mix-blend-difference"
      >
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase">ETOS</span>
          <span className="text-[9px] tracking-[0.4em] text-white/70 uppercase">Coffee & Culture</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase text-white/80">
          <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">Menu</span>
          <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">The Space</span>
          <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">Reservations</span>
        </div>

        <a href="#order" className="group flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
          Order Direct <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </a>
      </motion.nav>

      {/* --- WARM CINEMATIC HERO --- */}
      <section className="relative w-full h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yHeroImage, scale: scaleHeroImage }} className="w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2000&auto=format&fit=crop" 
              alt="Etos Cafe Vibe" 
              className="w-full h-[120%] object-cover object-center opacity-60 brightness-90 contrast-110 sepia-[.15]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/40 to-[#141210]/10" />
        </div>

        <motion.div style={{ opacity: opacityHero }} className="relative z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-10 pt-20">
          
          {/* Animated Hero Text */}
          <motion.div 
            variants={textContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col w-full md:w-2/3"
          >
            <h1 className="text-[13vw] md:text-[9vw] leading-[0.9] font-bold tracking-tighter uppercase mb-6 flex flex-wrap gap-x-4">
              <motion.span variants={textItem}>ETOS</motion.span> 
              <motion.span variants={textItem} className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#e6c96e] italic font-serif">CAFE.</motion.span>
            </h1>
            <motion.p variants={textItem} className="text-sm md:text-lg text-white/70 leading-relaxed font-medium max-w-md">
              A warm, premium sanctuary for signature coffees, curated aesthetics, and uninterrupted conversations.
            </motion.p>
          </motion.div>

          {/* Floating Status Widget to Fill Space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:flex flex-col items-start bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-3xl w-64 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">Currently Open</span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed mb-4">Taking direct orders for pickup & delivery in the neighborhood.</p>
            <a href="#order" className="text-xs font-bold text-[#D4AF37] hover:text-white transition-colors border-b border-[#D4AF37]/30 pb-0.5">
              Place an order →
            </a>
          </motion.div>

        </motion.div>
      </section>

      {/* --- THE BENTO GRID (Experience Setup) --- */}
      <section className="w-full bg-[#141210] py-32 px-6 md:px-12 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-4 block">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">More than just <br/> <span className="text-white/40 font-serif italic">coffee.</span></h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
            {features.map((feat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className={`relative bg-[#1C1A17] rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden group cursor-pointer border border-white/5 hover:border-white/20 hover:shadow-2xl transition-all duration-500 ${feat.span}`}
              >
                {feat.img && (
                  <img 
                    src={feat.img} 
                    alt={feat.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-1000 ease-out" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/50 to-transparent opacity-80" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/30 transition-all duration-500">
                    {feat.icon}
                  </div>
                </div>
                <div className="relative z-10 mt-auto pt-16">
                  <h3 className={`font-bold tracking-tight mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 ${feat.span.includes('col-span-2') ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>{feat.title}</h3>
                  <p className="text-white/60 text-sm font-medium leading-relaxed max-w-md">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MINIMAL PARALLAX BREAK --- */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2000&auto=format&fit=crop" 
            alt="Cafe Interior"
            className="w-full h-full object-cover opacity-30 sepia-[.2]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#141210]/60 backdrop-blur-[2px]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-2xl md:text-4xl font-serif italic text-white/90 tracking-wide">
            "A space to pause, <br/> connect, and breathe."
          </p>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-8 opacity-50" />
        </motion.div>
      </section>

      {/* --- ORDER DIRECT / FOOTER --- */}
      <footer className="w-full bg-[#141210] text-white py-32 px-6 md:px-12 relative z-30 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          
          <div className="w-full md:w-1/2">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37] mb-6 block">Zero Third-Party Fees</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none uppercase">
              Order <br/> <span className="text-white/30">Direct.</span>
            </h2>
            <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
              <span className="flex items-center gap-3"><MapPin className="w-4 h-4 text-white" /> Delhi, India</span>
              <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-white" /> 11:00 AM - 11:00 PM</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-6">
            <p className="text-sm text-white/60 text-left md:text-right max-w-sm mb-4">
              Support local. Order directly through our platform for pickup or delivery and help us beat the massive aggregator commissions.
            </p>
            <button className="group flex items-center gap-4 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-xl shadow-[#D4AF37]/10">
              <Coffee className="w-4 h-4" /> View Digital Menu
            </button>
          </div>
        </div>

        {/* TAPECUT SIGNATURE */}
        <div className="max-w-7xl mx-auto w-full mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">
          <span>© {new Date().getFullYear()} ETOS CAFE</span>
          <span className="flex items-center gap-3 hover:text-white/70 transition-colors">
            <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
            Engineered by Tapecut Studios
          </span>
        </div>
      </footer>

    </main>
  );
}