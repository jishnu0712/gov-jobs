import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>West Bengal Job Hunt</title>
        <meta name="description" content="Search Government Jobs in West Bengal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>
        hi
      </main>
    </>
  )
}
