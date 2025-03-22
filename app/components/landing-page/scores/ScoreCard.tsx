import { useState } from 'react'
import { Button, Heading, Text, VStack, Image, HStack, CloseButton, Portal, Badge, AspectRatio } from '@chakra-ui/react'
import { Dialog } from '@chakra-ui/react'
import { FaFileAlt, FaPlay, FaStop } from 'react-icons/fa'
import type { IScore } from '~/types/scores'

interface ScoreCardProps extends IScore {
    bg?: string
    textColor?: string
}

const ScoreCard = ({
    title,
    instrument,
    price,
    bg,
    textColor,
    pdfUrl,
    audioUrl,
    image,
    difficulty,
    category
}: ScoreCardProps) => {
    const [isPdfOpen, setIsPdfOpen] = useState(false)
    const [isAudioOpen, setIsAudioOpen] = useState(false)

    const difficultyColor = {
        Facile: 'green',
        Moyen: 'yellow',
        Difficile: 'orange',
        'Très difficile': 'red'
    }[difficulty]

    return (
        <VStack
            bg={bg}
            color={textColor}
            p={6}
            borderRadius="md"
            boxShadow="md"
            align="stretch"
            gap={4}
            transition="all 0.2s"
            _hover={{
                transform: 'translateY(-4px)',
                boxShadow: 'lg'
            }}
        >
            <AspectRatio ratio={4 / 3} w="100%">
                <Image src={image ?? '/img/default-score-image.jpg'} alt={title} borderRadius="md" />
            </AspectRatio>
            <Heading size="md">{title}</Heading>
            <Text>{instrument}</Text>
            <HStack justify="space-between">
                <Badge colorPalette={difficultyColor}>{difficulty}</Badge>
                <Badge colorPalette="purple">{category}</Badge>
            </HStack>
            <Text fontWeight="bold">{price}</Text>
            <HStack justify="space-between">
                <Button onClick={() => setIsPdfOpen(true)} disabled={!pdfUrl}>
                    <FaFileAlt />
                    Aperçu PDF
                </Button>
                <Button onClick={() => setIsAudioOpen((open) => !open)} disabled={!audioUrl}>
                    {!isAudioOpen ? (
                        <>
                            <FaPlay /> Écouter
                        </>
                    ) : (
                        <>
                            <FaStop /> Arrêter
                        </>
                    )}
                </Button>
            </HStack>
            {isAudioOpen && <audio controls src={audioUrl} style={{ width: '100%' }} autoPlay />}
            <Button aria-label="Acheter la partition" colorScheme="blue">
                Acheter
            </Button>

            {/* PDF Preview Dialog */}
            <Dialog.Root
                open={isPdfOpen}
                onEscapeKeyDown={() => setIsPdfOpen(false)}
                onInteractOutside={() => setIsPdfOpen(false)}
                unmountOnExit
                size="cover"
                placement="center"
                motionPreset="slide-in-bottom"
            >
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Aperçu de la partition : {title}</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <iframe src={pdfUrl} width="100%" height="100%" />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Button onClick={() => setIsPdfOpen(false)}>Fermer</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" onClick={() => setIsPdfOpen(false)} />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </VStack>
    )
}

export default ScoreCard
