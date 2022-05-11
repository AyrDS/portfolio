import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faB, faGithub, faEarthAmericas);

const ProjectItem = ({ name, description, img, link, github, icons, refItem }) => {
    return (
        <div className='project-item' ref={refItem} >
            <img src={img} alt={name} className='project-item_img' />
            <div className='project-item_description' >
                <h3>{name}</h3>
                <p> {description} </p>
                <div className='project-item_containerIcons' >
                    {
                        icons.map(icon => (
                            <img key={icon.id} src={icon.icon} alt='Icon Tecnología' className='project-item_icon' />
                        ))
                    }
                </div>
                <div className='projects-item_containerButtons' >
                    {
                        link &&
                        <a href={link} target='_blank' rel='noreferrer' className="project-item_button" >
                            <span>
                                <FontAwesomeIcon icon='fa-solid fa-earth-americas' />
                            </span>
                            Website
                        </a>
                    }
                    <a href={github} target='_blank' rel='noreferrer' className="project-item_button" >
                        <span>
                            <FontAwesomeIcon icon='fa-brands fa-github' />
                        </span>
                        Repositorio
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem;