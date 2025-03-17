import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, Icon } from '@chakra-ui/react'
import { FaMusic, FaPen, FaChalkboardTeacher } from 'react-icons/fa'

const ComposerLandingPage = () => {
    return (
        <Box>
            {/* Header */}
            <Box as="header" bg="blue.700" color="white" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <Heading size="lg">Nicolas Dross - Partitions</Heading>
                        <Link href="https://nicolasdross.fr">
                            <Button variant="outline" colorScheme="whiteAlpha">
                                Site principal
                            </Button>
                        </Link>
                    </Flex>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box bg="blue.50" py={20}>
                <Container maxW="container.xl">
                    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                        <VStack align="flex-start" spacing={6} maxW="500px">
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
            <Box py={20}>
                <Container maxW="container.xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                        <ExpertiseCard
                            icon={FaMusic}
                            title="Pianiste"
                            text="Formé au Conservatoire National de Paris"
                        />
                        <ExpertiseCard
                            icon={FaPen}
                            title="Compositeur & Arrangeur"
                            text="Créations originales et arrangements innovants"
                        />
                        <ExpertiseCard
                            icon={FaChalkboardTeacher}
                            title="Enseignant"
                            text="Partage sa passion et son expertise"
                        />
                    </SimpleGrid>
                </Container>
            </Box>

            {/* Featured Compositions */}
            <Box bg="gray.50" py={20}>
                <Container maxW="container.xl">
                    <VStack spacing={12}>
                        <Heading size="xl">Compositions en vedette</Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            <ScoreCard title="Piano Orchestra" instrument="Piano" price="24,99 €" />
                            <ScoreCard title="Mélodie pour voix et piano" instrument="Voix et Piano" price="19,99 €" />
                            <ScoreCard title="Quatuor à cordes No. 1" instrument="Quatuor à cordes" price="39,99 €" />
                        </SimpleGrid>
                        <Button size="lg" variant="outline" colorScheme="blue">
                            Voir toutes les partitions
                        </Button>
                    </VStack>
                </Container>
            </Box>

            {/* About Section */}
            <Box py={20}>
                <Container maxW="container.xl">
                    <VStack spacing={8} align="center" textAlign="center">
                        <Heading size="xl">À propos de Nicolas Dross</Heading>
                        <Text fontSize="lg" maxW="800px">
                            Pianiste, compositeur, arrangeur et enseignant, Nicolas Dross est un artiste curieux et
                            polyvalent. Formé au Conservatoire National de Paris, il compose pour ses amis proches et
                            enseigne le piano en région parisienne.
                        </Text>
                        <Link href="https://nicolasdross.fr">
                            <Button variant="link" colorScheme="blue">
                                En savoir plus sur Nicolas Dross
                            </Button>
                        </Link>
                    </VStack>
                </Container>
            </Box>

            {/* Footer */}
            <Box as="footer" bg="blue.700" color="white" py={10}>
                <Container maxW="container.xl">
                    <Text textAlign="center">&copy; 2025 Nicolas Dross. Tous droits réservés.</Text>
                </Container>
            </Box>
        </Box>
    )
}

const ExpertiseCard = ({ icon, title, text }) => {
    return (
        <VStack align="center" textAlign="center" p={6} bg="white" borderRadius="md" boxShadow="md">
            <Icon as={icon} w={10} h={10} color="blue.500" />
            <Heading size="md">{title}</Heading>
            <Text>{text}</Text>
        </VStack>
    )
}

const ScoreCard = ({ title, instrument, price }) => {
    return (
        <VStack bg="white" p={6} borderRadius="md" boxShadow="md" align="stretch" spacing={4}>
            <Image
                src="https://www.imusic-school.com/wp-content/uploads/2019/08/Nocturne-N%C2%B021-Chopin-partition-piano.png"
                alt={title}
                borderRadius="md"
            />
            <Heading size="md">{title}</Heading>
            <Text>{instrument}</Text>
            <Text fontWeight="bold">{price}</Text>
            <Button colorScheme="blue">Acheter</Button>
        </VStack>
    )
}

export default ComposerLandingPage
