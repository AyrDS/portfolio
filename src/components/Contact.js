import React from 'react';
import { contacts } from '../db/db';


const Contact = () => {
    return (
        <section className='contact' >
            <h2>Contacto</h2>
            <p>¡Contactame através de diferentes redes!</p>

            <div className='contact-container' >

                {
                    contacts.map(contact => (
                        <div key={contact.name} className='contact-icon' >
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