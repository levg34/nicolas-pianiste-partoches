import { Box, Button, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link } from '@chakra-ui/react'

const ComposerLandingPage = () => {
    return (
        <Box>
            {/* Header */}
            <Box as="header" bg="gray.50" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <Heading size="lg">Nicolas Dross - Scores</Heading>
                        <Link href="https://nicolasdross.fr">
                            <Button variant="outline">Visit Main Website</Button>
                        </Link>
                    </Flex>
                </Container>
            </Box>

            {/* Hero Section */}
            <Box bg="blue.50" py={20}>
                <Container maxW="container.xl">
                    <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                        <VStack align="flex-start" spacing={6} maxW="500px">
                            <Heading size="2xl">Exclusive Scores by Nicolas Dross</Heading>
                            <Text fontSize="xl">
                                Discover and purchase original compositions directly from the composer
                            </Text>
                            <Button size="lg" colorScheme="blue">
                                Browse Scores
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

            {/* Featured Scores */}
            <Box py={20}>
                <Container maxW="container.xl">
                    <VStack spacing={12}>
                        <Heading size="xl">Featured Compositions</Heading>
                        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                            <ScoreCard title="Sonata No. 1" instrument="Piano" price="24€99" />
                            <ScoreCard title="String Quartet in G" instrument="String Quartet" price="39€99" />
                            <ScoreCard title="Nocturne in B-flat" instrument="Piano" price="19€99" />
                        </SimpleGrid>
                        <Button size="lg" variant="outline" colorScheme="blue">
                            View All Scores
                        </Button>
                    </VStack>
                </Container>
            </Box>

            {/* About Section */}
            <Box bg="gray.50" py={20}>
                <Container maxW="container.xl">
                    <VStack spacing={8} align="center" textAlign="center">
                        <Heading size="xl">About Nicolas Dross</Heading>
                        <Text fontSize="lg" maxW="800px">
                            Nicolas Dross is an award-winning composer known for his emotive and innovative works. With
                            a career spanning over two decades, Nicolas has composed for orchestras, chamber ensembles,
                            and soloists worldwide.
                        </Text>
                        <Link href="https://nicolasdross.fr">
                            <Button variant="link" colorScheme="blue">
                                Learn more about Nicolas Dross
                            </Button>
                        </Link>
                    </VStack>
                </Container>
            </Box>

            {/* Footer */}
            <Box as="footer" bg="gray.100" py={10}>
                <Container maxW="container.xl">
                    <Text textAlign="center">&copy; 2025 Nicolas Dross. All rights reserved.</Text>
                </Container>
            </Box>
        </Box>
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
            <Button colorScheme="blue">Purchase</Button>
        </VStack>
    )
}

export default ComposerLandingPage
