import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, BookOpen } from 'lucide-react';

// ─── Page Data ────────────────────────────────────────────────────────────────
const PAGES = [
  {
    type: 'cover',
    img: '/flipbook/cover.png',
    title: 'ඔබටත් උපදෙස් දෙන අයව\nඑපා වෙලාද?',
    subtitle: 'නිශ්ශබ්දව සිතන්න...',
    body: "කෙනෙක් ඔයාගේ වැරැද්දක් පෙන්වලා දෙද්දී, ඒක නිධානයක් වගේ පිළිගන්නවා වෙනුවට අපි ගොඩක් වෙලාවට කරන්නේ ඒක වහන්න 'Excuses' දෙන එකයි.",
  },
  {
    type: 'content',
    img: '/flipbook/page2.png',
    title: 'වරද සඟවන ආකාරය',
    sections: [
      { label: 'මනෝකර්ම', text: 'සිත තුළ ඇතිවන වැරදි දැකීම (මිච්ඡා දිට්ඨිය) තුළින් තමාම රවටා ගැනීම.' },
      { label: 'වචීකර්ම', text: 'බොරු කීමෙන් හෝ හිස් වචන භාවිතයෙන් වරද වසා ගැනීමට තැත් කිරීම.' },
      { label: 'කායකර්ම', text: 'වැරදි චර්යාව පුරුද්දක් කර ගනිමින් එය දිගින් දිගටම සිදු කිරීම.' },
    ],
  },
  {
    type: 'quote',
    img: '/flipbook/page3.png',
    title: 'ධම්මපදය',
    subtitle: 'පණ්ඩිත වග්ගය',
    pali: 'නිධීනංව පවත්තාරං — යං පස්සේ වජ්ජදස්සිනං',
    meaning: 'තම වැරදි පෙන්වා දෙන තැනැත්තා, සඟවා ඇති නිධානයක් පෙන්වන්නෙකු වැනිය.',
    note: 'අවවාදය මකා දමන්නා තමාට ලැබෙන නිධානය අහිමි කරගනී.',
  },
  {
    type: 'list',
    img: '/flipbook/page4.png',
    title: 'අකීකරුකම ඇති කරන කරුණු',
    subtitle: '1 — 8',
    items: [
      'ලාමක ආශා — කීර්තිය හා ප්‍රශංසාව පසුපස හඹා යෑම.',
      'පුරාජේරුව — තමන් උසස් කොට අනුන් පහත් කොට සැලකීම.',
      'ක්‍රෝධය — නිරන්තරයෙන් කෝපයට පත්වීම.',
      'බද්ධ වෛරය — තරහ සිතේ තබාගෙන වෛර කිරීම.',
      'රණ්ඩුකාමී බව — පොඩි දේටත් කලහ කිරීම.',
      'වචන සැර වීම — වචන පාලනය කරගත නොහැකි වීම.',
      'විරුද්ධ වීම — අවවාදය පිළිනොගෙන විරුද්ධ වීම.',
      'අපහාස කිරීම — වැරැද්ද පෙන්වන්නාටම නිග්‍රහ කිරීම.',
    ],
  },
  {
    type: 'list',
    img: '/flipbook/page4.png',
    title: 'අකීකරුකම ඇති කරන කරුණු',
    subtitle: '9 — 16',
    items: [
      'එකට එක කීම — අනුන්ගේ වැරදි පෙන්වමින් තමා බේරීමට තැත් කිරීම.',
      'මඟහැරීම — වෙනත් කතා ඇදගෙන වරද වසා ගැනීම.',
      'පිළිනොගැනීම — වැරැද්දක් වූ බව පිළිනොගැනීම.',
      'ගුණ මකු බව — අනුන්ගේ ගුණ මැකීමට තැත් කිරීම.',
      'ඉරිසියාව/මසුරුකම — අනුන්ගේ සැපතට අකමැති වීම.',
      'කෛරාටික බව — නැති ගුණ පෙන්වමින් රඟපෑම.',
      'තද ගතිය — අධික මාන්නයෙන් යුතුව සිටීම.',
      'වැරදි මතය — වැරදි බව දැන දැනත් එය අත්නොහැරීම.',
    ],
  },
  {
    type: 'advice',
    img: '/flipbook/page6.png',
    title: 'මහා මොග්ගල්ලාන රහතන් වහන්සේ',
    body: 'කෙනෙක් අකීකරු නම්, අනිත් අයට ඔහුට අවවාද දීමට සිතෙන්නේ නැත. අප තුළ ඇති නරක ගති නිසා අප අන් අයට අප්‍රිය පුද්ගලයෙකු විය හැකිය.',
    conclusion: 'නිහතමානී වන්න. වරද පිළිගන්න. සන්සුන් වන්න.',
  },
  {
    type: 'final',
    img: '/flipbook/final.png',
    title: 'අනුමාන සූත්‍රය',
    source: 'මජ්ඣිම නිකාය',
    body: "'අනුන්ගේ වැරදි මට අප්‍රිය නම්, මා තුළත් ඒ වැරදි තිබුණොත් අන් අයට මාව අප්‍රිය වනු ඇත' යන අවබෝධය ඇති කරගන්න.",
    action: 'වැරැද්ද පිළිගන්න. එතැනයි ඔබේ අධ්‍යාත්මික සුවය තියෙන්නේ.',
  },
];

