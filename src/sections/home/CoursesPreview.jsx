import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { coursesData } from '../../data/index'
import SectionHeader from '../../components/common/SectionHeader'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'

export default function CoursesPreview() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-main">
        <SectionHeader
          eyebrow="Our Programs"
          title="Courses We Offer"
          subtitle="Structured learning programs for Classes 1 to 8, covering CBSE, ICSE, and BSE Odisha students in both Odia and English medium."
        />

        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-10">
          {coursesData.map((course) => (
            <StaggerItem key={course.id}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`rounded-3xl border ${course.border} bg-gradient-to-br ${course.color} p-6 h-full flex flex-col hover:shadow-soft transition-all duration-300`}
              >
                <div className="text-3xl mb-4">{course.icon}</div>
                <span className={`badge ${course.badgeColor} text-xs mb-3 self-start`}>{course.badge}</span>
                <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">{course.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{course.subtitle}</p>

                <div className="flex gap-2 mb-5">
                  {course.medium.map(m => (
                    <span key={m} className="text-xs bg-white/70 border border-slate-200 text-slate-600 px-3 py-1 rounded-full font-medium">{m} Medium</span>
                  ))}
                </div>

                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {course.features.slice(0, 3).map(f => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn-primary text-sm w-full justify-center">
                  Enroll Now <ArrowRight size={15} />
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="text-center">
          <Link to="/courses" className="btn-secondary">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
