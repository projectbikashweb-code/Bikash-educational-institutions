import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, INSTITUTE } from '../../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  const isHome = location.pathname === '/'
  const isSolid = !isHome || scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isSolid ? 'bg-white/95 backdrop-blur-lg shadow-soft border-b border-slate-100' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-card group-hover:shadow-glow transition-all duration-300 flex items-center justify-center bg-white">
              <img
                src="/images/logo/Bikash-ins.png"
                alt="Bikash Educational Institution Logo"
                className="w-full h-full object-contain transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
              />
            </div>
            <div>
              <p className={`font-bold text-sm leading-tight font-display transition-colors duration-300 ${isSolid ? 'text-slate-900' : 'text-white'}`}>Bikash</p>
              <p className={`text-xs leading-tight transition-colors duration-300 ${isSolid ? 'text-slate-500' : 'text-slate-300'}`}>Educational Institution</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`px-3 py-2 rounded-xl text-[15px] font-medium transition-all duration-300 ${
                  location.pathname === l.path
                                        ? (isSolid ? 'bg-primary-100 text-primary-900 font-semibold shadow-sm' : 'bg-white/20 text-white font-semibold shadow-sm backdrop-blur-sm')
                    : (isSolid ? 'text-slate-600 hover:text-primary-700 hover:bg-slate-50' : 'text-slate-200 hover:text-white hover:bg-white/10')
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={INSTITUTE.phoneHref} 
              aria-label="Call Us"
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-glow hover:-translate-y-0.5 group ${
                isSolid 
                                ? 'bg-primary-50 text-primary-700 hover:bg-primary-400 hover:text-slate-900'
                  : 'bg-white/20 text-white backdrop-blur-sm hover:bg-primary-400 hover:text-slate-900'
              }`}
            >
              <Phone size={18} className="transition-transform duration-300 group-hover:scale-110" />
            </a>
            
            <Link to="/contact" className="hidden lg:flex btn-primary text-sm px-6 py-2.5 shadow-md">Enroll Now</Link>
            
            {/* Mobile hamburger */}
            <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-xl transition-colors ml-1 ${
              isSolid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/20 backdrop-blur-sm'
            }`}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="container-main py-4 flex flex-col gap-1">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === l.path
                      ? 'bg-primary-50 text-primary-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
                <a href={INSTITUTE.phoneHref} className="btn-secondary text-sm text-center">
                  <Phone size={16} /> Call Us
                </a>
                <Link to="/contact" className="btn-primary text-sm text-center">Enroll Now</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
