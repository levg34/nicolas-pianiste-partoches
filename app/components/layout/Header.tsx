import { Box, Button, Container, Flex, Heading, Link } from '@chakra-ui/react'
import { ColorModeButton, useColorModeValue } from '../ui/color-mode'

const Header = () => (
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
)

export default Header
