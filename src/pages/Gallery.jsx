import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryData } from '../data/index'
import FadeIn from '../components/animations/FadeIn'

function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -4 }}
      onClick={() => onClick(item)}
      className="cursor-pointer rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-soft transition-all duration-300 group"
    >
      {/* Real Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center z-10">
          <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
        </div>
      </div>
      <div className="bg-white p-4">
        <p className="text-sm font-semibold text-slate-800">{item.title}</p>
        <p className="text-xs text-slate-400 mt-0.5">{item.category}</p>
      </div>
    </motion.div>
  )
}

function Lightbox({ item, onClose }) {
  if (!item) return null
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-4xl overflow-hidden max-w-lg w-full shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-6 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900 font-display">{item.title}</p>
              <p className="text-sm text-slate-400 mt-0.5">{item.category}</p>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <X size={18} className="text-slate-600" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryData.images
    : galleryData.images.filter(img => img.category === activeCategory)

  return (
    <>
      <section className="relative bg-cover bg-center pt-10 pb-16 md:pt-12 md:pb-20" style={{ backgroundImage: "url('/images/heroes/gallery-home.webp')" }}>
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="container-main relative z-10 text-center">
          <FadeIn>
            <span className="badge bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-md">Visual Tour</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Learning Environment</h1>
            <p className="text-slate-200 max-w-2xl mx-auto text-lg">
              Take a look inside our classrooms, student activities, events, and daily learning experiences at Bikash Educational Institution.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-main">
          {/* Filter tabs */}
          <FadeIn>
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {galleryData.categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-primary-400 text-slate-900 shadow-card'
                      : 'bg-slate-100 text-slate-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map(item => (
                <GalleryCard key={item.id} item={item} onClick={setLightboxItem} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">No images in this category yet.</div>
          )}
        </div>
      </section>

      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
    </>
  )
}
