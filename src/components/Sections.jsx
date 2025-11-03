import { motion } from 'framer-motion';
import { Cpu, Cloud, Layout, Shield, Github, ExternalLink, Layers, Database, Workflow } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-2 text-white/60 max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

export default function Sections() {
  return (
    <div className="bg-[#0B0B14] text-white">
      {/* About */}
      <Section id="about" title="About" subtitle="Pragmatic engineer with a strong product sense and an eye for developer experience.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-medium">What I do</h3>
            <p className="mt-2 text-white/70">
              I architect, build, and lead delivery of modern web apps and platforms. From design systems and
              micro-frontend architectures to cloud-native backends and CI/CD, I bring ideas to production.
            </p>
          </motion.div>
          {[
            { icon: Cpu, title: 'Frontend Platforms', text: 'Design systems, performance, accessibility, micro-frontends.' },
            { icon: Cloud, title: 'Cloud & Infra', text: 'Kubernetes, Terraform, AWS/GCP, observability, scalability.' },
          ].map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-2 text-white/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" subtitle="A selection of technologies I use day-to-day.">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            'TypeScript','React','Next.js','Node.js','GraphQL','TailwindCSS','Framer Motion','Vite','tRPC','Prisma','PostgreSQL','MongoDB','Docker','Kubernetes','AWS','GCP','Terraform','Jest','Playwright','Cypress','GitHub Actions','Storybook'
          ].map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Recent work and experiments.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Design System Platform',
              desc: 'A scalable component library with tokens, theming, and CI-powered visual testing.',
              tags: ['TypeScript','React','Storybook','Chromatic'],
            },
            {
              title: 'Realtime Collaboration Suite',
              desc: 'Operational transforms, CRDTs, and WebRTC for low-latency multi-user editing.',
              tags: ['WebRTC','CRDT','tRPC','PostgreSQL'],
            },
            {
              title: 'Cloud-native Commerce',
              desc: 'Event-driven microservices with serverless functions and managed queues.',
              tags: ['AWS','Serverless','Docker','Kafka'],
            },
          ].map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <div className="h-40 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-medium">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-4 w-4" /></a>
                    <a href="#" aria-label="Live" className="hover:text-white"><ExternalLink className="h-4 w-4" /></a>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-white/70 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" subtitle="Highlights from a decade of shipping.">
        <div className="relative pl-6">
          <span className="absolute left-0 top-0 h-full w-px bg-white/10" />
          {[
            {
              role: 'Staff Frontend Engineer',
              company: 'Fintech Co.',
              period: '2022 — Present',
              points: ['Led platform migration to micro-frontends','Improved Core Web Vitals to 95+','Mentored 6 engineers across teams'],
              icon: Layout,
            },
            {
              role: 'Senior Platform Engineer',
              company: 'Cloud Platform',
              period: '2019 — 2022',
              points: ['Built internal developer platform','Rolled out Kubernetes and GitOps','Reduced deploy times by 70%'],
              icon: Cloud,
            },
            {
              role: 'Software Engineer',
              company: 'SaaS Startup',
              period: '2015 — 2019',
              points: ['Scaled monolith to services','Implemented observability stack','Shipped design system v1'],
              icon: Shield,
            },
          ].map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative mb-10"
            >
              <div className="absolute -left-[27px] top-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10">
                <e.icon className="h-3.5 w-3.5" />
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="font-medium">{e.role} • {e.company}</div>
                    <div className="text-xs text-white/60">{e.period}</div>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Layers className="h-4 w-4" />
                    <Database className="h-4 w-4" />
                    <Workflow className="h-4 w-4" />
                  </div>
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-white/80 space-y-1">
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
