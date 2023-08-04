import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Palette from '@/components/Palette/Palette'
import SearchResults from '@/components/SearcthResults/SearchResults'
import Layout from '@/components/Layout'


export default function Home() {

  // Search Condition
  const [selectedOptions, setSelectedOptions] = useState({
    color: '',
    tone: ''
  });

  return (
    <>
      <Head>
        <title>リヴリーパレット</title>
        <meta name="description" content="リヴリーアイランドのアイテム検索サイトです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>

      <main className= {styles.main}>

        <Palette
          selectedOptions = {selectedOptions}       // Options
          setSelectedOptions = {setSelectedOptions} // Options
        />
        <SearchResults
          selectedOptions = {selectedOptions}    // Options
          />

      </main>
      </Layout>
    </>
  );
};
