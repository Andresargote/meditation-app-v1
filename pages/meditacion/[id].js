import Link from "next/link"

import {useRouter} from "next/router"

export default function MeditationDetails({meditation}){
    const router = useRouter();

    if(router.isFallback){
        return <p>cargando...</p>
    }


    return(
        <>
            <Link href="/">
                <a>
                    <h3>Atras</h3>
                </a>
            </Link>
            <h3>{meditation.title}</h3>
            <audio controls preload="auto" src={`http://localhost:1337${meditation.videoUrl[0].url}`}></audio>
        </>
    )
}

export const getStaticPaths = () => {
    return {
        paths: [{params: {id: "60535ad9134cc05916618ff1"}}],
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    const {params} = context;
    const {id} = params;

    const response = await fetch(`http://localhost:1337/meditations/${id}`);
    const meditation = await response.json();

    return {
        props: {
            meditation
        }
    }
}