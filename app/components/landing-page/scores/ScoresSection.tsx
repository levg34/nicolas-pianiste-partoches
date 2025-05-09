import { Box, Container, Heading, VStack, Text, Button } from '@chakra-ui/react'
import { useColorModeValue } from '../../ui/color-mode'
import { useLoaderData } from 'react-router'
import type { IFilters, IScore } from '~/types/scores'
import { forwardRef, useState } from 'react'
import ScoreFilters from './filters/ScoreFilters'
import ScoreList from './ScoreList'
import { filterScores } from './filters/filter-utils'

type Props = {}

const ScoresSection = forwardRef((_: Props, ref) => {
    const allScores: IScore[] = useLoaderData()

    const [showAllScores, setShowAllScores] = useState(false)

    const [filters, setFilters] = useState<IFilters>({})

    const displayedScores = showAllScores ? filterScores(allScores, filters) : allScores.slice(0, 3)

    const resetFilters = () => {
        setFilters({})
    }

    const NoResultsView = () => (
        <VStack gap={4} align="center">
            <Text fontSize="xl">Aucune composition ne correspond à vos critères de recherche.</Text>
            <Button colorScheme="blue" onClick={resetFilters}>
                Réinitialiser les filtres
            </Button>
        </VStack>
    )

    return (
        <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20} ref={ref}>
            <Container maxW="container.xl">
                <VStack gap={12}>
                    <Heading size="xl" color={useColorModeValue('gray.800', 'whiteAlpha.900')}>
                        {!showAllScores ? 'Compositions en vedette' : 'Toutes les compositions'}
                    </Heading>

                    {/* Filtres */}
                    {showAllScores && <ScoreFilters filters={filters} setFilters={setFilters} />}

                    {displayedScores.length > 0 ? (
                        <ScoreList
                            showAllScores={showAllScores}
                            setShowAllScores={setShowAllScores}
                            displayedScores={displayedScores}
                        />
                    ) : (
                        <NoResultsView />
                    )}
                </VStack>
            </Container>
        </Box>
    )
})

export default ScoresSection
