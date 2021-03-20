import styles from "../styles/components/LayoutApp.module.css"

export default function LayoutApp({children}){
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}