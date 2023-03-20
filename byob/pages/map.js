import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Map from '../components/Map'

export default function Home() {
  return (
    <>
      <Head>
        <title>Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/busicon.png" />
      </Head>
      
      <main className={styles.main}>
        <Map/>
      </main>
    </>
  )
}


