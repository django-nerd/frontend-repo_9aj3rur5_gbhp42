import { motion } from 'framer-motion'

export default function Approach() {
  const steps = [
    { k: '01', t: 'Assess', d: 'Rapid baseline assessment and risk mapping across your environment.' },
    { k: '02', t: 'Harden', d: 'Prioritized remediations and controls aligned to CIS/NIST.' },
    { k: '03', t: 'Detect', d: 'Behavioral analytics tuned to your assets and threat models.' },
    { k: '04', t: 'Respond', d: 'Automated workflows and human‑in‑the‑loop incident response.' },
  ]

  return (
    <section id="approach" className="relative bg-slate-950 py-28">
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-black text-white"
        >
          Our approach
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6 backdrop-blur"
            >
              <div className="text-emerald-400 font-black text-2xl">{s.k}</div>
              <div className="mt-2 text-white font-semibold">{s.t}</div>
              <div className="mt-2 text-emerald-100/80">{s.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
