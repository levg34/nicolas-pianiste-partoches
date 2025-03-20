import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from '@chakra-ui/react'
import { FaMusic, FaPen, FaChalkboardTeacher } from 'react-icons/fa'
import ExpertiseCard from './landing-page/ExpertiseCard'
import ScoreCard from './landing-page/ScoreCard'
import { useColorModeValue, ColorModeButton } from './ui/color-mode'
import { useRef, useState } from 'react'
import type { IScore } from '~/types/scores'

const LandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const heroBg = useColorModeValue('blue.50', 'gray.800')
    const cardBg = useColorModeValue('white', 'gray.700')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

    const scrollToFeaturedCompositions = () => {
        featuredCompositionsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const allScores: IScore[] = [
        {
            title: 'Piano Orchestra',
            instrument: 'Piano',
            price: '24,99 €',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            audioUrl: '/audio/piano-orchestra.mp3',
            pdfUrl: '/pdf/piano-orchestra-preview.pdf',
            image: 'https://www.imusic-school.com/wp-content/uploads/2019/08/Nocturne-N%C2%B021-Chopin-partition-piano.png'
        },
        {
            title: 'Nocturne Op.9 No.2',
            instrument: 'Piano',
            price: '19,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/nocturne-op9-no2.mp3',
            pdfUrl: '/pdf/nocturne-op9-no2-preview.pdf'
        },
        {
            title: 'Clair de Lune',
            instrument: 'Piano',
            price: '22,99 €',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            audioUrl: '/audio/clair-de-lune.mp3',
            pdfUrl: '/pdf/clair-de-lune-preview.pdf'
        },
        {
            title: 'Canon en Ré majeur',
            instrument: 'Piano',
            price: '14,99 €',
            difficulty: 'Facile',
            category: 'Arrangement',
            audioUrl: '/audio/canon-d-major.mp3',
            pdfUrl: '/pdf/canon-d-major-preview.pdf'
        },
        {
            title: 'Fur Elise',
            instrument: 'Piano',
            price: '18,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/fur-elise.mp3',
            pdfUrl: '/pdf/fur-elise-preview.pdf'
        },
        {
            title: 'Improvisation Jazz n°1',
            instrument: 'Piano',
            price: '25,99 €',
            difficulty: 'Très difficile',
            category: 'Pastiches',
            audioUrl: '/audio/improvisation-jazz-1.mp3',
            pdfUrl: '/pdf/improvisation-jazz-1-preview.pdf'
        },
        {
            title: 'Gymnopédie n°1',
            instrument: 'Piano',
            price: '20,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/gymnopedie-1.mp3',
            pdfUrl: '/pdf/gymnopedie-1-preview.pdf'
        },
        {
            title: 'Thème de Star Wars',
            instrument: 'Piano',
            price: '16,99 €',
            difficulty: 'Facile',
            category: 'Arrangement',
            audioUrl: '/audio/star-wars-theme.mp3',
            pdfUrl: '/pdf/star-wars-theme-preview.pdf'
        }
    ]

    const [showAllScores, setShowAllScores] = useState(false)

    const displayedScores = showAllScores ? allScores : allScores.slice(0, 3)

    const expertiseData = [
        {
            icon: FaMusic,
            title: 'Pianiste',
            text: 'Formé au Conservatoire National de Paris'
        },
        {
            icon: FaPen,
            title: 'Compositeur & Arrangeur',
            text: 'Créations originales et arrangements innovants'
        },
        {
            icon: FaChalkboardTeacher,
            title: 'Enseignant',
            text: 'Partage sa passion et son expertise'
        }
    ]

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
                            Compositions en vedette
                        </Heading>

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
