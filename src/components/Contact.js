import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { contacts } from '../db/db';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    const icons = useRef([]);
    icons.current = [];
    const containerRef = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();

        icons.current.forEach(element => {
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
                toggleActions: 'play none none reverse'
            })
        })

    }, []);


    const addRef = (element) => {
        if (element && !icons.current.includes(element)) {
            icons.current.push(element);
        }
    }


    return (
        <section className='contact' ref={containerRef} >
            <h2>Contacto</h2>
            <p>¡Contactame através de diferentes redes!</p>

            <div className='contact-container' >

                {
                    contacts.map(contact => (
                        <div key={contact.name} className='contact-icon' ref={addRef} >
                            <a href={contact.link} target='_blank' rel='noreferrer'  >
                                <img src={contact.icon} alt={contact.name} className='contact-icon_img' />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Contact;