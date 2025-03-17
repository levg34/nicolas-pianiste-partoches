import { Button, Heading, Text, VStack, Image } from '@chakra-ui/react'

interface ScoreCardProps {
    title: string
    instrument: string
    price: string
}

const ScoreCard = ({ title, instrument, price }: ScoreCardProps) => {
    return (
        <VStack bg="white" p={6} borderRadius="md" boxShadow="md" align="stretch" gap={4}>
            <Image
                src="https://www.imusic-school.com/wp-content/uploads/2019/08/Nocturne-N%C2%B021-Chopin-partition-piano.png"
                alt={title}
                borderRadius="md"
            />
            <Heading size="md">{title}</Heading>
            <Text>{instrument}</Text>
            <Text fontWeight="bold">{price}</Text>
            <Button aria-label="Acheter la partition" colorScheme="blue">
                Acheter
            </Button>
        </VStack>
    )
}

export default ScoreCard
