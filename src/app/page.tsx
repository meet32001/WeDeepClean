import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import HeroSection from './Components/HomePage/HeroSection/HeroSection';
import OurStory from "./Components/HomePage/OurStorySection/OurStory";
import WhyUsSlider from './Components/HomePage/WhyUsSection/WhyUsSection';


export default function Home() {
    return (
        <div className="bg-white text-red min-h-screen">
            <Navbar />
            <HeroSection/>
            <OurStory />
            <WhyUsSlider />
            <Footer />
        </div>
    );
}