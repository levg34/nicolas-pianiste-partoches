import { HStack, Select, Portal, createListCollection, useBreakpointValue } from '@chakra-ui/react'
import { useLoaderData } from 'react-router'
import type { IFilters, IScore } from '~/types/scores'

type Props = { setFilters: React.Dispatch<React.SetStateAction<IFilters>> }

const ScoreFilters = ({ setFilters }: Props) => {
    const allScores: IScore[] = useLoaderData()

    const difficulties = createListCollection({
        items: [
            { label: 'Facile', value: 'Facile' },
            { label: 'Moyen', value: 'Moyen' },
            { label: 'Difficile', value: 'Difficile' },
            { label: 'Très difficile', value: 'Très difficile' }
        ]
    })

    const categories = createListCollection({
        items: [
            { label: 'Pédagogie', value: 'Pédagogie' },
            { label: 'Arrangement', value: 'Arrangement' },
            { label: 'Pastiches', value: 'Pastiches' },
            { label: 'Œuvres originales', value: 'Œuvres originales' }
        ]
    })

    const instruments = createListCollection({
        items: [
            { label: 'Piano', value: 'Piano' },
            { label: 'Guitare', value: 'Guitare' },
            { label: 'Violon', value: 'Violon' }
        ]
    })

    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <HStack gap={4} w="100%" justify="center">
            {/* Difficulté */}
            <Select.Root
                collection={difficulties}
                size="sm"
                width="200px"
                onValueChange={(e) =>
                    setFilters((filters) => ({
                        ...filters,
                        difficulties: e.value ? (e.value as ['Facile']) : undefined
                    }))
                }
            >
                <Select.Label>Difficulté</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Filtrer par difficulté" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.ClearTrigger />
                        {!isMobile && <Select.Indicator />}
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {difficulties.items.map((item) => (
                                <Select.Item item={item} key={item.value}>
                                    {item.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            {/* Catégorie */}
            <Select.Root
                collection={categories}
                size="sm"
                width="200px"
                onValueChange={(e) =>
                    setFilters((filters) => ({
                        ...filters,
                        categories: e.value ? (e.value as ['Œuvres originales']) : undefined
                    }))
                }
            >
                <Select.Label>Catégorie</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Filtrer par catégorie" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.ClearTrigger />
                        {!isMobile && <Select.Indicator />}
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {categories.items.map((item) => (
                                <Select.Item item={item} key={item.value}>
                                    {item.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>

            {/* Instruments */}
            <Select.Root
                multiple
                collection={instruments}
                size="sm"
                width="200px"
                onValueChange={(e) =>
                    setFilters((filters) => ({
                        ...filters,
                        instruments: e.value ? e.value : undefined
                    }))
                }
            >
                <Select.Label>Instrument</Select.Label>
                <Select.Control>
                    <Select.Trigger>
                        <Select.ValueText placeholder="Filtrer par instrument" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.ClearTrigger />
                        {!isMobile && <Select.Indicator />}
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {instruments.items.map((item) => (
                                <Select.Item item={item} key={item.value}>
                                    {item.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </HStack>
    )
}

export default ScoreFilters
