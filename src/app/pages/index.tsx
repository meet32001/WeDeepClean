import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <header className="text-center py-10">
                <h1 className="text-4xl font-bold">Welcome to WeDeepClean</h1>
                <p className="text-xl mt-4">Your trusted cleaning service in London, ON</p>
            </header>
            <Footer />
        </div>
    );
}