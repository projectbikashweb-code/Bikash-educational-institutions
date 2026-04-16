import React from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Trophy } from 'lucide-react'
import { resultsData } from '../../data/index'
import FadeIn from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'

function StatCard({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display text-white mb-2">
        {inView ? (
          <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} />
        ) : '0'}
      </div>
      <p className="text-white/70 text-sm font-medium">{stat.label}</p>
    </div>
  )
}

export default function ResultsPreview() {
  return (
    <section className="section-pad bg-cta-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-white/70 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
              Our Results
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Numbers That Speak
            </h2>
            <p className="mt-4 text-white/70 max-w-xl mx-auto">
              Over a decade of consistent results that prove our commitment to every student's success.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {resultsData.stats.map(s => <StatCard key={s.label} stat={s} />)}
        </div>

        {/* Toppers grid */}
        <FadeIn>
          <div className="bg-white/10 border border-white/20 rounded-4xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={20} className="text-yellow-400" />
              <h3 className="text-white font-bold text-lg font-display">Recent Toppers</h3>
            </div>
            <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {resultsData.toppers.map(t => (
                <StaggerItem key={t.name}>
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold text-sm">{t.name}</span>
                      <span className="text-yellow-400 font-bold text-sm">{t.percentage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <span>{t.class}</span>
                      <span>·</span>
                      <span>{t.subject}</span>
                      <span>·</span>
                      <span>{t.year}</span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="text-center mt-6">
              <Link to="/results" className="btn-outline-white text-sm">
                View All Results <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
