import React, { useState } from 'react';
import FlipBook from './FlipBook';

const BOOKS = [
  {
    id: 'book-1',
    title: 'ඔබටත් උපදෙස් දෙන අයව එපා වෙලාද?',
    subtitle: 'නිශ්ශබ්දව සිතන්න...',
    coverHex: '#EBE7E0', // Natural linen
    spineHex: '#D6CEC3', 
    titleClass: 'text-[#2B2724]', 
    status: 'available'
  },
  {
    id: 'book-2',
    title: 'ධම්මපදය: යමක වග්ගය',
    subtitle: 'පළමුවන වග',
    coverHex: '#424536', // Muted moss green
    spineHex: '#35382b',
    titleClass: 'text-[#F6F3E6]', 
    status: 'coming_soon'
  },
  {
    id: 'book-3',
    title: 'භාවනා අත්පොත',
    subtitle: 'ආරම්භකයින් සඳහා',
    coverHex: '#8A8D79', // Soft stone
    spineHex: '#767965',
    titleClass: 'text-[#FCFBF7]', 
    status: 'coming_soon'
  }
];

export default function Bookshelf() {
  const [activeBookId, setActiveBookId] = useState(null);

  if (activeBookId === 'book-1') {
    return (
      <div className="w-full flex flex-col items-center animate-fade-in relative z-10 transition-all duration-700">
        <button 
          onClick={() => setActiveBookId(null)}
          className="mb-8 px-6 py-2.5 flex items-center gap-3 text-monk-800 hover:text-monk-900 bg-monk-200 hover:bg-monk-300 border border-monk-300/50 rounded-full transition-all duration-500 shadow-sm group"
        >
           <span className="text-lg leading-none transition-transform group-hover:-translate-x-1">←</span>
           <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Return to Shelf</span>
        </button>
        <FlipBook />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto pb-24 mt-8 transition-all duration-700 animate-fade-in">
      
      {/* Bookshelf Container */}
      <div className="relative pt-12 pb-6 px-4 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 items-end justify-items-center">
          {BOOKS.map((book) => (
            <div key={book.id} className="flex justify-center relative group" style={{ perspective: '1000px' }}>
              {book.status === 'available' ? (
                <button 
                  onClick={() => setActiveBookId(book.id)}
                  style={{ 
                    backgroundColor: book.coverHex,
                    borderLeftWidth: '12px',
                    borderLeftColor: book.spineHex,
                  }}
                  className="relative w-48 h-64 sm:w-[220px] sm:h-[300px] rounded-sm rounded-r-2xl shadow-[8px_10px_20px_rgba(43,39,36,0.15),-2px_0_5px_rgba(43,39,36,0.05)] transition-all duration-500 ease-out hover:-translate-y-6 hover:shadow-[15px_20px_35px_rgba(43,39,36,0.18)] flex flex-col text-left focus:outline-none focus:ring-4 focus:ring-monk-300 group"
                >
                  {/* Book Texture Overlay (Rice Paper) */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-[0.35] mix-blend-multiply rounded-r-2xl pointer-events-none"></div>
                  
                  {/* Inner Cover Binding crease */}
                  <div className="absolute h-full w-[1px] left-1 bg-black/5 pointer-events-none"></div>
                  <div className="absolute h-full w-[1px] left-2 bg-white/10 pointer-events-none"></div>
                  <div className="absolute h-full w-[1px] right-2 bg-black/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative h-full flex flex-col p-6 z-10 justify-between">
                     <div className="opacity-40 flex justify-center mt-4">
                        <svg className={`w-8 h-8 stroke-current fill-none stroke-[1.5] ${book.titleClass}`} viewBox="0 0 100 100">
                          <path d="M85,50 C85,70 70,85 50,85 C30,85 15,70 15,50 C15,30 30,15 50,15 C65,15 78,25 82,40" strokeLinecap="round" />
                        </svg>
                     </div>
                     <div className="space-y-4 mt-auto mb-6 relative">
                       <h3 className={`font-display font-medium text-xl leading-snug drop-shadow-sm ${book.titleClass}`}>
                         {book.title}
                       </h3>
                       <div className={`w-8 h-[1px] opacity-30 ${book.titleClass.replace('text-', 'bg-')}`}></div>
                       <p className={`text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70 ${book.titleClass}`}>
                         {book.subtitle}
                       </p>
                     </div>
                  </div>
                </button>
              ) : (
                <div 
                  style={{ 
                    backgroundColor: book.coverHex,
                    borderLeftWidth: '12px',
                    borderLeftColor: book.spineHex,
                  }}
                  className="relative w-48 h-64 sm:w-[220px] sm:h-[300px] rounded-sm rounded-r-2xl shadow-sm opacity-[0.65] flex flex-col items-center justify-center text-center px-6"
                >
                  {/* Book Texture Overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-30 mix-blend-multiply rounded-r-2xl pointer-events-none"></div>
                  
                  {/* Inner Cover Binding crease */}
                  <div className="absolute h-full w-[1px] left-1 bg-black/5 pointer-events-none"></div>
                  <div className="absolute h-full w-[1px] left-2 bg-white/10 pointer-events-none"></div>
                  
                  <div className="relative z-10 space-y-6 flex flex-col items-center">
                    <div className={`w-8 h-8 border ${book.titleClass.replace('text-', 'border-')} rounded-full flex items-center justify-center opacity-30`}>
                      <span className={`text-sm ${book.titleClass}`}>?</span>
                    </div>
                    <div>
                      <h3 className={`font-display text-lg leading-snug mb-3 opacity-90 ${book.titleClass}`}>
                        {book.title}
                      </h3>
                      <p className={`text-[9px] uppercase tracking-[0.3em] opacity-60 font-semibold ${book.titleClass}`}>
                         Coming Soon
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Physical Shelf Wooden Planks */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
           {/* Top highlighted edge of shelf */}
           <div className="h-1 bg-[#FCFBF7] opacity-60 relative translate-y-[2px] z-10 shadow-sm mx-2"></div>
           {/* Main thick shelf body */}
           <div className="h-4 sm:h-5 bg-monk-200 border-t border-monk-300/80 shadow-[0_4px_15px_rgba(43,39,36,0.06)] rounded-sm shrink-0"></div>
           {/* Shadow cast down the wall from the shelf */}
           <div className="absolute bottom-[-20px] left-4 right-4 h-5 bg-gradient-to-b from-[#38342B]/10 to-transparent blur-md pointer-events-none"></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
      `}} />
    </div>
  );
}
