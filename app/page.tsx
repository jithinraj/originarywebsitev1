import NavigationHeader from '@/components/NavigationHeader'
import HeroSection from '@/components/HeroSection'
import VerifySection from '@/components/VerifySection'
import SocialProofSection from '@/components/SocialProofSection'
import ControlPlaneSection from '@/components/ControlPlaneSection'
import StandardsIntegrations from '@/components/StandardsIntegrations'
import WorldClassHomePage from '@/components/WorldClassHomePage'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <NavigationHeader />
      <main id="main-content" role="main">
        <HeroSection />
        <VerifySection />
        <SocialProofSection />
        <ControlPlaneSection />
        <StandardsIntegrations />
        <WorldClassHomePage />
      </main>
      <Footer />
    </>
  )
}