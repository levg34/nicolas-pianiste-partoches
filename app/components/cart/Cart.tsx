import { Box, Button, Heading, Image, Text, VStack } from '@chakra-ui/react'
import type { Score } from '@prisma/client'
import { useNavigate } from 'react-router'
import { Toaster, toaster } from '~/components/ui/toaster'

type CartProps = {
    score: Score
}

export default function Cart({ score }: CartProps) {
    const navigate = useNavigate()

    const handlePurchase = () => {
        toaster.success({
            title: 'Achat réussi',
            description: `Merci pour votre achat de "${score.title}" !`,
            action: {
                label: "Retour à l'accueil",
                onClick: () => navigate('/')
            }
        })
    }

    return (
        <Box maxW="500px" mx="auto" p="6" borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Image
                src={score.image ?? '/img/default-score-image.jpg'}
                alt={`Image de la partition ${score.title}`}
                borderRadius="md"
                mb="4"
            />

            <Heading as="h1" size="lg" mb="4" textAlign="center">
                {score.title}
            </Heading>

            <VStack gap="4" align="start">
                <Text>
                    <strong>Instrument :</strong> {score.instrument}
                </Text>
                <Text>
                    <strong>Prix :</strong> {score.price}
                </Text>
                <Text>
                    <strong>Difficulté :</strong> {score.difficulty}
                </Text>
                <Text>
                    <strong>Catégorie :</strong> {score.category}
                </Text>
                {score.usedInstruments && score.usedInstruments.length > 0 && (
                    <Text>
                        <strong>Instruments utilisés :</strong> {score.usedInstruments.join(', ')}
                    </Text>
                )}
                {score.pdfUrl && (
                    <Text>
                        <strong>PDF :</strong>{' '}
                        <a href={score.pdfUrl} target="_blank" rel="noopener noreferrer">
                            Télécharger
                        </a>
                    </Text>
                )}
                {score.audioUrl && (
                    <Text>
                        <strong>Audio :</strong>{' '}
                        <a href={score.audioUrl} target="_blank" rel="noopener noreferrer">
                            Écouter
                        </a>
                    </Text>
                )}
            </VStack>

            <Button mt="6" colorScheme="blue" size="lg" width="full" onClick={handlePurchase}>
                Acheter maintenant
            </Button>

            <Toaster />
        </Box>
    )
}
