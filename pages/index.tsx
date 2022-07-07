import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import dynamic from "next/dynamic";
const MainContent = dynamic(import("./main-content/MainContent"))

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Test app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      
        <MainContent />
      </div>
      
    </div>
  )
}

export default Home
