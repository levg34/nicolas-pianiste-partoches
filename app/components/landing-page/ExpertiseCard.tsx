import { Heading, Text, VStack, Icon } from '@chakra-ui/react'

interface ExpertiseCardProps {
    icon: React.ElementType
    title: string
    text: string
}

const ExpertiseCard = ({ icon, title, text }: ExpertiseCardProps) => {
    return (
        <VStack align="center" textAlign="center" p={6} bg="white" borderRadius="md" boxShadow="md">
            <Icon as={icon} w={10} h={10} color="blue.500" />
            <Heading size="md">{title}</Heading>
            <Text>{text}</Text>
        </VStack>
    )
}

export default ExpertiseCard
