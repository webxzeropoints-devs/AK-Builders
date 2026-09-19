import Services from '../components/Services'
import Statistics from '../components/Statistics'
import FeatureCard from '../components/FeatureCard'

function ServicesPage() {
  return (
    <>
      <Services />
      <Statistics />
      <FeatureCard
        title={"Transparent Estimation &\nQuality Workmanship"}
        badgeTitle="Clear Quotations & Stages"
        badgeSubtitle="Systematic Progress & Attention to Detail"
        icons={['shield', 'check']}
        comment="We approached AK Builders for our house construction in Avadi, and the overall experience was very smooth. From the initial discussion and planning to the actual construction work, the team was approachable and explained each stage clearly. They also gave us a clear quotation and kept us informed about the progress. The quality of the work and attention to small details really impressed us."
        author="Arun Kumar"
        location="House Construction, Avadi"
      />
    </>
  )
}

export default ServicesPage
