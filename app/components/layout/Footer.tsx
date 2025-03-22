import { Box, Container, Text } from '@chakra-ui/react'
import { useColorModeValue } from '../ui/color-mode'

const Footer = () => (
    <Box
        as="footer"
        bg={useColorModeValue('blue.700', 'gray.900')}
        color={useColorModeValue('white', 'whiteAlpha.900')}
        py={10}
    >
        <Container maxW="container.xl">
            <Text textAlign="center">&copy; {new Date().getFullYear()} Nicolas Dross. Tous droits réservés.</Text>
        </Container>
    </Box>
)

export default Footer
