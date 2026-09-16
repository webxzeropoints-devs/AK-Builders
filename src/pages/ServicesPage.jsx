import Services from '../components/Services'
import Statistics from '../components/Statistics'
import FeatureCard from '../components/FeatureCard'

function ServicesPage() {
  return (
    <>
      <Services />
      <Statistics />
      <FeatureCard
        title={"Design-Led Construction &\nPrecision Engineering"}
        badgeTitle="100% Quality Assurance"
        badgeSubtitle="Transparent Timelines & Handover"
        icons={['shield', 'sparkles']}
        comment="From structural planning to final handover, their precision and adherence to timelines were exemplary. AK Builders sets the benchmark for quality construction in Tamil Nadu."
        author="Dr. Rajesh Natarajan"
        location="Commercial Centre, OMR Chennai"
      />
    </>
  )
}

export default ServicesPage
