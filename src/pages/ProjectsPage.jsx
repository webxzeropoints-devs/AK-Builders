import Projects from '../components/Projects'
import FeatureCard from '../components/FeatureCard'
import Testimonials from '../components/Testimonials'

function ProjectsPage() {
  return (
    <>
      <Projects />
      <FeatureCard
        title={"Residential Homes &\nCustom Living"}
        badgeTitle="Tiruvallur & Suburbs"
        badgeSubtitle="Quality Construction & Timely Handover"
        icons={['building', 'check']}
        comment="We were looking for a reliable builder for our new home in Tiruvallur and chose AK Builders after discussing our requirements with them. The team was very patient during the planning stage and helped us understand the different construction requirements. The work progressed systematically, and they kept us updated about the project. We particularly appreciated their professionalism and attention to detail. The finished house looks exactly the way we had hoped."
        author="Suresh & Family"
        location="New Home, Tiruvallur"
      />
      <Testimonials />
    </>
  )
}

export default ProjectsPage
