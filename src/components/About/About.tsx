import { timelineData } from '../../data';
import styles from './About.module.css';


export function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2>Sobre mim</h2>
      <div className={styles.timeline}>
        {timelineData.map((event, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineContent}>
              <h3>{event.year}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}