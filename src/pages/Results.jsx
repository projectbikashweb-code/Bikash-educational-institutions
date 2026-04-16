import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Trophy, Star } from 'lucide-react'
import { resultsData } from '../data/index'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'

function StatBig({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="text-center bg-white rounded-3xl shadow-card border border-slate-100 p-8">
      <p className="text-4xl md:text-5xl font-bold font-display text-primary-700 mb-2">
        {inView ? <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} /> : '0'}
      </p>
      <p className="text-slate-500 text-sm">{stat.label}</p>
    </div>
  )
}

const medals = ['🥇', '🥈', '🥉']

export default function Results() {
  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-results.jpg')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <Trophy size={48} className="text-yellow-400 mx-auto mb-4 drop-shadow-md" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Hall of Fame</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Celebrating the bright young achievers who made us proud — year after year of consistent academic excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {resultsData.stats.map(s => <StatBig key={s.label} stat={s} />)}
          </div>

          <SectionHeader eyebrow="Hall of Fame" title="Our Star Achievers" subtitle="Celebrating students who excelled in their academics and made their families proud." />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resultsData.toppers.map((t, i) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-3xl border border-slate-700/50 shadow-card transition-all duration-400 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col h-full bg-cover bg-center bg-no-repeat min-h-[320px]"
                  style={{ backgroundImage: `url(${t.image})` }}
                >
                  {/* Dark Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-0 transition-opacity duration-400 group-hover:from-black/90 group-hover:to-black/50" />
                  
                  <div className="p-6 relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex flex-col gap-3">
                        {/* Avatar intentionally removed in favor of full background */}
                        <div>
                          <h3 className="font-bold text-white text-xl font-display leading-tight drop-shadow-md">{t.name}</h3>
                          <p className="text-sm text-yellow-400 flex items-center gap-1 mt-1 drop-shadow-sm">{medals[i] || '⭐'} Top Achiever</p>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/30 shadow-lg transform transition-transform group-hover:scale-105">
                        <span className="text-2xl font-bold text-white font-display drop-shadow-md">{t.percentage}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-16">
                      <span className="badge bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1 rounded-full shadow-sm">{t.class}</span>
                      <span className="badge bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1 rounded-full shadow-sm">{t.subject}</span>
                      <span className="badge bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs px-3 py-1 rounded-full shadow-sm">{t.year}</span>
                    </div>

                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="pt-4 mt-4 border-t border-white/20">
                          <p className="text-sm font-bold text-yellow-400 mb-1 drop-shadow-sm">{t.tagline}</p>
                          <p className="text-xs text-slate-200 font-medium">{t.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Ratings section */}
          <FadeIn>
            <div className="rounded-4xl bg-white border border-slate-100 shadow-soft p-10 text-center">
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={28} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-4xl font-bold text-slate-900 font-display mb-2">5 / 5</p>
              <p className="text-slate-500 mb-6">Based on Google Reviews — trusted by 200+ families across Cuttack & Tulsipur</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="bg-slate-50 rounded-2xl px-6 py-3 border border-slate-100">
                  <p className="font-bold text-slate-900">⭐ 5</p>
                  <p className="text-xs text-slate-400 mt-0.5">Google · 5+ reviews</p>
                </div>
                <div className="bg-slate-50 rounded-2xl px-6 py-3 border border-slate-100">
                  <p className="font-bold text-slate-900">📍 Tulsipur</p>
                  <p className="text-xs text-slate-400 mt-0.5">Service Area, Cuttack</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
