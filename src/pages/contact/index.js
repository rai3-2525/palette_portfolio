import Head from 'next/head'
import styles from './Contact.module.css'
import Layout from '@/components/Layout'
import Image from 'next/image'

export default function About() {

  return (
    <>
      <Head>
        <title>管理人について</title>
        <meta name="description" content="管理人について" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>

        <main className={styles.main}>
          <article className={styles.desc}>
            <h1>管理人について</h1>
              <p></p>
              <p></p>
              <p></p>

 
          </article>
        </main>

      </Layout>
    </>
  )
}
