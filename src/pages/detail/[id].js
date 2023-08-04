import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
import styles from "./Detail.module.css";
import Layout from "@/components/Layout";

const getDetail = async (id) => {
  try {
    const itemRef = doc(collection(db, "fashionItems"), id);
    const itemSnapshot = await getDoc(itemRef);
    console.log(itemSnapshot);
    
    if (itemSnapshot.exists()) {
      return itemSnapshot.data();
    } else {
      console.error("Document not found for id:", id)
      return null;
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    return null;
  }
};

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const itemData = await getDetail(id);
      console.log(itemData);
      setData(itemData);
      setLoading(false);
    };

    fetchData();
  }, [id]);


  if (loading) {
    return (
      <>
        <Layout>
          <div className={styles.main}>
            <div className={styles.container}>
              <div>ロード中...</div>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Layout>
          <div className={styles.main}>
            <div className={styles.container}>
              <div>データが見つかりませんでした。</div>
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.container}>

            <img className={styles.itemImg}src={data.image} alt="" />
            <div className={styles.spec}>
              <h4>{data.name}</h4>
              <p>色: {data.color}</p>
              <p>トーン: {data.tone}</p>
            </div>

            {/* <div className={styles.description}>
              ここに説明が入ります<br></br>
              ここに説明が入ります<br></br>
              ここに説明が入ります<br></br>
              </div> */}
            <div className={styles.gachaImg}>
              <p>実装ガチャ</p>
              <p>{data.gacha}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}