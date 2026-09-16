import About from '../components/About'
import FeatureCard from '../components/FeatureCard'
import Statistics from '../components/Statistics'

function AboutPage() {
  return (
    <>
      <About />
      <Statistics />
      <FeatureCard
        title={"Heritage &\nCraftsmanship"}
        badgeTitle="Authentic Mutram"
        badgeSubtitle="Modern South Indian Architecture"
        icons={['drafting', 'compass']}
        comment="AK BUILDERS captured the traditional Tamil courtyard vision with modern luxury. The attention to natural light, teakwood columns, and seamless spatial flow is unmatched."
        author="Priya Sundaram"
        location="Courtyard Residence, Coimbatore"
      />
    </>
  )
}

export default AboutPage
