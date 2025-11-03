import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#0B0B14] to-[#0A0A12] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-white/60 max-w-2xl">I love discussing challenging problems, product ideas, and platform strategy. Let’s talk.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h3 className="text-lg font-medium">Links</h3>
            <div className="mt-4 space-y-3">
              <a href="mailto:you@example.com" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Mail className="h-4 w-4" /> you@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Github className="h-4 w-4" /> github.com/your-handle
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white">
                <Linkedin className="h-4 w-4" /> linkedin.com/in/your-handle
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.04] p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent('Portfolio Inquiry');
              const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
              window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-1">Name</label>
                <input name="name" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-2.5 font-medium hover:bg-white/90 transition">
              <Send className="h-4 w-4" /> Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
