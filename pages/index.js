import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Main from "../components/Main"
import Footer from '../components/Footer'
import { useEffect } from 'react'

export default function Home() {


  return (
    <div className="overflow-y-auto bg-gray-200 antialiased font-sans home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <Main />
          <Footer />
        </div>
      </main>
    </div>
  )
}
