import { describe, it, expect } from 'vitest'
import type { IFilters, IScore } from '~/types/scores'
import { filterScores } from './filter-utils'

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
})
