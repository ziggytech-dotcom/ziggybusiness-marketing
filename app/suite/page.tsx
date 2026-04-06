'use client'

import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const suiteApps = [
  { name: 'ZiggyHQ', desc: 'CRM & Business Operations', color: '#0ea5e9', domain: 'ziggyhq.com', current: true },
  { name: 'ZiggyNexus', desc: 'Client Portal & Collaboration', color: '#10b981', domain: 'ziggynexus.com' },
  { name: 'ZiggyDocs', desc: 'E-Signatures & Documents', color: '#7c3aed', domain: 'ziggydocs.com' },
  { name: 'ZiggySchedule', desc: 'Appointment Scheduling', color: '#f472b6', domain: 'ziggyschedule.com' },
  { name: 'ZiggyPayroll', desc: 'Payroll & Contractors', color: '#84cc16', domain: 'ziggypayroll.com' },
  { name: 'ZiggyPitch', desc: 'Proposals & Quotes', color: '#f97316', domain: 'ziggypitch.com' },
  { name: 'ZiggyHR', desc: 'HR & People Management', color: '#8b5cf6', domain: 'ziggyhr.com' },
  { name: 'ZiggyReviews', desc: 'Reviews & Reputation', color: '#f59e0b', domain: 'ziggyreviews.com' },
  { name: 'ZiggyInvoice', desc: 'Invoicing & Billing', color: '#14b8a6', domain: 'ziggyinvoice.com' },
  { name: 'ZiggyIntake', desc: 'Forms & Lead Capture', color: '#38bdf8', domain: 'ziggyintake.com' },
]

const automations = [
  { trigger: 'New form submitted in ZiggyIntake', action: 'Lead created in ZiggyHQ automatically' },
  { trigger: 'Lead marked Won in ZiggyHQ', action: 'Invoice draft created in ZiggyInvoice' },
  { trigger: 'Appointment booked in ZiggySchedule', action: 'Contact activity logged in ZiggyHQ' },
  { trigger: 'Offer letter signed in ZiggyDocs', action: 'Employee added to ZiggyHR' },
  { trigger: '5-star review in ZiggyReviews', action: 'Follow-up task created in ZiggyHQ' },
  { trigger: 'Invoice paid in ZiggyInvoice', action: 'Thank you email sent automatically' },
]

