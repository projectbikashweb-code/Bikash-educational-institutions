import React from 'react'

const variants = {
  primary:       'bg-primary-400 hover:bg-primary-500 text-slate-900 shadow-card hover:shadow-glow',
  secondary:     'bg-white hover:bg-primary-50 text-primary-700 border border-primary-200',
  teal:          'bg-teal-600 hover:bg-teal-700 text-white shadow-card',
  outline:       'bg-transparent hover:bg-primary-50 text-primary-700 border border-primary-300',
  'outline-white':'bg-transparent hover:bg-white/10 text-white border border-white/50',
  ghost:         'bg-transparent hover:bg-slate-100 text-slate-700',
}

const sizes = {
  sm:  'px-4 py-2 text-sm rounded-xl',
  md:  'px-6 py-3 text-base rounded-2xl',
  lg:  'px-8 py-4 text-lg rounded-2xl',
}

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled, href }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed'
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) return <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a>
  return <button type={type} className={cls} onClick={onClick} disabled={disabled}>{children}</button>
}
