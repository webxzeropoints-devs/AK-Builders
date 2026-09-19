import About from '../components/About'
import FeatureCard from '../components/FeatureCard'
import Statistics from '../components/Statistics'

function AboutPage() {
  return (
    <>
      <About />
      <Statistics />
      <FeatureCard
        title={"Practical Planning &\nReliable Execution"}
        badgeTitle="Client-Centric Approach"
        badgeSubtitle="Clear Guidance & Neat Finishing"
        icons={['drafting', 'sparkles']}
        comment="AK Builders helped us turn our house plan into reality, and we are genuinely happy with the result. The team understood our requirements and suggested practical ideas wherever needed. Communication was easy throughout the project, and our questions were answered without unnecessary delays. The finishing work was done neatly, and the overall process was handled professionally."
        author="Priya S"
        location="House Construction, Poonamallee"
      />
    </>
  )
}

export default AboutPage
