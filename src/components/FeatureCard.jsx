import React from 'react';
import { motion } from 'framer-motion';
import { DraftingCompass, Compass, Quote, ShieldCheck, Award, Building2, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  compass: Compass,
  drafting: DraftingCompass,
  shield: ShieldCheck,
  award: Award,
  building: Building2,
  sparkles: Sparkles,
  check: CheckCircle2,
};

const FeatureCard = ({
  title = "Residential Homes &\nCustom Living",
  badgeTitle = "Tiruvallur & Suburbs",
  badgeSubtitle = "Quality Construction & Timely Handover",
  icons = ['building', 'check'],
  badgeImage = '',
  comment = "We were looking for a reliable builder for our new home in Tiruvallur and chose AK Builders after discussing our requirements with them. The team was very patient during the planning stage and helped us understand the different construction requirements. The work progressed systematically, and they kept us updated about the project. We particularly appreciated their professionalism and attention to detail.",
  author = "Suresh & Family",
  location = "New Home, Tiruvallur",
  className = "",
}) => {
  const Icon1 = iconMap[icons[0]] || DraftingCompass;
  const Icon2 = iconMap[icons[1]] || Compass;

  return (
    <div className={`relative z-20 w-full px-4 max-w-4xl mx-auto -mt-16 lg:-mt-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="will-change-transform bg-[#FAF7F0] rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#DED4C1] p-8 lg:p-10"
        >
          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252321] leading-tight whitespace-pre-line">
                {title}
              </h3>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-[#DED4C1]"></div>
            
            <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#DED4C1] shadow-sm">
                  {badgeImage ? (
                    <img
                      src={badgeImage}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full rounded-full object-contain p-1.5"
                    />
                  ) : (
                    <Icon1 size={18} className="text-[#C7A96B]" />
                  )}
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F5F0E6] flex items-center justify-center border border-[#DED4C1] shadow-sm">
                  <Icon2 size={18} className="text-[#C7A96B]" />
                </div>
              </div>
              <p className="text-sm text-[#77736C] max-w-[220px] leading-snug">
                <span className="font-medium text-[#252321]">{badgeTitle}</span>
                <br />
                {badgeSubtitle}
              </p>
            </div>
          </div>

          {/* Bottom Comment / Feedback Section inside the box (without star icons) */}
          {comment && (
            <div className="mt-8 pt-6 border-t border-[#DED4C1]/80">
              <div className="bg-[#F5F0E6]/70 rounded-xl p-5 md:p-6 border border-[#DED4C1]/50 flex flex-col sm:flex-row gap-4 items-start justify-between">
                <div className="flex gap-3 items-start flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#FAF7F0] border border-[#C7A96B]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Quote size={14} className="text-[#C7A96B]" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm md:text-base text-[#252321] leading-relaxed italic">
                      "{comment}"
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2.5">
                      <span className="text-xs font-semibold text-[#252321]">
                        {author}
                      </span>
                      {location && (
                        <>
                          <span className="text-xs text-[#C7A96B]">•</span>
                          <span className="text-xs text-[#77736C]">
                            {location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeatureCard;
