import styles from "./skills.module.css";
import listening from '../../img/skills-listening.svg'
import reading from '../../img/skills-reading.svg'
import speaking from '../../img/skills-speaking.svg'
import writing from '../../img/skills-writing.svg'

const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Skills</h2>


      <div className={styles.skillsGrid}>


        <div className={styles.card}>
          <img className={styles.cardImg1} src={speaking} alt="Speaking" />
         
          <div className={styles.descFirst}>
            <h3>Speaking</h3>
            <p >
            Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only
            </p>
            <p>Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.
            </p>
            <button className={styles.button}>Learn more</button>
          </div>
          
          
        </div>

        <div className={styles.threeCard}>
        <div className={styles.secondBlock}>
        <div className={styles.card}>
          <img className={styles.cardImg2} src={writing} alt="Writing" />
          <div className={styles.descSec}>
            <h3>Writing</h3>
          <p>
            One of the most important and extensive areas of natural science, the science that studies substances, also their composition.
          </p>
          <button className={styles.button}>Learn more</button>
          </div>
        </div>

        <div className={styles.card}>
          <img className={styles.cardImg3} src={reading} alt="Reading" />
          <div className={styles.descSec}>
            <h3>Reading</h3>
          <p>
            Perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service.
          </p>
          <button className={styles.button}>Learn more</button>
          </div>
        </div>
        </div>


        <div className={styles.cardLast}>
            <div className={styles.lastCardDesc}>
                 <h3>Listening</h3>
          <p>
            Here you can find activities to practice your listening skills. Listening will help you to improve your understanding.
          </p>
          <button className={styles.button}>Learn more</button>
              </div>
          <img className={styles.cardImg4} src={listening} alt="Listening" />
        </div>
        </div>

        


      </div>


    </section>
  );
};

export default Skills;