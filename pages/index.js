import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      First Page <Link href='/second-page'><a>Go to Second</a></Link>
    </div>
  )
}
