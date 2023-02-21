import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import Layout from '../components/Layout'
import Body from '../components/Body'

export default function Home() {

  return (
    <Layout>
      <div>
        <Head>
          <title>DeenMedia</title>
          <meta name="description" content="Deen Social Media App" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* body */}
          <main>
            <Body/>        
          </main>
      </div>
    </Layout>  
  )
}
