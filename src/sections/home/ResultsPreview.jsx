import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ChevronDown, ChevronUp, Trophy } from 'lucide-react'
import { resultsData } from '../../data/index'
import FadeIn from '../../components/animations/FadeIn'
import { StaggerContainer, StaggerItem } from '../../components/animations/StaggerContainer'

const INITIAL_VISIBLE = 6

function StatCard({ stat }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="stat-card-item text-center cursor-default">
      <div className="stat-title text-4xl md:text-5xl font-bold font-display text-[#111] mb-2">
        {inView ? (
          <CountUp end={stat.value} duration={2.5} decimals={stat.decimals || 0} suffix={stat.suffix} />
        ) : '0'}
      </div>
      <p className="stat-sub text-[#666] text-sm font-medium">{stat.label}</p>
    </div>
  )
}

export default function ResultsPreview() {
  const [expanded, setExpanded] = useState(false)

  const visibleToppers = expanded
    ? resultsData.toppers
    : resultsData.toppers.slice(0, INITIAL_VISIBLE)

  const hasMore = resultsData.toppers.length > INITIAL_VISIBLE

  return (
    <section className="section-pad bg-cta-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-main relative z-10 results-wrapper">
        <div className="results-card max-w-[1100px] mx-auto bg-white rounded-[24px] p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="inline-block mb-3 text-xs font-bold tracking-widest uppercase text-[#666] bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200">
                Our Results
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111]">
                Numbers That Speak
              </h2>
              <p className="mt-4 text-[#666] max-w-xl mx-auto">
                Over a decade of consistent results that prove our commitment to every student's success.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <div
            className="stats-grid mb-16 grid gap-4 text-center"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}
          >
            {resultsData.stats.map(s => <StatCard key={s.label} stat={s} />)}
          </div>

          {/* Toppers grid */}
          <FadeIn>
            <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <Trophy size={20} className="text-yellow-500" />
                <h3 className="text-[#111] font-bold text-lg font-display">Recent Toppers</h3>
                <span className="ml-auto text-xs text-[#999] font-medium">
                  {expanded ? resultsData.toppers.length : Math.min(INITIAL_VISIBLE, resultsData.toppers.length)} of {resultsData.toppers.length}
                </span>
              </div>

              {/* Toppers list with fade mask when collapsed */}
              <div className="relative">
                <StaggerContainer
                  className="toppers-grid grid gap-3"
                  style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
                >
                  {visibleToppers.map(t => (
                    <StaggerItem key={t.name}>
                      <div className="topper-card bg-[#f9fafb] rounded-[16px] p-4 border border-gray-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#111] font-bold text-sm">{t.name}</span>
                          <span className="percentage-badge text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded font-bold text-sm border border-emerald-100">
                            {t.percentage}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[#666] text-xs">
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

                {/* Fade gradient when collapsed and more items exist */}
                {!expanded && hasMore && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
                  />
                )}
              </div>

              {/* Toggle expand/collapse button */}
              {hasMore && (
                <div className="text-center mt-5">
                  <button
                    onClick={() => setExpanded(prev => !prev)}
                    className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-[#555] bg-gray-100 hover:bg-gray-200 rounded-full border border-gray-200 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {expanded ? (
                      <><ChevronUp size={15} /> Show Less</>
                    ) : (
                      <><ChevronDown size={15} /> Show {resultsData.toppers.length - INITIAL_VISIBLE} More Toppers</>
                    )}
                  </button>
                </div>
              )}

              {/* CTA */}
              <div className="text-center mt-6">
                <Link
                  to="/results"
                  className="results-cta inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111] text-white rounded-full text-sm font-semibold hover:bg-black transition-colors mx-auto"
                >
                  View All Results <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
