import React from 'react'
import Hero from '../sections/home/Hero'
import Highlights from '../sections/home/Highlights'
import CoursesPreview from '../sections/home/CoursesPreview'
import ResultsPreview from '../sections/home/ResultsPreview'
import TestimonialsPreview from '../sections/home/TestimonialsPreview'
import CTASection from '../sections/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <CoursesPreview />
      <ResultsPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  )
}
