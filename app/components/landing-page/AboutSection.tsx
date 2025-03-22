import { Box, Button, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'

const AboutSection = () => (
    <Box py={20}>
        <Container maxW="container.xl">
            <VStack gap={8} align="center" textAlign="center">
                <Heading size="xl">À propos de Nicolas Dross</Heading>
                <Text fontSize="lg" maxW="800px">
                    Pianiste, compositeur, arrangeur et enseignant, Nicolas Dross est un artiste curieux et polyvalent.
                    Formé au Conservatoire National de Paris, il compose pour ses amis proches et enseigne le piano en
                    région parisienne.
                </Text>
                <Link href="https://nicolasdross.fr">
                    <Button variant="ghost" colorScheme="blue" textDecoration="underline">
                        En savoir plus sur Nicolas Dross
                    </Button>
                </Link>
            </VStack>
        </Container>
    </Box>
)

export default AboutSection
