import React from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { INSTITUTE } from '../utils/constants'
import FadeIn from '../components/animations/FadeIn'
import EnquiryForm from '../components/forms/EnquiryForm'
import { StaggerContainer, StaggerItem } from '../components/animations/StaggerContainer'
import { motion } from 'framer-motion'

const contactItems = [
  { icon: Phone, label: 'Phone', value: INSTITUTE.phone, href: INSTITUTE.phoneHref, color: 'bg-blue-50 text-blue-600' },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: INSTITUTE.whatsapp, color: 'bg-green-50 text-green-600' },
  { icon: Mail, label: 'Email', value: INSTITUTE.email, href: `mailto:${INSTITUTE.email}`, color: 'bg-purple-50 text-purple-600' },
  { icon: MapPin, label: 'Address', value: INSTITUTE.address, href: '#map', color: 'bg-orange-50 text-orange-600' },
  { icon: Clock, label: 'Timings', value: 'Open daily · Closes 9 PM', href: null, color: 'bg-teal-50 text-teal-600' },
]

export default function Contact() {
  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/contact-home.webp')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Have questions about admissions, batches, or programs? Reach out — we'd love to help your child grow.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left */}
            <FadeIn>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Reach Us Directly</h2>
              <StaggerContainer className="flex flex-col gap-4 mb-10">
                {contactItems.map(item => (
                  <StaggerItem key={item.label}>
                    <motion.div whileHover={{ x: 4 }}>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                          className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:bg-primary-50 transition-all duration-200 group"
                        >
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                            <p className="text-sm font-semibold text-slate-800 group-hover:text-primary-700 transition-colors">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                            <item.icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 font-medium">{item.label}</p>
                            <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Quick action buttons */}
              <div className="flex flex-wrap gap-3">
                <a href={INSTITUTE.phoneHref} className="btn-primary">
                  <Phone size={16} /> Call Now
                </a>
                <a href={INSTITUTE.whatsapp} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5">
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </FadeIn>

            {/* Right - Enquiry form */}
            <FadeIn direction="right">
              <div className="bg-primary-700 rounded-4xl p-8 md:p-10">
                <h2 className="text-xl font-bold text-white mb-1 font-display">Send an Enquiry</h2>
                <p className="text-white/70 text-sm mb-6">We'll get back to you within 24 hours.</p>
                <EnquiryForm light />
              </div>
            </FadeIn>
          </div>

          {/* Map */}
          <FadeIn className="mt-16" id="map">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">Find Us</h2>
            <div className="rounded-4xl overflow-hidden border border-slate-100 shadow-soft h-80 bg-slate-100 flex items-center justify-center">
              {/* Google Maps embed placeholder — replace src with actual embed URL */}
              <iframe
                title="Bikash Educational Institution Location"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Bikash%20educational%20institutions,%20926/A/1,%20Srivihar%20Colony,%20Masik%20Patna%20Colony,%20Cuttack,%20Odisha%20753008&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-sm text-slate-400 mt-3 flex items-center gap-2">
              <MapPin size={14} className="text-primary-500" />
              {INSTITUTE.address}
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
