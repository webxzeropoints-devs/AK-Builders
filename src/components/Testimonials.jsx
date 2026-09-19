import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/siteData';

const Testimonials = () => {
  // Fallback data in case testimonials array is empty or undefined
  const defaultTestimonials = [
    {
      name: "Suresh & Family",
      projectType: "New Home, Tiruvallur",
      quote: "We were looking for a reliable builder for our new home in Tiruvallur and chose AK Builders after discussing our requirements with them. The team was very patient during the planning stage and helped us understand the different construction requirements. The work progressed systematically, and they kept us updated about the project. We particularly appreciated their professionalism and attention to detail. The finished house looks exactly the way we had hoped."
    },
    {
      name: "Arun Kumar",
      projectType: "House Construction, Avadi",
      quote: "We approached AK Builders for our house construction in Avadi, and the overall experience was very smooth. From the initial discussion and planning to the actual construction work, the team was approachable and explained each stage clearly. They also gave us a clear quotation and kept us informed about the progress. The quality of the work and attention to small details really impressed us. We are very happy with how our home turned out."
    },
    {
      name: "Priya S",
      projectType: "House Construction, Poonamallee",
      quote: "AK Builders helped us turn our house plan into reality, and we are genuinely happy with the result. The team understood our requirements and suggested practical ideas wherever needed. Communication was easy throughout the project, and our questions were answered without unnecessary delays. The finishing work was done neatly, and the overall process was handled professionally. Would definitely consider them for future construction work."
    }
  ];

  const dataToUse = testimonials && testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <section className="w-full py-24 lg:py-32 bg-[#F5F0E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-[#C7A96B] text-sm uppercase tracking-[0.2em] font-semibold mb-4">
            Client Reviews & Feedback
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#252321]">
            Real Experiences from Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
          {dataToUse.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.12 }}
              className="bg-[#FAF7F0] border border-[#DED4C1] rounded-xl lg:rounded-2xl shadow-sm p-3 sm:p-5 lg:p-8 flex flex-col h-full"
            >
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#C7A96B]/30 mb-3 sm:mb-6">
                <Quote size={12} className="sm:hidden text-[#C7A96B]" fill="currentColor" />
                <Quote size={16} className="hidden sm:block text-[#C7A96B]" fill="currentColor" />
              </div>
              
              <p className="text-[11px] sm:text-sm lg:text-base leading-relaxed text-[#252321] flex-grow mb-4 sm:mb-8">
                "{item.quote}"
              </p>
              
              <div className="border-t border-[#DED4C1] pt-3 sm:pt-6 mt-auto">
                <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-[#252321] mb-1">
                  {item.name}
                </h4>
                <p className="text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-wider text-[#C7A96B]">
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
