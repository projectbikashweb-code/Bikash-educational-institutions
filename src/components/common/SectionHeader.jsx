import React from 'react'

export default function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full border border-primary-100">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/80' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
