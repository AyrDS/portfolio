import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';


const PortfolioApp = () => {
    return (
        <>
            <Navbar />

            <main>
                <Home />

                <AboutMe />

                <Projects />
            </main>
        </>
    )
}

export default PortfolioApp;