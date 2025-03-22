import { Button, SimpleGrid } from '@chakra-ui/react'
import ScoreCard from './ScoreCard'
import { useColorModeValue } from '~/components/ui/color-mode'
import type { IScore } from '~/types/scores'

type Props = {
    displayedScores: IScore[]
    showAllScores: boolean
    setShowAllScores: (show: boolean) => void
}

const ScoreList = ({ displayedScores, showAllScores, setShowAllScores }: Props) => {
    return (
        <>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} alignItems="flex-start">
                {displayedScores.map((score, index) => (
                    <ScoreCard
                        key={index}
                        title={score.title}
                        instrument={score.instrument}
                        price={score.price}
                        difficulty={score.difficulty}
                        category={score.category}
                        audioUrl={score.audioUrl}
                        pdfUrl={score.pdfUrl}
                        image={score.image}
                        bg={useColorModeValue('white', 'gray.700')}
                        textColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    />
                ))}
            </SimpleGrid>

            {!showAllScores && (
                <Button
                    size="lg"
                    variant="outline"
                    colorScheme="blue"
                    borderColor={useColorModeValue('blue.500', 'blue.200')}
                    color={useColorModeValue('blue.600', 'blue.200')}
                    _hover={{
                        bg: useColorModeValue('blue.50', 'whiteAlpha.100')
                    }}
                    onClick={() => setShowAllScores(true)}
                >
                    Voir toutes les partitions
                </Button>
            )}
        </>
    )
}

export default ScoreList
