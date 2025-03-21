const allMp3s = [
    '/audio/calm-waves-soft-piano-314968.mp3',
    '/audio/relaxing-piano-310597.mp3',
    '/audio/soft-piano-music-312509.mp3',
    undefined
]

const pdf = '/pdf/[Free-scores.com]_chopin-frederic-nocturnes-opus-9-no-2-1508.pdf'

export const allScores = [
    {
        title: 'Piano Orchestra',
        instrument: 'Piano',
        price: '24,99 €',
        difficulty: 'Difficile',
        category: 'Œuvres originales',
        audioUrl: '/audio/calm-waves-soft-piano-314968.mp3',
        pdfUrl: '/pdf/[Free-scores.com]_chopin-frederic-nocturnes-opus-9-no-2-1508.pdf',
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
].map((s, i) => {
    if (i === 0) return s
    return { ...s, audioUrl: allMp3s[i % 4], pdfUrl: i % 2 ? pdf : undefined }
})
