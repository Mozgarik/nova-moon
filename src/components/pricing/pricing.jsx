import React from "react"
import styles from './pricing.module.css'
import pr1 from '../../img/pricing1.svg'
import pr2 from '../../img/pricing2.svg'
import pr3 from '../../img/pricing3.svg'


const Pricing = () => {
    return (
        <div className={styles.priceSection}>
            <h2>Pricing</h2>
            <ul>
                <li>
                    <img className={styles.priceImg} src={pr1} alt="online course" />
                    <h4>Self-study online course</h4>
                    <p className={styles.priceDesc}>Start learning English online in live classes with qualified EC teachers and students from all over the world.</p>
                    <p className={styles.priceCost}><span className={styles.value}>£5.99</span><span className={styles.manth}>per month</span></p>
                </li>
                <li>
                    <img className={styles.priceImg} src={pr2} alt="online classes" />
                    <h4>Live online classes</h4>
                    <p className={styles.priceDesc}>Interactive group classes with expert teachers. Free 7-day trial</p>
                    <p className={styles.priceCost}><span className={styles.value}>£12.99</span><span className={styles.manth}>per month</span></p>
                </li>
                <li>
                    <img className={styles.priceImg} src={pr3} alt="personal tuition" />
                    <h4>Personal Tuition</h4>
                    <p className={styles.priceDesc}>Online one-to-one English tutoring – enjoy our first session for only $1</p>
                    <p className={styles.priceCost}><span className={styles.value}>£20.99</span><span className={styles.manth}>per month</span></p>
                </li>
            </ul>
      </div>
    )
}

export default Pricing