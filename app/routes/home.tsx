import type { Route } from './+types/home'
import { Welcome } from '../welcome/welcome'

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Nicolas Dross - Partoches' },
        { name: 'description', content: 'Site des partitions de Nicolas Dross, pianiste et compositeur' }
    ]
}

export default function Home() {
    return <Welcome />
}
