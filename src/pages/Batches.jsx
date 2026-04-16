import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Calendar, Users, ArrowRight } from 'lucide-react'
import { batchesData } from '../data/index'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

const statusConfig = {
  open:     { label: 'Open',        cls: 'bg-green-50 text-green-700 border-green-200' },
  filling:  { label: 'Filling Fast', cls: 'bg-orange-50 text-orange-700 border-orange-200' },
  upcoming: { label: 'Coming Soon',  cls: 'bg-slate-50 text-slate-600 border-slate-200' },
}

export default function Batches() {
  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-batches.jpg')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Schedule</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Batch Schedule</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Multiple batch timings to suit every child's schedule. Choose what works best for your family.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <SectionHeader eyebrow="2024–25 Academic Year" title="Available Batches" subtitle="Classes run Mon–Sat. Open daily until 9 PM. Contact us to confirm seat availability." />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {batchesData.map(b => {
              const sc = statusConfig[b.status]
              return (
                <StaggerItem key={b.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-3xl bg-white border border-slate-100 shadow-card p-7 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <span className="text-3xl">{b.icon}</span>
                      <span className={`badge border text-xs font-semibold px-3 py-1 rounded-full ${sc.cls}`}>{sc.label}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 font-display">{b.title}</h3>
                    <ul className="flex flex-col gap-3 mb-6">
                      <li className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Clock size={15} className="text-primary-500 shrink-0" />
                        {b.timing}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Users size={15} className="text-primary-500 shrink-0" />
                        {b.classes}
                      </li>
                      <li className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Calendar size={15} className="text-primary-500 shrink-0" />
                        {b.days}
                      </li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">{b.seats}</span>
                      {b.status !== 'upcoming' && (
                        <Link to="/contact" className="btn-primary text-xs px-4 py-2">
                          Join <ArrowRight size={13} />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <FadeIn>
            <div className="rounded-4xl bg-cta-gradient p-10 md:p-14 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 font-display">Can't find your preferred timing?</h2>
              <p className="text-white/70 mb-6">Contact us — we may be able to accommodate a custom arrangement.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-outline-white">Contact Us <ArrowRight size={15} /></Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
