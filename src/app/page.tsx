import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import HeroSection from './Components/HomePage/HomePage';


export default function Home() {
    return (
        <div className="bg-white text-red min-h-screen">
            <Navbar />
            <HeroSection/>
            <Footer />
        </div>
    );
}