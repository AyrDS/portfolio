import { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from "../db/db";
import ProjectItem from "./ProjectItem";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projectsArr = useRef([]);
    projectsArr.current = [];
    const containerRef = useRef();

    useEffect(() => {
        let tl = gsap.timeline();

        projectsArr.current.forEach(element => {
            tl.fromTo(element,
                {
                    y: '40',
                    opacity: 0
                },
                {
                    y: '-20',
                    opacity: 1,
                    stagger: .4,
                    duration: .4,
                    ease: 'back'
                }
            )


            ScrollTrigger.create({
                trigger: containerRef.current,
                start: '-50 50%',
                animation: tl,
                toggleActions: 'play none none reverse',
            })
        })

    }, []);


    const addRef = (element) => {
        if (element && !projectsArr.current.includes(element)) {
            projectsArr.current.push(element);
        }
    }

    return (
        <section className='projects' id='proyectos' ref={containerRef} >
            <h2>Proyectos</h2>

            <div className='projects-container'>
                {
                    projects.map(project => (
                        <ProjectItem
                            key={project.name}
                            {...project}
                            refItem={addRef}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default Projects;