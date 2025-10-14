import NavigationHeader from '@/components/NavigationHeader'
import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <HeroSection />
        <SocialProofSection />
        <ControlPlaneSection />
        <WorldClassHomePage />
      </main>
      <Footer />
    </>
  )
}