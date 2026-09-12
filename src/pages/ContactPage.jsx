import { useState } from 'react'

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  location: '',
  budget: '',
  timeline: '',
  message: '',
}

function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData(initialForm)
  }

  return (
    <section className="bg-[#F5F0E6] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#171716] text-[#FAF7F0] rounded-[2rem] p-8 lg:p-10 shadow-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C7A96B] font-medium mb-5">
              Start a Project
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-none mb-6">
              Tell us about your build.
            </h1>
            <p className="text-base text-[#d9d3c8] leading-relaxed mb-8">
              Share your vision, required services, and timeline. Our team will review your
              request and get back to you with the next steps for your construction project.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] mb-2">Email</p>
                <p className="text-[#FAF7F0]">hello@akbuilders.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] mb-2">Phone</p>
                <p className="text-[#FAF7F0]">+91 98400 12345</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] mb-2">Location</p>
                <p className="text-[#FAF7F0]">Chennai & across Tamil Nadu</p>
              </div>
            </div>
          </div>

          <div className="bg-[#FAF7F0] rounded-[2rem] p-6 lg:p-8 shadow-xl border border-[#e7dcc7]">
            {submitted ? (
              <div className="rounded-2xl border border-[#C7A96B] bg-[#F0E5D0] p-6 text-[#252321]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C7A96B] font-medium mb-3">
                  Request Received
                </p>
                <h2 className="font-serif text-3xl mb-3">Thank you for reaching out.</h2>
                <p className="text-[#4d4a45] leading-relaxed">
                  Your construction inquiry has been submitted successfully. Our team will review
                  your details and contact you shortly to discuss the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#252321] mb-2">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#252321] mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#252321] mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98400 12345"
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-[#252321] mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] focus:border-[#C7A96B] focus:outline-none"
                    >
                      <option value="">Select a project type</option>
                      <option value="Residential Construction">Residential Construction</option>
                      <option value="Commercial Construction">Commercial Construction</option>
                      <option value="Architecture & Construction">Architecture & Construction</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                      <option value="Turnkey Construction">Turnkey Construction</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-[#252321] mb-2">
                      Project Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      placeholder="City / Area"
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#252321] mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] focus:border-[#C7A96B] focus:outline-none"
                    >
                      <option value="">Select a budget range</option>
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="₹1 Crore - ₹2.5 Crores">₹1 Crore - ₹2.5 Crores</option>
                      <option value="₹2.5 Crores - ₹5 Crores">₹2.5 Crores - ₹5 Crores</option>
                      <option value="₹5 Crores+">₹5 Crores+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-[#252321] mb-2">
                    Preferred Timeline
                  </label>
                  <input
                    id="timeline"
                    name="timeline"
                    type="text"
                    value={formData.timeline}
                    onChange={handleChange}
                    placeholder="e.g. 3 months"
                    className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#252321] mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    placeholder="Tell us more about your construction project, goals, and requirements."
                    className="w-full rounded-xl border border-[#d7cdb7] bg-white px-4 py-3 text-[#252321] placeholder:text-[#8a857f] focus:border-[#C7A96B] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#C7A96B] px-6 py-4 text-[#252321] font-medium transition-colors hover:bg-[#b89b60]"
                >
                  Submit Project Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
