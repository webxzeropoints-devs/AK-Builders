import React from 'react';

const ArchitecturalDecor = ({ variant = 'cream' }) => {
  const lineColor =
    variant === 'cream' ? 'rgba(37,35,33,0.08)' : 'rgba(255,255,255,0.06)';

  const gridStyle = {
    backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px),
                      linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
    backgroundSize: '80px 80px',
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={gridStyle}
      aria-hidden="true"
    />
  );
};

export default ArchitecturalDecor;
