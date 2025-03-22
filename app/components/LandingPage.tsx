import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { useColorModeValue } from './ui/color-mode'
import type { IScore } from '~/types/scores'
import { useRef, useState } from 'react'
import { useLoaderData } from 'react-router'
import Header from './layout/Header'
import HeroSection from './landing-page/HeroSection'
import ExpertiseSection from './landing-page/expertise/ExpertiseSection'
import Footer from './layout/Footer'
import AboutSection from './landing-page/AboutSection'
import ScoreFilters from './landing-page/scores/ScoreFilters'
import ScoreList from './landing-page/scores/ScoreList'

const LandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const scrollToFeaturedCompositions = () => {
        featuredCompositionsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const allScores: IScore[] = useLoaderData()

    const [showAllScores, setShowAllScores] = useState(false)

    const displayedScores = showAllScores ? allScores : allScores.slice(0, 3)

    return (
        <Box>
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <HeroSection scrollToFeaturedCompositions={scrollToFeaturedCompositions} />

            {/* Expertise Section */}
            <ExpertiseSection />

            {/* Featured Compositions */}
            <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20} ref={featuredCompositionsRef}>
                <Container maxW="container.xl">
                    <VStack gap={12}>
                        <Heading size="xl" color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                            {!showAllScores ? 'Compositions en vedette' : 'Toutes les compositions'}
                        </Heading>

                        {/* Filtres */}
                        {showAllScores && <ScoreFilters />}

                        <ScoreList
                            showAllScores={showAllScores}
                            setShowAllScores={setShowAllScores}
                            displayedScores={displayedScores}
                        />
                    </VStack>
                </Container>
            </Box>

            {/* About Section */}
            <AboutSection />

            {/* Footer */}
            <Footer />
        </Box>
    )
}

export default LandingPage
