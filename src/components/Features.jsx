import { motion } from 'framer-motion'
import { ShieldCheck, Radar, Lock, Globe2, Fingerprint, Activity } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Managed XDR',
    desc: 'End‑to‑end monitoring, correlation, and response across endpoints, identities, and cloud.',
  },
  {
    icon: Radar,
    title: 'Attack Surface',
    desc: 'Continuous discovery with prioritized risk scores and automated hardening guidance.',
  },
  {
    icon: Lock,
    title: 'Zero‑Trust Access',
    desc: 'Strong MFA, device posture, and policy‑as‑code to protect critical assets at the edge.',
  },
  {
    icon: Globe2,
    title: 'Cloud Security',
    desc: 'Agentless visibility into misconfigurations, exposures, and drift across multi‑cloud.',
  },
  {
    icon: Fingerprint,
    title: 'Identity Defense',
    desc: 'Protect your workforce against phishing and account takeovers with behavioral AI.',
  },
  {
    icon: Activity,
    title: 'Threat Intel',
    desc: 'Live feeds, IOCs, and playbooks integrated directly into your detections and SIEM.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.15)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-black text-white"
        >
          Secure by design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-center text-emerald-100/80"
        >
          A modern defense platform, engineered for speed, visibility, and confidence.
        </motion.p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-emerald-400/20 bg-slate-900/40 p-6 backdrop-blur hover:bg-slate-900/60 transition-colors"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="relative">
                  <span className="absolute inset-0 rounded-lg bg-emerald-400/30 blur-md" />
                  <Icon className="relative h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold">{title}</h3>
              </div>
              <p className="text-emerald-100/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
