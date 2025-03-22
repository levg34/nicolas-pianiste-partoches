import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    Link,
    HStack,
    Select,
    createListCollection,
    Portal,
    useBreakpointValue
} from '@chakra-ui/react'
import ScoreCard from './landing-page/scores/ScoreCard'
import { useColorModeValue } from './ui/color-mode'
import { useRef, useState } from 'react'
import type { IScore } from '~/types/scores'
import { useLoaderData } from 'react-router'
import Header from './layout/Header'
import HeroSection from './landing-page/HeroSection'
import ExpertiseSection from './landing-page/expertise/ExpertiseSection'
import Footer from './layout/Footer'
import AboutSection from './landing-page/AboutSection'

const LandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const scrollToFeaturedCompositions = () => {
        featuredCompositionsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const allScores: IScore[] = useLoaderData()

    const [showAllScores, setShowAllScores] = useState(false)

    const displayedScores = showAllScores ? allScores : allScores.slice(0, 3)

    const difficulties = createListCollection({
        items: [
            { label: 'Facile', value: 'Facile' },
            { label: 'Moyen', value: 'Moyen' },
            { label: 'Difficile', value: 'Difficile' },
            { label: 'Très difficile', value: 'Très difficile' }
        ]
    })

    const categories = createListCollection({
        items: [
            { label: 'Pédagogie', value: 'Pédagogie' },
            { label: 'Arrangement', value: 'Arrangement' },
            { label: 'Pastiches', value: 'Pastiches' },
            { label: 'Œuvres originales', value: 'Œuvres originales' }
        ]
    })

    const instruments = createListCollection({
        items: [
            { label: 'Piano', value: 'Piano' },
            { label: 'Guitare', value: 'Guitare' },
            { label: 'Violon', value: 'Violon' }
        ]
    })

    const isMobile = useBreakpointValue({ base: true, md: false })

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
                        {showAllScores && (
                            <HStack gap={4} w="100%" justify="center">
                                <Select.Root collection={difficulties} size="sm" width="200px">
                                    <Select.Label>Difficulté</Select.Label>
                                    <Select.Control>
                                        <Select.Trigger>
                                            <Select.ValueText placeholder="Filtrer par difficulté" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                            <Select.ClearTrigger />
                                            {!isMobile && <Select.Indicator />}
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {difficulties.items.map((item) => (
                                                    <Select.Item item={item} key={item.value}>
                                                        {item.label}
                                                        <Select.ItemIndicator />
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                                </Select.Root>

                                <Select.Root collection={categories} size="sm" width="200px">
                                    <Select.Label>Catégorie</Select.Label>
                                    <Select.Control>
                                        <Select.Trigger>
                                            <Select.ValueText placeholder="Filtrer par catégorie" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                            <Select.ClearTrigger />
                                            {!isMobile && <Select.Indicator />}
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {categories.items.map((item) => (
                                                    <Select.Item item={item} key={item.value}>
                                                        {item.label}
                                                        <Select.ItemIndicator />
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                                </Select.Root>

                                <Select.Root multiple collection={instruments} size="sm" width="200px">
                                    <Select.Label>Instrument</Select.Label>
                                    <Select.Control>
                                        <Select.Trigger>
                                            <Select.ValueText placeholder="Filtrer par instrument" />
                                        </Select.Trigger>
                                        <Select.IndicatorGroup>
                                            <Select.ClearTrigger />
                                            {!isMobile && <Select.Indicator />}
                                        </Select.IndicatorGroup>
                                    </Select.Control>
                                    <Portal>
                                        <Select.Positioner>
                                            <Select.Content>
                                                {instruments.items.map((item) => (
                                                    <Select.Item item={item} key={item.value}>
                                                        {item.label}
                                                        <Select.ItemIndicator />
                                                    </Select.Item>
                                                ))}
                                            </Select.Content>
                                        </Select.Positioner>
                                    </Portal>
                                </Select.Root>
                            </HStack>
                        )}

                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} alignItems="flex-start">
                            {displayedScores.map((score, index) => (
                                <ScoreCard
                                    key={index}
                                    title={score.title}
                                    instrument={score.instrument}
                                    price={score.price}
                                    difficulty={score.difficulty}
                                    category={score.category}
                                    audioUrl={score.audioUrl}
                                    pdfUrl={score.pdfUrl}
                                    image={score.image}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                                />
                            ))}
                        </SimpleGrid>

                        {!showAllScores && (
                            <Button
                                size="lg"
                                variant="outline"
                                colorScheme="blue"
                                borderColor={useColorModeValue('blue.500', 'blue.200')}
                                color={useColorModeValue('blue.600', 'blue.200')}
                                _hover={{
                                    bg: useColorModeValue('blue.50', 'whiteAlpha.100')
                                }}
                                onClick={() => setShowAllScores(true)}
                            >
                                Voir toutes les partitions
                            </Button>
                        )}
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
