import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';
import OurStory from "../Components/OurStorySection/OurStory";
import WhyUsSlider from '../Components/WhyUsSection/WhyUsSection';
import RecurringCleaning from '../Components/RecurringCleaning/RecurringCleaning';
import Slider from '../Components/SliderSection/SliderSection';
import CleaningServiceSection from '../Components/MobileDisplaySection/MobileDisplaySection';

export default function Home() {
    return (
        <div className="bg-white text-red min-h-screen">
            <Navbar />
            <HeroSection/>
            <OurStory />
            <WhyUsSlider />
            <RecurringCleaning />
            <Slider />
            <CleaningServiceSection />
            <Footer />
        </div>
    );
}