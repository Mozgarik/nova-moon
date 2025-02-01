import React from "react"
import styles from './hero.module.css'
import hero from '../../img/hero.svg'
import light from '../../img/light-bulb-hero.svg'

const Hero = () => {
    return (
        <div className={styles.heroSection}>
        <div className={styles.heroContent}>
            <div className={styles.afterHeroTittle}>
            <h1 className={styles.heroTitle}>Learn Any Foreign Language</h1>
            <img className={styles.heroAfterEl} src={light} alt="Light" />
            </div>
          <span className={styles.heroDescription}>
            With our teachers who write a program for each student, you will be able to make your first sketch after the first lesson.
          </span>
          <div className={styles.btn}><button className={styles.getStartedBtn}>Get started</button></div>
        </div>
        <div className={styles.heroImage}>
          <img src={hero} alt="Hero" />
        </div>
      </div>
    )
}

export default Hero