import Head from 'next/head'
import styles from './Howto.module.css'
import Layout from '@/components/Layout'
import Image from 'next/image'
import howto from './howto.png'
import pict1 from './pict1.png'
import pict2 from './pict2.png'
import pict3 from './pict3.png'

export default function About() {

  return (
    <>
      <Head>
        <title>使用方法</title>
        <meta name="description" content="リヴリーパレットの使用方法について" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>

        <div className={styles.main}>
          <article className={styles.desc}>
            <h1>使用方法</h1>
              <p>スマートフォン、パソコンともに同じ操作方法となります。</p>
              <Image
                src={howto}
                alt='使用方法'
                layout='responsive'
                width={700}
                height={500}
              />
              <br />
              <br />
            <h1>アイテムの色について</h1>
              <p></p>
              <p>リヴリーアイランドに登場するアイテムで<span className= {styles.marker}>特定の1色として分類できるもの</span>はそう多くありません。</p>
              <p>複数の色が同じくらいの割合で構成されているカラフルなものや、<span className= {styles.asagi}>青にも緑にも捉えられるような色</span>もあります。</p>
              <p></p>
              <p>そこで以下のように、ある程度のルール・例外を決めて分類することにしました。</p>
              <p></p>
              <h4></h4>
              <h1>彩度の高いものを優先する</h1>
              <ul className={styles.list}>
                <Image src={pict1} alt="" layout='responsive' width={80} height={80}/>
                <p></p>
                <Image src={pict2} alt="" layout='responsive' width={80} height={80}/>
                <p></p>
                <Image src={pict3} alt="" layout='responsive' width={80} height={80}/>
                <p>白＋青 →青色</p>
                <p></p>
                <p>白＋黄 →黄色 </p>
                <p></p>
                <p>白＋青 なので青</p>
                <p></p>
                <p></p>
              </ul>
                <li>アタッチメントを除いたメインパーツの色（例：ベルト）</li>
                <li>アイテム名から推察できるメイン部分の色（）</li>
                <li>金属系のアイテムであれば銀・金を優先する。</li>

              <p>などを基準に色を設定しています。</p>

              <p>主観が入ってしまいますが<span className= {styles.marker}>”そのアイテムで一番メインとなる色”</span>といったところです。</p>

              <p>ただし、これでも一つの色で分類することが困難なアイテムもあるため<br />
                 今後は同じアイテムでも複数の色から検索できるよう調整していきます。</p>
                <br />
            <h1>アイテムのトーンについて</h1>
              <p>より自分の求める色のテイストを見つけたい場合はトーンによるフィルター検索をしてみてください。</p>
              <p>現状用意しているトーンは</p>
                <ul>
                  <li>Normal: 原色に近い色、単色の白黒</li>
                  <li>Pastel: パステルカラー、淡い色</li>
                  <li>Vintage: ヴィンテージ、アンティーク、色あせた色</li>
                  <li>Vivid: ビビッドカラー、蛍光色</li>
                </ul>
                <p>を用意しております。</p>
                <p>需要があればダークカラー、モノトーンといったトーンの追加も考えております。</p>
              
                <br />
                <br />

 
          </article>
        </div>

      </Layout>
    </>
  )
}
