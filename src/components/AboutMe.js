import { useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactCanvasConfetti from "react-canvas-confetti";
import { skills } from '../db/db';
import cv from '../assets/CV-AyrtonDaSilva.pdf';

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {

    const trigger = useRef(null);
    const el = useRef(null);
    const refAnimationInstance = useRef(null);
    const years = (new Date().getFullYear()) - 1997;

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(el.current,
            {
                scale: 0
            },
            {
                scale: 1,
                transformOrigin: 'center bottom',
                duration: .5,
                ease: 'back',
                scrollTrigger: {
                    trigger: trigger.current,
                    toggleActions: 'play none none reverse',
                    start: '-150 50%',
                }
            }
        )
    }, []);

    const getInstance = useCallback(instance => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current && refAnimationInstance.current(
            {
                ...opts,
                origin: { y: 0.7 },
                particleCount: Math.floor(200 * particleRatio)
            }
        );
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);




    return (
        <section className='aboutMe' id='sobreMi' ref={trigger} >
            <div className='aboutMe-container' ref={el}>
                <div className='aboutMe-info' >
                    <h2>Sobre Mi</h2>
                    <p className='aboutMe-info_cuestion' >¿Quien Soy?</p>
                    <p className='aboutMe-info_cuestion' >Soy Ayrton Da Silva, desarrollador Full-stack.</p>
                    <p className='aboutMe-info_bio'>Tengo {years} años y soy de Buenos Aires, Argentina</p>
                    <p className='aboutMe-info_bio'>
                        Me considero una persona muy apasionada por el ámbito de la programación y que posee la capacidad de aprender muy rápido. Constantemente me gusta aprender nuevas tecnologías, mejorar mis habilidades y estar actualizado en las últimas tendencias del desarrollo.
                    </p>
                    <a
                        href={cv}
                        download='CV-AyrtonDaSilva'
                        className='aboutMe-info_btnCv'
                        onClick={fire}
                    >
                        ¡Descargá mi CV!
                    </a>
                </div>
                <div className='aboutMe-skills' >
                    <h2>Mis Skills</h2>
                    <div className='aboutMe-skills_container' >
                        {
                            skills.map(skill => (
                                <div key={skill.name} className='aboutMe-skills_item' >
                                    <img src={skill.icon} alt={skill.name} className='aboutMe-skills_skillImg' />
                                    <p className='skill-name' > {skill.name} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ReactCanvasConfetti
                className='confetti'
                refConfetti={getInstance}
            />
        </section>
    )
}

export default AboutMe;