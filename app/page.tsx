'use client'
import { useState } from 'react'
import Link from 'next/link'

const apps = [
  { name: 'ZiggyHQ', desc: 'CRM & Business Operations', color: '#0ea5e9', url: 'https://ziggyhq.com', price: '$29/mo' },
  { name: 'ZiggyNexus', desc: 'Client Portal & Collaboration', color: '#10b981', url: 'https://ziggynexus.com', price: '$25/mo' },
  { name: 'ZiggyDocs', desc: 'E-Signatures & Documents', color: '#7c3aed', url: 'https://ziggydocs.com', price: '$15/mo' },
  { name: 'ZiggySchedule', desc: 'Appointment Scheduling', color: '#f472b6', url: 'https://ziggyschedule.com', price: '$15/mo' },
  { name: 'ZiggyPayroll', desc: 'Payroll & Contractors', color: '#84cc16', url: 'https://ziggypayroll.com', price: '$29/mo' },
  { name: 'ZiggyPitch', desc: 'Proposals & Quotes', color: '#f97316', url: 'https://ziggypitch.com', price: '$19/mo' },
  { name: 'ZiggyHR', desc: 'HR & People Management', color: '#8b5cf6', url: 'https://ziggyhr.com', price: '$49/mo' },
  { name: 'ZiggyReviews', desc: 'Reviews & Reputation', color: '#f59e0b', url: 'https://ziggyreviews.com', price: '$29/mo' },
  { name: 'ZiggyInvoice', desc: 'Invoicing & Billing', color: '#14b8a6', url: 'https://ziggyinvoice.com', price: '$15/mo' },
  { name: 'ZiggyIntake', desc: 'Forms & Lead Capture', color: '#38bdf8', url: 'https://ziggyintake.com', price: '$15/mo' },
]

const comingSoon = [
  { name: 'ZiggyMailHQ', desc: 'Email Marketing', color: '#ec4899', url: 'https://ziggymailhq.com' },
  { name: 'ZiggyAssist', desc: 'Customer Support & Live Chat', color: '#6366f1', url: 'https://ziggyassist.com' },
]

const automations = [
  { from: 'ZiggyIntake', to: 'ZiggyHQ', desc: 'Form submitted → Lead created automatically' },
  { from: 'ZiggySchedule', to: 'ZiggyHQ', desc: 'Appointment booked → Contact activity logged' },
  { from: 'ZiggyHQ', to: 'ZiggyInvoice', desc: 'Deal won → Invoice draft created' },
  { from: 'ZiggyReviews', to: 'ZiggyHQ', desc: '5-star review → Follow-up task created' },
  { from: 'ZiggyDocs', to: 'ZiggyHR', desc: 'Offer letter signed → Employee record created' },
  { from: 'ZiggyInvoice', to: 'ZiggyHQ', desc: 'Invoice paid → Thank-you email sent' },
]

const faqs = [
  { q: 'Do I have to buy all 10 apps?', a: 'No. Every app works standalone. Buy one, buy five, or get all ten — your choice. The Complete Suite at $179/mo is just the best value if you need most of them.' },
  { q: 'Is it one login for everything?', a: 'Yes. One ZiggyTech account gives you access to every app you subscribe to. No separate logins, no juggling passwords.' },
  { q: 'Can my team use the apps?', a: 'Yes. Every app includes team seats. Pro plans include 5 seats and you can add more. The Complete Suite includes team access across all apps.' },
  { q: 'How does the $179/mo Complete Suite work?', a: 'One flat price for all 10 apps. No per-app fees, no hidden costs. As we add new apps to the suite, Complete Suite subscribers get them automatically.' },
  { q: 'Do apps work together?', a: "Yes — that's the whole point. Leads from ZiggyIntake flow into ZiggyHQ. Won deals trigger ZiggyInvoice drafts. Signed docs create ZiggyHR records. The automation engine connects everything." },
  { q: 'Is there a free trial?', a: '14 days on every app, no credit card required. Try one or try all — cancel anytime during the trial.' },
]

