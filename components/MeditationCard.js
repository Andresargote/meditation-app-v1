import Link from "next/link"

export default function MeditationCard({id, title, meditationTime, videoUrl}){
    return (
        <article>
            <Link href={`/meditacion/${id}`}>
                <a><h2>{title}</h2></a>
            </Link>
            <span>{meditationTime} min</span>
        </article>
    )
}