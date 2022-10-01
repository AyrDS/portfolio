import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { certifications } from '../db/db';

export const Certifications = () => {


   return (
      <section className="certifications" id='certificados' >
         <h2>Certificados</h2>

         <div>
            <Fade duration={3000}>
               {
                  certifications.map(({ id, img }) => (
                     <img src={img} className='slide-img' key={id} />
                  ))
               }

            </Fade>
         </div>
      </section>
   )
}