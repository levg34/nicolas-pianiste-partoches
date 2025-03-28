import type { Score } from '@prisma/client'

type CartProps = {
    score: Score
}

export default function Cart({ score }: CartProps) {
    return (
        <div>
            <h1>Vous allez acheter {score.title}</h1>
        </div>
    )
}
