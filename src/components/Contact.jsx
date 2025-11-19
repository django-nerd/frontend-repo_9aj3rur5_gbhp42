import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! Our team will reach out shortly.')
  }

  return (
    <section id="contact" className="relative bg-slate-950 py-28">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-black text-white"
        >
          Start your security journey
        </motion.h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6 md:p-8 backdrop-blur">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input required className="rounded-lg bg-slate-900/60 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:border-emerald-300/60" placeholder="Full name" />
            <input type="email" required className="rounded-lg bg-slate-900/60 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:border-emerald-300/60" placeholder="Work email" />
            <textarea rows="4" className="rounded-lg bg-slate-900/60 border border-emerald-400/20 px-4 py-3 text-white placeholder:text-emerald-200/40 focus:outline-none focus:border-emerald-300/60" placeholder="What would you like to secure?" />
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 transition-colors">Request demo</button>
          </form>
          {status && <p className="mt-4 text-emerald-300">{status}</p>}
        </div>

        <p className="mt-10 text-center text-emerald-100/70">We respond within 24 hours. Your data is protected with end‑to‑end encryption.</p>
      </div>
    </section>
  )
}
