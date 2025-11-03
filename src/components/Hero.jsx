import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0B0B14] via-[#0A0A12] to-[#0B0B14] text-white">
      <div className="absolute inset-0 opacity-70">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.16),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for select projects
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Building robust, scalable, and delightful software
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Senior Software Developer specializing in modern web platforms, cloud-native systems, and DX-focused tooling.
          </p>

          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90 transition">
              Explore work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 font-medium hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B14] to-transparent" />
    </section>
  );
}
