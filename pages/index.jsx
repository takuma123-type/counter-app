import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);

const handleClick = useCallback((e) => {
  console.log(count)
  if (count < 10) {
    setCount(count => count + 1);
  }
}, [count]);

useEffect(() => {
  console.log(`マウント時: ${count}`)
  document.body.style.backgroundColor = "lightblue";
  return () => {
    console.log(`マウント解除時: ${count}`)
    document.body.style.backgroundColor = "";
  };
}, []);

  return (    
    <div className={styles.container}>
      <div class="wrap">
        <Head>
          <title>Index Page</title>
        </Head>
        <h1>{count}</h1>
        <button 
        href="/about"
        onClick={handleClick}
          >
            ボタン
        </button>
      </div>
    </div>
  )
}
