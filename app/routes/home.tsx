import { PrismaClient } from '@prisma/client'
import type { Route } from './+types/home'
import LandingPage from '~/components/LandingPage'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Nicolas Dross - Partoches' },
        { name: 'description', content: 'Site des partitions de Nicolas Dross, pianiste, enseignant et compositeur' }
    ]
}

export async function loader({ params }: Route.LoaderArgs) {
    const prisma = new PrismaClient()
    const scores = await prisma.score.findMany()
    return scores
}

export default function Home() {
    return <LandingPage />
}
