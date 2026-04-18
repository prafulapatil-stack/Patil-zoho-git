/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { ArrowRight, CheckCircle2, PhoneCall, Map, TrendingUp, Download, ShieldAlert, ChevronDown, BarChart3, PieChart, Users, ShieldCheck, Compass, Route, LineChart, Linkedin, Instagram, Facebook, Star, X, Calculator, LogIn, ArrowUp, ArrowLeft, Target, History, Award, Shield, Building, Briefcase, Landmark, MessageCircle, FileText } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { GoogleReviews } from './components/GoogleReviews';
import Library from './presentations/Library';

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
      title: "The Wealth Foundation Scorecard",
      desc: "Download our free 10-point checklist to see if your financial house is in order.",
      buttonText: "Get the Scorecard",
      pdfTitle: "WEALTH FOUNDATION",
      pdfSubtitle: "SCORECARD",
      points: [
        "Do you have an emergency fund covering 6 months of expenses?",
        "Do you have adequate term life insurance (10-15x annual income)?",
        "Are you saving at least 20% of your monthly income?",
        "Are your SIPs mapped to specific goals (e.g., kids' education, retirement)?",
        "Is your portfolio heavily weighted towards high-growth equity funds?",
        "Have you automated your investments to avoid emotional decisions?",
        "Are you maximizing your tax-saving investment options (ELSS, etc.)?",
        "Are you avoiding high-interest consumer debt?",
        "Do you increase your SIP amount annually in line with your salary hikes?",
        "Do you review your portfolio performance with a professional annually?"
      ]
    },
    presentation: {
      title: "The Millionaire SIP Wealth Blueprint",
      desc: "Interactive guide focusing on the cost of waiting & Step-Up SIPs.",
      buttonText: "Open Presentation",
      componentId: "sip"
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
      title: "The 5-Year Bridge Strategy Checklist",
      desc: "Download our free checklist to safely shift from aggressive growth to capital preservation.",
      buttonText: "Get the Checklist",
      pdfTitle: "5-YEAR BRIDGE STRATEGY",
      pdfSubtitle: "CHECKLIST",
      points: [
        "Have you calculated your exact 'Retirement Gap' based on lifestyle?",
        "Is your portfolio diversified enough to withstand market volatility?",
        "Have you started shifting high-risk equity to safer debt instruments?",
        "Do you have a clear Systematic Withdrawal Plan (SWP) strategy?",
        "Have you accounted for healthcare inflation in your projections?",
        "Are your investments consolidated for easier tracking?",
        "Is your portfolio tax-optimized for the withdrawal phase?",
        "Have you planned for estate transition and updated all beneficiaries?",
        "Do you have a separate emergency fund outside your retirement corpus?",
        "Do you review your 'Goal Sheet' with a professional annually?"
      ]
    },
    presentation: {
      title: "The Transition Hero Scorecard",
      desc: "Interactive validation and gap analysis for ages 50-58.",
      buttonText: "Open Presentation",
      componentId: "transition"
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
      title: "The Safe Withdrawal & Legacy Checklist",
      desc: "Download our free 10-point audit to ensure you don't outlive your money and your family is protected.",
      buttonText: "Get the Checklist",
      pdfTitle: "SAFE WITHDRAWAL & LEGACY",
      pdfSubtitle: "CHECKLIST",
      points: [
        "Is your annual withdrawal rate strictly under 6% of your total corpus?",
        "Have you accounted for 10%+ healthcare inflation in your expenses?",
        "Are all your nominees and beneficiaries updated across all accounts?",
        "Do you have a clear estate plan or will in place?",
        "Is your 'Cash Bucket' fully funded for the next 2 years of expenses?",
        "Are you using a tax-efficient Systematic Withdrawal Plan (SWP)?",
        "Do you have a 'Growth Bucket' to fight long-term inflation?",
        "Are you avoiding unnecessary risks with your core retirement corpus?",
        "Do you have adequate health insurance independent of your employer?",
        "Do you review your withdrawal sustainability with a professional annually?"
      ]
    },
    presentation: {
      title: "The Salary for Life Income Map",
      desc: "Interactive guide focusing on SWP & the Three-Bucket Strategy.",
      buttonText: "Open Presentation",
      componentId: "liver"
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
  const [currentView, setCurrentView] = useState<'main' | 'library' | 'sip' | 'liver' | 'transition'>('main');
  const [activePhase, setActivePhase] = useState(1);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    phaseId: number;
    resourceType: 'checklist' | 'presentation';
  }>({ isOpen: false, phaseId: 0, resourceType: 'checklist' });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calcHeight, setCalcHeight] = useState(500);
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [checklistAnswers, setChecklistAnswers] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'resize-iframe') {
        setCalcHeight(event.data.height);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeData = PHASE_DATA[activePhase];
  const activeModalData = PHASE_DATA[modalConfig.phaseId];

  const openModal = (phaseId: number, resourceType: 'checklist' | 'presentation') => {
    setModalConfig({ isOpen: true, phaseId, resourceType });
    setModalStep(resourceType === 'checklist' ? 1 : 2);
    setIsSuccess(false);
    setChecklistAnswers({});
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create hidden iframe so form submission doesn't redirect the page
      let iframe = document.getElementById('zohoSubmitFrameApp') as HTMLIFrameElement;
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.name = 'zohoSubmitFrameApp';
        iframe.id = 'zohoSubmitFrameApp';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Create hidden form targeting the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://crm.zoho.in/crm/WebToLeadForm';
      form.acceptCharset = 'UTF-8';
      form.target = 'zohoSubmitFrameApp';
      form.style.display = 'none';

      const downloadLink = `${window.location.origin}?download_magnet=${modalConfig.phaseId}`;

      let descriptionText = `Resource Requested: ${modalConfig.resourceType === 'checklist' ? activeModalData.leadMagnet.pdfSubtitle : activeModalData.presentation.title}\n\n`;
      
      if (modalConfig.resourceType === 'checklist') {
        descriptionText += `Checklist Responses:\n`;
        activeModalData.leadMagnet.points.forEach((point, idx) => {
          const answer = checklistAnswers[idx] !== undefined ? (checklistAnswers[idx] ? 'Yes' : 'No') : 'Not Answered';
          descriptionText += `${idx + 1}. ${point} - ${answer}\n`;
        });
        descriptionText += `\nDirect Download Link: ${downloadLink}\n`;
      }

      const fields = {
        'xnQsjsdp': '7945e88275acbdff6906428a27d78af09bac2e1a6dd9afb203d48b78eae5d9d9',
        'xmIwtLD': 'ea2afd6b00a46c26ef28363adc7356799ba6fb790f629a83bf8586356b7c3cd7755e5758ef15f4d6a49e4100df28f18e',
        'actionType': 'TGVhZHM=',
        'returnURL': 'https://patilinvestments.zohosites.in',
        'Last Name': formData.name,
        'Mobile': '+91' + formData.phone,
        'Email': formData.email,
        'Lead Source': 'Website Lead Magnet - ' + activeModalData.titleHighlight,
        'Description': descriptionText,
      };

      Object.entries(fields).forEach(([k, v]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = v || '';
        form.appendChild(input);
      });

      // Append form and submit
      document.body.appendChild(form);
      form.submit();
      
      // Wait a moment for submission to process
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      
      // Clean up form
      setTimeout(() => {
        if (document.body.contains(form)) {
          document.body.removeChild(form);
        }
      }, 2000);
      
    } catch (error: any) {
      console.error("Error processing request:", error);
      alert(error.message || "There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPDF = (phaseIndex = activePhase) => {
    const doc = new jsPDF();
    const magnetData = PHASE_DATA[phaseIndex].leadMagnet;
    
    if (phaseIndex === 0) {
      // Phase 1: The "Millionaire SIP" Wealth Blueprint (Builder PDF)
      
      const addHeader = () => {
        doc.setFillColor(17, 18, 20); // Near black
        doc.rect(0, 0, 210, 40, 'F');
        doc.setTextColor(26, 171, 222); // Electric Blue
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("THE 'MILLIONAIRE SIP'", 20, 20);
        doc.setTextColor(255, 255, 255);
        doc.text("WEALTH BLUEPRINT", 20, 30);
      };

      const addFooter = () => {
        doc.setFillColor(17, 18, 20);
        doc.rect(0, 277, 210, 20, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text('Patil Investments | ARN-143723 | Mutual Fund Distributor.', 105, 285, { align: 'center' });
        doc.setTextColor(150, 150, 150);
        doc.text('Mutual Fund investments are subject to market risks. Read all scheme related documents carefully before investing.', 105, 291, { align: 'center' });
      };

      // Page 1: The Myth of "Perfect Timing"
      addHeader();
      
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text('The Myth of "Perfect Timing"', 20, 60);
      
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(16);
      doc.text('Why Consistency Beats Luck Every Time.', 20, 75);
      
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const body1 = doc.splitTextToSize("Many investors wait for the \"right time\" to enter the market. At Patil Investments, we've seen that the \"right time\" is always now. Small, disciplined steps lead to massive outcomes.", 170);
      doc.text(body1, 20, 90);
      
      // Visual: Early vs Late Starter
      doc.setFillColor(245, 248, 250);
      doc.rect(20, 120, 170, 120, 'F');
      
      // Early Starter Bar
      doc.setFillColor(26, 171, 222);
      doc.rect(60, 150, 30, 70, 'F');
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(10);
      doc.setFont("helvetica", "bold");
      doc.text("Early Starter", 75, 230, { align: 'center' });
      doc.text("₹99.9 Lakhs", 75, 145, { align: 'center' });
      
      // Late Starter Bar
      doc.setFillColor(150, 150, 150);
      doc.rect(120, 185, 30, 35, 'F');
      doc.text("Late Starter", 135, 230, { align: 'center' });
      doc.text("₹46.4 Lakhs", 135, 180, { align: 'center' });
      
      addFooter();

      // Page 2: The Wealth Multiplier
      doc.addPage();
      addHeader();
      
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text('The Wealth Multiplier', 20, 60);
      
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(16);
      doc.text('Your Secret Weapon: The 10% Annual Step-Up.', 20, 75);
      
      // Table
      doc.setFillColor(26, 171, 222);
      doc.rect(20, 95, 170, 12, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(12);
      doc.text("Strategy (20 Years)", 25, 103);
      doc.text("Monthly SIP", 90, 103);
      doc.text("Final Corpus*", 140, 103);
      
      doc.setFillColor(250, 250, 250);
      doc.rect(20, 107, 170, 15, 'F');
      doc.setTextColor(80, 80, 80);
      doc.setFont("helvetica", "normal");
      doc.text("Flat SIP", 25, 117);
      doc.text("₹10,000", 90, 117);
      doc.text("₹99.9 Lakhs", 140, 117);
      
      doc.setFillColor(240, 248, 255);
      doc.rect(20, 122, 170, 15, 'F');
      doc.setTextColor(26, 171, 222);
      doc.setFont("helvetica", "bold");
      doc.text("10% Step-Up SIP", 25, 132);
      doc.text("₹10,000 + 10%/yr", 90, 132);
      doc.text("₹1.85 Crores", 140, 132);
      
      doc.setTextColor(100, 100, 100);
      doc.setFontSize(10);
      doc.setFont("helvetica", "italic");
      doc.text("*Assumed 12% CAGR. For illustration purposes only.", 20, 145);
      
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const note = doc.splitTextToSize("The Guide's Note: As your salary grows, your investments should too. We call this 'Future-Proofing' your wealth.", 170);
      doc.text(note, 20, 165);
      
      addFooter();

      // Page 3: The 3-Step Builder Roadmap
      doc.addPage();
      addHeader();
      
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text('The 3-Step Builder Roadmap', 20, 60);
      
      doc.setFillColor(245, 248, 250);
      doc.rect(20, 80, 170, 35, 'F');
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(16);
      doc.text('1. Define the Goal', 25, 92);
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text('Are you building for a home, education, or early retirement?', 25, 102);
      
      doc.setFillColor(245, 248, 250);
      doc.rect(20, 125, 170, 45, 'F');
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text('2. Select the Vehicle', 25, 137);
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      const p2 = doc.splitTextToSize('We help you choose diversified Mutual Funds that align with your 15-20 year horizon.', 160);
      doc.text(p2, 25, 147);
      
      doc.setFillColor(245, 248, 250);
      doc.rect(20, 180, 170, 35, 'F');
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(16);
      doc.setFont("helvetica", "bold");
      doc.text('3. Automate Everything', 25, 192);
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text("Set it, forget it, and review your 'Goal Sheet' with us annually.", 25, 202);
      
      addFooter();

      // Page 4: Compliance & Call to Action
      doc.addPage();
      addHeader();
      
      doc.setTextColor(26, 171, 222);
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.text('Ready to build your', 105, 100, { align: 'center' });
      doc.text('Wealth Roadmap?', 105, 112, { align: 'center' });
      
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.text('Visit patilinvestments.co.in to book your Discovery Call.', 105, 135, { align: 'center' });
      
      // Draw a placeholder for QR Code
      doc.setDrawColor(200, 200, 200);
      doc.rect(80, 150, 50, 50);
      doc.setTextColor(150, 150, 150);
      doc.setFontSize(10);
      doc.text('[ QR Code ]', 105, 176, { align: 'center' });
      
      addFooter();
      
      doc.save('Patil_Investments_Millionaire_SIP_Blueprint.pdf');
      return;
    }
    
    // Default PDF generation for other phases
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
      
      try {
        const checkBox = new (doc as any).AcroFormCheckBox();
        checkBox.fieldName = `cb_${index}`;
        checkBox.Rect = [20, y - 4, 6, 6];
        checkBox.appearanceState = "Off";
        
        // Add MouseUp action to force calculation or update score directly as a fallback
        Object.defineProperty(checkBox, 'AA', {
          value: "<< /U << /S /JavaScript /JS (var total = 0; for (var i = 0; i < 10; i++) { var cb = this.getField('cb_' + i); if (cb && cb.value !== 'Off') total++; } var scoreField = this.getField('TotalScore'); if (scoreField) { scoreField.value = total; } if (this.calculateNow) { this.calculateNow(); }) >> >>",
          configurable: false,
          enumerable: true,
          writable: false
        });

        (doc as any).addField(checkBox);
      } catch (e) {
        console.error("AcroForm not supported", e);
      }
      
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
    
    try {
      const scoreField = new (doc as any).AcroFormTextField();
      scoreField.fieldName = "TotalScore";
      scoreField.Rect = [150, y + 4, 15, 8];
      scoreField.value = "0";
      scoreField.textAlign = "center";
      scoreField.readOnly = true;
      
      // Add Calculate action to the score field
      Object.defineProperty(scoreField, 'AA', {
        value: "<< /C << /S /JavaScript /JS (var total = 0; for (var i = 0; i < 10; i++) { var cb = this.getField('cb_' + i); if (cb && cb.value !== 'Off') total++; } event.value = total;) >> >>",
        configurable: false,
        enumerable: true,
        writable: false
      });

      (doc as any).addField(scoreField);
    } catch (e) {
      console.error("AcroForm not supported", e);
    }

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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const magnetPhase = params.get('download_magnet');
    if (magnetPhase !== null) {
      const phaseNum = parseInt(magnetPhase);
      if (phaseNum >= 0 && phaseNum <= 2) {
        setActivePhase(phaseNum);
        setTimeout(() => {
          handleDownloadPDF(phaseNum);
        }, 1000);
      }
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  if (currentView === 'library') return <Library onBack={() => setCurrentView('main')} />;
  if (currentView === 'sip') return <Library onBack={() => setCurrentView('main')} initialView="sip" />;
  if (currentView === 'liver') return <Library onBack={() => setCurrentView('main')} initialView="liver" />;
  if (currentView === 'transition') return <Library onBack={() => setCurrentView('main')} initialView="transition" />;

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
            <button onClick={() => setCurrentView('library')} className="hover:text-[var(--color-electric-blue)] transition-colors cursor-pointer">Lead Magnet Library</button>
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
              className="flex items-center gap-1 md:gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" /> 
              <span className="hidden sm:inline">WhatsApp Us</span>
              <span className="sm:hidden">Chat</span>
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
              <div className="mb-8 p-4 md:p-5 rounded-2xl bg-[#111214]/80 border border-white/10 backdrop-blur-md inline-block w-full sm:w-auto shadow-xl">
                <p className="text-sm font-semibold mb-4 tracking-wide text-white flex items-center justify-center sm:justify-start gap-2">
                  <Target className="w-4 h-4 text-[var(--color-electric-blue)]" /> 
                  CHOOSE YOUR CURRENT PHASE:
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  {PHASE_DATA.map((phase, idx) => (
                    <button
                      key={phase.id}
                      onClick={() => setActivePhase(idx)}
                      className={`w-full sm:w-auto px-5 py-3 rounded-full text-sm transition-all flex items-center justify-center gap-2 ${
                        activePhase === idx 
                          ? 'bg-[var(--color-electric-blue)] text-white font-bold shadow-[0_0_20px_rgba(26,171,222,0.6)] border-2 border-[var(--color-electric-blue)] scale-[1.02] sm:scale-105' 
                          : 'bg-white/5 text-gray-400 font-medium hover:bg-white/10 hover:text-white border border-white/10'
                      }`}
                    >
                      {phase.badge}
                    </button>
                  ))}
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                {activeData.titlePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-blue-400">{activeData.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed min-h-[80px]">
                {activeData.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => document.getElementById('zoho-calculator-link')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full sm:w-auto bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(26,171,222,0.3)] hover:shadow-[0_0_30px_rgba(26,171,222,0.5)]"
                >
                  Start Your Roadmap <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => openModal(activePhase, 'checklist')}
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

                <div className="mt-8">
                  {activePhase === 0 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-electric-blue)]">The Power of 10 Wealth Matrix</h3>
                      <p className="text-gray-400 text-sm md:text-base">Maximize your wealth through disciplined Step-up SIPs.</p>
                      
                      <div className="overflow-x-auto mt-6">
                        <table className="w-full text-left border-collapse min-w-[400px]">
                          <thead>
                            <tr className="border-b-2 border-[var(--color-electric-blue)]">
                              <th className="p-3 text-[var(--color-electric-blue)] font-semibold">Strategy (20 Yrs)</th>
                              <th className="p-3 text-[var(--color-electric-blue)] font-semibold">Monthly SIP</th>
                              <th className="p-3 text-[var(--color-electric-blue)] font-semibold">Final Corpus*</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm md:text-base">
                            <tr className="border-b border-white/10">
                              <td className="p-4"><strong className="text-white">Late Starter</strong> (Yr 10)</td>
                              <td className="p-4 text-gray-300">₹20,000</td>
                              <td className="p-4 text-gray-300">₹46.4 Lakhs</td>
                            </tr>
                            <tr className="border-b border-white/10">
                              <td className="p-4"><strong className="text-white">Early Starter</strong> (Yr 1)</td>
                              <td className="p-4 text-gray-300">₹10,000</td>
                              <td className="p-4 text-gray-300">₹99.9 Lakhs</td>
                            </tr>
                            <tr className="bg-[var(--color-electric-blue)]/10">
                              <td className="p-4 text-[var(--color-electric-blue)]"><strong className="text-[var(--color-electric-blue)]">The Maximizer (10% Step-up)</strong></td>
                              <td className="p-4 text-[var(--color-electric-blue)]">₹10,000+</td>
                              <td className="p-4 text-[var(--color-electric-blue)] font-bold text-lg">₹1.85 Crores</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="text-[11px] text-gray-500 mt-4">*Assumed 12% CAGR for illustration.</div>
                    </motion.div>
                  )}

                  {activePhase === 1 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-electric-blue)]">The Retirement Readiness Checklist</h3>
                      <p className="text-gray-400 text-sm md:text-base">Close the gap in your final working decade.</p>
                      <div className="bg-white/5 p-6 md:p-8 rounded-xl space-y-5 border border-white/10 mt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded border border-gray-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-transparent hover:text-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] cursor-pointer transition-colors">✓</div>
                          <p className="text-gray-300 text-base">Calculated exact Retirement Gap? <span className="text-gray-500 text-xs ml-2">[cite: 6]</span></p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded border border-gray-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-transparent hover:text-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] cursor-pointer transition-colors">✓</div>
                          <p className="text-gray-300 text-base">Accounted for Healthcare inflation? <span className="text-gray-500 text-xs ml-2">[cite: 9]</span></p>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded border border-gray-500 flex-shrink-0 mt-0.5 flex items-center justify-center text-transparent hover:text-[var(--color-electric-blue)] hover:border-[var(--color-electric-blue)] cursor-pointer transition-colors">✓</div>
                          <p className="text-gray-300 text-base">Defined an SWP for cash flow? <span className="text-gray-500 text-xs ml-2">[cite: 8]</span></p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activePhase === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--color-electric-blue)]">The Inflation-Proof Income Map</h3>
                      <p className="text-gray-400 text-sm md:text-base">Convert your corpus into a "Salary for Life."</p>
                      <div className="flex flex-col gap-4 mt-8 max-w-md mx-auto">
                        <div className="border border-white/20 p-5 rounded-xl text-center font-medium bg-white/5 text-lg">
                          THE RESERVOIR (Portfolio)
                        </div>
                        <div className="text-center text-[var(--color-electric-blue)] font-bold text-2xl">↓</div>
                        <div className="border border-[var(--color-electric-blue)] p-5 rounded-xl text-center font-bold bg-[var(--color-electric-blue)]/10 text-[var(--color-electric-blue)] shadow-[0_0_20px_rgba(26,171,222,0.15)] text-lg">
                          THE SWP TAP (Monthly Income)
                        </div>
                        <div className="text-center text-[var(--color-electric-blue)] font-bold text-2xl">↓</div>
                        <div className="border border-white/20 p-5 rounded-xl text-center font-medium bg-white/5 text-lg">
                          LIFESTYLE CONTINUITY
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-24 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="text-[var(--color-electric-blue)] font-bold tracking-widest text-xs uppercase mb-4">★ Our Philosophy</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Three Principles That Shape Every Conversation.</h2>
            <p className="text-gray-400 text-lg">Most financial advisors talk about returns. We talk about your life. Here's what we believe — and what we'll never compromise on.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-near-black)] border-t-4 border-[var(--color-electric-blue)] border-x border-b border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-[var(--color-electric-blue)] font-bold text-sm tracking-wider mb-4">PRINCIPLE 01</div>
              <h3 className="text-xl font-bold text-white mb-4">Goals Before Products</h3>
              <p className="text-gray-400 leading-relaxed text-sm">We never start with "which fund should you buy?" We start with "what does your life look like in 5, 10, 20 years?" Every recommendation flows from your goals — not the other way around.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[var(--color-near-black)] border-t-4 border-[var(--color-electric-blue)] border-x border-b border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-[var(--color-electric-blue)] font-bold text-sm tracking-wider mb-4">PRINCIPLE 02</div>
              <h3 className="text-xl font-bold text-white mb-4">The 3-Year Horizon Rule</h3>
              <p className="text-gray-400 leading-relaxed text-sm">If you need money within 3 years, equity is not your friend. We will never put short-term money into long-term instruments — even if it means a smaller commission for us. Your safety always comes first.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[var(--color-near-black)] border-t-4 border-[var(--color-electric-blue)] border-x border-b border-white/5 p-8 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-[var(--color-electric-blue)] font-bold text-sm tracking-wider mb-4">PRINCIPLE 03</div>
              <h3 className="text-xl font-bold text-white mb-4">Independent of Institutions</h3>
              <p className="text-gray-400 leading-relaxed text-sm">We don't work for a bank, an AMC, or an insurance company. We work for you. That means no product pushes, no sales targets, and no fine print. Just honest advice from someone who has nothing to hide.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE STORY SECTION */}
      <section className="py-24 bg-[var(--color-near-black)] relative border-t border-white/5" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7 space-y-6"
            >
              <div className="text-[var(--color-electric-blue)] font-bold tracking-widest text-xs uppercase mb-2">★ Our Story</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">Built on a Promise: <br/>Client First. Always.</h2>
              
              <div className="space-y-5 text-gray-400 text-lg leading-relaxed">
                <p>Patil Investments was founded in <strong className="text-white">November 2017</strong> by <strong className="text-white">Praful Patil</strong> with one clear mission — to give families honest, goal-based financial guidance that puts their interests above everything else.</p>
                <p>Before starting Patil Investments, Praful spent over a decade in private banking and wealth management at some of India's largest financial institutions. Working inside the system, he saw the same problem repeat itself: <strong className="text-white">good families being sold the wrong products</strong> because of sales targets, commissions, and institutional pressure.</p>
                <p>He left to build something different. A practice where the only target is the client's goal. Where recommendations come from research, not quotas. Where a "no" is sometimes the most valuable advice you can give.</p>
                <p>Today, Patil Investments serves <strong className="text-white">over 100 families across Thane and Mumbai</strong>, helping them plan for retirement, fund their children's education, buy their dream homes, and build wealth that lasts generations.</p>
              </div>
            </motion.div>

            {/* Founder Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5 bg-black/50 border-t-4 border-[var(--color-electric-blue)] border-x border-b border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-electric-blue)]/10 rounded-bl-full blur-3xl"></div>
              
              <div className="text-[var(--color-electric-blue)] font-bold tracking-widest text-xs uppercase mb-6">★ Founder</div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 mb-8 relative z-10 text-center sm:text-left">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-[var(--color-electric-blue)] overflow-hidden shrink-0 shadow-[0_0_20px_rgba(0,163,255,0.3)]">
                   <img src="https://raw.githubusercontent.com/prafulapatil-stack/Patil-zoho-git/main/public/founder.png" alt="Praful Patil" className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Praful Patil</h3>
                  <p className="text-[var(--color-electric-blue)] font-medium text-base">Managing Director</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 relative z-10">
                18+ years in private banking and wealth management. AMFI Registered Mutual Fund Distributor focused on goal-based, conflict-free advice for salaried families and business owners in Thane.
              </p>
              
              <div className="grid grid-cols-2 gap-3 relative z-10">
                <div className="bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/20 text-[var(--color-electric-blue)] text-xs font-bold py-2 px-3 rounded-lg text-center">AMFI Certified</div>
                <div className="bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/20 text-[var(--color-electric-blue)] text-xs font-bold py-2 px-3 rounded-lg text-center">BSE Member</div>
                <div className="bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/20 text-[var(--color-electric-blue)] text-xs font-bold py-2 px-3 rounded-lg text-center">18+ Years Exp</div>
                <div className="bg-[var(--color-electric-blue)]/10 border border-[var(--color-electric-blue)]/20 text-[var(--color-electric-blue)] text-xs font-bold py-2 px-3 rounded-lg text-center">100+ Families</div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="py-20 bg-black relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-[var(--color-electric-blue)] font-bold tracking-widest text-xs uppercase mb-4">★ Trust & Credentials</div>
            <h2 className="text-3xl font-bold mb-4">Why Families Choose Patil Investments.</h2>
            <p className="text-gray-400">Your money deserves a partner who's qualified, experienced, and accountable. Here's our track record at a glance.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-electric-blue)] mb-2">18+</div>
              <div className="text-xs text-gray-400 font-bold tracking-wider uppercase">Years of Experience</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-electric-blue)] mb-2">100+</div>
              <div className="text-xs text-gray-400 font-bold tracking-wider uppercase">Families Served</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-electric-blue)] mb-2">AMFI</div>
              <div className="text-xs text-gray-400 font-bold tracking-wider uppercase">Registered MFD</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-[var(--color-electric-blue)] mb-2">BSE</div>
              <div className="text-xs text-gray-400 font-bold tracking-wider uppercase">Member 18583</div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="py-24 bg-[var(--color-near-black)] relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="text-[var(--color-electric-blue)] font-bold tracking-widest text-xs uppercase mb-4">★ How We Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Simple, Transparent Three-Step Approach.</h2>
            <p className="text-gray-400 text-lg">No 50-page proposals. No confusing jargon. No high-pressure closing tactics. Here's exactly how we'll work together.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-[var(--color-electric-blue)]/30 to-transparent"></div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-electric-blue)] to-[#0C7CC4] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-[0_8px_20px_rgba(28,160,239,0.25)] mb-6 border-4 border-[var(--color-near-black)]">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Discovery Call</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">A relaxed 30-minute conversation. We listen to your goals, understand your situation, and answer your questions. No commitment. No sales pitch.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center relative z-10"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-electric-blue)] to-[#0C7CC4] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-[0_8px_20px_rgba(28,160,239,0.25)] mb-6 border-4 border-[var(--color-near-black)]">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Roadmap</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">We build a personalised investment roadmap mapped to your goals — retirement, education, home, marriage. You get clear numbers, clear timelines, clear next steps.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center relative z-10"
            >
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[var(--color-electric-blue)] to-[#0C7CC4] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-[0_8px_20px_rgba(28,160,239,0.25)] mb-6 border-4 border-[var(--color-near-black)]">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Invest & Track</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">We handle the paperwork — KYC, BSE account, mandates — completely paperless. You track your progress 24/7 through our client portal. We meet quarterly to stay on course.</p>
            </motion.div>
          </div>
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

          <GoogleReviews />
        </div>
      </section>

      {/* Free Resources Section */}
      <section id="resources" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-electric-blue)]/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Resource Center</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select your current phase to access tailored checklists and interactive guides.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {PHASE_DATA.map((phase, idx) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activePhase === idx 
                    ? 'bg-[var(--color-electric-blue)] text-white shadow-[0_0_20px_rgba(26,171,222,0.3)]' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {phase.id === 'builder' ? 'The Builder' : phase.id === 'transitioner' ? 'The Transitioner' : 'The Liver'}
              </button>
            ))}
          </div>

          {/* Resources for Active Phase */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Checklist Card */}
            <motion.div 
              key={`checklist-${activePhase}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[var(--color-near-black)] border border-white/10 hover:border-[var(--color-electric-blue)]/50 rounded-3xl p-8 flex flex-col items-center text-center transition-all group shadow-2xl"
            >
              <div className="w-16 h-16 bg-[var(--color-electric-blue)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-electric-blue)] group-hover:scale-110 transition-transform">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{activeData.leadMagnet.title}</h3>
              <p className="text-gray-400 mb-8 flex-1">
                {activeData.leadMagnet.desc}
              </p>
              <button 
                onClick={() => openModal(activePhase, 'checklist')}
                className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" /> {activeData.leadMagnet.buttonText}
              </button>
            </motion.div>

            {/* Presentation Card */}
            <motion.div 
              key={`presentation-${activePhase}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[var(--color-near-black)] border border-[var(--color-electric-blue)]/30 rounded-3xl p-8 flex flex-col items-center text-center transition-all group shadow-[0_0_30px_rgba(26,171,222,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-electric-blue)]"></div>
              <div className="w-16 h-16 bg-[var(--color-electric-blue)]/10 rounded-full flex items-center justify-center mb-6 text-[var(--color-electric-blue)] group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{activeData.presentation.title}</h3>
              <p className="text-gray-400 mb-8 flex-1">
                {activeData.presentation.desc}
              </p>
              <button 
                onClick={() => openModal(activePhase, 'presentation')}
                className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center gap-2"
              >
                {activeData.presentation.buttonText} <ArrowRight className="w-5 h-5" />
              </button>
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
                <span className="text-sm text-[var(--color-electric-blue)] font-medium block mb-2">ARN-143723 | AMFI-Registered Mutual Fund Distributor | BSE Member 18583</span>
                <p className="text-xs text-gray-400 max-w-sm">Hiranandani Meadows, Emerald Plaza, Off Pokharan Road 2, Thane West, Maharashtra 400607</p>
                <p className="text-xs text-gray-400 mt-1">+91 9833473537 | praful@patilinvestments.co.in</p>
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
                  <a href="https://www.linkedin.com/in/praful-arun-patil" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-electric-blue)] transition-colors" aria-label="LinkedIn">
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
                  *Assumed 12% CAGR for illustration purposes only. Mutual Fund investments are subject to market risks, read all scheme related documents carefully before investing.
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[var(--color-primary)] text-white rounded-full shadow-lg hover:bg-[var(--color-primary-dark)] transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Lead Magnet Modal */}
      {modalConfig.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[var(--color-near-black)] border border-white/10 p-8 rounded-2xl max-w-md w-full relative"
          >
            <button 
              onClick={() => {
                setModalConfig({ ...modalConfig, isOpen: false });
                setIsSuccess(false);
                setModalStep(1);
                setChecklistAnswers({});
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            {!isSuccess ? (
              modalStep === 1 ? (
                <>
                  <h3 className="text-2xl font-bold mb-2">Interactive {activeModalData.leadMagnet.pdfSubtitle}</h3>
                  <p className="text-gray-400 mb-4 text-sm">Please answer a few quick questions so we can personalize our discussion.</p>
                  
                  <div className="max-h-[50vh] overflow-y-auto pr-2 space-y-4 custom-scrollbar mb-6">
                    {activeModalData.leadMagnet.points.map((point, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-lg border border-white/10">
                        <p className="text-sm text-gray-300 mb-3">{idx + 1}. {point}</p>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name={`q-${idx}`} 
                              checked={checklistAnswers[idx] === true} 
                              onChange={() => setChecklistAnswers({...checklistAnswers, [idx]: true})} 
                              className="w-4 h-4 text-[var(--color-electric-blue)] bg-black/50 border-white/20 focus:ring-[var(--color-electric-blue)]"
                            />
                            <span className="text-sm text-white font-medium">Yes</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name={`q-${idx}`} 
                              checked={checklistAnswers[idx] === false} 
                              onChange={() => setChecklistAnswers({...checklistAnswers, [idx]: false})} 
                              className="w-4 h-4 text-[var(--color-electric-blue)] bg-black/50 border-white/20 focus:ring-[var(--color-electric-blue)]"
                            />
                            <span className="text-sm text-white font-medium">No</span>
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => setModalStep(2)}
                      className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      Next: Get My Guide <ArrowRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => {
                        setChecklistAnswers({});
                        setModalStep(2);
                      }}
                      className="w-full bg-transparent hover:bg-white/5 text-gray-400 hover:text-white font-medium py-2 rounded-lg transition-colors text-sm"
                    >
                      Skip checklist and download directly
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {modalConfig.resourceType === 'checklist' && (
                    <button 
                      onClick={() => setModalStep(1)} 
                      className="text-sm text-gray-400 hover:text-white mb-4 flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4"/> Back to Checklist
                    </button>
                  )}
                  <h3 className="text-2xl font-bold mb-2">
                    {modalConfig.resourceType === 'checklist' ? 'Where should we send your guide?' : 'Unlock Presentation'}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm">
                    {modalConfig.resourceType === 'checklist' 
                      ? "Enter your details below and we'll email your personalized guide instantly."
                      : "Enter your details to access this interactive presentation."}
                  </p>
                  
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-electric-blue)] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-electric-blue)] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                      <div className="flex">
                        <span className="bg-white/5 border border-white/10 border-r-0 rounded-l-lg px-4 py-3 text-gray-400 flex items-center">
                          +91
                        </span>
                        <input 
                          type="tel" 
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full bg-black/50 border border-white/10 rounded-r-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-electric-blue)] transition-colors"
                          placeholder="9876543210"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-3.5 rounded-lg transition-colors mt-6 disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Processing...' : (modalConfig.resourceType === 'checklist' ? 'Submit & Send to my Email' : 'Unlock Presentation')}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By downloading, you agree to receive communications from Patil Investments. We respect your privacy.
                    </p>
                  </form>
                </>
              )
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Success!</h3>
                <p className="text-gray-400 mb-6 text-sm">
                  {modalConfig.resourceType === 'checklist' 
                    ? "Your personalized checklist has been sent to your email."
                    : "You now have access to the interactive presentation."}
                </p>
                
                {modalConfig.resourceType === 'checklist' ? (
                  <button
                    type="button"
                    onClick={() => {
                      handleDownloadPDF(modalConfig.phaseId);
                      setModalConfig({ ...modalConfig, isOpen: false });
                    }}
                    className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-3.5 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" /> Download Guide Now
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setModalConfig({ ...modalConfig, isOpen: false });
                      setCurrentView(activeModalData.presentation.componentId as any);
                    }}
                    className="w-full bg-[var(--color-electric-blue)] hover:bg-[#158bb5] text-white font-bold py-3.5 rounded-lg transition-colors mb-3 flex items-center justify-center gap-2"
                  >
                    Open Presentation <ArrowRight className="w-5 h-5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setModalConfig({ ...modalConfig, isOpen: false });
                    setIsSuccess(false);
                    setModalStep(1);
                    setChecklistAnswers({});
                    setFormData({ name: '', email: '', phone: '' });
                  }}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
