import React from 'react';

export default function Logo({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Icon Mark */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="logo-blue-grad" x1="16" y1="16" x2="60" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        
        {/* Magnifying Glass Handle */}
        <line
          x1="52"
          y1="52"
          x2="68"
          y2="68"
          stroke={isDark ? '#3B82F6' : '#1E3A8A'}
          strokeWidth="7"
          strokeLinecap="round"
        />
        
        {/* Magnifying Glass Outer Circle */}
        <circle
          cx="36"
          cy="36"
          r="20"
          stroke="url(#logo-blue-grad)"
          strokeWidth="5"
          fill="none"
        />
        
        {/* Internal Bar Chart Column 1 */}
        <rect
          x="25"
          y="40"
          width="4.5"
          height="12"
          rx="1"
          fill={isDark ? '#64748B' : '#94A3B8'}
        />
        {/* Internal Bar Chart Column 2 */}
        <rect
          x="32.5"
          y="32"
          width="4.5"
          height="20"
          rx="1"
          fill={isDark ? '#94A3B8' : '#475569'}
        />
        {/* Internal Bar Chart Column 3 */}
        <rect
          x="40"
          y="25"
          width="4.5"
          height="27"
          rx="1"
          fill={isDark ? '#FFFFFF' : '#0F172A'}
        />

        {/* Sparkles (top-right of circle) */}
        {/* Sparkle 1 (smaller, left) */}
        <path
          d="M 52 20 Q 54 20 54 18 Q 54 20 56 20 Q 54 20 54 22 Q 54 20 52 20"
          fill={isDark ? '#60A5FA' : '#2563EB'}
        />
        {/* Sparkle 2 (larger, right) */}
        <path
          d="M 58 13 Q 60.5 13 60.5 10.5 Q 60.5 13 63 13 Q 60.5 13 60.5 15.5 Q 60.5 13 58 13"
          fill={isDark ? '#93C5FD' : '#3B82F6'}
        />
      </svg>
      
      {/* Brand Text & Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline leading-none">
          <span className={`text-2xl font-bold font-sans tracking-tight ${isDark ? 'text-white' : 'text-dark-navy'}`}>
            Carrer
          </span>
          <span className="text-2xl font-bold font-sans tracking-tight text-primary-blue">
            Lens
          </span>
        </div>
        <span
          className={`text-[8.5px] font-semibold tracking-[0.22em] mt-1 leading-none ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          ANALYZE. FOCUS. GROW.
        </span>
      </div>
    </div>
  );
}
