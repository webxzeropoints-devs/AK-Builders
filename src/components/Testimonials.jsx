import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';

const Testimonials = () => {
  // Fallback data in case testimonials array is empty or undefined
  const defaultTestimonials = [
    { name: "Karthik Subramanian", projectType: "Coastal Luxury Villa, Chennai", quote: "AK Builders delivered beyond our expectations. The attention to detail and craftsmanship on our ECR villa are truly exceptional." },
    { name: "Priya Sundaram", projectType: "Courtyard Residence, Coimbatore", quote: "A seamless process from start to finish. Their architectural team captured the traditional Tamil mutram courtyard vision perfectly." },
    { name: "Dr. Rajesh Natarajan", projectType: "Commercial Centre, OMR Chennai", quote: "Professional, punctual, and highly skilled. They delivered our corporate hub on schedule with superior craftsmanship." }
  ];

  const dataToUse = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="w-full py-24 lg:py-32 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#C7A96B] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Client Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#252321]">
            Client Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {dataToUse.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-[#FAF7F0] border border-[#DED4C1] rounded-2xl shadow-sm p-6 lg:p-8 flex flex-col h-full"
            >
              <div className="w-10 h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#C7A96B]/30 mb-6">
                <Quote size={16} className="text-[#C7A96B]" fill="currentColor" />
              </div>
              
              <p className="text-base leading-relaxed text-[#252321] flex-grow mb-8">
                "{item.quote}"
              </p>
              
              <div className="border-t border-[#DED4C1] pt-6 mt-auto">
                <h4 className="font-semibold text-[#252321] mb-1">
                  {item.name}
                </h4>
                <p className="text-xs uppercase tracking-wider text-[#C7A96B]">
                  {item.projectType || item.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
