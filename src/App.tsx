/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, PhoneCall, Map, TrendingUp, Download, ShieldAlert, ChevronDown, BarChart3, PieChart, Users, ShieldCheck, Compass, Route, LineChart, Linkedin, Twitter, Facebook } from 'lucide-react';

const Logo = ({ className = "" }: { className?: string }) => (
  <img 
    src="/logo.png" 
    alt="Patil Investments Logo" 
    className={`object-contain ${className}`}
    onError={(e) => {
      // Fallback if the user hasn't uploaded the logo yet
      e.currentTarget.src = "https://placehold.co/400x120/111214/1AABDE.png?text=Patil+Investments&font=Montserrat";
    }}
  />
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-6">
      <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-center justify-between text-left focus:outline-none group">
        <span className="text-lg font-medium text-white group-hover:text-[var(--color-electric-blue)] transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-[var(--color-electric-blue)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pt-4 text-gray-400 leading-relaxed pr-8">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [activePhase, setActivePhase] = useState(1);

  return (
    <div className="min-h-screen bg-[var(--color-near-black)] text-white font-sans selection:bg-[var(--color-electric-blue)] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-near-black)]/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Logo className="h-12 md:h-14 w-auto max-w-[250px] drop-shadow-lg" />
            <div className="hidden sm:flex flex-col border-l border-white/20 pl-4 md:pl-6 justify-center">
              <span className="text-sm text-gray-300 font-bold tracking-wide">ARN-143723</span>
              <span className="text-xs text-[var(--color-electric-blue)] font-medium uppercase tracking-wider mt-0.5">AMFI-Registered<br/>Mutual Fund Distributor</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#bridge" className="hover:text-[var(--color-electric-blue)] transition-colors">The Bridge</a>
            <a href="#plan" className="hover:text-[var(--color-electric-blue)] transition-colors">3-Step Plan</a>
            <a href="#checklist" className="hover:text-[var(--color-electric-blue)] transition-colors">Readiness Checklist</a>
          </nav>
          <button className="hidden md:flex items-center gap-2 bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-6 py-3 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(26,171,222,0.3)] hover:shadow-[0_0_25px_rgba(26,171,222,0.5)] hover:-translate-y-0.5">
            <PhoneCall className="w-4 h-4" /> Book Discovery Call
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,171,222,0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-card-tint)] text-[var(--color-electric-blue)] text-sm font-semibold mb-6 border border-[var(--color-electric-blue)]/20">
                For Professionals Aged 50+
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-blue-400">Retirement Bridge</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                Move from financial uncertainty to retirement confidence. We help you create a clear Investment Roadmap for lifestyle continuity.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,171,222,0.3)] hover:shadow-[0_0_30px_rgba(26,171,222,0.5)]">
                  Start Your Roadmap <ArrowRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-all border border-white/10">
                  Get the Checklist
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-[var(--color-electric-blue)] blur-[120px] opacity-20 rounded-full" />
              <div className="relative bg-[var(--color-near-black)] border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">Goal Sheet Projection</span>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Projected Corpus</div>
                      <div className="text-3xl font-bold text-white">₹ 2.5 Cr+</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-[var(--color-electric-blue)]" />
                  </div>
                  <div className="h-32 flex items-end gap-2">
                    {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className="flex-1 bg-gradient-to-t from-[var(--color-electric-blue)]/20 to-[var(--color-electric-blue)] rounded-t-sm opacity-80"
                      />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between text-xs text-gray-400">
                    <span>Year 1</span>
                    <span>Year 5</span>
                    <span>Year 10</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="bridge" className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[var(--color-electric-blue)]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Three Pillars of Wealth</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              As you approach your transition years, the focus shifts from simply accumulating wealth to ensuring a consistent cash flow. We categorize your journey into three distinct phases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "The Builder",
                subtitle: "Accumulation Phase",
                desc: "Focused on SIPs and long-term wealth creation. Building the foundation for your future.",
                icon: BarChart3,
                color: "text-blue-400",
                bg: "bg-blue-400/10",
                border: "border-blue-400/50",
                activeGlow: "shadow-[0_0_30px_rgba(96,165,250,0.15)]"
              },
              {
                title: "The Transitioner",
                subtitle: "Ages 50–58",
                desc: "Focused on closing the 'Retirement Gap' and implementing Bridge Strategies for a smooth exit.",
                icon: Users,
                color: "text-[var(--color-electric-blue)]",
                bg: "bg-[var(--color-electric-blue)]/10",
                border: "border-[var(--color-electric-blue)]/50",
                activeGlow: "shadow-[0_0_30px_rgba(26,171,222,0.15)]"
              },
              {
                title: "The Liver",
                subtitle: "Distribution Phase",
                desc: "Focused on 'Lifestyle Continuity' and Systematic Withdrawal Plans (SWPs) for monthly cash flow.",
                icon: PieChart,
                color: "text-emerald-400",
                bg: "bg-emerald-400/10",
                border: "border-emerald-400/50",
                activeGlow: "shadow-[0_0_30px_rgba(52,211,153,0.15)]"
              }
            ].map((pillar, i) => {
              const isActive = activePhase === i;
              return (
                <div 
                  key={i} 
                  onClick={() => setActivePhase(i)}
                  className={`relative p-8 rounded-3xl border bg-[var(--color-near-black)] transition-all duration-500 cursor-pointer ${isActive ? `${pillar.activeGlow} z-10 scale-105 md:scale-110 ${pillar.border}` : 'opacity-50 hover:opacity-80 border-white/10 hover:border-white/20 scale-100'}`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activePhaseBadge"
                      className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-electric-blue)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg whitespace-nowrap"
                    >
                      SELECTED PHASE
                    </motion.div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${isActive ? pillar.bg : 'bg-white/5'} ${isActive ? pillar.color : 'text-gray-500'}`}>
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-400'}`}>{pillar.title}</h3>
                  <div className={`text-sm font-medium mb-4 transition-colors duration-500 ${isActive ? pillar.color : 'text-gray-600'}`}>{pillar.subtitle}</div>
                  <p className={`leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3-Step Plan Section */}
      <section id="plan" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Pathway to Confidence</h2>
            <p className="text-gray-400 text-lg">A straightforward, three-step process to build your Investment Roadmap.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery Call",
                desc: "We identify the gap between your current standing and your retirement goals.",
                icon: Compass
              },
              {
                step: "02",
                title: "Custom Roadmap",
                desc: "Receive your personalized Bridge Strategy and Goal Sheet.",
                icon: Route
              },
              {
                step: "03",
                title: "Invest & Track",
                desc: "Execute through our portal and track your progress as a consistent performer.",
                icon: LineChart
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[var(--color-electric-blue)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative h-full bg-[rgba(26,171,222,0.03)] border border-[var(--color-electric-blue)]/20 hover:border-[var(--color-electric-blue)]/50 p-8 rounded-2xl transition-colors duration-300 flex flex-col">
                  <div className="w-12 h-12 bg-[var(--color-electric-blue)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-electric-blue)]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-[var(--color-electric-blue)] font-mono text-sm font-bold mb-2">STEP {item.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generator */}
      <section id="checklist" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-electric-blue)]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-[var(--color-near-black)] border border-[var(--color-electric-blue)]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(26,171,222,0.1)]">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Are You Ready for the Transition?</h2>
              <p className="text-gray-400 mb-6">
                Download our free <strong className="text-white">10-Point Retirement Readiness Checklist</strong> to see if your current strategy bridges the gap.
              </p>
              <button className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 mx-auto md:mx-0">
                <Download className="w-5 h-5" /> Get the Free Checklist
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-[var(--color-electric-blue)]/20 to-transparent rounded-2xl border border-[var(--color-electric-blue)]/20 flex items-center justify-center">
              <CheckCircle2 className="w-24 h-24 text-[var(--color-electric-blue)]/50" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Common Questions</h2>
              <p className="text-gray-400 text-lg">Clarity on your journey to retirement confidence.</p>
            </div>
            <div className="space-y-2">
              <FAQItem 
                question="What is a 'Retirement Bridge'?" 
                answer="A Retirement Bridge is a strategic Investment Roadmap designed to cover the gap between your working years and your official retirement. It focuses on transitioning your portfolio from aggressive growth to stable, consistent cash flow."
              />
              <FAQItem 
                question="Do you offer guaranteed returns?" 
                answer="No. As an AMFI-registered Mutual Fund Distributor, we do not offer guaranteed returns. Mutual fund investments are subject to market risks. Our focus is on creating a disciplined Goal Sheet and aiming for consistent performance over time."
              />
              <FAQItem 
                question="How does the Discovery Call work?" 
                answer="The Discovery Call is a 30-minute session where we understand your current financial standing, your target retirement age, and your lifestyle expectations. This helps us identify your specific 'Retirement Gap'."
              />
              <FAQItem 
                question="What is an SWP and why is it important for 'The Liver'?" 
                answer="SWP stands for Systematic Withdrawal Plan. It allows you to withdraw a fixed amount from your mutual fund investments at regular intervals. It is crucial for 'The Liver' phase as it provides the monthly cash flow needed for lifestyle continuity."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Compliance */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 pb-12 border-b border-white/10">
              <div className="text-center md:text-left">
                <Logo className="h-16 w-auto max-w-[300px] mb-4 drop-shadow-lg mx-auto md:mx-0" />
                <span className="text-sm text-[var(--color-electric-blue)] font-medium block">ARN-143723 | AMFI-Registered Mutual Fund Distributor</span>
              </div>
              <div className="flex flex-col items-center md:items-end gap-6">
                <div className="flex gap-6 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
                <div className="flex gap-5 text-gray-400">
                  <a href="https://www.linkedin.com/in/praful-arun-patil/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/patilinvestments.co.in" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-xs text-gray-500 leading-relaxed">
              <div className="flex gap-3 items-start p-4 bg-white/5 rounded-lg border border-white/10">
                <ShieldAlert className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <p className="text-gray-400 font-medium">
                  Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing.
                </p>
              </div>
              <p>
                <strong>Role Limitation:</strong> Services provided by Patil Investments are limited to Mutual Fund distribution. We act solely as an AMFI-registered mutual fund distributor and do not provide investment advice under SEBI (Investment Advisers) Regulations.
              </p>
              <p>
                The information provided on this website is for educational purposes and should not be construed as financial advice. Any references to "Investment Roadmap", "Goal Sheet", or "Bridge Strategies" are part of our distribution services to help clients understand their mutual fund investments. We do not offer guaranteed returns or claim to be the "best" or "No. 1" in any category. Past performance of mutual funds is not an indicator of future returns.
              </p>
              <p className="text-center pt-6">
                © {new Date().getFullYear()} Patil Investments. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
