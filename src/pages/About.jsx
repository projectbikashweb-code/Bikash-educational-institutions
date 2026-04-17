import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart } from 'lucide-react'
import { facultyData } from '../data/index'
import { INSTITUTE } from '../utils/constants'
import SectionHeader from '../components/common/SectionHeader'
import FadeIn from '../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'

const milestones = [
  { year: '2016', event: 'Founded by dedicated educators in Srivihar Colony, Cuttack.' },
  { year: '2018', event: 'Expanded programs to include Classes 6–8 upper primary education.' },
  { year: '2020', event: 'Introduced CBSE and ICSE aligned preparation programs.' },
  { year: '2022', event: 'Crossed 200+ student milestone with strong academic results.' },
  { year: '2024', event: 'Launched concept-based and experiential learning modules.' },
  { year: '2025', event: '500+ students served across Cuttack and Tulsipur area.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/about-home.webp')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10">
          <FadeIn className="text-center">
            <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Bikash Educational Institution</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Over a decade of empowering young minds — one student at a time.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <FadeIn>
              <span className="badge bg-teal-50 text-teal-700 border border-teal-100 px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-4 inline-block">Est. {INSTITUTE.established}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5 font-display">
                10+ Years of Academic Excellence
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Bikash Educational Institution was founded with a clear and powerful mission: to deliver quality education that builds real conceptual understanding in every child — not just exam scores.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4">
                We are committed to the holistic growth of primary and upper primary students, offering a friendly and supportive environment where every child thrives. Our experienced faculty brings warmth, patience, and expertise to every classroom.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Located in Srivihar Colony, Cuttack, we serve families across the Tulsipur area and beyond, supporting both Odia and English medium learners from Class 1 through Class 8.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {[['10+', 'Years'], ['500+', 'Students'], ['5★', 'Rating']].map(([v, l]) => (
                  <div key={l} className="text-center bg-primary-50 rounded-2xl py-4 border border-primary-100">
                    <p className="text-2xl font-bold text-primary-700 font-display">{v}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{l}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn direction="right">
              <div className="space-y-5">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-primary-400 flex items-center justify-center text-slate-900 text-xs font-bold shrink-0">{m.year.slice(2)}</div>
                      {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-primary-100 mt-1 min-h-[20px]" />}
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-bold text-primary-700">{m.year}</p>
                      <p className="text-sm text-slate-500 mt-0.5">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Mission / Vision / Values */}
          <SectionHeader eyebrow="Our Purpose" title="Mission, Vision & Values" />
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Target, title: 'Mission', color: 'bg-blue-50 border-blue-100', iconCls: 'text-blue-600', text: 'To provide accessible, high-quality education that equips primary and upper primary students with deep conceptual understanding, strong academic skills, and lifelong learning habits.' },
              { icon: Eye, title: 'Vision', color: 'bg-teal-50 border-teal-100', iconCls: 'text-teal-600', text: "To be Cuttack's most trusted educational institution — where every young learner thrives academically and grows into a confident, capable individual ready for future challenges." },
              { icon: Heart, title: 'Values', color: 'bg-purple-50 border-purple-100', iconCls: 'text-purple-600', text: 'Student-first philosophy. Integrity in teaching. Personalized care and attention. Consistent quality. And a genuine, nurturing bond between teachers, students, and families.' },
            ].map(({ icon: Icon, title, color, iconCls, text }) => (
              <StaggerItem key={title}>
                <motion.div whileHover={{ y: -5 }} className={`rounded-3xl border p-7 ${color} transition-all duration-300 hover:shadow-soft`}>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-card">
                    <Icon size={22} className={iconCls} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 font-display">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{text}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Faculty */}
          <SectionHeader eyebrow="Meet the Team" title="Our Faculty" subtitle="Experienced, passionate educators who genuinely care about every student's success." />
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.slice(0, 4).map(f => (
              <StaggerItem key={f.name}>
                <motion.div
                  className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-400 aspect-[3/4] flex flex-col justify-end"
                >
                  {/* Background Image */}
                  <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent transition-opacity duration-400 group-hover:from-slate-900" />
                  
                  {/* Content Area */}
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    {/* Default visible info */}
                    <div className="transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2">
                       <h3 className="font-bold text-white text-2xl font-display">{f.name}</h3>
                       <p className="text-primary-300 font-medium mt-1">{f.subject}</p>
                    </div>

                    {/* Expanded details */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="pt-3 mt-3 border-t border-white/20">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="badge bg-white/20 backdrop-blur-md text-white border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.qualification}</span>
                            <span className="badge bg-primary-400/60 backdrop-blur-md text-slate-900 border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.experience}</span>
                          </div>
                          <p className="text-slate-200 text-sm leading-relaxed">{f.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
            {facultyData.slice(4).map(f => (
              <div key={f.name} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <motion.div
                  className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-2xl transition-shadow duration-400 aspect-[3/4] flex flex-col justify-end w-full"
                >
                  {/* Background Image */}
                  <img src={f.image} alt={f.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent transition-opacity duration-400 group-hover:from-slate-900" />
                  
                  {/* Content Area */}
                  <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                    {/* Default visible info */}
                    <div className="transform transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2">
                       <h3 className="font-bold text-white text-2xl font-display">{f.name}</h3>
                       <p className="text-primary-300 font-medium mt-1">{f.subject}</p>
                    </div>

                    {/* Expanded details */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        <div className="pt-3 mt-3 border-t border-white/20">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="badge bg-white/20 backdrop-blur-md text-white border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.qualification}</span>
                            <span className="badge bg-primary-400/60 backdrop-blur-md text-slate-900 border-0 text-[10px] px-2 py-1 uppercase tracking-wider">{f.experience}</span>
                          </div>
                          <p className="text-slate-200 text-sm leading-relaxed">{f.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
