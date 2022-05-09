
const AboutMe = () => {

    const year = (new Date().getFullYear()) - 1997;
    console.log(year);

    return (
        <section className='aboutMe' id='sobreMi' >
            <div className='aboutMe-info' >
                <h2>Sobre Mi</h2>
                <p className='aboutMe-info_cuestion' >¿Quien Soy?</p>
                <p>Soy Ayrton Da Silva, desarrollador Full-stack.</p>
            </div>
            <div className='aboutMe-skills' >
                <h2>Mis Skills</h2>
            </div>
        </section>
    )
}

export default AboutMe;