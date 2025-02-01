import React from "react"
import styles from './about.module.css'
import about from '../../img/about-us.svg'

const AboutUs = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutContent}>
                <h2>About Us</h2>
                <p className={styles.aboutDesc}>The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.</p>
                <ul>
                <li>
                    <h4>800</h4>
                    <p className={styles.cardDesc}>Pupils</p>
                </li>
                <li>
                    <h4>18</h4>
                    <p className={styles.cardDesc}>Teachers</p>
                </li>
                <li>
                    <h4>6</h4>
                    <p className={styles.cardDesc}>Foreign languages</p>
                </li>
                </ul>
            </div>
            <img src={about} alt="about" />
        </div>
    ) 
}

export default AboutUs;