import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ProjectCard({
  number,
  category,
  title,
  location,
  video,
  reelUrl,
  image,
  alt,
  isDragging = false,
  onVideoEnded,
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRef.current;
    if (!currentVideo) return;

    if (isDragging) {
      currentVideo.pause();
    } else {
      currentVideo.play().catch(() => {});
    }
  }, [isDragging]);

  return (
    <motion.article
      onDragStart={(e) => e.preventDefault()}
      draggable={false}
      className="relative h-[200px] w-full flex-shrink-0 overflow-hidden rounded-2xl border border-[#DED4C1]/60 bg-black shadow-md select-none sm:h-[260px] md:h-[300px] lg:h-[320px]"
      transition={{ duration: 0.2 }}
    >
      {/* Video Background in Landscape (object-cover) */}
      <div className="absolute inset-0 w-full h-full bg-black pointer-events-none select-none">
        {video ? (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={onVideoEnded}
            draggable="false"
            className={`w-full h-full object-cover pointer-events-none select-none ${
              isDragging ? '' : 'transition-transform duration-700 ease-out group-hover:scale-105'
            }`}
          />
        ) : (
          <img
            src={image}
            alt={alt || title}
            draggable="false"
            className={`w-full h-full object-cover pointer-events-none select-none ${
              isDragging ? '' : 'transition-transform duration-500 ease-out group-hover:scale-105'
            }`}
          />
        )}
      </div>

      {/* Modern Gradient Overlays for optimal readability and landscape look */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

      {/* Top Header: Category & Instagram Reel Badge */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-black/50 text-[#F5F0E6] border border-white/15 backdrop-blur-md">
          {number && `${number} / `}{category}
        </span>

        {reelUrl && (
          <a
            href={reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} on Instagram`}
            title="Open original Instagram Reel"
            onPointerDown={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-gradient-to-r from-[#F58529]/90 via-[#DD2A7B]/90 to-[#8134AF]/90 px-3 py-1 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/80"
          >
            <InstagramIcon size={12} className="shrink-0" />
            <span>Reel</span>
          </a>
        )}
      </div>

      {/* Bottom Content Row */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 flex flex-col justify-end pointer-events-none">
        <div className="flex justify-between items-end gap-4">
          <div className="flex-1">
            {location && (
              <p className="text-xs text-[#C7A96B] font-medium mb-1 tracking-wide">
                {location}
              </p>
            )}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium line-clamp-1 leading-snug">
              {title}
            </h3>
            <p className="text-[11px] text-[#DED4C1]/80 mt-1">
              Use the Reel button to view the original on Instagram
            </p>
          </div>

          <div className="w-9 h-9 rounded-full border border-white/30 bg-black/40 flex items-center justify-center backdrop-blur-md shrink-0 shadow-md">
            <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
