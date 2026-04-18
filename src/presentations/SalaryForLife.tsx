import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, TrendingUp, ArrowRight, ShieldAlert, Share2, Check, Wallet, Landmark, PhoneCall, ArrowLeft } from 'lucide-react';
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, Line, Legend, ComposedChart } from 'recharts';

// Data showing a growing corpus while taking a 6% annual SWP
const liverIncomeData = [
  { year: 2026, corpus: 185, income: 11.1 },
  { year: 2028, corpus: 192, income: 12.2 },
  { year: 2030, corpus: 201, income: 13.4 },
  { year: 2032, corpus: 215, income: 14.8 },
  { year: 2034, corpus: 232, income: 16.3 },
  { year: 2036, corpus: 254, income: 17.9 },
  { year: 2038, corpus: 280, income: 19.7 },
  { year: 2040, corpus: 312, income: 21.6 },
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
        The <span className="text-[#1AABDE]">Salary for Life</span><br/>Income Map
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mt-4">
        Transitioning your hard-earned corpus into a predictable, inflation-proof monthly paycheck.
      </p>
    </div>
  </div>
);

const Page1 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1AABDE] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1AABDE] opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

    <header className="flex items-center justify-between mb-6 z-10">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
        PATIL INVESTMENTS | ARN-143723
      </div>
    </header>

    <div className="flex-1 flex flex-col z-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Fighting the <span className="text-[#1AABDE]">Inflation Trap</span>.
      </h1>
      
      <div className="flex-1 min-h-[250px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={liverIncomeData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCorpusLiver" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1AABDE" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#1AABDE" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="year" stroke="#666" tick={{fill: '#666'}} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" stroke="#1AABDE" tick={{fill: '#1AABDE'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val}L`} />
            <YAxis yAxisId="right" orientation="right" stroke="#fff" tick={{fill: '#fff'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val}L`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111214', borderColor: '#333', color: '#fff' }} 
              formatter={(value, name) => [`₹${value} Lakhs`, name]}
            />
            <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ color: '#ccc' }}/>
            <Area yAxisId="left" type="monotone" dataKey="corpus" name="Remaining Corpus" fill="url(#colorCorpusLiver)" stroke="#1AABDE" strokeWidth={3} />
            <Line yAxisId="right" type="monotone" dataKey="income" name="Annual SWP Payout" stroke="#fff" strokeWidth={3} dot={{ r: 4, fill: '#1AABDE' }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#1AABDE]/5 border border-[#1AABDE]/20 p-6 rounded-xl backdrop-blur-sm mt-auto">
        <p className="text-gray-300 text-sm md:text-lg leading-relaxed italic">
          "Retirement isn't the end of growth. By using a Systematic Withdrawal Plan (SWP), your corpus continues to work while you enjoy a monthly 'Salary' that aims to beat rising costs."
        </p>
      </div>
    </div>
  </div>
);

const Page2 = () => (
  <div className="flex flex-col h-full p-8 md:p-12 bg-[#111214] text-white relative overflow-y-auto overflow-x-hidden no-scrollbar">
    <div className="absolute top-20 right-10 w-64 h-64 border border-white/5 rounded-full"></div>
    <div className="absolute top-32 right-24 w-32 h-32 border border-[#1AABDE]/20 rounded-full"></div>
    <div className="absolute bottom-10 left-10 w-96 h-96 border border-white/5 rounded-full"></div>

    <header className="flex items-center justify-between mb-6 z-10">
      <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] text-left font-['Arial'] uppercase">
        PATIL INVESTMENTS | ARN-143723
      </div>
    </header>

    <div className="flex-1 flex flex-col z-10 justify-center">
      <h2 className="text-[#1AABDE] font-bold tracking-widest text-sm uppercase mb-4 text-center">The Method</h2>
      <h1 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
        The Three-Bucket Strategy
      </h1>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <Wallet size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Cash Bucket</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            <span className="text-white font-medium">0-2 Years</span> of expenses in liquid funds for immediate safety and peace of mind.
          </p>
        </div>

        <div className="bg-[#1AABDE]/10 border border-[#1AABDE]/40 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center relative transform md:scale-105 shadow-2xl shadow-[#1AABDE]/10">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <Landmark size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Income Bucket</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            <span className="text-white font-medium">3-7 Years</span> in debt/hybrid funds generating your predictable "SWP Tap".
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors">
          <div className="w-14 h-14 md:w-16 md:h-16 bg-[#1AABDE]/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-[#1AABDE]">
            <TrendingUp size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white">Growth Bucket</h3>
          <p className="text-sm md:text-base text-gray-400 leading-relaxed">
            <span className="text-white font-medium">7+ Years</span> in equity to fight long-term inflation and grow your wealth.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Page3 = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'The Salary for Life Income Map',
      text: 'Transitioning your hard-earned corpus into a predictable, inflation-proof monthly paycheck.',
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
          Map Your Retirement.
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed">
          Will your corpus last until age 95? Let's build your personalized Sustainability Audit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <button className="group bg-white text-[#111214] font-bold text-base md:text-lg px-6 py-3 md:px-8 md:py-4 rounded-full flex items-center justify-center gap-3 hover:bg-gray-100 transition-all hover:scale-105 shadow-xl shadow-black/20 w-full sm:w-auto">
            Book Your Retirement Audit
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

const Page4 = () => (
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

export default function SalaryForLife({ onBack }: { onBack: () => void }) {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 5;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const pages = [
    <CoverPage key="cover" />,
    <Page1 key="page1" />,
    <Page2 key="page2" />,
    <Page3 key="page3" />,
    <Page4 key="page4" />
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
