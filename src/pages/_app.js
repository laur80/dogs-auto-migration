import '../App.css'
import '../DogDetails.css'
import '../DogList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps}) {
  return (
    <>
      <Head>
        <title>Dog List</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}
