'use client'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookies-accepted')
    if (!accepted) setShow(true)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-[#2d2d2d] px-6 py-4 flex items-center justify-between gap-4">
      <p className="text-sm text-[#b3b3b3]">
        We use cookies to improve your experience.{' '}
        <a href="/cookies" className="text-[#0ea5e9] hover:underline">Learn more</a>
      </p>
      <button
        onClick={() => { localStorage.setItem('cookies-accepted', 'true'); setShow(false) }}
        className="px-4 py-2 bg-[#0ea5e9] text-white rounded-lg text-sm font-medium hover:bg-[#0ea5e9]/90 transition-colors whitespace-nowrap"
      >
        Accept
      </button>
    </div>
  )
}
