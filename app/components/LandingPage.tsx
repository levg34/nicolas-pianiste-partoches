import { Box } from '@chakra-ui/react'
import { useRef } from 'react'
import Header from './layout/Header'
import HeroSection from './landing-page/HeroSection'
import ExpertiseSection from './landing-page/expertise/ExpertiseSection'
import Footer from './layout/Footer'
import AboutSection from './landing-page/AboutSection'
import ScoresSection from './landing-page/scores/ScoresSection'

const LandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const scrollToFeaturedCompositions = () => {
        featuredCompositionsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <Box>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection scrollToFeaturedCompositions={scrollToFeaturedCompositions} />

            {/* Expertise Section */}
            <ExpertiseSection />

            {/* Featured Compositions */}
            <ScoresSection ref={featuredCompositionsRef} />

            {/* About Section */}
            <AboutSection />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default LandingPage
