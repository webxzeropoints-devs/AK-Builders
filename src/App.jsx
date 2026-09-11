import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ProjectsPage from './pages/ProjectsPage'
import QuotePage from './pages/QuotePage'
import ServicesPage from './pages/ServicesPage'
import TermsPage from './pages/TermsPage'

function App() {
  return (
    <>
      <ScrollToTop />
      <LoadingScreen />

      <div className="min-h-screen bg-[#f5f1ea] text-[#171311]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/get-a-quote" element={<QuotePage />} />
            <Route path="/free-quote" element={<QuotePage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
