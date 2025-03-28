import { HStack, Select, Portal, createListCollection, useBreakpointValue } from '@chakra-ui/react'
import { useLoaderData } from 'react-router'
import type { IFilters, IScore } from '~/types/scores'
import { extractDistinctsInstruments } from './filter-utils'

type Props = {
    filters: IFilters
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>
}

const ScoreFilters = ({ filters, setFilters }: Props) => {
    const allScores: IScore[] = useLoaderData()

    const difficultiesList = ['Facile', 'Moyen', 'Difficile', 'Très difficile']
    const difficulties = createListCollection({
        items: difficultiesList.map((difficulty) => ({ label: difficulty, value: difficulty }))
    })

    const categoryList = ['Pédagogie', 'Arrangement', 'Pastiches', 'Œuvres originales']
    const categories = createListCollection({
        items: categoryList.map((category) => ({ label: category, value: category }))
    })

    const instrumentList = extractDistinctsInstruments(allScores)
    const instruments = createListCollection({
        items: instrumentList.map((instrument) => ({
            label: instrument,
            value: instrument
        }))
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
                value={filters.difficulties ?? []}
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
                value={filters.categories ?? []}
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
                value={filters.instruments ?? []}
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
