import { projectsData } from '../../data';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h2>Projetos</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}