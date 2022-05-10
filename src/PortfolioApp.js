import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';


const PortfolioApp = () => {
    return (
        <>
            <Navbar />

            <main>
                <Home />

                <AboutMe />

                <Projects />

                <Contact />
            </main>
        </>
    )
}

export default PortfolioApp;