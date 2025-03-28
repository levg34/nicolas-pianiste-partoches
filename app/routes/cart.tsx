import { PrismaClient } from '@prisma/client'
import type { Route } from './+types/cart'
import Cart from '~/components/cart/Cart'
import { Container } from '@chakra-ui/react'

export async function loader({ params }: Route.LoaderArgs) {
    const prisma = new PrismaClient()
    const scoreId = parseInt(params.id, 10)
    if (isNaN(scoreId)) {
        return new Response('Invalid ID', { status: 400 })
    }
    const score = await prisma.score.findFirst({
        where: { id: scoreId }
    })
    if (!score) {
        return new Response('Score not found', { status: 404 })
    }
    return score
}

export default function CartRoute({ loaderData }: Route.ComponentProps) {
    return (
        <Container>
            <Cart score={loaderData} />
        </Container>
    )
}
