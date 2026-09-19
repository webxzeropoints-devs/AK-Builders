import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const sections = [
  {
    id: 'agreement-terms',
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Welcome to <strong className="text-[#252321]">AK BUILDERS</strong>. By accessing our website, browsing our portfolio, requesting preliminary estimates, or engaging our architectural and construction services, you agree to comply with and be bound by these Terms of Service (&ldquo;Terms&rdquo;).
        </p>
        <p className="text-[#524E48] leading-relaxed">
          These Terms apply to all visitors, clients, prospective clients, subcontractors, and partners who access or interact with our digital platforms and services. If you disagree with any portion of these Terms, you should cease use of our site and services immediately.
        </p>
      </>
    ),
  },
  {
    id: 'scope-services',
    title: '2. Scope of Services & Consultations',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          AK BUILDERS specializes in high-end architectural planning, luxury residential construction, commercial builds, structural renovations, and complete turnkey project delivery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Architectural Planning</h4>
            <p className="text-sm text-[#524E48]">Concept drafting, 3D visualizations, structural calculations, and permit application document preparation.</p>
          </div>
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Construction Execution</h4>
            <p className="text-sm text-[#524E48]">Turnkey general contracting, procurement of materials, project site supervision, and milestone-based build management.</p>
          </div>
        </div>
        <p className="text-[#524E48] leading-relaxed">
          Information provided on this website is for informational and promotional purposes. Formal architectural and construction work is governed by an executed Master Construction Agreement or Project Contract between AK BUILDERS and the client.
        </p>
      </>
    ),
  },
  {
    id: 'estimates-proposals',
    title: '3. Estimates, Proposals & Contract Formation',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Any cost figures, rough estimates, or project durations displayed on our website or provided during initial informal consultations are non-binding budgetary estimates.
        </p>
        <ul className="space-y-3 text-[#524E48] mb-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Formal Proposals:</strong> A binding proposal requires comprehensive site evaluations, engineering reviews, soil analyses, and detailed bills of quantities.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Execution of Contract:</strong> Construction will only commence upon mutual execution of a formal written contract defining scope of work, timelines, payment schedules, and specifications.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'client-responsibilities',
    title: '4. Client Obligations & Site Access',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          To facilitate timely and safe construction operations, clients agree to:
        </p>
        <ul className="space-y-2 text-[#524E48] mb-4">
          <li>• Provide accurate property boundaries, legal titles, utility schematics, and disclosed easement rights.</li>
          <li>• Grant authorized, unhindered physical access to the project property for our architectural teams, trade contractors, and equipment.</li>
          <li>• Promptly review, approve, or provide feedback on design mockups, material selections, and municipal permit submittals.</li>
          <li>• Maintain required hazard or homeowner insurance coverage on existing structures during renovation work.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: '5. Intellectual Property & Architectural Designs',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          All architectural drawings, 3D renderings, computer-generated models, project photography, trademarks, brand assets, and copywriting displayed on this website are the proprietary intellectual property of AK BUILDERS.
        </p>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Clients are granted a non-transferable license to utilize custom architectural plans solely for the construction of the specific property designated in their contract. Reproduction, resale, or reuse of architectural plans for subsequent properties without our prior written consent is strictly prohibited.
        </p>
      </>
    ),
  },
  {
    id: 'change-orders-payments',
    title: '6. Change Orders & Payment Milestones',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Construction projects require disciplined financial scheduling and change management:
        </p>
        <ul className="space-y-3 text-[#524E48] mb-4">
          <li className="flex items-start gap-3">
            <span className="text-[#C7A96B] font-bold">•</span>
            <span><strong className="text-[#252321]">Change Orders:</strong> Any deviation, upgrade, or addition to the original contracted scope of work must be documented in a written Change Order specifying cost and timeline impact before work is performed.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C7A96B] font-bold">•</span>
            <span><strong className="text-[#252321]">Milestone Payments:</strong> Invoices are issued based on verified project milestones (e.g., foundation, framing, rough MEP, finishes, final inspection) as stipulated in the contract.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'warranties-liability',
    title: '7. Warranties, Craftsmanship & Limitation of Liability',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          AK BUILDERS prides itself on exacting craftsmanship. We provide express workmanship warranties as detailed in our formal project contracts, in addition to statutory structural builder warranties required by local legislation.
        </p>
        <p className="text-[#524E48] leading-relaxed mb-4">
          To the fullest extent permitted by applicable law, AK BUILDERS shall not be liable for indirect, incidental, consequential, or punitive damages arising from site access delays, unforeseen underground obstructions, or adverse weather conditions.
        </p>
      </>
    ),
  },
  {
    id: 'force-majeure',
    title: '8. Force Majeure & External Delays',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Neither party shall be held liable for delays or non-performance resulting from circumstances beyond reasonable control, including severe weather phenomena, acts of God, global supply chain material blockades, labor strikes, or governmental and municipal permitting delays.
        </p>
      </>
    ),
  },
  {
    id: 'governing-law',
    title: '9. Governing Law & Dispute Resolution',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          These Terms and any contractual relationship shall be governed by and construed in accordance with the laws of the jurisdiction in which the construction project is physically located. Any disputes arising shall first be submitted to good-faith mediation prior to formal arbitration or litigation.
        </p>
      </>
    ),
  },
  {
    id: 'contact-terms',
    title: '10. Contact & Inquiries',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          If you have questions regarding these Terms or our construction service contracts, please contact our legal and project administration team:
        </p>
        <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E5DAC8] space-y-3">
          <p className="text-sm text-[#252321] font-medium">AK BUILDERS — Project & Legal Administration</p>
          <p className="text-sm text-[#524E48] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C7A96B]" />
            <a href="mailto:hello@ak-builders.in" className="hover:text-[#C7A96B] transition-colors underline">
              hello@ak-builders.in
            </a>
          </p>
          <p className="text-sm text-[#524E48] flex items-center gap-2">
            <Phone className="w-4 h-4 text-[#C7A96B]" />
            <span>+1 (555) 123-4567</span>
          </p>
          <p className="text-sm text-[#524E48] flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C7A96B]" />
            <span>Construction & Architecture Headquarters</span>
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="bg-[#F5F0E6] min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-32 text-[#252321]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED4C1] bg-[#FAF7F0] text-xs uppercase tracking-[0.25em] text-[#C7A96B] font-medium mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Terms & Conditions</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] mb-6 leading-tight">
            Terms of Service
          </h1>

          <p className="text-base sm:text-lg text-[#77736C] leading-relaxed">
            The standards, obligations, and professional parameters guiding our architectural excellence and construction execution.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs tracking-wider text-[#77736C]">
            <span>LAST UPDATED: SEPTEMBER 2026</span>
            <span>•</span>
            <Link
              to="/privacy"
              className="text-[#C7A96B] hover:text-[#252321] font-semibold underline underline-offset-4 transition-colors"
            >
              View Privacy Policy
            </Link>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EAE2D1] rounded-2xl border border-[#DED4C1]">
            <Link
              to="/privacy"
              className="px-6 py-2.5 rounded-xl text-[#77736C] hover:text-[#252321] text-xs uppercase tracking-widest font-semibold transition-all"
            >
              Privacy Policy
            </Link>
            <span className="px-6 py-2.5 rounded-xl bg-[#171716] text-[#FAF7F0] text-xs uppercase tracking-widest font-semibold shadow-sm">
              Terms of Service
            </span>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Quick Links Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1">
            <div className="sticky top-28 bg-[#FAF7F0] rounded-3xl p-6 border border-[#DED4C1] shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C7A96B] mb-4">
                Document Contents
              </h3>
              <nav className="space-y-2.5">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-[#77736C] hover:text-[#252321] hover:translate-x-1 transition-all py-1"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#E5DAC8]">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                  Project Inquiries
                </h4>
                <p className="text-xs text-[#77736C] mb-4 leading-relaxed">
                  Ready to discuss your project specifications, contract milestones, or request a preliminary estimate?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171716] hover:text-[#C7A96B] transition-colors"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Terms Text Area */}
          <main className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#DED4C1] shadow-sm space-y-10">
              {sections.map((section) => (
                <article key={section.id} id={section.id} className="scroll-mt-28 border-b border-[#EBE3D3] pb-8 last:border-b-0 last:pb-0">
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#252321] mb-4">
                    {section.title}
                  </h2>
                  {section.content}
                </article>
              ))}
            </div>
          </main>
        </div>

      </div>
    </div>
  );
}
