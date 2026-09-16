import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calculator,
  CheckCircle2,
  Building2,
  Home,
  Compass,
  Hammer,
  Key,
  Calendar,
  IndianRupee,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
} from 'lucide-react';

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  preferredContact: 'phone',
  projectType: 'Residential Construction',
  propertyType: 'Luxury Villa / Single Family',
  projectArea: '',
  location: '',
  budgetRange: '₹50 Lakhs - ₹1 Crore',
  siteStatus: 'Have Land, Ready to Build',
  timeline: '1 - 3 months',
  architecturalStyle: 'Modern Luxury',
  projectDetails: '',
};

const projectTypes = [
  { id: 'Residential Construction', label: 'Residential Build', icon: Home, desc: 'Luxury homes, custom villas & bespoke living' },
  { id: 'Commercial Construction', label: 'Commercial Build', icon: Building2, desc: 'Offices, commercial centres & retail hubs' },
  { id: 'Architecture & Design', label: 'Architecture & Design', icon: Compass, desc: 'Concept planning, 3D modeling & blueprints' },
  { id: 'Renovation & Remodeling', label: 'Renovation & Remodel', icon: Hammer, desc: 'Full-scale structural & aesthetic transformations' },
  { id: 'Turnkey Construction', label: 'Turnkey Solutions', icon: Key, desc: 'End-to-end design, build, and handover' },
];

const budgetOptions = [
  '₹25 Lakhs - ₹50 Lakhs',
  '₹50 Lakhs - ₹1 Crore',
  '₹1 Crore - ₹2.5 Crores',
  '₹2.5 Crores - ₹5 Crores',
  '₹5 Crores+',
];

const timelineOptions = [
  'Immediately (Within 30 days)',
  '1 - 3 months',
  '3 - 6 months',
  'Planning phase / Flexible',
];

const siteStatusOptions = [
  'Have Land, Ready to Build',
  'Land in Acquisition / Closing',
  'Existing Structure (Renovation/Demolition)',
  'Need Architectural Plans First',
];

