import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Text,
    VStack,
    Image,
    SimpleGrid,
    Link,
    HStack,
    Select,
    createListCollection,
    Portal,
    useBreakpointValue
} from '@chakra-ui/react'
import ExpertiseCard from './landing-page/ExpertiseCard'
import ScoreCard from './landing-page/ScoreCard'
import { useColorModeValue, ColorModeButton } from './ui/color-mode'
import { useRef, useState } from 'react'
import type { IScore } from '~/types/scores'
import { useLoaderData } from 'react-router'
import { expertiseData } from './landing-page/data/expertise'

const LandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const heroBg = useColorModeValue('blue.50', 'gray.800')
    const cardBg = useColorModeValue('white', 'gray.700')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

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
            <Box as="header" bg={useColorModeValue('blue.700', 'gray.900')} color="white" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <Heading size="lg">Nicolas Dross - Partitions</Heading>
                        <Flex align="center" gap={4}>
                            <Link href="https://nicolasdross.fr">
                                <Button variant="outline" colorScheme="whiteAlpha" color={'white'}>
                                    Site principal
                                </Button>
                            </Link>
                            <ColorModeButton color={'white'} />
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box bg={heroBg} py={20}>
                <Container maxW="container.xl">
                    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                        <VStack align="flex-start" gap={6} maxW="500px" color={textColor}>
                            <Heading size="2xl">Compositions originales de Nicolas Dross</Heading>
                            <Text fontSize="xl">
                                Découvrez et achetez des partitions uniques directement du compositeur
                            </Text>
                            <Button size="lg" colorScheme="blue" onClick={scrollToFeaturedCompositions}>
                                Parcourir les partitions
                            </Button>
                        </VStack>
                        <Image
                            src="/img/nicolas-image.jpg"
                            alt="Nicolas Dross"
                            borderRadius="full"
                            boxSize={{ base: '200px', md: '300px' }}
                            mt={{ base: 8, md: 0 }}
                        />
                    </Flex>
                </Container>
            </Box>

            {/* Expertise Section */}
            <Box py={20} bg={useColorModeValue('white', 'gray.900')}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                        {expertiseData.map((expertise, index) => (
                            <ExpertiseCard
                                key={index}
                                bg={cardBg}
                                color={textColor}
                                icon={expertise.icon}
                                title={expertise.title}
                                text={expertise.text}
                            />
                        ))}
                    </SimpleGrid>
                </Container>
            </Box>

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
            <Box py={20}>
                <Container maxW="container.xl">
                    <VStack gap={8} align="center" textAlign="center">
                        <Heading size="xl">À propos de Nicolas Dross</Heading>
                        <Text fontSize="lg" maxW="800px">
                            Pianiste, compositeur, arrangeur et enseignant, Nicolas Dross est un artiste curieux et
                            polyvalent. Formé au Conservatoire National de Paris, il compose pour ses amis proches et
                            enseigne le piano en région parisienne.
                        </Text>
                        <Link href="https://nicolasdross.fr">
                            <Button variant="ghost" colorScheme="blue" textDecoration="underline">
                                En savoir plus sur Nicolas Dross
                            </Button>
                        </Link>
                    </VStack>
                </Container>
            </Box>

            {/* Footer */}
            <Box
                as="footer"
                bg={useColorModeValue('blue.700', 'gray.900')}
                color={useColorModeValue('white', 'whiteAlpha.900')}
                py={10}
            >
                <Container maxW="container.xl">
                    <Text textAlign="center">
                        &copy; {new Date().getFullYear()} Nicolas Dross. Tous droits réservés.
                    </Text>
                </Container>
            </Box>
        </Box>
    )
}

export default LandingPage
