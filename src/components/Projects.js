import { projects } from "../db/db";
import ProjectItem from "./ProjectItem";

const Projects = () => {
    return (
        <section className='projects' id='proyectos' >
            <h2>Proyectos</h2>

            <div className='projects-container'>
                {
                    projects.map(project => (
                        <ProjectItem
                            key={project.name}
                            {...project}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default Projects;