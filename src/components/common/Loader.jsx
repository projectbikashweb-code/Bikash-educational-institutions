import React from 'react'

export function SkeletonCard() {
  return (
    <div className="rounded-3xl bg-white border border-slate-100 p-6 shadow-card">
      <div className="skeleton h-10 w-10 rounded-2xl mb-4" />
      <div className="skeleton h-5 w-3/4 rounded-lg mb-2" />
      <div className="skeleton h-4 w-full rounded-lg mb-1" />
      <div className="skeleton h-4 w-5/6 rounded-lg mb-4" />
      <div className="skeleton h-10 w-full rounded-2xl" />
    </div>
  )
}

export default function Loader({ fullScreen = false }) {
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-3xl bg-cta-gradient flex items-center justify-center shadow-glow animate-pulse">
          <span className="text-white font-bold text-3xl font-display">M</span>
        </div>
        <p className="text-sm text-slate-400 font-medium tracking-wide">Loading...</p>
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-10 h-10 rounded-2xl bg-cta-gradient flex items-center justify-center shadow-glow animate-pulse">
        <span className="text-white font-bold text-xl font-display">M</span>
      </div>
    </div>
  )
}
