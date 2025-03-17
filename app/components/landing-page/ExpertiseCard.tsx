import { VStack, Heading, Text, Icon } from '@chakra-ui/react'

interface ExpertiseCardProps {
    icon: React.ElementType
    title: string
    text: string
    bg?: string
    color?: string
}

const ExpertiseCard = ({ icon, title, text, bg, color }: ExpertiseCardProps) => {
    return (
        <VStack
            align="center"
            textAlign="center"
            p={6}
            bg={bg}
            color={color}
            borderRadius="md"
            boxShadow="md"
            _hover={{
                transform: 'translateY(-5px)',
                transition: 'transform 0.2s'
            }}
        >
            <Icon as={icon} w={10} h={10} color="blue.500" />
            <Heading size="md">{title}</Heading>
            <Text>{text}</Text>
        </VStack>
    )
}

export default ExpertiseCard
