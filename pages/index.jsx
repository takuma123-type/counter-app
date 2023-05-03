import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useCounter } from '@/hooks/useCounter'
import { useInputArray } from '@/hooks/useInputArray'
import { useBgLightBlue } from '@/hooks/useBgLightBlue'

export default function Home() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleChange, handleAdd, } = useInputArray();
  useBgLightBlue();

  return (    
    <div className={styles.container}>
      <div class="wrap">
        <Head>
          <title>Index Page</title>
        </Head>

        {isShow ? <h1>{count}</h1> : null}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示" }</button>

        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd }>追加</button>
        <ul>
          {array.map(item => {
          return (
            <div key={item}>{item}</div>
          )
          })}
        </ul>

      </div>
    </div>
  )
}
