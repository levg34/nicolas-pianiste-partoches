import { Box, Button, Container, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'
import useCustomColorMode from './useCustomColorMode'

type Props = {
    scrollToFeaturedCompositions: () => void
}

const HeroSection = ({ scrollToFeaturedCompositions }: Props) => {
    const heroBg = useColorModeValue('blue.50', 'gray.800')
    const { textColor } = useCustomColorMode()

    return (
        <Box bg={heroBg} py={20}>
            <Container maxW="container.xl">
                <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
                    <VStack align="flex-start" gap={6} maxW="500px" color={textColor}>
                        <Heading size="2xl">Compositions originales de Nicolas Dross</Heading>
                        <Text fontSize="xl">
                            Plongez dans l'univers musical de Nicolas et procurez-vous des partitions exclusives
                            directement auprès du compositeur.
                        </Text>
                        <Button size="lg" colorScheme="blue" onClick={scrollToFeaturedCompositions}>
                            Explorer les partitions
                        </Button>
                    </VStack>
                    <Image
                        src="/img/nicolas-image.jpg"
                        alt="Portrait de Nicolas Dross"
                        borderRadius="full"
                        boxSize={{ base: '200px', md: '300px' }}
                        mt={{ base: 8, md: 0 }}
                    />
                </Flex>
            </Container>
        </Box>
    )
}

export default HeroSection