// ─── Page Renderer ─────────────────────────────────────────────────────────────
function PageContent({ page, side }) {
  const isLeft = side === 'left';
  const base = 'h-full flex flex-col relative overflow-hidden select-none';

  // Image half - always present as background
  const imgOverlay = page.img ? (
    <div className="absolute inset-0">
      <img
        src={page.img}
        alt=""
        className="w-full h-full object-cover"
        style={{ opacity: page.type === 'cover' ? 0.6 : 0.2 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--theme-100,#F6F3E6)]/60 to-[var(--theme-100,#F6F3E6)]" />
    </div>
  ) : null;

  switch (page.type) {
    case 'cover':
      return (
        <div className={`${base} items-center justify-end pb-10 text-center px-8`}>
          {imgOverlay}
          <div className="relative z-10 space-y-4">
            <div className="w-10 h-[1px] bg-[var(--theme-900,#38342B)]/30 mx-auto mb-6" />
            <h1 className="text-2xl font-display font-medium leading-snug text-[var(--theme-900,#38342B)] whitespace-pre-line tracking-wide drop-shadow-sm">
              {page.title}
            </h1>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--theme-700,#7A7463)] font-semibold">{page.subtitle}</p>
            <div className="w-10 h-[1px] bg-[var(--theme-900,#38342B)]/30 mx-auto mt-6" />
            <p className="text-xs text-[var(--theme-800,#575244)] font-light leading-relaxed max-w-[200px] mx-auto italic mt-4">{page.body}</p>
            <p className="text-[9px] tracking-[0.5em] uppercase text-[var(--theme-700,#7A7463)] pt-2 opacity-60">Kalyanamitta</p>
          </div>
        </div>
      );

    case 'content':
      return (
        <div className={`${base} p-8 justify-between`}>
          {imgOverlay}
          <div className="relative z-10 space-y-5">
            <h2 className="text-lg font-display font-medium text-[var(--theme-900,#38342B)] tracking-wide border-b border-[var(--theme-300,#D8D0BA)]/50 pb-3">
              {page.title}
            </h2>
            <div className="space-y-5">
              {page.sections.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[var(--theme-300,#D8D0BA)] font-display text-2xl leading-none italic shrink-0">0{i+1}</span>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[var(--theme-700,#7A7463)] mb-1">{s.label}</p>
                    <p className="text-xs text-[var(--theme-800,#575244)] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="relative z-10 text-[8px] text-[var(--theme-700,#7A7463)] text-right tracking-widest uppercase opacity-50">Kalyanamitta</p>
        </div>
      );

    case 'quote':
      return (
        <div className={`${base} items-center justify-center p-8 text-center`}>
          {imgOverlay}
          <div className="relative z-10 space-y-6 max-w-[220px]">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--theme-700,#7A7463)] mb-1">{page.title}</p>
              <p className="text-[8px] uppercase tracking-[0.2em] text-[var(--theme-700,#7A7463)] opacity-60">{page.subtitle}</p>
            </div>
            <p className="text-base font-display italic font-light text-[var(--theme-900,#38342B)] leading-loose">
              "{page.pali}"
            </p>
            <div className="w-8 h-[1px] bg-[var(--theme-300,#D8D0BA)] mx-auto" />
            <p className="text-xs text-[var(--theme-800,#575244)] leading-relaxed font-light">{page.meaning}</p>
            <p className="text-[9px] text-[var(--theme-700,#7A7463)] italic opacity-70">{page.note}</p>
          </div>
        </div>
      );

    case 'list':
      return (
        <div className={`${base} p-8`}>
          {imgOverlay}
          <div className="relative z-10 h-full flex flex-col">
            <div className="mb-5">
              <h2 className="text-sm font-display font-medium text-[var(--theme-900,#38342B)] tracking-wide">{page.title}</h2>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--theme-700,#7A7463)] mt-1 border-l-2 border-[var(--theme-300,#D8D0BA)] pl-3">{page.subtitle}</p>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2.5 custom-scrollbar pr-1">
              {page.items.map((item, i) => {
                const [title, ...rest] = item.split(' — ');
                return (
                  <div key={i} className="flex gap-3 items-start opacity-80 hover:opacity-100 transition-opacity">
                    <span className="text-[var(--theme-300,#D8D0BA)] text-[9px] font-mono mt-0.5 shrink-0">{String(i + (page.subtitle.startsWith('1') ? 1 : 9)).padStart(2,'0')}</span>
                    <div>
                      <p className="text-[10px] font-semibold text-[var(--theme-900,#38342B)] tracking-wide">{title}</p>
                      <p className="text-[9px] text-[var(--theme-700,#7A7463)] leading-relaxed">{rest.join(' — ')}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );

    case 'advice':
      return (
        <div className={`${base} p-8 justify-between`}>
          {imgOverlay}
          <div className="relative z-10 space-y-6">
            <h2 className="text-base font-display font-medium text-[var(--theme-900,#38342B)] leading-snug tracking-wide">{page.title}</h2>
            <p className="text-sm text-[var(--theme-800,#575244)] leading-loose font-light italic">{page.body}</p>
          </div>
          <div className="relative z-10 border-t border-[var(--theme-300,#D8D0BA)]/50 pt-5 flex items-end justify-between">
            <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--theme-700,#7A7463)] max-w-[160px] leading-loose">{page.conclusion}</p>
            <span className="text-2xl opacity-30">🌿</span>
          </div>
        </div>
      );

    case 'final':
      return (
        <div className={`${base} items-center justify-center p-8 text-center`}>
          {imgOverlay}
          <div className="relative z-10 space-y-6 max-w-[220px]">
            <h2 className="text-xl font-display italic font-light text-[var(--theme-900,#38342B)] tracking-widest">{page.title}</h2>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[var(--theme-700,#7A7463)] opacity-70">{page.source}</p>
            <div className="w-8 h-[1px] bg-[var(--theme-300,#D8D0BA)] mx-auto" />
            <p className="text-sm text-[var(--theme-800,#575244)] leading-loose font-light">{page.body}</p>
            <div className="inline-block border border-[var(--theme-300,#D8D0BA)]/60 text-[var(--theme-900,#38342B)] text-[9px] tracking-[0.2em] uppercase px-6 py-3">
              {page.action}
            </div>
            <p className="text-[8px] tracking-[0.5em] uppercase opacity-40 text-[var(--theme-700,#7A7463)]">Kalyanamitta</p>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// ─── 3D Book Component ─────────────────────────────────────────────────────────
export default function FlipBook() {
  const [pageIndex, setPageIndex] = useState(0); // current spread index (0 = cover)
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState('next'); // 'next' | 'prev'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  // Pair pages into spreads: [cover], [p1,p2], [p3,p4], [p5,p6]...
  // page 0 = cover (single), pages 1-N in pairs
  const totalPages = PAGES.length;
  // Expose per-page navigation for simplicity (single page view on mobile, dual on desktop)
  const currentPage = PAGES[pageIndex];
  const nextPageData = PAGES[pageIndex + 1] || null;

  const goNext = () => {
    if (flipping || pageIndex >= totalPages - 1) return;
    setFlipDir('next');
    setFlipping(true);
    setTimeout(() => {
      setPageIndex(i => i + 1);
      setFlipping(false);
    }, 500);
  };

  const goPrev = () => {
    if (flipping || pageIndex <= 0) return;
    setFlipDir('prev');
    setFlipping(true);
    setTimeout(() => {
      setPageIndex(i => i - 1);
      setFlipping(false);
    }, 500);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(f => !f);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [pageIndex, flipping]);

  const progress = ((pageIndex) / (totalPages - 1)) * 100;
  const isFirstPage = pageIndex === 0;
  const isLastPage = pageIndex === totalPages - 1;

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col items-center justify-center font-sans antialiased transition-all duration-700 ${
        isFullscreen 
          ? 'h-screen bg-[var(--theme-100,#F6F3E6)] p-4' 
          : 'h-[92vh] min-h-[580px] bg-[var(--theme-100,#F6F3E6)] rounded-3xl p-4 sm:p-8'
      }`}
    >
      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none rounded-3xl"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')" }} />

      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-[var(--theme-200,#EBE5D3)]/80 text-[var(--theme-700,#7A7463)] hover:text-[var(--theme-900,#38342B)] backdrop-blur-sm transition-all duration-200 opacity-40 hover:opacity-100 shadow-sm"
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      >
        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
      </button>

      {/* ── 3D Book ─────────────────────────────── */}
      <div
        className="relative flex items-center justify-center w-full"
        style={{ perspective: '1400px', perspectiveOrigin: '50% 50%' }}
      >
        {/* Left page shadow glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[340px] sm:w-[520px] h-[460px] sm:h-[620px] rounded-lg opacity-20 blur-xl"
               style={{ background: 'radial-gradient(ellipse at center, var(--theme-300,#D8D0BA), transparent 70%)' }} />
        </div>

        {/* 3D Book container */}
        <div
          className="relative flex shadow-[0_30px_80px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.12)] rounded-lg"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFirstPage
              ? 'rotateY(-8deg)'
              : isLastPage
              ? 'rotateY(8deg)'
              : 'rotateY(0deg)',
            transition: 'transform 0.6s ease',
          }}
        >
          {/* ── Spine ── */}
          <div
            className="rounded-l-sm"
            style={{
              width: '18px',
              background: 'linear-gradient(90deg, var(--theme-300,#D8D0BA), var(--theme-200,#EBE5D3) 40%, var(--theme-300,#D8D0BA))',
              boxShadow: 'inset -3px 0 6px rgba(0,0,0,0.08)',
            }}
          />

          {/* ── Left Page (current) ── */}
          <div
            className="relative overflow-hidden rounded-l-none border border-[var(--theme-300,#D8D0BA)]/60"
            style={{
              width: 'min(280px, calc(45vw))',
              height: 'min(420px, calc(75vh))',
              background: 'var(--theme-50,#FCFBF7)',
              boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.06)',
              transformOrigin: 'right center',
              transform: flipping && flipDir === 'prev' ? 'rotateY(-30deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease',
            }}
          >
            {/* Page curl effect */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
              style={{
                background: 'linear-gradient(225deg, var(--theme-200,#EBE5D3) 50%, transparent 50%)',
                boxShadow: '-2px -2px 4px rgba(0,0,0,0.06)',
              }}
            />
            <PageContent page={currentPage} side="left" />
          </div>

          {/* ── Right Page (next) ── */}
          <div
            className="relative overflow-hidden border border-[var(--theme-300,#D8D0BA)]/60 rounded-r-lg"
            style={{
              width: 'min(280px, calc(45vw))',
              height: 'min(420px, calc(75vh))',
              background: nextPageData ? 'var(--theme-50,#FCFBF7)' : 'var(--theme-200,#EBE5D3)',
              boxShadow: 'inset 2px 0 8px rgba(0,0,0,0.04)',
              transformOrigin: 'left center',
              transform: flipping && flipDir === 'next' ? 'rotateY(30deg)' : 'rotateY(0deg)',
              transition: 'transform 0.5s ease',
            }}
          >
            {/* Page curl — bottom left */}
            <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none"
              style={{
                background: 'linear-gradient(315deg, var(--theme-200,#EBE5D3) 50%, transparent 50%)',
                boxShadow: '2px -2px 4px rgba(0,0,0,0.06)',
              }}
            />
            {nextPageData
              ? <PageContent page={nextPageData} side="right" />
              : (
                <div className="h-full flex flex-col items-center justify-center opacity-30 gap-3">
                  <BookOpen className="w-10 h-10 text-[var(--theme-300,#D8D0BA)]" />
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[var(--theme-700,#7A7463)]">End of Book</p>
                </div>
              )
            }
          </div>
        </div>
      </div>

      {/* ── Progress & Navigation ─────────────────────────── */}
      <div className="relative z-10 w-full max-w-[580px] mt-6 px-2 space-y-4">
        {/* Progress bar */}
        <div className="flex items-center gap-3">
          <span className="text-[9px] text-[var(--theme-700,#7A7463)] tracking-widest uppercase font-semibold opacity-60 shrink-0">
            {pageIndex + 1} / {totalPages}
          </span>
          <div className="flex-1 h-[2px] bg-[var(--theme-200,#EBE5D3)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--theme-900,#38342B)] rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[9px] text-[var(--theme-700,#7A7463)] tracking-widest uppercase font-semibold opacity-60 shrink-0">
            Kalyanamitta
          </span>
        </div>

        {/* Arrow buttons */}
        <div className="flex items-center justify-between">
          <button
            onClick={goPrev}
            disabled={isFirstPage || flipping}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--theme-300,#D8D0BA)]/50 bg-[var(--theme-50,#FCFBF7)] text-[var(--theme-700,#7A7463)] hover:text-[var(--theme-900,#38342B)] hover:bg-[var(--theme-200,#EBE5D3)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 text-xs tracking-widest uppercase font-medium shadow-sm"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Prev
          </button>

          {/* Page dots */}
          <div className="flex gap-1.5 items-center">
            {PAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => { if (!flipping) setPageIndex(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === pageIndex
                    ? 'w-4 h-1.5 bg-[var(--theme-900,#38342B)]'
                    : 'w-1.5 h-1.5 bg-[var(--theme-300,#D8D0BA)] hover:bg-[var(--theme-700,#7A7463)]'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={isLastPage || flipping}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--theme-300,#D8D0BA)]/50 bg-[var(--theme-50,#FCFBF7)] text-[var(--theme-700,#7A7463)] hover:text-[var(--theme-900,#38342B)] hover:bg-[var(--theme-200,#EBE5D3)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 text-xs tracking-widest uppercase font-medium shadow-sm"
          >
            Next
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: var(--theme-300,#D8D0BA); border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
      `}} />
    </div>
  );
}
