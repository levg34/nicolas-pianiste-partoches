import { PrismaClient } from '@prisma/client'
import type { Route } from './+types/home'
import LandingPage from '~/components/LandingPage'

export async function loader({ params }: Route.LoaderArgs) {
    const prisma = new PrismaClient()
    const scores = await prisma.score.findMany()
    return scores
}

export default function Home() {
    return <LandingPage />
}
