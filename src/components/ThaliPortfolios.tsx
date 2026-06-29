import React from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Scale, 
  Sprout, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  Compass,
  ArrowLeft
} from 'lucide-react';

interface ThaliPortfoliosProps {
  onBack: () => void;
}

export default function ThaliPortfolios({ onBack }: ThaliPortfoliosProps) {
  return (
    <div className="min-h-screen bg-[var(--color-near-black)] text-white font-sans">
      {/* Back navigation bar */}
      <div className="border-b border-white/5 bg-[#111214]/60 backdrop-blur-md py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-[var(--color-electric-blue)] transition-colors group px-3 py-1.5 rounded-lg hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Scorecard Checklists
          </button>
          
          <div className="hidden md:flex items-center gap-3 text-xs text-gray-400">
            <span>Portfolio Models</span>
            <span className="text-gray-600">•</span>
            <span className="text-[var(--color-electric-blue)] font-semibold uppercase tracking-wider">AMFI-Registered MFD</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,171,222,0.12),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/20 text-[var(--color-electric-blue)] text-[10px] md:text-xs font-bold letter-spacing-0.12em uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
          >
            Curated by Praful Patil · ARN-143723
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Your <span className="text-[var(--color-electric-blue)]">Wealth Thali</span>, <br className="hidden md:block"/>Served Right.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Three life-stage portfolios. Every ingredient chosen for where you are today — and where you want to be tomorrow.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm px-6 py-4 rounded-2xl max-w-3xl mx-auto"
          >
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[var(--color-electric-blue)] shadow-[0_0_10px_rgba(26,171,222,0.5)]"></span>
              AMFI-Registered MFD
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[var(--color-electric-blue)] shadow-[0_0_10px_rgba(26,171,222,0.5)]"></span>
              ARN-143723
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-[var(--color-electric-blue)] shadow-[0_0_10px_rgba(26,171,222,0.5)]"></span>
              BSE Member 18583
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse"></span>
              Based in Thane (Mumbai)
            </div>
          </motion.div>
        </div>
      </section>

      {/* Thali Grid Section */}
      <section className="py-20 px-4 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[var(--color-electric-blue)] uppercase tracking-wider">Three Curated Thalis</span>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-1.5 mb-4">
            Every life stage needs a different Thali.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Just as a growing child eats differently from a working professional or a retired grandparent, your investment portfolio must match your life stage, risk appetite, and goal horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* BUILDER THALI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#111214] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[var(--color-electric-blue)]/30 hover:shadow-[0_10px_40px_rgba(26,171,222,0.06)] transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-[var(--color-electric-blue)] uppercase tracking-widest bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/15 px-3 py-1 rounded-full">
                  Age 30–45 · Builder
                </span>
                <Flame className="w-6 h-6 text-[var(--color-electric-blue)]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--color-electric-blue)] transition-colors">Builder's Thali</h3>
              <p className="text-xs text-gray-400 mb-6">High Growth · 10+ Year Horizon</p>

              {/* Allocation Bar */}
              <div className="mb-6">
                <div className="flex h-2 w-full gap-1 rounded-full overflow-hidden mb-4">
                  <div className="bg-emerald-500 rounded-full" style={{ width: '10%' }} title="Dal 10%"></div>
                  <div className="bg-amber-500 rounded-full" style={{ width: '35%' }} title="Rice & Roti 35%"></div>
                  <div className="bg-rose-500 rounded-full" style={{ width: '45%' }} title="Thecha 45%"></div>
                  <div className="bg-purple-500 rounded-full" style={{ width: '10%' }} title="Sweet 10%"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Dal — 10%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Rice & Roti — 35%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>Thecha — 45%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Sweet — 10%</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 my-6 text-center">
                <div>
                  <div className="text-lg font-bold text-[var(--color-electric-blue)]">75%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Equity</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">High</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Risk</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[var(--color-electric-blue)]">10Y+</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Horizon</div>
                </div>
              </div>

              {/* Ingredients Details */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 text-left">
                  <span className="text-emerald-500 text-xs font-bold shrink-0 mt-0.5">🟢</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Dal (10%) —</strong> Emergency fund & liquid cover. Your safety net before anything else.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-amber-500 text-xs font-bold shrink-0 mt-0.5">🟡</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Rice & Roti (35%) —</strong> Large-cap & flexi-cap funds. Steady, sustaining core growth.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-rose-500 text-xs font-bold shrink-0 mt-0.5">🔴</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Thecha (45%) —</strong> Mid-cap & small-cap equity. Maximum spice for long-term compounding.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-purple-500 text-xs font-bold shrink-0 mt-0.5">🟣</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Sweet Dish (10%) —</strong> ELSS & retirement corpus seeds. The prize you're building toward.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-4 text-center">
                <p className="text-[9.5px] text-gray-500 leading-normal">
                  Allocation is illustrative. Exact fund selection is personalised based on your risk profile, age gap, and target goals.
                </p>
              </div>

              <div className="bg-[#1a1c1e] rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400">Min Monthly SIP</span>
                <span className="text-base font-bold text-[var(--color-electric-blue)]">₹5,000</span>
              </div>

              <a 
                href="https://zbooking.in/I9uwM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-3 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(26,171,222,0.2)] transition-all border border-white/5"
              >
                Balance My Builder Thali
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* BRIDGE THALI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#111214] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_10px_40px_rgba(245,158,11,0.06)] transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/15 px-3 py-1 rounded-full">
                  Age 46–60 · Transitioner
                </span>
                <Scale className="w-6 h-6 text-amber-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-500 transition-colors">Bridge Thali</h3>
              <p className="text-xs text-gray-400 mb-6">Balanced Growth · 5–10 Year Horizon</p>

              {/* Allocation Bar */}
              <div className="mb-6">
                <div className="flex h-2 w-full gap-1 rounded-full overflow-hidden mb-4">
                  <div className="bg-emerald-500 rounded-full" style={{ width: '15%' }} title="Dal 15%"></div>
                  <div className="bg-amber-500 rounded-full" style={{ width: '55%' }} title="Rice & Roti 55%"></div>
                  <div className="bg-rose-500 rounded-full" style={{ width: '20%' }} title="Thecha 20%"></div>
                  <div className="bg-purple-500 rounded-full" style={{ width: '10%' }} title="Sweet 10%"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Dal — 15%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Rice & Roti — 55%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>Thecha — 20%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Sweet — 10%</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 my-6 text-center">
                <div>
                  <div className="text-lg font-bold text-amber-500">45%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Equity</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Medium</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Risk</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-amber-500">5–10Y</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Horizon</div>
                </div>
              </div>

              {/* Ingredients Details */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 text-left">
                  <span className="text-emerald-500 text-xs font-bold shrink-0 mt-0.5">🟢</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Dal (15%) —</strong> Robust debt & contingency. The foundation must be unshakeable now.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-amber-500 text-xs font-bold shrink-0 mt-0.5">🟡</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Rice & Roti (55%) —</strong> Large-cap & hybrid-allocations dominate. Steady, nourishing progress.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-rose-500 text-xs font-bold shrink-0 mt-0.5">🔴</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Thecha (20%) —</strong> Significantly reduced. Excess risk immediately before crossing into safety can upset everything.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-purple-500 text-xs font-bold shrink-0 mt-0.5">🟣</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Sweet Dish (10%) —</strong> Protect and finalize the retirement seeds. The rewards are ready to sprout.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-4 text-center">
                <p className="text-[9.5px] text-gray-500 leading-normal">
                  Allocation is illustrative. Exact fund selection is personalised based on your risk profile, age gap, and target goals.
                </p>
              </div>

              <div className="bg-[#1a1c1e] rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400">Min Monthly SIP</span>
                <span className="text-base font-bold text-amber-500">₹3,000</span>
              </div>

              <a 
                href="https://zbooking.in/I9uwM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(245,158,11,0.2)] transition-all border border-white/5"
              >
                Balance My Bridge Thali
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* LIVER THALI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#111214] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-emerald-500/30 hover:shadow-[0_10px_40px_rgba(16,185,129,0.06)] transition-all duration-300 relative group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/15 px-3 py-1 rounded-full">
                  Age 60+ · Liver
                </span>
                <Sprout className="w-6 h-6 text-emerald-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-500 transition-colors">Liver's Thali</h3>
              <p className="text-xs text-gray-400 mb-6">Income & Legacy · SWP Focus</p>

              {/* Allocation Bar */}
              <div className="mb-6">
                <div className="flex h-2 w-full gap-1 rounded-full overflow-hidden mb-4">
                  <div className="bg-emerald-500 rounded-full" style={{ width: '25%' }} title="Dal 25%"></div>
                  <div className="bg-amber-500 rounded-full" style={{ width: '55%' }} title="Rice & Roti 55%"></div>
                  <div className="bg-rose-500 rounded-full" style={{ width: '10%' }} title="Thecha 10%"></div>
                  <div className="bg-purple-500 rounded-full" style={{ width: '10%' }} title="Sweet 10%"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Dal — 25%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span>Rice & Roti — 55%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    <span>Thecha — 10%</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <span>Sweet — 10%</span>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 my-6 text-center">
                <div>
                  <div className="text-lg font-bold text-emerald-500">20%</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Equity</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Low</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Risk</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-emerald-500">Income</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">SWP Focus</div>
                </div>
              </div>

              {/* Ingredients Details */}
              <div className="space-y-4 mb-6">
                <div className="flex gap-3 text-left">
                  <span className="text-emerald-500 text-xs font-bold shrink-0 mt-0.5">🟢</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Dal (25%) —</strong> Inflation & healthcare protection. Shielding you against unpredictable events.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-amber-500 text-xs font-bold shrink-0 mt-0.5">🟡</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Rice & Roti (55%) —</strong> SWP-based reliable monthly income. Regular retirement paycheck.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-rose-500 text-xs font-bold shrink-0 mt-0.5">🔴</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Thecha (10%) —</strong> Sparingly added. Just enough key growth seeds to counter inflation.
                  </p>
                </div>
                <div className="flex gap-3 text-left">
                  <span className="text-purple-500 text-xs font-bold shrink-0 mt-0.5">🟣</span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    <strong className="text-white">Sweet Dish (10%) —</strong> Legacy & peace of mind. Capital preservation for generations.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 mb-4 text-center">
                <p className="text-[9.5px] text-gray-500 leading-normal">
                  Allocation is illustrative. Exact fund selection is personalised based on your risk profile, age gap, and target goals.
                </p>
              </div>

              <div className="bg-[#1a1c1e] rounded-xl px-4 py-3 border border-white/5 flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400">Min Monthly SWP</span>
                <span className="text-base font-bold text-emerald-500">₹10,000+</span>
              </div>

              <a 
                href="https://zbooking.in/I9uwM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs text-center flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(16,185,129,0.2)] transition-all border border-white/5"
              >
                Design My Income Thali
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 px-4 bg-[#111214] border-t border-b border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-[var(--color-electric-blue)] uppercase tracking-wider">The Process</span>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mt-1.5 mb-4">
              From first hello to balanced Thali in 3 steps.
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              No pushy sales calls. No product jargon. Just a clear plan for your money — matched to your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl relative group hover:border-[var(--color-electric-blue)]/20 transition-all">
              <span className="absolute right-6 top-4 text-5xl font-extrabold text-[var(--color-electric-blue)]/5 select-none font-mono">01</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-electric-blue)]/10 text-[var(--color-electric-blue)] flex items-center justify-center text-sm font-bold">1</div>
                <h4 className="font-bold text-base text-white">Free 15-Min Thali Call</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Tell Praful where you are today — income, goals, existing investments. No preparation needed. Just a conversation.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl relative group hover:border-[var(--color-electric-blue)]/20 transition-all">
              <span className="absolute right-6 top-4 text-5xl font-extrabold text-[var(--color-electric-blue)]/5 select-none font-mono">02</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-electric-blue)]/10 text-[var(--color-electric-blue)] flex items-center justify-center text-sm font-bold">2</div>
                <h4 className="font-bold text-base text-white">Your Personalised Thali</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Based on your phase and risk profile, Praful designs your exact allocation — every fund chosen for your specific goal.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl relative group hover:border-[var(--color-electric-blue)]/20 transition-all">
              <span className="absolute right-6 top-4 text-5xl font-extrabold text-[var(--color-electric-blue)]/5 select-none font-mono">03</span>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-electric-blue)]/10 text-[var(--color-electric-blue)] flex items-center justify-center text-sm font-bold">3</div>
                <h4 className="font-bold text-base text-white">Invest & Review Annually</h4>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Sips start. The Thali is reviewed every year — rebalanced as markets move and your life changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="py-20 px-4 container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-br from-[#111214] to-[#16171a] border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(26,171,222,0.1),transparent_60%)] pointer-events-none" />
          
          <span className="text-xs font-bold text-[var(--color-electric-blue)] uppercase tracking-widest bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/15 px-4 py-1 rounded-full mb-4 inline-block">
            Ready to Start?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-none">
            Book your free <br/>Thali-Balancing Call.
          </h2>
          <p className="text-gray-400 text-xs md:text-sm max-w-md mx-auto leading-relaxed mb-8">
            15 minutes with Praful. No obligation. Walk away with a clear picture of what your portfolio should look like.
          </p>

          <a 
            href="https://zbooking.in/I9uwM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-4 px-8 rounded-xl text-sm transition-all shadow-[0_4px_20px_rgba(26,171,222,0.3)] hover:shadow-[0_6px_28px_rgba(26,171,222,0.45)] hover:-translate-y-0.5 border border-white/5"
          >
            Book My Free Call
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <div className="text-[10px] text-gray-500 mt-4 uppercase tracking-wider font-semibold">
            Free · 15 minutes · Monday to Saturday · 10AM–6PM
          </div>
        </div>
      </section>

      {/* SEBI Disclaimer */}
      <footer className="bg-[#111214]/65 py-12 px-4 border-t border-white/5 text-center leading-relaxed">
        <div className="container mx-auto max-w-5xl">
          <p className="text-[11px] text-gray-500 text-left md:text-center leading-relaxed mb-6">
            <strong className="text-gray-400">Important Disclosure:</strong> Patil Investments (ARN-143723, BSE Member 18583) is an AMFI-registered Mutual Fund Distributor. We act as a distributor of mutual fund schemes and do not provide investment advice for a fee under SEBI IA Regulations. Portfolio allocations shown are illustrative only and do not represent any actual client account or guaranteed outcome. Past performance is not indicative of future returns. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Fund selection and allocation will be personalised based on your individual risk profile, financial goals, and investment horizon as discussed with your distributor.
          </p>
          <div className="border-t border-white/5 pt-6 text-[11px] text-gray-500">
            Patil Investments &nbsp;|&nbsp; <span className="text-[var(--color-electric-blue)] font-semibold">ARN-143723</span> &nbsp;|&nbsp; Mutual Fund Distributor &nbsp;|&nbsp; Hiranandani Meadows, Thane West, Mumbai 400607
          </div>
        </div>
      </footer>
    </div>
  );
}
