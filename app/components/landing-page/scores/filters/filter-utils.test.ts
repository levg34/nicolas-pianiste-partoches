import { describe, it, expect } from 'vitest'
import type { IFilters, IScore } from '~/types/scores'
import { filterScores, extractDistinctsInstruments } from './filter-utils'

describe('filterScores', () => {
    const sampleScores: IScore[] = [
        {
            title: 'Score 1',
            instrument: 'Piano',
            price: '10',
            difficulty: 'Facile',
            category: 'Pédagogie',
            usedInstruments: ['Piano']
        },
        {
            title: 'Score 2',
            instrument: 'Guitare',
            price: '15',
            difficulty: 'Moyen',
            category: 'Arrangement',
            usedInstruments: ['Guitare', 'Basse']
        },
        {
            title: 'Score 3',
            instrument: 'Violon',
            price: '20',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            usedInstruments: ['Violon', 'Alto']
        },
        {
            title: 'Score 4',
            instrument: 'Orchestre',
            price: '20',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            usedInstruments: ['Alto', 'Piano', 'Tuba', 'Saxophone', 'Triangle']
        }
    ]

    it('should return all scores when no filters are applied', () => {
        const result = filterScores(sampleScores, {})
        expect(result).toEqual(sampleScores)
    })

    it('should filter scores by difficulty', () => {
        const filters: IFilters = { difficulties: ['Facile'] }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Score 1')
    })

    it('should filter scores by category', () => {
        const filters: IFilters = { categories: ['Arrangement'] }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Score 2')
    })

    it('should filter scores by instrument', () => {
        const filters: IFilters = { instruments: ['Violon'] }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Score 3')
    })

    it('should apply multiple filters', () => {
        const filters: IFilters = {
            difficulties: ['Moyen', 'Difficile'],
            categories: ['Arrangement', 'Œuvres originales'],
            instruments: ['Guitare', 'Basse']
        }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Score 2')
    })

    it('should return an empty array when no scores match the filters', () => {
        const filters: IFilters = { difficulties: ['Très difficile'] }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(0)
    })

    it('should include the instrument in the title', () => {
        const filters: IFilters = { instruments: ['Orchestre'] }
        const result = filterScores(sampleScores, filters)
        expect(result).toHaveLength(1)
        expect(result[0].title).toBe('Score 4')
    })
})

describe('extractDistinctsInstruments', () => {
    const sampleScores: IScore[] = [
        {
            title: 'Score 1',
            instrument: 'Piano',
            price: '10',
            difficulty: 'Facile',
            category: 'Pédagogie',
            usedInstruments: ['Piano']
        },
        {
            title: 'Score 2',
            instrument: 'Guitare',
            price: '15',
            difficulty: 'Moyen',
            category: 'Arrangement',
            usedInstruments: ['Guitare', 'Basse']
        },
        {
            title: 'Score 3',
            instrument: 'Violon',
            price: '20',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            usedInstruments: ['Violon', 'Alto']
        },
        {
            title: 'Score 4',
            instrument: 'Orchestre',
            price: '20',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            usedInstruments: ['Alto', 'Piano', 'Tuba', 'Saxophone', 'Triangle']
        }
    ]

    it('should extract all distinct instruments', () => {
        const result = extractDistinctsInstruments(sampleScores)
        expect(result).toEqual([
            'Alto',
            'Basse',
            'Guitare',
            'Orchestre',
            'Piano',
            'Saxophone',
            'Triangle',
            'Tuba',
            'Violon'
        ])
    })

    it('should handle scores without usedInstruments', () => {
        const scoresWithoutUsedInstruments: IScore[] = [
            {
                title: 'Score 5',
                instrument: 'Flûte',
                price: '25',
                difficulty: 'Moyen',
                category: 'Pédagogie'
            },
            ...sampleScores
        ]
        const result = extractDistinctsInstruments(scoresWithoutUsedInstruments)
        expect(result).toContain('Flûte')
    })

    it('should return an empty array for empty input', () => {
        const result = extractDistinctsInstruments([])
        expect(result).toEqual([])
    })

    it('should handle duplicate instruments', () => {
        const scoresWithDuplicates: IScore[] = [
            ...sampleScores,
            {
                title: 'Score 5',
                instrument: 'Piano',
                price: '30',
                difficulty: 'Facile',
                category: 'Pédagogie',
                usedInstruments: ['Piano', 'Guitare']
            }
        ]
        const result = extractDistinctsInstruments(scoresWithDuplicates)
        expect(result).toEqual([
            'Alto',
            'Basse',
            'Guitare',
            'Orchestre',
            'Piano',
            'Saxophone',
            'Triangle',
            'Tuba',
            'Violon'
        ])
    })
})
