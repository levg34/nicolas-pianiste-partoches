export interface IScore extends ScoreMetadata, ScoreInfo {
    title: string
    instrument: string
    price: string // number
}

interface ScoreMetadata {
    image?: string
    pdfUrl?: string
    audioUrl?: string
}

interface ScoreInfo {
    difficulty: 'Facile' | 'Moyen' | 'Difficile' | 'Très difficile'
    category: 'Pédagogie' | 'Arrangement' | 'Pastiches' | 'Œuvres originales'
    // intruments?: string[]
}
