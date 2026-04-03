/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2, PhoneCall, Map, TrendingUp, Download, ShieldAlert, ChevronDown, BarChart3, PieChart, Users, ShieldCheck, Compass, Route, LineChart, Linkedin, Instagram, Facebook, Star, X, Calculator, LogIn } from 'lucide-react';
import { jsPDF } from 'jspdf';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const PHASE_DATA = [
  {
    id: "builder",
    badge: "For Professionals Aged 30–45",
    titlePrefix: "Accelerate Your",
    titleHighlight: "Wealth Creation",
    description: "Focus on aggressive growth, SIPs, and compounding. Build a massive corpus to secure your financial independence early.",
    chartTitle: "Wealth Accumulation",
    chartData: [5, 8, 12, 18, 26, 38, 52, 70, 85, 100],
    steps: [
      { step: "01", title: "Goal Sheet Review", desc: "We analyze your current cash flow and identify surplus for wealth creation.", icon: Compass },
      { step: "02", title: "Growth-Oriented SIPs", desc: "Set up automated mutual fund SIPs aligned with your timeline.", icon: Route },
      { step: "03", title: "Portfolio Review", desc: "Annual rebalancing to ensure you stay on the path to your goals.", icon: LineChart }
    ],
    leadMagnet: {
      title: "Want to Fast-Track Your Wealth?",
      desc: "Download our free Wealth Accumulation Goal Sheet to discover the power of compounding and consistent SIP strategies.",
      buttonText: "Get the Goal Sheet",
      pdfTitle: "WEALTH ACCUMULATION",
      pdfSubtitle: "GOAL SHEET",
      points: [
        "Have you calculated your exact 'Retirement Confidence' number?",
        "Are you saving at least 20-30% of your monthly income?",
        "Is your portfolio heavily weighted towards high-growth equity funds?",
        "Do you have an emergency fund covering 6 months of expenses?",
        "Have you automated your investments via SIPs to avoid emotional decisions?",
        "Are you maximizing your tax-saving investment options (ELSS, etc.)?",
        "Do you have adequate term life and health insurance coverage?",
        "Are you avoiding high-interest consumer debt?",
        "Do you increase your SIP amount annually in line with your salary hikes?",
        "Do you review your portfolio performance with a professional annually?"
      ]
    }
  },
  {
    id: "transitioner",
    badge: "For Professionals Aged 50+",
    titlePrefix: "Build Your",
    titleHighlight: "Retirement Bridge",
    description: "Move from financial uncertainty to retirement confidence. We help you create a clear Investment Roadmap for lifestyle continuity.",
    chartTitle: "Live Projection",
    chartData: [30, 45, 40, 60, 55, 75, 70, 90, 85, 100],
    steps: [
      { step: "01", title: "Discovery Call", desc: "We identify the gap between your current standing and your retirement goals.", icon: Compass },
      { step: "02", title: "Custom Roadmap", desc: "Receive your personalized Bridge Strategy and Goal Sheet.", icon: Route },
      { step: "03", title: "Invest & Track", desc: "Execute through our portal and track your progress as a consistent performer.", icon: LineChart }
    ],
    leadMagnet: {
      title: "Are You Ready for the Transition?",
      desc: "Download our free 10-Point Retirement Readiness Checklist to see if your current strategy bridges the gap.",
      buttonText: "Get the Free Checklist",
      pdfTitle: "RETIREMENT READINESS",
      pdfSubtitle: "CHECKLIST",
      points: [
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
      ]
    }
  },
  {
    id: "liver",
    badge: "For Retirees Aged 60+",
    titlePrefix: "Secure Your",
    titleHighlight: "Lifestyle Continuity",
    description: "Transition from accumulating wealth to generating a reliable, tax-efficient monthly income through Systematic Withdrawal Plans (SWPs).",
    chartTitle: "Sustainable SWP Cashflow",
    chartData: [90, 88, 92, 89, 95, 91, 98, 94, 100, 96],
    steps: [
      { step: "01", title: "Income Analysis", desc: "We calculate your exact monthly lifestyle expenses and inflation impact.", icon: Compass },
      { step: "02", title: "SWP Setup", desc: "Structure a tax-efficient Systematic Withdrawal Plan from your corpus.", icon: Route },
      { step: "03", title: "Capital Preservation", desc: "Monitor the withdrawal rate to ensure your corpus outlives you.", icon: LineChart }
    ],
    leadMagnet: {
      title: "Need Reliable Monthly Income?",
      desc: "Download our free SWP & Tax Optimization Guide to learn how to generate a paycheck from your portfolio.",
      buttonText: "Get the SWP Guide",
      pdfTitle: "SWP & TAX OPTIMIZATION",
      pdfSubtitle: "GUIDE",
      points: [
        "Have you accurately mapped out your fixed and variable monthly expenses?",
        "Is your withdrawal rate sustainable (typically 3-4% annually)?",
        "Are you utilizing a 'bucket strategy' to protect against sequence of returns risk?",
        "Is your SWP structured to minimize capital gains taxes?",
        "Do you have a dedicated healthcare fund or comprehensive senior health insurance?",
        "Are you avoiding withdrawing from equity funds during market downturns?",
        "Have you simplified your portfolio to make management easier in retirement?",
        "Is your estate plan (Will, nominations, trusts) fully updated and communicated?",
        "Do you have a trusted contact listed on all your financial accounts?",
        "Do you conduct a semi-annual review to adjust withdrawals for inflation?"
      ]
    }
  }
];

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

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
      Patil <span className="text-[var(--color-electric-blue)]">Investments</span>
    </span>
  </div>
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calcHeight, setCalcHeight] = useState(500);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize-iframe') {
        setCalcHeight(event.data.height);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const activeData = PHASE_DATA[activePhase];

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // ZOHO CRM WEBHOOK INTEGRATION POINT
      // Replace this URL with your actual Zoho CRM Webhook URL
      /*
      await fetch('YOUR_ZOHO_WEBHOOK_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          leadSource: 'Website Lead Magnet',
          phase: activeData.id
        })
      });
      */
      
      // Simulate network request for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Trigger PDF Download
      handleDownloadPDF();
      
      // Close modal and reset
      setIsModalOpen(false);
      setFormData({ name: '', email: '', phone: '' });
      // Optional: Show success message
      
    } catch (error) {
      console.error("Error submitting to Zoho:", error);
      alert("There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const magnetData = activeData.leadMagnet;
    
    // Premium Header
    doc.setFillColor(17, 18, 20); // Near black background
    doc.rect(0, 0, 210, 40, 'F');
    
    doc.setTextColor(26, 171, 222); // Electric Blue
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(magnetData.pdfTitle, 20, 20);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "normal");
    doc.text(magnetData.pdfSubtitle, 20, 30);

    doc.setTextColor(180, 180, 180);
    doc.setFontSize(10);
    doc.text('Patil Investments - Your Pathway to Confidence', 120, 30);
    
    // Add points
    const points = magnetData.points;
    
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
            <a href="#journey" className="hover:text-[var(--color-electric-blue)] transition-colors">Your Journey</a>
            <a href="#plan" className="hover:text-[var(--color-electric-blue)] transition-colors">3-Step Plan</a>
            <a href="#resources" className="hover:text-[var(--color-electric-blue)] transition-colors">Free Resources</a>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="https://login.patilinvestments.co.in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <LogIn className="w-4 h-4" /> Client Login
            </a>
            <a 
              href="https://wa.me/919137776263" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden">
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
                {activeData.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                {activeData.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-blue-400">{activeData.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed min-h-[80px]">
                {activeData.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,171,222,0.3)] hover:shadow-[0_0_30px_rgba(26,171,222,0.5)]">
                  Start Your Roadmap <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold transition-all border border-white/10"
                >
                  {activeData.leadMagnet.buttonText}
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-12 lg:mt-0 w-full"
            >
              <div className="absolute inset-0 bg-[var(--color-electric-blue)] blur-[120px] opacity-20 rounded-full" />
              
              {/* Main Hero Chart Card */}
              <div className="relative bg-[var(--color-near-black)]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl w-full">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-electric-blue)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-electric-blue)]"></span>
                    </span>
                    <span className="text-xs text-[var(--color-electric-blue)] font-mono uppercase tracking-wider">{activeData.chartTitle}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm text-gray-400 mb-2 font-medium">Projected Corpus</div>
                      <div className="text-5xl md:text-6xl font-bold text-white tracking-tight">₹ <AnimatedCounter key={activePhase} from={0} to={10} /> Cr+</div>
                    </div>
                    <div className="hidden sm:flex bg-[var(--color-electric-blue)]/10 p-3 rounded-xl border border-[var(--color-electric-blue)]/20">
                      <TrendingUp className="w-8 h-8 text-[var(--color-electric-blue)]" />
                    </div>
                  </div>

                  <div className="relative h-48 md:h-64 mt-8 border-b border-l border-white/10 pl-2 md:pl-4 pb-4 flex items-end gap-2 md:gap-3">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 ml-2 md:ml-4 mb-4">
                      <div className="border-t border-white/20 w-full border-dashed" />
                      <div className="border-t border-white/20 w-full border-dashed" />
                      <div className="border-t border-white/20 w-full border-dashed" />
                      <div className="border-t border-white/20 w-full border-dashed" />
                    </div>
                    
                    {/* Bars */}
                    {activeData.chartData.map((h, i) => (
                      <motion.div 
                        key={`${activePhase}-${i}`}
                        initial={{ height: 0, opacity: 0.3 }}
                        animate={{ height: `${h}%`, opacity: 1 }}
                        transition={{ duration: 1.2, delay: i * 0.08, type: "spring", bounce: 0.2 }}
                        className="flex-1 bg-gradient-to-t from-[var(--color-electric-blue)]/20 to-[var(--color-electric-blue)] rounded-t-md relative group"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 whitespace-nowrap shadow-lg">
                          Year {i + 1}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 font-mono px-2 md:px-4">
                    <span>Today</span>
                    <span>Year 5</span>
                    <span>Retirement</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goal Calculator Section */}
      <section id="zoho-calculator-link" className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-electric-blue)]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Discover Your Target Corpus</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Use our interactive calculator to find out exactly how much you need to maintain your lifestyle. Your personalized report will be sent directly to your inbox.
              </p>
            </div>
            
            <div className="bg-[var(--color-near-black)] border border-white/10 rounded-3xl p-2 md:p-4 shadow-2xl relative overflow-hidden flex items-center justify-center transition-all duration-500">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--color-electric-blue)]/20 blur-[120px] rounded-full pointer-events-none" />
              
              <div 
                className="relative w-full bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500"
                style={{ height: `${calcHeight}px` }}
              >
                <iframe 
                  src="/calculator.html" 
                  title="Retirement Goal Calculator"
                  className="absolute inset-0 w-full h-full border-0 z-20"
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="journey" className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
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
                  onClick={() => {
                    setActivePhase(i);
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
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
            {activeData.steps.map((item, i) => (
              <motion.div
                key={`${activePhase}-${i}`}
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
      <section id="resources" className="py-20 relative overflow-hidden">
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
              <h2 className="text-3xl font-bold mb-4">{activeData.leadMagnet.title}</h2>
              <p className="text-gray-400 mb-6">
                {activeData.leadMagnet.desc}
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 mx-auto md:mx-0"
              >
                <Download className="w-5 h-5" /> {activeData.leadMagnet.buttonText}
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
                <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-gray-400">
                  <a href="#" className="hover:text-white transition-colors">About Us</a>
                  <a href="#zoho-calculator-link" className="hover:text-white transition-colors">Goal Calculator</a>
                  <a href="#" className="hover:text-white transition-colors">Contact</a>
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
                <div className="flex gap-5 text-gray-400">
                  <a href="https://www.linkedin.com/in/praful-arun-patil/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/patilinvestments.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
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
              <div className="text-center pt-6 space-y-2">
                <p>
                  © {new Date().getFullYear()} Patil Investments. All rights reserved.
                </p>
                <p className="text-gray-600 flex items-center justify-center gap-1">
                  Made with <span className="text-red-500">❤️</span> for your financial freedom
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
