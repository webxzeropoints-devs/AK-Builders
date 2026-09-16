import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          At <strong className="text-[#252321]">AK BUILDERS</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting the personal and project-related information you entrust to us. This Privacy Policy details how we collect, use, store, disclose, and protect your information when you visit our website, communicate with us, or engage our architectural and construction services.
        </p>
        <p className="text-[#524E48] leading-relaxed">
          By accessing our website or utilizing our services, you acknowledge the terms set forth in this Privacy Policy. If you do not agree with our practices, please discontinue use of our site and services.
        </p>
      </>
    ),
  },
  {
    id: 'information-collected',
    title: '2. Information We Collect',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          We collect information that allows us to provide accurate estimates, architectural planning, and premium construction execution. The types of data collected include:
        </p>
        <ul className="space-y-3 text-[#524E48] mb-4">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Personal Identification:</strong> Full name, email address, telephone number, and physical mailing address.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Project & Site Specifications:</strong> Property location, parcel details, architectural preferences, project scope, budget range, and timeline requirements.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Technical & Analytics Data:</strong> IP address, browser type, device information, operating system, and browsing activity collected via standard cookies and analytics tools.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#C7A96B] shrink-0 mt-0.5" />
            <span><strong className="text-[#252321]">Communication Records:</strong> Notes, emails, design requests, and consultation inquiries exchanged with our team.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use-information',
    title: '3. How We Use Your Information',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Your information is utilized solely for lawful business purposes related to high-quality construction and architectural services:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Project Execution</h4>
            <p className="text-sm text-[#524E48]">Preparing formal cost estimations, feasibility reviews, architectural blueprints, and scheduling construction phases.</p>
          </div>
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Client Communications</h4>
            <p className="text-sm text-[#524E48]">Responding to inquiries, sending progress reports, design updates, and scheduling on-site visits.</p>
          </div>
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Regulatory Compliance</h4>
            <p className="text-sm text-[#524E48]">Filing permit applications, municipal inspections, and ensuring local building code safety standards.</p>
          </div>
          <div className="bg-[#FAF7F0] p-5 rounded-xl border border-[#E5DAC8]">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C7A96B] mb-2">Quality & Service Improvement</h4>
            <p className="text-sm text-[#524E48]">Optimizing website functionality, client portal experience, and assessing project satisfaction.</p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'sharing-disclosure',
    title: '4. Information Sharing & Disclosure',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          <strong className="text-[#252321]">We do not sell, rent, or trade your personal data.</strong> Information is only shared under the following conditions:
        </p>
        <ul className="space-y-3 text-[#524E48] mb-4">
          <li className="flex items-start gap-3">
            <span className="text-[#C7A96B] font-bold">•</span>
            <span><strong className="text-[#252321]">Vetted Subcontractors & Consultants:</strong> Licensed structural engineers, specialized trade contractors, and architectural consultants bound by confidentiality agreements for the direct fulfillment of your project.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C7A96B] font-bold">•</span>
            <span><strong className="text-[#252321]">Municipal Authorities:</strong> City planning departments and building inspectors when applying for structural permits, zoning approvals, and certificates of occupancy.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#C7A96B] font-bold">•</span>
            <span><strong className="text-[#252321]">Legal Requirements:</strong> When compelled by law, court order, or governmental regulations to protect legal rights, property, or safety.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-security',
    title: '5. Data Security & Storage',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          We deploy industry-standard administrative, physical, and technical security protocols to safeguard your architectural plans, cost schedules, and personal records against unauthorized access, loss, alteration, or disclosure.
        </p>
        <p className="text-[#524E48] leading-relaxed">
          While no digital transmission or electronic storage method can be 100% immune to risk, our internal controls and secure servers minimize threats and protect critical client documentation.
        </p>
      </>
    ),
  },
  {
    id: 'cookies-tracking',
    title: '6. Cookies & Tracking Technologies',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Our website uses standard cookies and analytics beacons to improve site performance, analyze traffic flow, and remember user preferences. You have the choice to disable cookies through your browser settings; however, certain visual elements or site features may be affected.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: '7. Your Rights & Choices',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          Depending on your jurisdiction, you hold specific privacy rights regarding your personal data:
        </p>
        <ul className="space-y-2 text-[#524E48] mb-4">
          <li>• <strong className="text-[#252321]">Right of Access:</strong> Request a summary of personal information we maintain about you.</li>
          <li>• <strong className="text-[#252321]">Right to Rectification:</strong> Request correction of inaccurate or incomplete records.</li>
          <li>• <strong className="text-[#252321]">Right to Deletion:</strong> Request erasure of your personal data, subject to statutory record-retention requirements for construction warranties and tax compliance.</li>
          <li>• <strong className="text-[#252321]">Opt-Out:</strong> Unsubscribe from non-essential promotional announcements at any time.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'contact-details',
    title: '8. Contact Us & Legal Inquiries',
    content: (
      <>
        <p className="text-[#524E48] leading-relaxed mb-4">
          If you have questions, feedback, or requests regarding this Privacy Policy or how your data is handled, please reach out to our team:
        </p>
        <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#E5DAC8] space-y-3">
          <p className="text-sm text-[#252321] font-medium">AK BUILDERS — Privacy & Legal Team</p>
          <p className="text-sm text-[#524E48] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#C7A96B]" />
            <a href="mailto:hello@akbuilders.com" className="hover:text-[#C7A96B] transition-colors underline">
              hello@akbuilders.com
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

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>Legal & Privacy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] mb-6 leading-tight">
            Privacy Policy
          </h1>

          <p className="text-base sm:text-lg text-[#77736C] leading-relaxed">
            Our commitment to transparency, client confidentiality, and ethical data governance across all architectural and construction endeavors.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs tracking-wider text-[#77736C]">
            <span>LAST UPDATED: SEPTEMBER 2026</span>
            <span>•</span>
            <Link
              to="/terms"
              className="text-[#C7A96B] hover:text-[#252321] font-semibold underline underline-offset-4 transition-colors"
            >
              View Terms of Service
            </Link>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#EAE2D1] rounded-2xl border border-[#DED4C1]">
            <span className="px-6 py-2.5 rounded-xl bg-[#171716] text-[#FAF7F0] text-xs uppercase tracking-widest font-semibold shadow-sm">
              Privacy Policy
            </span>
            <Link
              to="/terms"
              className="px-6 py-2.5 rounded-xl text-[#77736C] hover:text-[#252321] text-xs uppercase tracking-widest font-semibold transition-all"
            >
              Terms of Service
            </Link>
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
                  Have a question?
                </h4>
                <p className="text-xs text-[#77736C] mb-4 leading-relaxed">
                  Our team is available to address any questions regarding project agreements or confidentiality.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#171716] hover:text-[#C7A96B] transition-colors"
                >
                  <span>Contact Our Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Policy Text Area */}
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
