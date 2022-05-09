import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Navbar from './components/Navbar';


const PortfolioApp = () => {
    return (
        <>
            <Navbar />

            <main>
                <Home />

                <AboutMe />
            </main>
        </>
    )
}

export default PortfolioApp;