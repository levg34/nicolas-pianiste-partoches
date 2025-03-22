import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { useColorModeValue } from '../../ui/color-mode'
import { expertiseData } from './expertise-data'
import ExpertiseCard from './ExpertiseCard'
import useCustomColorMode from '../useCustomColorMode'

const ExpertiseSection = () => {
    const { textColor, cardBg } = useCustomColorMode()
    return (
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
    )
}

export default ExpertiseSection
