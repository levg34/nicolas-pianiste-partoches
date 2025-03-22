import { useColorModeValue } from "../ui/color-mode"

const useCustomColorMode = () => {
    const cardBg = useColorModeValue('white', 'gray.700')
    const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

    return { cardBg, textColor }
}

export default useCustomColorMode
