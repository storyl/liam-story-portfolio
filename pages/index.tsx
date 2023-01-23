import Head from 'next/head'
import Image from 'next/image'
import Projects from '@/components/Projects'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Liam Story Portfolio</title>
        <meta name="description" content="Liam Story Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        
        <Hero/>
        
        <Logos/>

        <Projects/>

        <Footer/>
      </main>
    </>
  )
}