export default function QuotePage() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectProjectType = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `AK-QT-${Math.floor(100000 + Math.random() * 900000)}`;
    setQuoteId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setSubmitted(false);
  };

  return (
    <div className="bg-[#F5F0E6] min-h-screen pt-28 pb-20 lg:pt-36 lg:pb-32 text-[#252321]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DED4C1] bg-[#FAF7F0] text-xs uppercase tracking-[0.25em] text-[#C7A96B] font-medium mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Complimentary Cost Estimation</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#252321] mb-6 leading-tight">
            Get a Free Quote
          </h1>

          <p className="text-base sm:text-lg text-[#77736C] leading-relaxed">
            Plan your next construction or architectural milestone with confidence. Provide your project parameters below to receive a detailed, transparent preliminary estimate from our senior team.
          </p>
        </motion.div>

        {submitted ? (
          /* Confirmation Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto bg-[#FAF7F0] rounded-3xl p-8 sm:p-12 border border-[#DED4C1] shadow-xl text-center"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-[#C7A96B]/15 border border-[#C7A96B] flex items-center justify-center text-[#C7A96B] mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C7A96B] block mb-2">
              Quote Request Confirmed
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#252321] mb-4">
              Thank you, {formData.fullName || 'Valued Client'}.
            </h2>

            <p className="text-[#77736C] text-base leading-relaxed max-w-xl mx-auto mb-8">
              We have received your specifications for your <strong className="text-[#252321]">{formData.projectType}</strong> project. Our senior estimators and architectural leads are analyzing your project scope.
            </p>

            <div className="bg-[#F5F0E6] rounded-2xl p-6 max-w-lg mx-auto text-left border border-[#DED4C1] mb-8 space-y-3">
              <div className="flex justify-between items-center text-xs text-[#77736C] border-b border-[#DED4C1] pb-2">
                <span>ESTIMATE REFERENCE</span>
                <span className="font-mono font-bold text-[#252321]">{quoteId}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#77736C]">
                <span>PROJECT TYPE</span>
                <span className="font-medium text-[#252321]">{formData.projectType}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#77736C]">
                <span>BUDGET RANGE</span>
                <span className="font-medium text-[#252321]">{formData.budgetRange}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#77736C]">
                <span>TIMELINE TARGET</span>
                <span className="font-medium text-[#252321]">{formData.timeline}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-[#77736C]">
                <span>CONTACT PERSON</span>
                <span className="font-medium text-[#252321]">{formData.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="w-full sm:w-auto bg-[#171716] text-[#FAF7F0] hover:bg-[#C7A96B] hover:text-[#171716] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Completed Projects
              </Link>
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto border border-[#DED4C1] hover:border-[#252321] text-[#252321] text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Submit Another Request
              </button>
            </div>
          </motion.div>
        ) : (
          /* Form & Value Props Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Form Column */}
            <div className="lg:col-span-8">
              <form
                onSubmit={handleSubmit}
                className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-10 border border-[#DED4C1] shadow-sm space-y-10"
              >
                {/* Step 1: Select Service Type */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#171716] text-[#FAF7F0] flex items-center justify-center text-xs font-bold">
                      1
                    </span>
                    <h2 className="font-serif text-2xl text-[#252321]">
                      Select Project Type
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectTypes.map((item) => {
                      const Icon = item.icon;
                      const isSelected = formData.projectType === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelectProjectType(item.id)}
                          className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                            isSelected
                              ? 'border-[#C7A96B] bg-[#F5F0E6] shadow-sm'
                              : 'border-[#DED4C1] hover:border-[#C7A96B]/50 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                                isSelected
                                  ? 'bg-[#C7A96B] text-[#171716]'
                                  : 'bg-[#F5F0E6] text-[#77736C]'
                              }`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-sm text-[#252321]">
                              {item.label}
                            </span>
                          </div>
                          <p className="text-xs text-[#77736C] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Project Specifications */}
                <div className="pt-6 border-t border-[#EBE3D3]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#171716] text-[#FAF7F0] flex items-center justify-center text-xs font-bold">
                      2
                    </span>
                    <h2 className="font-serif text-2xl text-[#252321]">
                      Project Specifications
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Property Sub-Category
                      </label>
                      <input
                        type="text"
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        placeholder="e.g. Modern Villa, Commercial Hub"
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Estimated Area (Square Footage)
                      </label>
                      <input
                        type="text"
                        name="projectArea"
                        value={formData.projectArea}
                        onChange={handleChange}
                        placeholder="e.g. 4,500 sq ft"
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Project Location / City
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Chennai, Coimbatore, Madurai, TN"
                          className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none pr-10"
                        />
                        <MapPin className="w-4 h-4 text-[#77736C] absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Site Status
                      </label>
                      <select
                        name="siteStatus"
                        value={formData.siteStatus}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] focus:border-[#C7A96B] focus:outline-none"
                      >
                        {siteStatusOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Step 3: Budget & Timeline */}
                <div className="pt-6 border-t border-[#EBE3D3]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#171716] text-[#FAF7F0] flex items-center justify-center text-xs font-bold">
                      3
                    </span>
                    <h2 className="font-serif text-2xl text-[#252321]">
                      Budget & Timeline
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Estimated Budget Range
                      </label>
                      <div className="relative">
                        <select
                          name="budgetRange"
                          value={formData.budgetRange}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] focus:border-[#C7A96B] focus:outline-none"
                        >
                          {budgetOptions.map((b) => (
                            <option key={b} value={b}>
                              {b}
                            </option>
                          ))}
                        </select>
                        <IndianRupee className="w-4 h-4 text-[#77736C] absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Target Start Date
                      </label>
                      <div className="relative">
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] focus:border-[#C7A96B] focus:outline-none"
                        >
                          {timelineOptions.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                        <Calendar className="w-4 h-4 text-[#77736C] absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Contact & Project Notes */}
                <div className="pt-6 border-t border-[#EBE3D3]">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#171716] text-[#FAF7F0] flex items-center justify-center text-xs font-bold">
                      4
                    </span>
                    <h2 className="font-serif text-2xl text-[#252321]">
                      Your Information & Notes
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 63802 24982"
                        className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                        Preferred Contact Mode
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['phone', 'email', 'whatsapp'].map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, preferredContact: mode }))}
                            className={`py-3 rounded-xl border text-xs uppercase tracking-wider font-medium capitalize transition-colors ${
                              formData.preferredContact === mode
                                ? 'border-[#C7A96B] bg-[#C7A96B] text-[#171716] font-bold'
                                : 'border-[#DED4C1] bg-white text-[#77736C]'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252321] mb-2">
                      Project Vision, Material Preferences & Questions
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Share details about the desired architectural style, specific materials, zoning constraints, or any questions for our builders..."
                      className="w-full rounded-xl border border-[#DED4C1] bg-white px-4 py-3 text-sm text-[#252321] placeholder:text-[#9A958E] focus:border-[#C7A96B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#77736C] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C7A96B]" />
                    <span>Your data is protected under our <Link to="/privacy" className="underline hover:text-[#252321]">Privacy Policy</Link>.</span>
                  </p>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#171716] hover:bg-[#C7A96B] text-[#FAF7F0] hover:text-[#171716] font-semibold text-xs uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Request Free Estimate</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

            {/* Sidebar / Guarantees */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Process Card */}
              <div className="bg-[#171716] text-[#FAF7F0] rounded-3xl p-7 lg:p-8 shadow-xl">
                <span className="text-xs uppercase tracking-[0.25em] text-[#C7A96B] font-semibold block mb-4">
                  Our Estimation Process
                </span>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#252321] border border-[#C7A96B]/40 text-[#C7A96B] flex items-center justify-center text-xs font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF7F0] mb-1">
                        Scope Assessment
                      </h4>
                      <p className="text-xs text-[#B8B2A7] leading-relaxed">
                        Our estimators review your project scope, location, and site status within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#252321] border border-[#C7A96B]/40 text-[#C7A96B] flex items-center justify-center text-xs font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF7F0] mb-1">
                        Architectural Consult
                      </h4>
                      <p className="text-xs text-[#B8B2A7] leading-relaxed">
                        We host a complimentary 30-minute consultation to clarify finishes and structural demands.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#252321] border border-[#C7A96B]/40 text-[#C7A96B] flex items-center justify-center text-xs font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#FAF7F0] mb-1">
                        Preliminary Quote
                      </h4>
                      <p className="text-xs text-[#B8B2A7] leading-relaxed">
                        You receive an itemized preliminary cost breakdown with milestone estimates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-[#FAF7F0] rounded-3xl p-7 border border-[#DED4C1] shadow-sm space-y-4">
                <h3 className="font-serif text-xl text-[#252321]">
                  Why Choose AK BUILDERS?
                </h3>
                <ul className="space-y-3 text-xs text-[#524E48]">
                  <li className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C7A96B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#252321]">100% Free & Transparent:</strong> No hidden consultation fees or obligation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C7A96B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#252321]">Fast 24-48h Turnaround:</strong> Direct response from licensed builders.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C7A96B] shrink-0 mt-0.5" />
                    <span><strong className="text-[#252321]">Architectural Integrity:</strong> Engineered precision and luxury execution.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-[#E5DAC8] text-xs space-y-2 text-[#77736C]">
                  <p className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#C7A96B]" />
                    <span>hello@akbuilders.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#C7A96B]" />
                    <span>+1 (555) 123-4567</span>
                  </p>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

