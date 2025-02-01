import React from "react"
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <header className={styles.header}>
        <div className={styles.logo}>
            <h2>Nova<span>Moon</span></h2>
        </div>
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Skills</li>
                <li className={styles.navItem}>About us</li>
            </ul>
        </div>
    </header>
        </div>
        
    ) 
}

export default Footer