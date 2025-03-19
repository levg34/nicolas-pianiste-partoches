import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from '@chakra-ui/react'
import { FaMusic, FaPen, FaChalkboardTeacher } from 'react-icons/fa'
import ExpertiseCard from './landing-page/ExpertiseCard'
import ScoreCard from './landing-page/ScoreCard'
import { useColorModeValue, ColorModeButton } from './ui/color-mode'
import { useRef, useState } from 'react'

const ComposerLandingPage = () => {
    const featuredCompositionsRef = useRef<HTMLDivElement>(null)

    const heroBg = useColorModeValue('blue.50', 'gray.800')
    const cardBg = useColorModeValue('white', 'gray.700')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

    const scrollToFeaturedCompositions = () => {
        featuredCompositionsRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const allScores = [
        { title: 'Piano Orchestra', instrument: 'Piano', price: '24,99 €' },
        { title: 'Mélodie pour voix et piano', instrument: 'Voix et Piano', price: '19,99 €' },
        { title: 'Quatuor à cordes No. 1', instrument: 'Quatuor à cordes', price: '39,99 €' },
        { title: 'Sonate pour violon', instrument: 'Violon', price: '29,99 €' },
        { title: 'Concerto pour flûte', instrument: 'Flûte', price: '34,99 €' },
        { title: 'Suite pour violoncelle', instrument: 'Violoncelle', price: '27,99 €' },
        { title: 'Trio pour piano', instrument: 'Piano Trio', price: '44,99 €' },
        { title: 'Symphonie No. 1', instrument: 'Orchestre', price: '59,99 €' },
        { title: 'Nocturne pour harpe', instrument: 'Harpe', price: '22,99 €' },
        { title: 'Quintette à vent', instrument: 'Ensemble à vent', price: '49,99 €' },
        { title: 'Étude pour guitare', instrument: 'Guitare', price: '17,99 €' },
        { title: 'Rhapsodie pour clarinette', instrument: 'Clarinette', price: '26,99 €' }
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

                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                            {displayedScores.map((score, index) => (
                                <ScoreCard
                                    key={index}
                                    title={score.title}
                                    instrument={score.instrument}
                                    price={score.price}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                                    audioUrl="/scores/[Free-scores.com]_leonard-anderson-plays-inaccessible-etoile-from-poupart-taussat-damien-20150506012004.mp3"
                                    pdfUrl="/scores/[Free-scores.com]_poupart-taussat-damien-039-inaccessible-toile-77572.pdf"
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

export default ComposerLandingPage
