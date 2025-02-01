import React from "react"
import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
        <div className={styles.logo}>
            <h2>Nova<span>Moon</span></h2>
        </div>
        <div className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Skills</li>
                <li className={styles.navItem}>About us</li>
                <li className={styles.navItem}>Pricing</li>
                <li className={styles.navItem}>Contacts</li>
            </ul>
        </div>
        <div className={styles.cta}>
            <button className={styles.ctaButton}>
                Let's talk
            </button>
        </div>
    </header>
        </div>
        
    ) 
}

export default Header