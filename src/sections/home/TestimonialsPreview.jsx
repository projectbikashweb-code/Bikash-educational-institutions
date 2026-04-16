import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { testimonialsData } from '../../data/index'
import SectionHeader from '../../components/common/SectionHeader'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'

function TestimonialCard({ t, featured = false }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-3xl p-6 border transition-all duration-300 hover:shadow-soft ${featured ? 'bg-primary-700 border-primary-600' : 'bg-white border-slate-100 shadow-card'}`}
    >
      <Quote size={24} className={featured ? 'text-white/30' : 'text-primary-100'} />
      <p className={`text-sm leading-relaxed mt-3 mb-5 ${featured ? 'text-white/90' : 'text-slate-600'}`}>
        "{t.text}"
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
          {t.avatar}
        </div>
        <div>
          <p className={`text-sm font-bold ${featured ? 'text-white' : 'text-slate-900'}`}>{t.name}</p>
          <p className={`text-xs ${featured ? 'text-white/60' : 'text-slate-400'}`}>{t.role}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsPreview() {
  const shown = testimonialsData.slice(0, 3)
  return (
    <section className="section-pad bg-white">
      <div className="container-main">
        <SectionHeader
          eyebrow="What They Say"
          title="Loved by Students & Parents"
          subtitle="Real reviews from families who trusted us with their children's academic journey."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
          {shown.map((t, i) => (
            <StaggerItem key={t.id}>
              <TestimonialCard t={t} featured={i === 1} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Ratings banner */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-50 rounded-3xl p-6 mb-8 border border-slate-100">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-2xl font-bold text-slate-900 font-display">5 / 5</p>
            <p className="text-xs text-slate-400 mt-0.5">Google Reviews · 5+ ratings</p>
          </div>
          <div className="hidden sm:block w-px h-12 bg-slate-200" />
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-2xl font-bold text-slate-900 font-display">Trusted</p>
            <p className="text-xs text-slate-400 mt-0.5">By families across Tulsipur</p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/testimonials" className="btn-secondary">
            Read All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
