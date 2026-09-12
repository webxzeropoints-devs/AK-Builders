import React from 'react';
import { motion } from 'framer-motion';

const FounderSection = () => {
  return (
    <section className="relative bg-[#F5F0E6] py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src="/images/founder.jpg"
                alt="Founder portrait - AK Builders"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171716]/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-7"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#C7A96B] font-medium mb-6">
              Founder’s Message
            </p>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] leading-[1.05] mb-6">
              Built on trust. Driven by craftsmanship.
            </h2>

            <p className="text-base lg:text-lg text-[#77736C] leading-relaxed mb-8">
              At AK Builders, we believe every construction project should feel personal,
              transparent, and expertly delivered. Our founder brings hands-on leadership,
              clear communication, and a strong commitment to quality from the first sketch to
              the final handover.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-8">
              <div className="rounded-2xl border border-[#d7cdb7] bg-[#FAF7F0] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] mb-2">Approach</p>
                <p className="text-[#252321] text-base">Thoughtful planning, precise execution, and a client-first process.</p>
              </div>
              <div className="rounded-2xl border border-[#d7cdb7] bg-[#FAF7F0] p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] mb-2">Promise</p>
                <p className="text-[#252321] text-base">Reliable delivery, lasting quality, and spaces that truly reflect your vision.</p>
              </div>
            </div>

            <div className="border-l-2 border-[#C7A96B] pl-5">
              <p className="text-[#252321] text-xl font-medium italic">
                “We don’t just build structures — we shape environments that people can live, work,
                and thrive in.”
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#77736C]">
                Founder, AK Builders
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
