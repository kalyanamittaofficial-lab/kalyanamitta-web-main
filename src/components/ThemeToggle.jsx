import React, { useState, useEffect } from 'react';
import { Sun, Moon, Leaf } from 'lucide-react';

const THEMES = [
  { id: 'sepia', label: 'Sepia',  icon: Sun,  next: 'Night' },
  { id: 'dark',  label: 'Night',  icon: Moon, next: 'Nature' },
  { id: 'nature',label: 'Nature', icon: Leaf, next: 'Sepia' },
];

export default function ThemeToggle() {
  const [themeId, setThemeId] = useState('sepia');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme') || 'sepia';
    setThemeId(saved);
  }, []);

  const cycleTheme = () => {
    const idx = THEMES.findIndex(t => t.id === themeId);
    const next = THEMES[(idx + 1) % THEMES.length];

    setThemeId(next.id);
    localStorage.setItem('theme', next.id);

    if (next.id === 'sepia') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', next.id);
    }
  };

  // Avoid hydration mismatch — render empty shell until mounted
  if (!mounted) return <div className="w-9 h-9 rounded-full" />;

  const current = THEMES.find(t => t.id === themeId) ?? THEMES[0];
  const Icon = current.icon;

  return (
    <button
      onClick={cycleTheme}
      className="group relative p-2 lg:p-2.5 rounded-full bg-monk-200 hover:bg-monk-300 text-monk-700 hover:text-monk-900 border border-monk-300/30 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-monk-300/50"
      aria-label={`Theme: ${current.label}. Click to switch to ${current.next}`}
      title={`Theme: ${current.label} — Click for ${current.next}`}
    >
      {/* Animated Icon */}
      <span className="relative flex items-center justify-center w-5 h-5">
        <Icon key={themeId} className="w-5 h-5 animate-theme-in" />
      </span>

      {/* Hover label tooltip */}
      <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-monk-700 bg-monk-200 border border-monk-300/40 rounded-full px-2 py-0.5 shadow-sm">
        {current.next} →
      </span>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes theme-in {
          0%   { opacity: 0; transform: rotate(-30deg) scale(0.7); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }
        .animate-theme-in {
          animation: theme-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}} />
    </button>
  );
}
