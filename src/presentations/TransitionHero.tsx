import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldAlert, Share2, Check, ArrowLeft, CheckCircle2, ClipboardCheck } from 'lucide-react';

const CoverPage = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar justify-center items-center text-center">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

    <div className="z-10 flex flex-col items-center">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] font-['Arial'] uppercase mb-8 border-b border-[#1AABDE]/30 pb-4">
        PATIL INVESTMENTS | ARN-143723
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        The <span className="text-[#1AABDE]">Transition Hero</span><br/>Scorecard
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-4">
        Validation and Gap Analysis for the Critical Decade before retirement.
      </p>
    </div>
  </div>
);

const Page1 = ({ scores, toggleCheck, totalScore, onNext }: any) => {
  const questions = [
    "Calculated your exact 'Retirement Gap' based on lifestyle?",
    "Portfolio diversified enough to withstand market volatility?",
    "Clear Systematic Withdrawal Plan (SWP) for cash flow?",
    "Accounted for healthcare inflation in projections?",
    "Investments aligned with current risk tolerance?",
    "Adequate emergency fund separate from retirement corpus?",
    "Consolidated investments for easier tracking?",
    "Portfolio tax-optimized for the withdrawal phase?",
    "Planned for estate transition and beneficiaries?",
    "Review 'Goal Sheet' with a professional annually?"
  ];

  return (
    <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
      <header className="flex items-center justify-between mb-6 z-10 shrink-0">
        <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
          PATIL INVESTMENTS | ARN-143723
        </div>
      </header>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 shrink-0">
        Are you ready for the <span className="text-[#1AABDE]">Transition</span>?
      </h1>

      <div className="grid md:grid-cols-2 gap-3 mb-6 overflow-y-auto pr-2 custom-scrollbar flex-1 min-h-0">
        {questions.map((q, i) => (
          <button 
            key={i}
            onClick={() => toggleCheck(i)}
            className={`flex items-center gap-3 p-3 md:p-4 rounded-xl border transition-all text-left ${
              scores[i] ? 'bg-[#1AABDE]/10 border-[#1AABDE]' : 'bg-white/5 border-white/10 hover:border-white/30'
            }`}
          >
            {scores[i] ? <CheckCircle2 className="text-[#1AABDE] shrink-0" /> : <div className="w-6 h-6 rounded-full border border-white/30 shrink-0" />}
            <span className={`text-xs md:text-sm ${scores[i] ? 'text-white' : 'text-gray-400'}`}>{i + 1}. {q}</span>
          </button>
        ))}
      </div>

      <div className="shrink-0 bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <div className="text-gray-400 text-xs md:text-sm mb-1">Your Readiness Score</div>
          <div className="text-3xl md:text-4xl font-bold">
            <span className={totalScore > 7 ? 'text-green-400' : totalScore > 4 ? 'text-[#1AABDE]' : 'text-red-400'}>
              {totalScore}
            </span>
            <span className="text-gray-600 text-xl md:text-2xl"> / 10</span>
          </div>
        </div>

        <div className="flex-1 max-w-md text-xs md:text-sm text-gray-400 text-center md:text-left">
          {totalScore > 7 ? "Excellent. You are well-prepared for the transition." : 
           totalScore > 4 ? "Good, but there are gaps. A Discovery Call is recommended." : 
           "Action needed. Let's build your Goal Sheet immediately."}
        </div>

        <button onClick={onNext} className="bg-[#1AABDE] hover:bg-[#1594c1] text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full flex items-center gap-2 transition-transform hover:scale-105 whitespace-nowrap text-sm md:text-base">
          Fix Your Gaps <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

const Page2 = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'The Transition Hero Scorecard',
      text: 'Calculate your retirement readiness with this interactive scorecard.',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <div className="flex flex-col h-full p-8 md:p-12 bg-gradient-to-br from-[#1AABDE] to-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
      <div className="flex-1 flex flex-col items-center justify-center z-10 text-center max-w-3xl mx-auto">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 md:mb-8 backdrop-blur-sm">
          <ClipboardCheck size={32} className="text-white md:w-10 md:h-10" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
          Let's close your <br/> Readiness Gaps.
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed">
          Book a Discovery Call to review your scorecard and build your personalized Transition Plan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <button className="group bg-white text-[#111214] font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-black/20 w-full sm:w-auto">
            Book Your Discovery Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleShare}
            className="group bg-transparent border-2 border-white text-white font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 shadow-xl shadow-black/20 w-full sm:w-auto"
          >
            {copied ? 'Link Copied!' : 'Share Scorecard'}
            {copied ? <Check size={20} /> : <Share2 size={20} className="group-hover:scale-110 transition-transform" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Page3 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#0a0b0d] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar justify-center items-center">
    <div className="absolute top-0 left-0 w-full h-2 bg-[#1AABDE]"></div>
    <div className="max-w-3xl w-full bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl text-center shadow-2xl">
      <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
        <ShieldAlert size={32} className="text-gray-400" />
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-white mb-8 uppercase tracking-widest">Compliance & Disclaimers</h2>
      
      <div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
        <p className="font-medium text-white/80 text-lg">
          Patil Investments | ARN-143723 | Mutual Fund Distributor
        </p>
        <div className="w-16 h-px bg-white/20 mx-auto"></div>
        <p>
          Assumed 12% CAGR for illustration purposes only.
        </p>
        <p className="text-[#1AABDE] font-medium">
          Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
        </p>
      </div>
    </div>
  </div>
);

export default function TransitionHero({ onBack }: { onBack: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  // Lifted state so it persists across page navigations
  const [scores, setScores] = useState(new Array(10).fill(false));
  
  const toggleCheck = (index: number) => {
    const newScores = [...scores];
    newScores[index] = !newScores[index];
    setScores(newScores);
  };

  const totalScore = scores.filter(Boolean).length;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const pages = [
    <CoverPage key="cover" />,
    <Page1 key="page1" scores={scores} toggleCheck={toggleCheck} totalScore={totalScore} onNext={nextPage} />,
    <Page2 key="page2" />,
    <Page3 key="page3" />
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 font-sans relative">
      <button onClick={onBack} className="absolute top-4 left-4 text-gray-400 hover:text-white flex items-center gap-2 z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors">
        <ArrowLeft size={16} /> Back to Library
      </button>
      
      <div className="w-full max-w-5xl h-[85vh] md:h-auto md:aspect-[16/9] bg-[#111214] rounded-2xl shadow-2xl shadow-[#1AABDE]/10 overflow-hidden relative flex flex-col">
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              {pages[currentPage]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 bg-black/40 backdrop-blur-md px-4 py-3 md:py-4 border-t border-white/10 z-50 w-full">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentPage ? 'bg-[#1AABDE] w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-full hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="fixed bottom-2 text-white/30 text-xs md:hidden">
        Swipe or tap arrows to navigate
      </div>
    </div>
  );
}
