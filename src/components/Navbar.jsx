import { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Overview', href: '#hero' },
    { label: 'Capabilities', href: '#features' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="relative">
                <span className="absolute inset-0 rounded-lg bg-emerald-400/30 blur-md" />
                <ShieldCheck className="relative h-7 w-7 text-emerald-400" />
              </div>
              <span className="text-white font-semibold tracking-tight">Aegis Security</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-emerald-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
              >
                Get Started
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-emerald-400/30 text-emerald-200/90 hover:text-white hover:border-emerald-400/60 p-2"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-emerald-400/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-emerald-100/80 hover:text-white hover:bg-emerald-400/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors"
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
