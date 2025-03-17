import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, Switch } from '@chakra-ui/react'
import { FaMusic, FaPen, FaChalkboardTeacher } from 'react-icons/fa'
import ExpertiseCard from './landing-page/ExpertiseCard'
import ScoreCard from './landing-page/ScoreCard'
import { useColorMode, useColorModeValue, ColorModeButton } from './ui/color-mode'

const ComposerLandingPage = () => {
    const { toggleColorMode } = useColorMode()

    const heroBg = useColorModeValue('blue.50', 'gray.800')
    const cardBg = useColorModeValue('white', 'gray.700')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

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
                            <Button size="lg" colorScheme="blue">
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
                        <ExpertiseCard
                            bg={cardBg}
                            color={textColor}
                            icon={FaMusic}
                            title="Pianiste"
                            text="Formé au Conservatoire National de Paris"
                        />
                        <ExpertiseCard
                            bg={cardBg}
                            color={textColor}
                            icon={FaPen}
                            title="Compositeur & Arrangeur"
                            text="Créations originales et arrangements innovants"
                        />
                        <ExpertiseCard
                            bg={cardBg}
                            color={textColor}
                            icon={FaChalkboardTeacher}
                            title="Enseignant"
                            text="Partage sa passion et son expertise"
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Featured Compositions */}
            <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20}>
                <Container maxW="container.xl">
                    <VStack gap={12}>
                        <Heading size="xl" color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                            Compositions en vedette
                        </Heading>

                        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                            <ScoreCard
                                title="Piano Orchestra"
                                instrument="Piano"
                                price="24,99 €"
                                bg={useColorModeValue('white', 'gray.700')}
                                textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                            />
                            <ScoreCard
                                title="Mélodie pour voix et piano"
                                instrument="Voix et Piano"
                                price="19,99 €"
                                bg={useColorModeValue('white', 'gray.700')}
                                textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                            />
                            <ScoreCard
                                title="Quatuor à cordes No. 1"
                                instrument="Quatuor à cordes"
                                price="39,99 €"
                                bg={useColorModeValue('white', 'gray.700')}
                                textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                            />
                        </SimpleGrid>

                        <Button
                            size="lg"
                            variant="outline"
                            colorScheme="blue"
                            borderColor={useColorModeValue('blue.500', 'blue.200')}
                            color={useColorModeValue('blue.600', 'blue.200')}
                            _hover={{
                                bg: useColorModeValue('blue.50', 'whiteAlpha.100')
                            }}
                        >
                            Voir toutes les partitions
                        </Button>
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
