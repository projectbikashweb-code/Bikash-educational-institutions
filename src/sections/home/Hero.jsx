import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Users, Award, Phone } from 'lucide-react'
import { INSTITUTE } from '../../utils/constants'

const badges = [
  { icon: Star,  label: '5★ Rated',        sub: '5+ Google Reviews' },
  { icon: Users, label: '500+ Students',      sub: 'Since Year 2010' },
  { icon: Award, label: '14+ Years',          sub: 'Of Excellence' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cover bg-center min-h-screen lg:h-screen lg:max-h-[1000px] flex flex-col justify-center pt-20 pb-8 lg:pt-0" style={{ backgroundImage: "url('/images/heroes/hero-home.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />
      
      {/* Background decorations - lowered opacity to not distract from the photo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary-300/40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-teal-300/40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-main relative z-10 w-full lg:pt-[70px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Admissions Open 2024–25
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-[42px] xl:text-6xl font-bold text-white leading-[1.1] mb-5"
            >
              Empowering Young{' '}
              <span className="relative inline-block text-white">
                <span className="relative z-10">Minds</span>
                <span className="absolute bottom-1 -left-1 -right-1 h-3 bg-primary-500/50 -z-10 rounded-md -rotate-1"></span>
              </span>
              <br />for a Brighter Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-base lg:text-lg text-slate-200 mb-6 lg:mb-8 max-w-lg leading-relaxed"
            >
              Quality education for primary and upper primary students with experienced faculty and modern teaching methods — Cuttack's most trusted learning institution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-6 lg:mb-8"
            >
              <Link to="/contact" className="btn-primary text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4">
                Enroll Now <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-secondary text-sm lg:text-base px-6 py-3 lg:px-8 lg:py-4">
                Book Free Demo
              </Link>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              {badges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-2.5 glass px-4 py-2.5 rounded-2xl">
                  <div className="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center">
                    <Icon size={16} className="text-primary-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Hero card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
            className="relative lg:w-[88%] lg:ml-auto"
          >
            {/* Main card */}
            <div className="relative rounded-3xl lg:rounded-[2rem] shadow-[0_15px_60px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_-5px_rgba(0,0,0,0.6)] border border-white/20 overflow-hidden group flex flex-col w-full transition-all duration-300 hover:-translate-y-1 z-20">
              
              {/* Image filling entire background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/heroes/hero-about.webp" 
                  alt="Classroom Environment" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px]" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 flex-1 flex flex-col items-center px-6 sm:px-8 py-8 lg:py-10 text-center w-full">
                
                {/* Logo */}
                <div className="mb-4 lg:mb-5">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-[1.25rem] bg-slate-900/40 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/20 p-2.5 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                    <img src="/images/logo/Bikash-ins.png" alt="Bikash Logo" className="w-full h-full object-contain saturate-150 drop-shadow-md" />
                  </div>
                </div>

                <div className="mb-6 lg:mb-8 w-full">
                  <h2 className="text-xl lg:text-[1.35rem] leading-snug font-bold text-white font-display">Bikash Educational Institution</h2>
                  <p className="text-[11px] lg:text-xs text-slate-300 mt-1 opacity-90 tracking-wide">Est. 2010 · Cuttack, Odisha</p>
                </div>

                {/* 4 Block Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full mb-6 lg:mb-8">
                  {[
                    { val: '14+', label: 'Years' },
                    { val: '500+', label: 'Students' },
                    { val: '5★', label: 'Rating' },
                    { val: '1–8', label: 'Classes' },
                  ].map(s => (
                    <div key={s.label} className="bg-slate-900/50 backdrop-blur-md rounded-2xl p-4 lg:p-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/10 transition-transform hover:-translate-y-1">
                      <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-white font-display leading-tight drop-shadow-sm">{s.val}</p>
                      <p className="text-[10px] lg:text-xs uppercase font-bold tracking-widest text-slate-400 mt-1.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <a href={INSTITUTE.phoneHref} className="flex items-center justify-center gap-2 w-full bg-primary-400 hover:bg-primary-500 text-slate-900 rounded-xl lg:rounded-2xl py-3.5 lg:py-4 font-bold transition-all text-sm lg:text-base shadow-[0_0_20px_rgba(236,252,58,0.25)] hover:shadow-[0_0_30px_rgba(236,252,58,0.4)] shrink-0">
                  <Phone size={18} className="w-4 h-4 lg:w-5 lg:h-5" /> Call Now: {INSTITUTE.phone}
                </a>
              </div>
            </div>

            {/* Floating badge 1: Batch Starting */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute -top-5 -left-5 glass rounded-2xl px-4 py-2.5 shadow-soft z-50 pointer-events-none"
            >
              <p className="text-xs font-bold text-slate-800">🎉 New Batch Starting!</p>
            </motion.div>
            
            {/* Floating badge 2: Reviews */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2.5 shadow-soft z-50"
            >
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">★★★★★</span>
                <p className="text-xs font-bold text-slate-800">5★ Google Reviews</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
