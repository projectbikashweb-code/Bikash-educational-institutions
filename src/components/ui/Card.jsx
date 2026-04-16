import React from 'react'

export default function Card({ children, className = '', hover = true, glass = false }) {
  const base = `rounded-3xl border border-slate-100 p-6 ${hover ? 'transition-all duration-300 hover:shadow-soft hover:-translate-y-1' : ''}`
  const bg = glass ? 'glass' : 'bg-white shadow-card'
  return <div className={`${base} ${bg} ${className}`}>{children}</div>
}
