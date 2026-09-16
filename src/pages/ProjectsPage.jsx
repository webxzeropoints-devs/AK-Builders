import Projects from '../components/Projects'
import FeatureCard from '../components/FeatureCard'
import Testimonials from '../components/Testimonials'

function ProjectsPage() {
  return (
    <>
      <Projects />
      <FeatureCard
        title={"Coastal &\nBespoke Villas"}
        badgeTitle="ECR & Prime Hubs"
        badgeSubtitle="Award-Winning Construction"
        icons={['building', 'award']}
        comment="AK BUILDERS transformed our vision of a coastal modern home on ECR into a beautifully executed reality with exceptional attention to detail."
        author="Karthik Subramanian"
        location="Coastal Luxury Villa, ECR Chennai"
      />
      <Testimonials />
    </>
  )
}

export default ProjectsPage
