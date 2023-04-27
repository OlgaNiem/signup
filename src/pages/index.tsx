import Link from "next/link"
import { Inter } from 'next/font/google'
import { useState } from "react"
import style from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // {} - använd för att skriva js code t.ex {counter}
  const [counter, setCounter] = useState(0)

  return (
      <main>
      <div className={style.loginBox}>
        <form>
          <div className={style.userBox}>
            <Link href={'/login'}><button className={style.btn}>Login</button></Link>
            <Link href={'/register'}><button className={style.btn}>Register</button></Link>
          </div>
        </form>
      </div>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h1>{counter}</h1>
    </main>
  )
}
