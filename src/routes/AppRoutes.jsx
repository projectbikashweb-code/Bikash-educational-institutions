import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Courses from '../pages/Courses'
import About from '../pages/About'
import Results from '../pages/Results'
import Testimonials from '../pages/Testimonials'
import Batches from '../pages/Batches'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/courses"      element={<Courses />} />
        <Route path="/about"        element={<About />} />
        <Route path="/results"      element={<Results />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/batches"      element={<Batches />} />
        <Route path="/gallery"      element={<Gallery />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>
    </MainLayout>
  )
}
