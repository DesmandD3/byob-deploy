import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import Button from '@/components/button'

const inter = Inter({ subsets: ['latin'] })
const Logo = styled.img`
width: 18rem;
display: flex;
`
const Cont = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 1;
`

const ButtonCont = styled.div`
margin-top: 70px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>BYOB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img className={styles.circleImg} src='byobcircle.png' />
        <Cont>
          <div>
              <Logo src='/BYOBLOGO.png' />
              <h3 className={styles.h3}>become your own bartender.</h3>
          </div>
          <ButtonCont>
            <a href='/results'><Button wd='14rem' labeltxt='START MIXING' bg='#D8334F' pad='15px'/></a>
          </ButtonCont>
        </Cont>
      </main>
    </>
  )
}
