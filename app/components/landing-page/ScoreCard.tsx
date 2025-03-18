import { useState } from 'react'
import { Button, Heading, Text, VStack, Image, HStack, CloseButton, Portal } from '@chakra-ui/react'
import { Dialog } from '@chakra-ui/react'
import { FaFileAlt, FaPlay } from 'react-icons/fa'

interface ScoreCardProps {
    title: string
    instrument: string
    price: string
    bg?: string
    textColor?: string
    pdfUrl?: string
    audioUrl?: string
}

const ScoreCard = ({ title, instrument, price, bg, textColor, pdfUrl, audioUrl }: ScoreCardProps) => {
    const [isPdfOpen, setIsPdfOpen] = useState(false)
    const [isAudioOpen, setIsAudioOpen] = useState(false)

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
            <Image
                src="https://www.imusic-school.com/wp-content/uploads/2019/08/Nocturne-N%C2%B021-Chopin-partition-piano.png"
                alt={title}
                borderRadius="md"
            />
            <Heading size="md">{title}</Heading>
            <Text>{instrument}</Text>
            <Text fontWeight="bold">{price}</Text>
            <HStack justify="space-between">
                <Button onClick={() => setIsPdfOpen(true)} disabled={!pdfUrl}>
                    <FaFileAlt />
                    Aperçu PDF
                </Button>
                <Button onClick={() => setIsAudioOpen(true)} disabled={!audioUrl}>
                    <FaPlay />
                    Écouter
                </Button>
            </HStack>
            <Button aria-label="Acheter la partition" colorScheme="blue">
                Acheter
            </Button>

            {/* PDF Preview Dialog */}
            {/* <Dialog.Root open={isPdfOpen} onClose={() => setIsPdfOpen(false)}>
                <Dialog.Trigger asChild></Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Aperçu de la partition</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <iframe src={pdfUrl} width="100%" height="500px" />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Button onClick={() => setIsPdfOpen(false)}>Fermer</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root> */}

            {/* Audio Preview Dialog */}
            {/* <Dialog.Root open={isAudioOpen} onClose={() => setIsAudioOpen(false)}>
                <Dialog.Trigger asChild></Dialog.Trigger>
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>Extrait audio</Dialog.Title>
                            </Dialog.Header>
                            <Dialog.Body>
                                <audio controls src={audioUrl} style={{ width: '100%' }} />
                            </Dialog.Body>
                            <Dialog.Footer>
                                <Button onClick={() => setIsAudioOpen(false)}>Fermer</Button>
                            </Dialog.Footer>
                            <Dialog.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Dialog.CloseTrigger>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root> */}
        </VStack>
    )
}

export default ScoreCard
