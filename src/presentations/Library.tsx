import React, { useState } from 'react';
import SalaryForLife from './SalaryForLife';
import SipBlueprint from './SipBlueprint';
import TransitionHero from './TransitionHero';
import { FileText, ArrowRight, ClipboardCheck } from 'lucide-react';

export default function Library({ onBack, initialView = 'menu' }: { onBack?: () => void, initialView?: 'menu' | 'sip' | 'liver' | 'transition' }) {
  const [view, setView] = useState<'menu' | 'sip' | 'liver' | 'transition'>(initialView);

  if (view === 'sip') return <SipBlueprint onBack={() => setView('menu')} />;
  if (view === 'liver') return <SalaryForLife onBack={() => setView('menu')} />;
  if (view === 'transition') return <TransitionHero onBack={() => setView('menu')} />;

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 text-white font-sans relative overflow-y-auto overflow-x-hidden">
      {onBack && (
        <button onClick={onBack} className="absolute top-8 left-8 text-gray-400 hover:text-white flex items-center gap-2 z-50 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 transition-colors">
          &larr; Back to Main Website
        </button>
      )}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 fixed"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1AABDE] opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 fixed"></div>

      <div className="z-10 mb-12 text-center mt-8">
        <div className="text-[#1AABDE] font-bold tracking-widest text-[14px] font-['Arial'] uppercase mb-4 border-b border-[#1AABDE]/30 pb-2 inline-block">
          PATIL INVESTMENTS | ARN-143723
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Lead Magnet Library</h1>
        <p className="text-gray-400 text-lg">Select a presentation to view and share</p>
      </div>

      <div className="z-10 grid md:grid-cols-3 gap-6 w-full max-w-6xl mb-8">
        <button
          onClick={() => setView('sip')}
          className="bg-[#111214] border border-white/10 hover:border-[#1AABDE]/50 p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:scale-105 group shadow-2xl"
        >
          <div className="w-16 h-16 bg-[#1AABDE]/10 rounded-full flex items-center justify-center mb-6 text-[#1AABDE] group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-white">The Millionaire SIP Wealth Blueprint</h2>
          <p className="text-gray-400 text-sm mb-6">Focus: Cost of waiting & Step-Up SIPs</p>
          <div className="mt-auto text-[#1AABDE] font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            Open <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <button
          onClick={() => setView('transition')}
          className="bg-[#111214] border border-white/10 hover:border-[#1AABDE]/50 p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:scale-105 group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-[#1AABDE]"></div>
          <div className="w-16 h-16 bg-[#1AABDE]/10 rounded-full flex items-center justify-center mb-6 text-[#1AABDE] group-hover:scale-110 transition-transform">
            <ClipboardCheck size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-white">The Transition Hero Scorecard</h2>
          <p className="text-gray-400 text-sm mb-6">Focus: Validation & Gap Analysis (Ages 50-58)</p>
          <div className="mt-auto text-[#1AABDE] font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            Open <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        <button
          onClick={() => setView('liver')}
          className="bg-[#111214] border border-white/10 hover:border-[#1AABDE]/50 p-8 rounded-2xl flex flex-col items-center text-center transition-all hover:scale-105 group shadow-2xl"
        >
          <div className="w-16 h-16 bg-[#1AABDE]/10 rounded-full flex items-center justify-center mb-6 text-[#1AABDE] group-hover:scale-110 transition-transform">
            <FileText size={32} />
          </div>
          <h2 className="text-xl font-bold mb-3 text-white">The Salary for Life Income Map</h2>
          <p className="text-gray-400 text-sm mb-6">Focus: SWP & Three-Bucket Strategy</p>
          <div className="mt-auto text-[#1AABDE] font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
            Open <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </div>
    </div>
  );
}
