/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2, PhoneCall, Map, TrendingUp, Download, ShieldAlert, ChevronDown, BarChart3, PieChart, Users, ShieldCheck, Compass, Route, LineChart, Linkedin, Twitter, Facebook, Star } from 'lucide-react';
import { jsPDF } from 'jspdf';

const AnimatedCounter = ({ from, to }: { from: number, to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Logo = ({ className = "" }: { className?: string }) => {
  const [logoUrl, setLogoUrl] = useState("/logo.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
      window.dispatchEvent(new CustomEvent('logo-updated', { detail: url }));
    }
  };

  useEffect(() => {
    const handleLogoUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setLogoUrl(customEvent.detail);
    };
    window.addEventListener('logo-updated', handleLogoUpdate);
    return () => window.removeEventListener('logo-updated', handleLogoUpdate);
  }, []);

  return (
    <div 
      className={`relative group cursor-pointer inline-block ${className}`}
      onClick={() => fileInputRef.current?.click()}
    >
      <img 
        src={logoUrl} 
        alt="Patil Investments Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          e.currentTarget.src = "https://placehold.co/400x120/111214/1AABDE.png?text=Upload+Logo&font=Montserrat";
        }}
      />
      
      <div className="absolute inset-0 bg-[var(--color-near-black)]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center rounded border border-dashed border-[var(--color-electric-blue)] p-1 z-10">
        <span className="text-white text-xs font-bold mb-0.5">Update Logo</span>
        <span className="text-gray-300 text-[9px] text-center leading-tight">
          Format: PNG/SVG<br/>
          Size: ~400x120px
        </span>
      </div>

      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImageUpload} 
        accept="image/png, image/svg+xml, image/jpeg" 
        className="hidden" 
      />
    </div>
  );
};

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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Premium Header
    doc.setFillColor(17, 18, 20); // Near black background
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(26, 171, 222); // Electric Blue
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text('RETIREMENT READINESS', 20, 20);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "normal");
    doc.text('CHECKLIST', 125, 20);

    doc.setTextColor(180, 180, 180);
    doc.setFontSize(10);
    doc.text('Patil Investments - Your Pathway to Confidence', 20, 30);
    
    // Add points
    const points = [
      "Have you calculated your exact 'Retirement Gap' based on your desired lifestyle?",
      "Is your current portfolio diversified enough to withstand market volatility?",
      "Do you have a clear Systematic Withdrawal Plan (SWP) for monthly cash flow?",
      "Have you accounted for inflation (especially healthcare) in your projections?",
      "Are your investments aligned with your risk tolerance as you approach retirement?",
      "Do you have an adequate emergency fund separate from your retirement corpus?",
      "Have you consolidated your investments for easier tracking and management?",
      "Is your portfolio tax-optimized for the withdrawal phase?",
      "Have you planned for estate transition and nominated beneficiaries?",
      "Do you review your 'Goal Sheet' with a professional at least once a year?"
    ];
    
    let y = 55;
    
    points.forEach((point, index) => {
      // Draw Checkbox
      doc.setDrawColor(26, 171, 222); // Electric blue border
      doc.setLineWidth(0.5);
      doc.setFillColor(250, 250, 250);
      doc.rect(20, y - 4, 6, 6, 'FD'); // Fill and stroke
      
      // Text
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(`${index + 1}. ${point}`, 160);
      doc.text(lines, 32, y);
      
      y += (lines.length * 6) + 6;
      
      // Separator line
      if (index < 9) {
        doc.setDrawColor(230, 230, 230);
        doc.setLineWidth(0.2);
        doc.line(20, y - 3, 190, y - 3);
        y += 5;
      }
    });
    
    // Scoring Section
    y += 5;
    doc.setFillColor(245, 248, 250);
    doc.setDrawColor(26, 171, 222);
    doc.setLineWidth(0.5);
    doc.rect(20, y, 170, 45, 'FD');
    
    doc.setTextColor(26, 171, 222);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text('YOUR READINESS SCORE', 25, y + 10);
    
    // Score box
    doc.setDrawColor(150, 150, 150);
    doc.rect(150, y + 4, 15, 8);
    doc.setTextColor(60, 60, 60);
    doc.setFontSize(14);
    doc.text('/ 10', 168, y + 10);
    
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    doc.text('Count your checkmarks to see where you stand:', 25, y + 18);
    
    doc.setFontSize(9);
    doc.setTextColor(40, 40, 40);
    doc.text('8 - 10: Excellent. You are well-prepared for the transition.', 25, y + 26);
    doc.text('5 - 7: Good, but there are gaps. A Discovery Call is recommended.', 25, y + 32);
    doc.text("0 - 4: Action needed. Let's build your Goal Sheet immediately.", 25, y + 38);
    
    // Footer
    doc.setFillColor(17, 18, 20);
    doc.rect(0, 277, 210, 20, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('Book a Discovery Call at patilinvestments.co.in to discuss your checklist.', 105, 288, { align: 'center' });
    
    // Save the PDF
    doc.save('Patil_Investments_Retirement_Checklist.pdf');
  };

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 bg-[var(--color-electric-blue)] blur-[120px] opacity-20 rounded-full" />
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  {/* 
                    ZOHO BACKGROUND IMAGE OPTION
                    When you move to Zoho, uncomment the img tag below and replace the src with your Zoho-hosted image URL.
                  */}
                  {/* <img 
                    src="YOUR_ZOHO_IMAGE_URL_HERE" 
                    alt="Retirement Planning" 
                    className="absolute inset-0 w-full h-full object-cover"
                  /> */}
                  
                  <div className="text-gray-600 text-sm border border-gray-700/50 px-4 py-2 rounded-full bg-black/40 z-10">
                    Image Space (Add via Zoho)
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-near-black)] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Floating Goal Sheet Projection Card */}
                <div className="absolute -bottom-8 -left-8 bg-[var(--color-near-black)]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl w-80 hidden xl:block">
                  <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
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
                        <div className="text-3xl font-bold text-white">₹ <AnimatedCounter from={0} to={10} /> Cr+</div>
                      </div>
                      <TrendingUp className="w-8 h-8 text-[var(--color-electric-blue)]" />
                    </div>
                    <div className="h-24 flex items-end gap-2">
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Three Pillars of Wealth</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              As you approach your transition years, the focus shifts from simply accumulating wealth to ensuring a consistent cash flow. We categorize your journey into three distinct phases.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
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
          </motion.div>
        </div>
      </section>

      {/* 3-Step Plan Section */}
      <section id="plan" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Pathway to Confidence</h2>
            <p className="text-gray-400 text-lg">A straightforward, three-step process to build your Investment Roadmap.</p>
          </motion.div>

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[var(--color-electric-blue)] rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative h-full bg-[rgba(26,171,222,0.03)] border border-[var(--color-electric-blue)]/20 hover:border-[var(--color-electric-blue)]/50 p-8 rounded-2xl transition-colors duration-300 flex flex-col">
                  <motion.div 
                    whileHover={{ scale: 1.15 }}
                    className="relative w-12 h-12 bg-[var(--color-electric-blue)]/10 rounded-xl flex items-center justify-center mb-6 text-[var(--color-electric-blue)] group/icon cursor-help"
                  >
                    <item.icon className="w-6 h-6" />
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[var(--color-electric-blue)] text-white text-xs font-bold px-3 py-1 rounded shadow-lg opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      {item.title}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-electric-blue)]" />
                    </div>
                  </motion.div>
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-[var(--color-near-black)] border border-[var(--color-electric-blue)]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(26,171,222,0.1)]"
          >
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Are You Ready for the Transition?</h2>
              <p className="text-gray-400 mb-6">
                Download our free <strong className="text-white">10-Point Retirement Readiness Checklist</strong> to see if your current strategy bridges the gap.
              </p>
              <button 
                onClick={handleDownloadPDF}
                className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 mx-auto md:mx-0"
              >
                <Download className="w-5 h-5" /> Get the Free Checklist
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-[var(--color-electric-blue)]/20 to-transparent rounded-2xl border border-[var(--color-electric-blue)]/20 flex items-center justify-center">
              <CheckCircle2 className="w-24 h-24 text-[var(--color-electric-blue)]/50" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-gray-400 text-lg">Real reviews from our Google My Business page.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                review: "Patil Investments completely changed how I view my retirement. Their Goal Sheet approach made everything clear and achievable. Highly recommended for anyone looking for a trustworthy mutual fund distributor.",
                rating: 5
              },
              {
                name: "Sneha Desai",
                review: "I was worried about the 'Retirement Gap' until I had my Discovery Call. They provided a custom roadmap that gave me immense confidence. Professional, transparent, and truly caring about their clients' financial well-being.",
                rating: 5
              },
              {
                name: "Amit Sharma",
                review: "Excellent service and deep market knowledge. They don't just sell products; they educate you on the 'why' behind every investment. The SWP strategy for my post-retirement phase has been working flawlessly.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-[var(--color-near-black)] border border-white/10 p-8 rounded-2xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.review}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-electric-blue)]/20 flex items-center justify-center text-[var(--color-electric-blue)] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">Google Review</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Common Questions</h2>
              <p className="text-gray-400 text-lg">Clarity on your journey to retirement confidence.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer & Compliance */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
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
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
