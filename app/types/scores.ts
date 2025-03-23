export interface IScore extends ScoreMetadata, ScoreInfo, WithId {
    title: string
    instrument: string
    price: string // number
}

interface ScoreMetadata {
    image?: string
    pdfUrl?: string
    audioUrl?: string
}

type DifficultyType = 'Facile' | 'Moyen' | 'Difficile' | 'Très difficile'

type CategoryType = 'Pédagogie' | 'Arrangement' | 'Pastiches' | 'Œuvres originales'

interface ScoreInfo {
    difficulty: DifficultyType
    category: CategoryType
    usedInstruments?: string[]
}

export type IFilters = {
    difficulties?: DifficultyType[]
    categories?: CategoryType[]
    instruments?: string[]
}

type WithId = {
    id?: number
}
