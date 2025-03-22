import { PrismaClient } from '@prisma/client'
import { allScores } from './data'

const prisma = new PrismaClient()

async function insertScores() {
    for (const score of allScores) {
        await prisma.score.create({
            data: {
                title: score.title,
                instrument: score.instrument,
                price: score.price,
                difficulty: score.difficulty,
                category: score.category,
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
