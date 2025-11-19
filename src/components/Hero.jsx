import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[110vh] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 w-full">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center py-24 md:py-40">
          <div className="md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white"
            >
              Cybersecurity, reimagined.
              <span className="block bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                Real‑time. Futuristic. Trusted.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-6 text-emerald-100/80 text-lg md:text-xl max-w-2xl"
            >
              Safeguard your business with AI‑assisted detection, attack surface mapping, and automated response — all wrapped in a beautiful 3D experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#features" className="pointer-events-auto inline-flex items-center rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 transition-colors">
                Explore capabilities
              </a>
              <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-xl border border-emerald-400/40 text-emerald-100/90 hover:text-white hover:border-emerald-300 px-6 py-3">
                Talk to an expert
              </a>
            </motion.div>
          </div>

          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="pointer-events-none rounded-3xl border border-emerald-400/20 bg-slate-900/40 backdrop-blur p-6"
            >
              <div className="grid grid-cols-2 gap-4 text-sm text-emerald-200/80">
                <div className="rounded-xl bg-slate-900/60 border border-emerald-400/10 p-4">
                  <p className="text-3xl font-black text-emerald-400">99.99%</p>
                  <p>Uptime SLA</p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-emerald-400/10 p-4">
                  <p className="text-3xl font-black text-emerald-400"><span className="tabular-nums">12ms</span></p>
                  <p>Detection latency</p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-emerald-400/10 p-4">
                  <p className="text-3xl font-black text-emerald-400">24/7</p>
                  <p>Managed SOC</p>
                </div>
                <div className="rounded-xl bg-slate-900/60 border border-emerald-400/10 p-4">
                  <p className="text-3xl font-black text-emerald-400">AES‑256</p>
                  <p>Encryption</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
