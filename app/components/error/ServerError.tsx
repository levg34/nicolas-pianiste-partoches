import { Box, Container, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'

const ServerError = () => {
    const bg = useColorModeValue('gray.50', 'gray.800')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

    return (
        <Box bg={bg} py={20}>
            <Container maxW="container.xl">
                <Flex justify="center" align="center" direction="column">
                    <Heading size="2xl" color={textColor}>
                        Erreur 500
                    </Heading>
                    <Text fontSize="xl" color={textColor} mt={4}>
                        Une erreur interne est survenue.
                    </Text>
                    <Text fontSize="lg" color={textColor} mt={2}>
                        Veuillez essayer plus tard ou contacter le support.
                    </Text>
                    <VStack gap={4} mt={8}>
                        <a href="/">
                            <button
                                style={{
                                    padding: '1rem 2rem',
                                    borderRadius: '0.375rem',
                                    border: 'none',
                                    backgroundColor: useColorModeValue('blue.500', 'blue.200'),
                                    color: useColorModeValue('gray.800', 'black.900'),
                                    cursor: 'pointer'
                                }}
                            >
                                Retour à la page d'accueil
                            </button>
                        </a>
                    </VStack>
                </Flex>
            </Container>
        </Box>
    )
}

export default ServerError
