import MeditationCard from "./MeditationCard"

export default function Meditations({meditationsData}){

    return (
        <>
            {
                meditationsData.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    meditationsData.map(({id, title, meditationTime, videoUrl})=> {
                        return (
                            <MeditationCard key={id} id={id} title={title} meditationTime={meditationTime} videoUrl={videoUrl[0].url}/>
                        )
                    })
                )
            }
        </>
    )
}

