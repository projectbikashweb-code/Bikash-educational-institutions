import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import FloatingCTA from '../components/common/FloatingCTA'

export default function MainLayout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${isHome ? '' : 'pt-14 md:pt-16'}`}>
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
