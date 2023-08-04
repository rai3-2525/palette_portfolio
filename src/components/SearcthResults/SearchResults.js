import { useEffect, useState } from 'react';
import styles from './SearchResults.module.css';
import { getDocs, collection, DocumentData, query, where, equal, limit  } from 'firebase/firestore';
import { db } from '@/config/firebase';
import Link from 'next/link';

export default function SearchResults({selectedOptions}) {

  const { color, tone } = selectedOptions;

  const [ results, setResults ] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all Documents
        const resultsCollectionRef = collection(db, "fashionItems");
        let queryRef = resultsCollectionRef;

        // Query Color and Tone with limit50
        if (color && tone) {
          queryRef = query(resultsCollectionRef,
                     limit(50),
                     where('color', '==', color ),
                     where('tone', '==', tone )
                     );

        } else if (color) {
        // Query Color
         queryRef = query(resultsCollectionRef,
                    limit(50),
                    where('color', '==', color )
                    );

        } else if (tone) {
        // Query Tone
          queryRef = query(resultsCollectionRef,
                     limit(50),
                     where('tone', '==', tone )
                     );
        }

          // Save as querySnapshot
          const querySnapshot = await getDocs(queryRef);
          // Assign ID to Snapshots
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
              ...doc.data()
          }));

          // Display Randomly
          const randomData = [...data].sort(() => Math.random() - 0.5)
          console.log(randomData);
          setResults(randomData);

      } catch (err) {
        console.error(err);
      }
    };
    
    fetchData();

  }, [color, tone]);  //内容変更時にレンダリング
  
  return (
    <>
      <div className={styles.searchResults}>
        {results.length > 0 && results.map((result, index) => (
          // eslint-disable-next-line react/jsx-key
          <div>

            {/* <Link href={`/detail/${result.id}`}> */}
            <Link href={`/detail/${result.id}`} as={`/detail/${result.id}`}>
                <img className={styles.item} src={result.image} alt=''/>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  )
}