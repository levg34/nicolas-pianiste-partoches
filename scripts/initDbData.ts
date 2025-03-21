import { PrismaClient, Difficulty, Category } from '@prisma/client'
import { allScores } from './data'

const prisma = new PrismaClient()

// Helper function to convert difficulty string to enum
function mapDifficulty(difficulty: string): Difficulty {
    switch (difficulty) {
        case 'Facile':
            return Difficulty.Facile
        case 'Moyen':
            return Difficulty.Moyen
        case 'Difficile':
            return Difficulty.Difficile
        case 'Très difficile':
            return Difficulty.TresDifficile
        default:
            throw new Error(`Invalid difficulty: ${difficulty}`)
    }
}

// Helper function to convert category string to enum
function mapCategory(category: string): Category {
    switch (category) {
        case 'Pédagogie':
            return Category.Pedagogie
        case 'Arrangement':
            return Category.Arrangement
        case 'Pastiches':
            return Category.Pastiches
        case 'Œuvres originales':
            return Category.OeuvresOriginales
        default:
            throw new Error(`Invalid category: ${category}`)
    }
}

async function insertScores() {
    for (const score of allScores) {
        await prisma.score.create({
            data: {
                title: score.title,
                instrument: score.instrument,
                price: score.price,
                difficulty: mapDifficulty(score.difficulty),
                category: mapCategory(score.category),
                audioUrl: score.audioUrl,
                pdfUrl: score.pdfUrl,
                image: score.image,
                usedInstruments: score.usedInstruments || []
            }
        })
    }
    console.log('All scores have been inserted successfully.')
}

insertScores()
    .catch((e) => {
        console.error('Error inserting scores:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
