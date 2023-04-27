import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [foo, setFoo] = useState(10);


const handleClick  = (e) => {
  setFoo(Foo => Foo + 1);
};

useEffect(() => {
  document.body.style.backgroundColor = "lightblue";
  return () => {
    document.body.style.backgroundColor = "";
  };
}, []);



  return (    
    <div class="wrap" className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <h1>{foo}</h1>
      <button 
      href="/about"
      onClick={handleClick}
        >
          ボタン
      </button>
    </div>
  )
}
