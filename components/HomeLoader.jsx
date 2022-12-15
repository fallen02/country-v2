import styles from '../styles/homeloader.module.css'

export default function HomeLoader() {
  return (
    <div className={styles.container}>
        <div className={styles.customloader}></div>
    </div>
  )
}
