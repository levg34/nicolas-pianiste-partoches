import { PrismaClient, Difficulty, Category } from '@prisma/client'

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
    const allScores = [
        {
            title: 'Piano Orchestra',
            instrument: 'Piano',
            price: '24,99 €',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            audioUrl: '/audio/piano-orchestra.mp3',
            pdfUrl: '/pdf/piano-orchestra-preview.pdf',
            image: 'https://www.imusic-school.com/wp-content/uploads/2019/08/Nocturne-N%C2%B021-Chopin-partition-piano.png',
            usedInstruments: ['Piano']
        },
        {
            title: 'Nocturne Op.9 No.2',
            instrument: 'Piano',
            price: '19,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/nocturne-op9-no2.mp3',
            pdfUrl: '/pdf/nocturne-op9-no2-preview.pdf'
        },
        {
            title: 'Clair de Lune',
            instrument: 'Piano',
            price: '22,99 €',
            difficulty: 'Difficile',
            category: 'Œuvres originales',
            audioUrl: '/audio/clair-de-lune.mp3',
            pdfUrl: '/pdf/clair-de-lune-preview.pdf'
        },
        {
            title: 'Canon en Ré majeur',
            instrument: 'Piano',
            price: '14,99 €',
            difficulty: 'Facile',
            category: 'Arrangement',
            audioUrl: '/audio/canon-d-major.mp3',
            pdfUrl: '/pdf/canon-d-major-preview.pdf'
        },
        {
            title: 'Fur Elise',
            instrument: 'Piano',
            price: '18,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/fur-elise.mp3',
            pdfUrl: '/pdf/fur-elise-preview.pdf'
        },
        {
            title: 'Improvisation Jazz n°1',
            instrument: 'Piano',
            price: '25,99 €',
            difficulty: 'Très difficile',
            category: 'Pastiches',
            audioUrl: '/audio/improvisation-jazz-1.mp3',
            pdfUrl: '/pdf/improvisation-jazz-1-preview.pdf'
        },
        {
            title: 'Gymnopédie n°1',
            instrument: 'Piano',
            price: '20,99 €',
            difficulty: 'Moyen',
            category: 'Œuvres originales',
            audioUrl: '/audio/gymnopedie-1.mp3',
            pdfUrl: '/pdf/gymnopedie-1-preview.pdf'
        },
        {
            title: 'Thème de Star Wars',
            instrument: 'Piano',
            price: '16,99 €',
            difficulty: 'Facile',
            category: 'Arrangement',
            audioUrl: '/audio/star-wars-theme.mp3',
            pdfUrl: '/pdf/star-wars-theme-preview.pdf'
        }
    ]

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
