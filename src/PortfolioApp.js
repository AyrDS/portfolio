import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


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

            <Footer />
        </>
    )
}

export default PortfolioApp;