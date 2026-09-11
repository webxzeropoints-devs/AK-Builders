import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

function CTA() {
  return (
    <section id="contact" className="bg-[#f7f2ea] px-4 pb-24 pt-8 text-[#171311] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[36px] border border-[#d7c29d] bg-[linear-gradient(135deg,#f6efe5,#f3e9d8,#f2ebdf)] px-6 py-16 text-center sm:px-10 lg:px-16"
        >
          <div className="absolute left-6 top-10 h-2 w-2 rounded-full bg-[#b88b52] shadow-[0_0_24px_rgba(184,139,82,0.8)]" />
          <div className="absolute right-10 top-12 h-2 w-2 rounded-full bg-[#b88b52] shadow-[0_0_20px_rgba(184,139,82,0.8)]" />
          <div className="absolute bottom-12 left-1/2 h-[1px] w-40 -translate-x-1/2 bg-[#b88b52]" />
          <div className="absolute inset-x-20 bottom-10 h-px bg-[#d7c29d]" />

          <div className="relative z-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c9a766]/60 bg-[#f9f2e7] px-4 py-2 text-[0.58rem] font-medium uppercase tracking-[0.32em] text-[#7c5d33]">
              <Sparkles size={12} />
              SEO-Friendly AK BUILDERS
            </div>

            <h2 className="mx-auto max-w-4xl font-serif text-[2.5rem] leading-[0.9] tracking-[-0.07em] text-[#171311] sm:text-[3.8rem] lg:text-[5rem]">
              Let’s Build Something Exceptional.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#483f39]">
              Learn our premium construction services and architectural solutions designed to create exceptional spaces.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b88b52]/50 bg-[#d9b97f] px-7 py-3.5 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#171311] shadow-[0_18px_34px_rgba(184,139,82,0.2)] transition hover:-translate-y-0.5 hover:bg-[#e7c88b]"
              >
                Explore Projects
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