export default function ZiggyBusinessHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-[#1f1f1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-2xl tracking-tight">
            <span style={{ color: '#ff1744' }}>Ziggy</span><span style={{ color: '#ffffff' }}>Business</span>
          </Link>
          <div className="hidden md:flex items-center gap-1 text-xs text-[#b3b3b3]">
            {[['All Apps', '#apps'], ['Pricing', '#pricing'], ['Coming Soon', '#coming-soon'], ['FAQ', '#faq']].map(([label, href]) => (
              <a key={label} href={href} className="px-3 py-2 hover:text-white transition-colors rounded-lg hover:bg-[#1a1a1a]">{label}</a>
            ))}
          </div>
          <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0a0a0a] rounded-xl font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all">
            Get the Suite — $179/mo
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-4 bg-[#0a0a0a]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-3xl" style={{backgroundColor: 'rgba(255,23,68,0.06)'}} />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#b3b3b3] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyTech Business Suite — 10 Tools. One Price.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            The complete business suite<br />
            <span style={{ color: '#ff1744' }}>built by people who run one.</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10 text-center">
            We couldn&apos;t find affordable tools that worked together. So we built ten of them — tested on our own businesses first — and made them available to yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-6 mt-2">
            <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0a0a0a] rounded-xl font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all">
              Get the Complete Suite
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#apps" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-lg hover:bg-white/15 transition-all">
              Browse all apps
            </a>
          </div>
          <p className="text-sm text-[#b3b3b3]/60 text-center">14-day free trial on every app · No credit card · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f] text-center">
            {['10 connected tools', '$179/mo for everything', '14-day free trial', '1 login for all apps'].map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ff1744]" />{fact}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Apps */}
      <section id="apps" className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff1744] mb-3">The Suite</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">10 tools. All connected.</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto text-center">Every app works standalone or as part of the suite. One login. One price. Everything your business needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {apps.map((app) => (
              <a key={app.name} href={app.url} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-5 hover:border-opacity-60 transition-all group block"
                onMouseEnter={e => (e.currentTarget.style.borderColor = app.color + '40')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = '')}>
                <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: app.color + '20' }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }} />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{app.name}</h3>
                <p className="text-[#b3b3b3] text-xs mb-2">{app.desc}</p>
                <p className="text-xs font-medium" style={{ color: app.color }}>{app.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-app Automations */}
      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff1744] mb-3">Connected</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Apps that talk to each other</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto text-center">When your tools are connected, work happens automatically. No Zapier needed.</p>
          </div>
          <div className="space-y-3">
            {automations.map((auto, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 hover:border-[#ff1744]/20 transition-colors">
                <span className="text-xs text-[#b3b3b3] font-medium bg-[#1a1a1a] px-2 py-1 rounded shrink-0">{auto.from}</span>
                <svg className="w-4 h-4 text-[#ff1744] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                <span className="text-sm text-white">{auto.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] text-sm mt-8">+ 6 more pre-built automations and a full custom builder</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0d1117] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff1744] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">One price. Everything included.</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto text-center">Stop paying for ten separate subscriptions. Get all 10 apps for less than most businesses pay for two.</p>
          
          <div className="bg-[#111111] border-2 border-white/20 rounded-2xl p-10 max-w-lg mx-auto mb-8 shadow-[0_0_60px_rgba(255,255,255,0.05)]">
            <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Complete Suite</p>
            <div className="flex items-end justify-center gap-1 mb-2">
              <span className="text-6xl font-bold text-white">$179</span>
              <span className="text-[#b3b3b3] mb-2">/mo</span>
            </div>
            <p className="text-sm text-[#b3b3b3] mb-8">All 10 apps · Team seats · 14-day free trial</p>
            <a href="https://app.ziggyhq.com/signup" className="block w-full text-center px-6 py-4 bg-white text-[#0a0a0a] rounded-xl font-bold text-lg hover:opacity-90 transition-all">
              Start Free Trial — 14 days
            </a>
            <p className="text-xs text-[#b3b3b3]/60 mt-3">No credit card · Cancel anytime · Annual billing saves 10%</p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'vs buying separately', value: '~$328/mo', color: '#e11d48' },
              { label: 'vs GoHighLevel', value: '$297/mo', color: '#e11d48' },
              { label: 'You save', value: '$1,788/yr', color: '#22c55e' },
            ].map((item, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4">
                <p className="text-xs text-[#b3b3b3] mb-1">{item.label}</p>
                <p className="text-lg font-bold" style={{ color: item.color }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section id="coming-soon" className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#ff1744] mb-4">Expanding</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">We&apos;re not done building.</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto text-center">Complete Suite subscribers get every new app automatically — no price increase. Get in now.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {comingSoon.map((app) => (
              <div key={app.name} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 text-left opacity-75">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: app.color + '20' }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: app.color }} />
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1a1a1a] border border-[#2d2d2d] text-[#b3b3b3]">Coming Soon</span>
                </div>
                <h3 className="text-white font-semibold mb-1">{app.name}</h3>
                <p className="text-[#b3b3b3] text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#ff1744] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#ff1744] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Everything your business needs.<br />
            <span style={{ color: '#ff1744' }}>Finally in one place.</span>
          </h2>
          <p className="text-xl text-[#b3b3b3] mb-10 leading-relaxed text-center">10 apps. 14-day free trial on all of them. No credit card.</p>
          <a href="https://app.ziggyhq.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#0a0a0a] rounded-xl font-bold text-xl hover:opacity-90 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            Start Free Trial
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f1f] py-12 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-white mb-4"><span style={{ color: '#ff1744' }}>Ziggy</span>Business</p>
              <p className="text-sm text-[#b3b3b3]">10 tools for local business. One price.</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Apps</p>
              {apps.slice(0,5).map(app => (
                <a key={app.name} href={app.url} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{app.name}</a>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">&nbsp;</p>
              {apps.slice(5).map(app => (
                <a key={app.name} href={app.url} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{app.name}</a>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#b3b3b3] mb-4">Legal</p>
              {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms']].map(([label, href]) => (
                <a key={label} href={href} className="block text-sm text-[#b3b3b3] hover:text-white mb-2 transition-colors">{label}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-[#1f1f1f] pt-8">
            <p className="text-sm text-[#b3b3b3] text-center">© 2026 ZiggyTech Ventures LLC · Las Vegas, NV</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
