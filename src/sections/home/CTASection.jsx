import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import FadeIn from '../../components/animations/FadeIn'
import EnquiryForm from '../../components/forms/EnquiryForm'
import { INSTITUTE } from '../../utils/constants'

export default function CTASection() {
  return (
    <section className="section-pad bg-slate-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 items-stretch bg-white rounded-4xl shadow-soft border border-slate-100 overflow-hidden">
          {/* Left */}
          <FadeIn className="p-10 lg:p-14 flex flex-col justify-center h-full">
            <span className="badge bg-green-50 text-green-700 border border-green-100 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 inline-block">
              🎓 Limited Seats Available
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">
              Start Your Child's Academic Journey Today
            </h2>
            <p className="text-slate-500 mb-6 leading-relaxed">
              Join Cuttack's trusted educational institution. Get personalized attention, expert faculty guidance, and a strong academic foundation for your child's bright future.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {['Quality education for Classes 1 to 10', 'Both Odia & English medium', 'Flexible batch timings available', 'Experienced faculty since 2016', 'Serving Tulsipur & Cuttack area'].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="text-green-500 font-bold">✓</span> {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a href={INSTITUTE.phoneHref} className="btn-primary">
                <Phone size={16} /> Call Now
              </a>
              <a href={INSTITUTE.whatsapp} target="_blank" rel="noreferrer" className="btn-secondary">
                WhatsApp Us <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn direction="right" className="bg-primary-700 p-10 lg:p-14 flex flex-col justify-center h-full w-full">
            <h3 className="text-xl font-bold text-white mb-2 font-display">Quick Enquiry</h3>
            <p className="text-white/70 text-sm mb-6">We'll call you back within 24 hours</p>
            <EnquiryForm light />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
