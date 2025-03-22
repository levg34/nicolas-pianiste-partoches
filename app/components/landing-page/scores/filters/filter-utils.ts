import type { IFilters, IScore } from '~/types/scores'

export function filterScores(scores: IScore[], filters: IFilters): IScore[] {
    return scores.filter((score) => {
        if (filters.difficulties && filters.difficulties.length > 0) {
            if (!filters.difficulties.includes(score.difficulty)) {
                return false
            }
        }

        if (filters.categories && filters.categories.length > 0) {
            if (!filters.categories.includes(score.category)) {
                return false
            }
        }

        if (filters.instruments && filters.instruments.length > 0) {
            if (filters.instruments.includes(score.instrument)) {
                return true
            }
            if (!score.usedInstruments) {
                return false
            }
            if (!filters.instruments.some((instrument) => score.usedInstruments?.includes(instrument))) {
                return false
            }
        }

        return true
    })
}

export function extractDistinctsInstruments(scores: IScore[]): string[] {
    const instrumentSet = new Set<string>()

    scores.forEach((score) => {
        if (score.instrument) {
            instrumentSet.add(score.instrument)
        }

        if (score.usedInstruments && Array.isArray(score.usedInstruments)) {
            score.usedInstruments.forEach((instrument) => instrumentSet.add(instrument))
        }
    })

    return Array.from(instrumentSet).sort()
}
