import Head from "next/head"
import Meditations from "../components/Meditations"

export default function Home({meditations}) {

  return (
    <>
      <Head>
        <title>Meditation App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1>Bienvenidos a la primera versión de mi App de meditación</h1>

      <Meditations meditationsData={meditations}/>
    </>
  )
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:1337/meditations");
  const meditations = await response.json();

  return {
    props: {
      meditations
    }
  }
}