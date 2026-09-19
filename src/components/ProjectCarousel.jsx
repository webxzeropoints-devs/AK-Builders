import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/siteData';

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const pointerStartX = useRef(0);
  const pointerId = useRef(null);

  const goTo = (index) => {
    setActiveIndex((index + projects.length) % projects.length);
    setDragOffset(0);
  };

  const goPrevious = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const handlePointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartX.current = event.clientX;
    pointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event) => {
    if (pointerId.current !== event.pointerId) return;
    const offset = event.clientX - pointerStartX.current;
    if (Math.abs(offset) > 4) event.preventDefault();
    setDragOffset(offset);
  };

  const finishDrag = (event) => {
    if (pointerId.current !== event.pointerId) return;
    pointerId.current = null;
    setIsDragging(false);

    if (Math.abs(dragOffset) > 60) {
      if (dragOffset < 0) goNext();
      else goPrevious();
    } else {
      setDragOffset(0);
    }
  };

  const cancelDrag = () => {
    pointerId.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const project = projects[activeIndex];

  return (
    <div className="relative w-full min-w-0 select-none">
      <div className="mb-5 flex justify-end gap-3">
        <button
          type="button"
          onClick={goPrevious}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED4C1] text-[#252321] shadow-sm transition-colors hover:bg-[#DED4C1] active:scale-95"
          aria-label="Previous project video"
        >
          <ChevronLeft strokeWidth={1.5} className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#DED4C1] text-[#252321] shadow-sm transition-colors hover:bg-[#DED4C1] active:scale-95"
          aria-label="Next project video"
        >
          <ChevronRight strokeWidth={1.5} className="h-5 w-5" />
        </button>
      </div>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={cancelDrag}
        className="w-full min-w-0 overflow-hidden"
        style={{ touchAction: 'pan-y', cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="w-full"
          style={{
            transform: `translateX(${dragOffset}px)`,
            transition: isDragging ? 'none' : 'transform 180ms ease-out',
          }}
        >
          <ProjectCard
            key={activeIndex}
            number={project.number || `0${activeIndex + 1}`}
            category={project.category || 'RESIDENTIAL'}
            title={project.title || 'Project Title'}
            location={project.location}
            video={project.video}
            reelUrl={project.reelUrl}
            image={project.image}
            alt={project.alt || project.title}
            isDragging={isDragging}
            onVideoEnded={goNext}
          />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 text-xs text-[#77736C]">
        <span className="font-medium uppercase tracking-wide">Swipe or drag to explore</span>
        <div className="flex items-center gap-2" aria-label="Project video pagination">
          {projects.map((item, index) => (
            <button
              key={item.reelUrl || index}
              type="button"
              onClick={() => goTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex ? 'w-6 bg-[#C7A96B]' : 'w-2 bg-[#DED4C1] hover:bg-[#B9AA90]'
              }`}
              aria-label={`Go to project video ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