export default function SuitePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />

      {/* Hero */}
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium mb-6">
            ZiggyTech Business Suite
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            10 tools. One workspace.<br />
            <span style={{ color: '#0ea5e9' }}>One price.</span>
          </h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">
            ZiggyHQ is part of the ZiggyTech Business Suite — 10 tightly integrated tools designed to run your entire business. No duct tape. No API headaches. Everything just works.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://ziggybusiness.com" className="px-6 py-3 bg-[#0ea5e9] text-white rounded-lg font-medium hover:bg-[#0ea5e9]/90 transition-colors">
              Get all 10 apps — $179/mo
            </a>
            <a href="https://ziggybusiness.com" className="px-6 py-3 border border-[#2d2d2d] text-[#b3b3b3] rounded-lg hover:text-white hover:bg-[#1a1a1a] transition-colors">
              Explore the Suite
            </a>
          </div>
        </div>
      </section>

      {/* Apps grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">The complete toolkit</h2>
          <p className="text-[#b3b3b3] text-center mb-12">Every tool you need, all connected, all in one login.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {suiteApps.map((app) => (
              <a
                key={app.name}
                href={app.current ? '#' : `https://${app.domain}`}
                className={`relative bg-[#1a1a1a] border rounded-xl p-5 hover:border-opacity-60 transition-all group ${app.current ? 'cursor-default' : 'hover:bg-[#1f1f1f]'}`}
                style={{ borderColor: app.current ? app.color : '#2d2d2d' }}
              >
                {app.current && (
                  <div className="absolute -top-2.5 left-3">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium text-white" style={{ backgroundColor: app.color }}>
                      You are here
                    </span>
                  </div>
                )}
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${app.color}20` }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{app.name}</h3>
                <p className="text-[#b3b3b3] text-xs leading-relaxed">{app.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-app automations */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Automations that cross apps</h2>
          <p className="text-[#b3b3b3] text-center mb-12">When your tools talk to each other, work happens automatically.</p>
          <div className="space-y-3">
            {automations.map((auto, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-5">
                <div className="flex-1">
                  <p className="text-[#b3b3b3] text-sm">{auto.trigger}</p>
                </div>
                <div className="flex-shrink-0 text-[#0ea5e9] text-lg">→</div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">{auto.action}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] text-sm mt-6">
            + 6 more pre-built automations and full custom automation builder
          </p>
        </div>
      </section>

      {/* AI Roadmap section */}
      <section className="py-20 px-4 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] text-xs font-medium mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">AI is coming to every app in the suite</h2>
            <p className="text-[#b3b3b3] text-lg max-w-2xl mx-auto">
              We integrate AI where it actually moves the needle — powered by OpenAI, Anthropic, and Bland.ai. 
              Every feature is tested on our own businesses before it ships to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              {
                app: 'ZiggyHQ',
                color: '#0ea5e9',
                features: ['AI email sequence writer', 'Lead scoring & deal probability', 'Meeting summary → CRM notes'],
              },
              {
                app: 'ZiggyPitch',
                color: '#f97316',
                features: ['AI proposal generator', 'Win/loss analysis', 'Pricing recommendations'],
              },
              {
                app: 'ZiggyReviews',
                color: '#f59e0b',
                features: ['AI review response generator', 'Sentiment trend analysis', 'Competitor monitoring summary'],
              },
              {
                app: 'ZiggyDocs',
                color: '#7c3aed',
                features: ['AI contract clause generator', 'Document risk flagging', 'Auto-fill from contact data'],
              },
              {
                app: 'ZiggySchedule',
                color: '#f472b6',
                features: ['AI scheduling assistant', 'Reminder copy generator', 'No-show prediction'],
              },
              {
                app: 'ZiggyHR',
                color: '#8b5cf6',
                features: ['Job description generator', 'Resume screening assist', 'Performance review writer'],
              },
            ].map((item) => (
              <div key={item.app} className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-6 hover:border-[#2d2d2d]/80 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <h3 className="text-white font-semibold">{item.app}</h3>
                  <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#b3b3b3]">Coming soon</span>
                </div>
                <ul className="space-y-2">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#b3b3b3]">
                      <span className="text-[#0ea5e9] mt-0.5 flex-shrink-0">→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl">
            <p className="text-white font-medium mb-1">Built different</p>
            <p className="text-[#b3b3b3] text-sm max-w-xl mx-auto">
              We don&apos;t ship AI features until we&apos;ve used them ourselves. Every ZiggyTech AI enhancement runs on our own 
              agency, CRM, and payroll first — so you get the version that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">One login. Everything connected.</h2>
          <p className="text-[#b3b3b3] text-lg mb-3">Get all 10 apps for less than what most businesses pay for just 2 tools.</p>
          <div className="flex items-center justify-center gap-6 text-sm text-[#b3b3b3] mb-8">
            <span>vs GoHighLevel: <span className="text-[#e11d48]">$297/mo</span></span>
            <span>vs buying separately: <span className="text-[#e11d48]">~$328/mo</span></span>
            <span>ZiggyTech Suite: <span className="text-[#22c55e] font-bold">$179/mo</span></span>
          </div>
          <a href="https://ziggybusiness.com" className="inline-flex items-center gap-2 px-8 py-4 bg-[#0ea5e9] text-white rounded-xl text-lg font-semibold hover:bg-[#0ea5e9]/90 transition-colors">
            Get the Complete Suite — $179/mo
          </a>
          <p className="text-[#b3b3b3] text-sm mt-4">14-day free trial · No credit card · Cancel anytime</p>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
