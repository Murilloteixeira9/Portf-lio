import type { Project } from '../../data';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={`Screenshot do projeto ${project.title}`} className={styles.cardImage} />
      
      <div className={styles.cardContent}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.cardLinks}>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" className={styles.button}>Ver Online</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" className={styles.button}>GitHub</a>}
          {!project.repoUrl && project.liveUrl === undefined && <span className={styles.privateRepo}>Repositório Privado</span>}
        </div>
      </div>
    </div>
  );
}