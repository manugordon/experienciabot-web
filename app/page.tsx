import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import CredibilityStrip from '@/components/sections/CredibilityStrip'
import ProblemSection from '@/components/sections/ProblemSection'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Testimonial from '@/components/sections/Testimonial'
import HowWeWork from '@/components/sections/HowWeWork'
import Packages from '@/components/sections/Packages'
import CaseStudyPreview from '@/components/sections/CaseStudyPreview'
import TeamPreview from '@/components/sections/TeamPreview'
import SafetyBanner from '@/components/sections/SafetyBanner'
import FAQPreview from '@/components/sections/FAQPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <ProblemSection />
        <WhatWeDo />
        <Testimonial />
        <HowWeWork />
        <Packages />
        <CaseStudyPreview />
        <TeamPreview />
        <SafetyBanner />
        <FAQPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
