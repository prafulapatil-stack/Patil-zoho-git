import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp, ArrowRight, ShieldAlert, Share2, Check, PhoneCall, ArrowLeft, Clock, Zap, Target } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, Legend, ComposedChart, BarChart, Bar } from 'recharts';

const compoundData = [
  { year: 1, early: 1.2, late: 0 },
  { year: 5, early: 8.2, late: 0 },
  { year: 10, early: 23.2, late: 0 },
  { year: 15, early: 50.4, late: 8.2 },
  { year: 20, early: 99.9, late: 23.2 },
  { year: 25, early: 189.8, late: 50.4 },
  { year: 30, early: 353.4, late: 99.9 },
];

const stepUpData = [
  { year: 5, normal: 8.2, stepup: 10.5 },
  { year: 10, normal: 23.2, stepup: 35.4 },
  { year: 15, normal: 50.4, stepup: 92.1 },
  { year: 20, normal: 99.9, stepup: 215.4 },
];

const CoverPage = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar justify-center items-center text-center">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

    <div className="z-10 flex flex-col items-center">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] font-['Arial'] uppercase mb-8 border-b border-[#1AABDE]/30 pb-4">
        PATIL INVESTMENTS | ARN-143723
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        The <span className="text-[#1AABDE]">Millionaire SIP</span><br/>Wealth Blueprint
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-4">
        A strategic guide to building generational wealth through consistent, disciplined investing.
      </p>
    </div>
  </div>
);

const Page1 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
    <header className="flex items-center justify-between mb-6 z-10">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
        PATIL INVESTMENTS | ARN-143723
      </div>
    </header>

    <div className="flex-1 flex flex-col z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Why <span className="text-[#1AABDE]">Consistency</span> Beats Luck Every Time.
      </h1>
      
      <div className="flex-1 min-h-[250px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={compoundData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="year" stroke="#666" tick={{fill: '#666'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#1AABDE" tick={{fill: '#1AABDE'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val}L`} />
            <Tooltip contentStyle={{ backgroundColor: '#111214', borderColor: '#333', color: '#fff' }} formatter={(value, name) => [`₹${value} Lakhs`, name]} />
            <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ color: '#ccc' }}/>
            <Line type="monotone" dataKey="early" name="Early Starter" stroke="#1AABDE" strokeWidth={4} dot={{ r: 4, fill: '#1AABDE' }} />
            <Line type="monotone" dataKey="late" name="Late Starter (10 yrs later)" stroke="#666" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, fill: '#666' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#1AABDE]/5 border border-[#1AABDE]/20 p-6 rounded-xl backdrop-blur-sm mt-auto">
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic">
          "The greatest thief of wealth isn't a market crash—it's the 'Perfect Timing' trap. Starting just 10 years earlier can result in a corpus nearly 4x larger, even with a smaller monthly investment."
        </p>
      </div>
    </div>
  </div>
);

const Page2 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
    <header className="flex items-center justify-between mb-6 z-10">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
        PATIL INVESTMENTS | ARN-143723
      </div>
    </header>

    <div className="flex-1 flex flex-col z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Your Secret Weapon: The <span className="text-[#1AABDE]">Annual Step-Up</span> SIP.
      </h1>
      
      <div className="flex-1 min-h-[250px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={stepUpData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="year" stroke="#666" tick={{fill: '#666'}} axisLine={false} tickLine={false} />
            <YAxis stroke="#1AABDE" tick={{fill: '#1AABDE'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val}L`} />
            <Tooltip contentStyle={{ backgroundColor: '#111214', borderColor: '#333', color: '#fff' }} formatter={(value, name) => [`₹${value} Lakhs`, name]} />
            <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ color: '#ccc' }}/>
            <Bar dataKey="normal" name="Normal SIP" fill="#333" radius={[4, 4, 0, 0]} />
            <Bar dataKey="stepup" name="10% Step-Up SIP" fill="#1AABDE" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#1AABDE]/5 border border-[#1AABDE]/20 p-6 rounded-xl backdrop-blur-sm mt-auto">
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic">
          "Increasing your SIP by just 10% every year aligns your investments with your growing income, creating a massive multiplier effect on your final corpus over 20 years."
        </p>
      </div>
    </div>
  </div>
);

const Page3 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
    <header className="flex items-center justify-between mb-6 z-10">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
        PATIL INVESTMENTS | ARN-143723
      </div>
    </header>

    <div className="flex-1 flex flex-col z-10 justify-center">
      <h2 className="text-[#1AABDE] font-bold tracking-widest text-sm uppercase mb-4 text-center">The Roadmap</h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
        3 Steps to Wealth Creation
      </h1>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <Clock size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Start Early</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Time in the market is more important than timing the market. Give compounding time to work.
          </p>
        </div>

        <div className="bg-[#1AABDE]/10 border border-[#1AABDE]/40 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center relative transform md:scale-105 shadow-2xl shadow-[#1AABDE]/10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <Zap size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Step-Up Annually</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Increase your investment by 10% each year as your income grows to accelerate wealth.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <Target size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Stay Disciplined</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            Ignore market noise. Stick to the plan through volatility to reach your financial goals.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Page4 = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'The Millionaire SIP Wealth Blueprint',
      text: 'A strategic guide to building generational wealth through consistent, disciplined investing.',
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
          <PhoneCall size={32} className="text-white md:w-10 md:h-10" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
          Ready to build your Wealth Blueprint?
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed">
          Let's create a personalized SIP strategy tailored to your financial goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <button className="group bg-white text-[#111214] font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-black/20 w-full sm:w-auto">
            Book a Discovery Call
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleShare}
            className="group bg-transparent border-2 border-white text-white font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-white/10 transition-all hover:scale-105 shadow-xl shadow-black/20 w-full sm:w-auto"
          >
            {copied ? 'Link Copied!' : 'Share Presentation'}
            {copied ? <Check size={20} /> : <Share2 size={20} className="group-hover:scale-110 transition-transform" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Page5 = () => (
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

export default function SipBlueprint({ onBack }: { onBack: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const pages = [
    <CoverPage key="cover" />,
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />,
    <Page5 key="page5" />
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
