import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Wind, Moon, Sun, Heart, Minus } from 'lucide-react';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const brandName = "Kalyanamitta";

  const pages = [
    {
      type: "cover",
      title: "ඔබටත් උපදෙස් දෙන අයව එපා වෙලාද?",
      subtitle: "නිශ්ශබ්දව සිතන්න...",
      content: "කෙනෙක් ඔයාගේ වැරැද්දක් පෙන්වලා දෙද්දී, ඒක නිධානයක් වගේ පිළිගන්නවා වෙනුවට අපි ගොඩක් වෙලාවට කරන්නේ ඒක වහන්න 'Excuses' දෙන එකයි.",
      symbol: "enso"
    },
    {
      type: "content",
      title: "වරද සඟවන ආකාරය",
      sections: [
        { label: "මනෝකර්ම", text: "සිත තුළ ඇතිවන වැරදි දැකීම (මිච්ඡා දිට්ඨිය) තුළින් තමාම රවටා ගැනීම." },
        { label: "වචීකර්ම", text: "බොරු කීමෙන් හෝ හිස් වචන භාවිතයෙන් වරද වසා ගැනීමට තැත් කිරීම." },
        { label: "කායකර්ම", text: "වැරදි චර්යාව පුරුද්දක් කර ගනිමින් එය දිගින් දිගටම සිදු කිරීම." }
      ]
    },
    {
      type: "quote",
      title: "ධම්මපදය: පණ්ඩිත වග්ගය",
      pali: "නිධීනංව පවත්තාරං - යං පස්සේ වජ්ජදස්සිනං",
      meaning: "තම වැරදි පෙන්වා දෙන තැනැත්තා සඟවා ඇති නිධානයක් පෙන්වන්නෙකු වැනිය.",
      note: "අවවාදය මකා දමන්නා තමාට ලැබෙන නිධානය අහිමි කරගනී."
    },
    {
      type: "list",
      title: "අකීකරුකම ඇති කරන කරුණු (1-8)",
      items: [
        { id: "1", title: "ලාමක ආශා", desc: "කීර්තිය හා ප්රශංසාව පසුපස හඹා යෑම." },
        { id: "2", title: "පුරාජේරුව", desc: "තමන් උසස් කොට අනුන් පහත් කොට සැලකීම." },
        { id: "3", title: "ක්රෝධය", desc: "නිරන්තරයෙන් කෝපයට පත්වීම." },
        { id: "4", title: "බද්ධ වෛරය", desc: "තරහ සිතේ තබාගෙන වෛර කිරීම." },
        { id: "5", title: "රණ්ඩුකාමී බව", desc: "පොඩි දේටත් කලහ කිරීම." },
        { id: "6", title: "වචන සැර වීම", desc: "වචන පාලනය කරගත නොහැකි වීම." },
        { id: "7", title: "විරුද්ධ වීම", desc: "අවවාදය පිළිනොගෙන විරුද්ධ වීම." },
        { id: "8", title: "අපහාස කිරීම", desc: "වැරැද්ද පෙන්වන්නාටම නිග්රහ කිරීම." }
      ]
    },
    {
      type: "list",
      title: "අකීකරුකම ඇති කරන කරුණු (9-16)",
      items: [
        { id: "9", title: "එකට එක කීම", desc: "අනුන්ගේ වැරදි පෙන්වමින් තමා බේරීමට තැත් කිරීම." },
        { id: "10", title: "මඟහැරීම", desc: "වෙනත් කතා ඇදගෙන වරද වසා ගැනීම." },
        { id: "11", title: "පිළිනොගැනීම", desc: "වැරැද්දක් වූ බව පිළිනොගැනීම." },
        { id: "12", title: "ගුණ මකු බව", desc: "අනුන්ගේ ගුණ මැකීමට තැත් කිරීම." },
        { id: "13", title: "ඉරිසියාව/මසුරුකම", desc: "අනුන්ගේ සැපතට අකමැති වීම." },
        { id: "14", title: "කෛරාටික බව", desc: "නැති ගුණ පෙන්වමින් රඟපෑම." },
        { id: "15", title: "තද ගතිය", desc: "අධික මාන්නයෙන් යුතුව සිටීම." },
        { id: "16", title: "වැරදි මතය", desc: "වැරදි බව දැන දැනත් එය අත්නොහැරීම." }
      ]
    },
    {
      type: "advice",
      title: "මහා මොග්ගල්ලාන රහතන් වහන්සේ",
      content: "කෙනෙක් අකීකරු නම්, අනිත් අයට ඔහුට අවවාද දීමට සිතෙන්නේ නැත. අප තුළ ඇති නරක ගති නිසා අප අන් අයට අප්රිය පුද්ගලයෙකු විය හැකිය.",
      conclusion: "නිහතමානී වන්න. වරද පිළිගන්න. සන්සුන් වන්න."
    },
    {
      type: "final",
      title: "අනුමාන සූත්රය",
      source: "මජ්ඣිම නිකාය",
      content: "'අනුන්ගේ වැරදි මට අප්රිය නම්, මා තුළත් ඒ වැරදි තිබුණොත් අන් අයට මාව අප්රිය වනු ඇත' යන අවබෝධය ඇති කරගන්න.",
      action: "වැරැද්ද පිළිගන්න. එතැනයි ඔබේ අධ්යාත්මික සුවය තියෙන්නේ."
    }
  ];

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % pages.length);
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);

  const EnsoCircle = () => (
    <div className="relative w-32 h-32 flex items-center justify-center opacity-40">
      <svg viewBox="0 0 100 100" className="w-full h-full stroke-stone-300 fill-none stroke-[2] animate-draw">
        <path d="M85,50 C85,70 70,85 50,85 C30,85 15,70 15,50 C15,30 30,15 50,15 C65,15 78,25 82,40" strokeLinecap="round" />
      </svg>
    </div>
  );

  const renderPage = (page) => {
    switch (page.type) {
      case "cover":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12 px-10">
            <EnsoCircle />
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-light tracking-widest text-stone-800 leading-relaxed uppercase">
                {page.title}
              </h1>
              <div className="w-12 h-px bg-stone-300 mx-auto" />
              <p className="text-stone-500 tracking-[0.3em] font-light text-xs uppercase">
                {page.subtitle}
              </p>
            </div>
            <div className="max-w-xs text-stone-600 font-light italic leading-loose">
              {page.content}
            </div>
          </div>
        );
      case "content":
        return (
          <div className="flex flex-col h-full justify-center space-y-12 p-12 sm:p-16">
            <h2 className="text-xl font-light text-stone-800 tracking-widest uppercase border-b border-stone-200 pb-4">
              {page.title}
            </h2>
            <div className="space-y-10">
              {page.sections.map((sec, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-stone-300 font-serif italic text-2xl group-hover:text-stone-500 transition-colors">0{i+1}</div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase">{sec.label}</span>
                    <p className="text-stone-600 leading-relaxed">{sec.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "quote":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-12 p-12">
            <Wind className="w-8 h-8 text-stone-300 animate-sway" />
            <div className="space-y-10 max-w-md">
              <p className="text-2xl font-light text-stone-800 leading-loose italic">
                "{page.pali}"
              </p>
              <div className="h-px w-16 bg-stone-200 mx-auto" />
              <p className="text-stone-600 leading-relaxed font-light">
                {page.meaning}
              </p>
            </div>
            <p className="text-[10px] text-stone-400 tracking-widest uppercase italic">{page.note}</p>
          </div>
        );
      case "list":
        return (
          <div className="flex flex-col h-full p-12">
            <h2 className="text-lg font-light text-stone-800 tracking-[0.2em] uppercase mb-12 border-l-2 border-stone-200 pl-6">
              {page.title}
            </h2>
            <div className="grid grid-cols-1 gap-6 overflow-y-auto pr-4 custom-scrollbar">
              {page.items.map((item, i) => (
                <div key={i} className="flex gap-6 items-start opacity-70 hover:opacity-100 transition-opacity">
                  <Minus className="w-4 h-4 text-stone-400 mt-1 shrink-0" />
                  <div className="space-y-1">
                    <h3 className="text-stone-800 font-medium text-sm tracking-wide">{item.title}</h3>
                    <p className="text-stone-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "advice":
        return (
          <div className="flex flex-col h-full justify-center space-y-12 p-16">
            <div className="space-y-8 relative">
              <Leaf className="w-6 h-6 text-stone-300 absolute -top-10 -left-6" />
              <h2 className="text-xl font-light text-stone-800 tracking-widest uppercase">{page.title}</h2>
              <p className="text-stone-600 text-lg leading-loose font-light italic">
                {page.content}
              </p>
            </div>
            <div className="pt-8 border-t border-stone-200 flex items-center justify-between">
              <p className="text-stone-400 text-xs tracking-[0.3em] uppercase">{page.conclusion}</p>
              <Moon className="w-4 h-4 text-stone-300" />
            </div>
          </div>
        );
      case "final":
        return (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-10 p-12">
            <div className="p-4 border border-stone-200 rounded-full">
               <Sun className="w-6 h-6 text-stone-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-light text-stone-800 tracking-widest uppercase italic">{page.title}</h2>
              <p className="text-stone-400 text-[10px] tracking-[0.4em] uppercase">{page.source}</p>
            </div>
            <div className="space-y-8 max-w-sm">
               <p className="text-stone-600 text-xl leading-loose font-light">
                 {page.content}
               </p>
               <div className="inline-block py-4 px-10 border border-stone-200 text-stone-800 text-sm tracking-[0.2em] uppercase hover:bg-stone-50 transition-colors cursor-default">
                 {page.action}
               </div>
               <p className="pt-8 text-stone-300 text-[9px] tracking-[0.6em] uppercase">{brandName} Insight</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full min-h-[600px] w-full bg-[#fcfcfc] flex items-center justify-center p-6 sm:p-12 font-sans antialiased text-stone-600 selection:bg-stone-200 overflow-hidden relative rounded-2xl">
      
      {/* Zen Background Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] invert">
        <div className="absolute inset-0 bg-repeat bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
      </div>

      <div className="relative w-full max-w-xl aspect-[3/4.5] sm:aspect-[4/5] bg-white border border-stone-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col transition-all duration-1000">
        
        {/* Top Progress bar (Zen line) */}
        <div className="px-12 py-10 flex flex-col gap-4">
          <div className="flex items-center justify-between opacity-50">
            <span className="text-[9px] tracking-[0.5em] uppercase font-light text-stone-500">{brandName}</span>
            <span className="text-[9px] tracking-[0.2em] font-light text-stone-400">0{currentPage + 1} / 0{pages.length}</span>
          </div>
          <div className="h-px w-full bg-stone-100 relative">
            <div 
              className="absolute h-px bg-stone-800 transition-all duration-700 ease-in-out" 
              style={{ width: `${((currentPage + 1) / pages.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content with slow animation */}
        <div className="flex-1 overflow-hidden relative">
          <div 
            key={currentPage} 
            className="h-full w-full animate-zen-in"
          >
            {renderPage(pages[currentPage])}
          </div>
        </div>

        {/* Navigation - Minimal and Silent */}
        <div className="px-12 py-10 flex items-center justify-between">
          <button 
            onClick={prevPage}
            className="p-4 text-stone-400 hover:text-stone-800 transition-colors disabled:opacity-30 cursor-pointer"
            disabled={currentPage === 0}
            type="button"
          >
            <ChevronLeft className="w-5 h-5 stroke-[1]" />
          </button>
          
          <div className="flex gap-3">
             {pages.map((_, idx) => (
                <div key={idx} className={`w-1 h-1 rounded-full ${idx === currentPage ? 'bg-stone-800' : 'bg-stone-200'}`} />
             ))}
          </div>

          <button 
            onClick={nextPage}
            className="p-4 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer"
            type="button"
          >
            <ChevronRight className="w-5 h-5 stroke-[1]" />
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@1,400&family=Inter:wght@200;300;400;500&display=swap');
        
        .font-serif { font-family: 'Bodoni Moda', serif; }

        .custom-scrollbar::-webkit-scrollbar { width: 2px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e5e5; }

        @keyframes zen-in {
          0% { opacity: 0; transform: translateY(5px); filter: blur(5px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes draw {
          0% { stroke-dasharray: 0, 300; opacity: 0; }
          100% { stroke-dasharray: 300, 300; opacity: 0.4; }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(5px) rotate(5deg); }
        }

        .animate-zen-in { animation: zen-in 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-draw { animation: draw 3s ease-out forwards; }
        .animate-sway { animation: sway 8s infinite ease-in-out; }
      `}} />
    </div>
  );
};

export default FlipBook;
