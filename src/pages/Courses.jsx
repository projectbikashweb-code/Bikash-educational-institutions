import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react'
import { coursesData } from '../data/index'
import SectionHeader from '../components/common/SectionHeader'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import FadeIn from '../components/animations/FadeIn'

function PageHero() {
  return (
    <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/hero-courses.jpg')" }}>
      <div className="absolute inset-0 bg-slate-900/70" />
      <div className="container-main relative z-10 text-center">
        <FadeIn>
          <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Our Programs</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Courses & Programs
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Quality education for Classes 1–10, designed to build deep conceptual understanding, academic confidence, and a love for learning.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

export default function Courses() {
  return (
    <>
      <PageHero />
      <section className="section-pad bg-white">
        <div className="container-main">
          <StaggerContainer className="flex flex-col gap-10">
            {coursesData.map((course, i) => (
              <StaggerItem key={course.id}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className={`rounded-4xl border ${course.border} bg-gradient-to-br ${course.color} overflow-hidden shadow-card hover:shadow-soft transition-all duration-300`}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Left */}
                    <div className="p-8 md:border-r border-slate-100/50">
                      <div className="text-4xl mb-4">{course.icon}</div>
                      <span className={`badge ${course.badgeColor} text-xs mb-3`}>{course.badge}</span>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 font-display">{course.title}</h2>
                      <p className="text-slate-500 text-sm mb-4">{course.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.medium.map(m => (
                          <span key={m} className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full">{m} Medium</span>
                        ))}
                      </div>
                      <Link to="/contact" className="btn-primary text-sm">
                        Enroll Now <ArrowRight size={15} />
                      </Link>
                    </div>

                    {/* Subjects */}
                    <div className="p-8 md:border-r border-slate-100/50">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <BookOpen size={15} /> Subjects
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {course.subjects.map(s => (
                          <li key={s} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="p-8">
                      <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">Features</h3>
                      <ul className="flex flex-col gap-3">
                        {course.features.map(f => (
                          <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle size={15} className="text-green-500 mt-0.5 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom CTA */}
          <FadeIn className="mt-16 text-center bg-primary-50 rounded-4xl p-10 border border-primary-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">Not sure which program suits your child?</h3>
            <p className="text-slate-500 mb-6">Call us or send an enquiry — our team will help you choose the right program.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">Enroll Now</Link>
              <Link to="/batches" className="btn-secondary">View Batch Schedule</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
