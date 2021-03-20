import "../styles/globals.css"
import LayoutApp from "../components/LayoutApp"

function MyApp({ Component, pageProps }) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  )
}

export default MyApp
