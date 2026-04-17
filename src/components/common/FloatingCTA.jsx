import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { INSTITUTE } from '../../utils/constants'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    const t2 = setTimeout(() => setShowTooltip(true), 4000)
    const t3 = setTimeout(() => setShowTooltip(false), 8000)
    return () => { clearTimeout(t); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass rounded-2xl p-3 pr-8 max-w-xs shadow-soft relative"
              >
                <button
                  onClick={() => setShowTooltip(false)}
                  className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
                <p className="text-xs font-semibold text-slate-800">👋 Chat with us on WhatsApp!</p>
                <p className="text-xs text-slate-500 mt-0.5">Ask us about admissions & batches and more.</p>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.a
            href={INSTITUTE.whatsapp}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle size={26} className="text-white" fill="white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
