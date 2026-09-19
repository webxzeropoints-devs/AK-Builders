import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/siteData';
import { Home, Building2, Compass, Hammer, ArrowRight } from 'lucide-react';

const iconMap = {
  Home,
  Building2,
  Compass,
  Hammer,
};

const Services = () => {
  return (
    <section id="services" className="bg-[#F5F0E6] py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Area */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-4xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#C7A96B] block mb-4 font-semibold">
            02 / SERVICES
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] mb-6 leading-tight">
            Our Luxury Construction Services
          </h2>
          <p className="text-base lg:text-lg text-[#77736C] max-w-2xl leading-relaxed">
            As a premier construction firm, AK BUILDERS delivers exceptional residential construction, commercial hubs, architectural planning, and transformative renovation services across Chennai & Tiruvallur.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="flex flex-col border-t border-[#DED4C1]">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover="hover"
                className="relative border-b border-[#DED4C1] py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
              >
                {/* Hover Accent Line */}
                <motion.div 
                  variants={{
                    hover: { width: 40 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#C7A96B] w-0 hidden md:block" 
                />

                {/* Left: Number */}
                <motion.div 
                  variants={{
                    hover: { x: 50 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-shrink-0 w-16 md:w-24 origin-left"
                >
                  <span className="font-serif text-3xl md:text-4xl text-[#C7A96B]">
                    {service.number}
                  </span>
                </motion.div>

                {/* Center: Title & Description */}
                <motion.div 
                  variants={{
                    hover: { x: 4 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-grow"
                >
                  <h3 className="font-serif text-2xl md:text-3xl text-[#252321] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#77736C] max-w-2xl leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                {/* Right: Icon & Arrow */}
                <div className="flex items-center gap-6 flex-shrink-0 self-start md:self-auto">
                  <motion.div 
                    variants={{
                      hover: { backgroundColor: "#C7A96B", borderColor: "#C7A96B", color: "#ffffff" }
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-full border border-[#DED4C1] flex items-center justify-center text-[#252321]"
                  >
                    {IconComponent && <IconComponent strokeWidth={1.5} size={24} />}
                  </motion.div>
                  <motion.div 
                    variants={{
                      hover: { x: 4 }
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-[#C7A96B]"
                  >
                    <ArrowRight strokeWidth={1.5} size={24} />
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
