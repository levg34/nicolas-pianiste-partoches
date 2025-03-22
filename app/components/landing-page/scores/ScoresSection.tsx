import { Box, Container, Heading, VStack } from '@chakra-ui/react'
import { useColorModeValue } from '../../ui/color-mode'
import { useLoaderData } from 'react-router'
import type { IScore } from '~/types/scores'
import { forwardRef, useState } from 'react'
import ScoreFilters from './ScoreFilters'
import ScoreList from './ScoreList'

type Props = {}

const ScoresSection = forwardRef((props: Props, ref) => {
    const allScores: IScore[] = useLoaderData()

    const [showAllScores, setShowAllScores] = useState(false)

    const displayedScores = showAllScores ? allScores : allScores.slice(0, 3)
    return (
        <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20} ref={ref}>
            <Container maxW="container.xl">
                <VStack gap={12}>
                    <Heading size="xl" color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                        {!showAllScores ? 'Compositions en vedette' : 'Toutes les compositions'}
                    </Heading>

                    {/* Filtres */}
                    {showAllScores && <ScoreFilters />}

                    <ScoreList
                        showAllScores={showAllScores}
                        setShowAllScores={setShowAllScores}
                        displayedScores={displayedScores}
                    />
                </VStack>
            </Container>
        </Box>
    )
})

export default ScoresSection
