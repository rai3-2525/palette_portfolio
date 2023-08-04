import Head from 'next/head'
import styles from './About.module.css'
import Layout from '@/components/Layout'
import Link from 'next/link'

export default function About() {

  return (
    <>
      <Head>
        <title>このサイトについて</title>
        <meta name="description" content="リヴリーパレットを作った経緯" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>

        <div className={styles.main}>
          <article className={styles.desc}>
            <h1>このサイトについて</h1>
                <br />
                <p>本サイトはアプリゲーム『リヴリーアイランド』の<span className={styles.unofficial}>非公式攻略サイト</span>です。</p>
                <p>ゲーム内に登場するファッションアイテムが数多くあることから、色を条件に検索できるサイトを作りました。</p>
                <p>条件の『色』に関しては端末のディスプレイによって見え方が異なる場合があるためご了承ください。</p>
                <p>新たなアイテムとの出会いに活用いただければ幸いです。<br />
                  よろしくお願いします。</p>
              <h1>今後の実装案</h1>
              <p></p>
                <ul>
                  <li>検索条件の色：透明，カラフルの追加</li>
                  <li>ガチャ以外のアイテムの追加</li>
                  <li>お気に入り機能</li>
                </ul>
                <p>などの追加を考えております。</p>
                  <br />
                <p>『リヴリーアイランド』のダウンロードはこちらから</p>

                {/* Download Link */}
                <div className={styles.banners}>
                  <Link href="https://apps.apple.com/jp/app/%E3%83%AA%E3%83%B4%E3%83%AA%E3%83%BC%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%B3%E3%83%89-%E3%83%9A%E3%83%83%E3%83%88%E3%81%A8%E6%9A%AE%E3%82%89%E3%81%99%E5%B0%8F%E3%81%95%E3%81%AA%E7%AE%B1%E5%BA%AD%E3%82%B5%E3%82%A4%E3%82%BA%E3%81%AE%E5%B3%B6/id1553045339?itsct=apps_box_badge&amp;itscg=30200">
                    <img className={styles.aBanner}  alt="Download on the App Store" src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/ja-jp?size=250x83&amp;releaseDate=1626307200"/>
                  </Link>
                  <Link href='https://play.google.com/store/apps/details?id=jp.cocone.livly&referrer=adjust_reftag%3DcTGvFsvh02cXU%26utm_source%3DOrganic_LP%26utm_campaign%3D%25E4%25BA%258B%25E5%2589%258D%25E7%2599%25BB%25E9%258C%25B2LP&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                    <img className={styles.gBanner} alt='Google Play で手に入れよう' src='https://play.google.com/intl/ja/badges/static/images/badges/ja_badge_web_generic.png'/>
                  </Link>
                </div>
                <p className={styles.Registered}>Apple StoreとApple logoは、Apple Inc.の商標です。<br />
                   Google PlayおよびGoogle Play ロゴは、Google LLCの商標です。
                </p>
          </article>
        </div>

      </Layout>
    </>
  )
}
