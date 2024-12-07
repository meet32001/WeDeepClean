"use client"; // Add this at the top

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-white py-10 px-10 md:px-20">
            {/* Left Content */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold text-green-800">
                    Detailed & Trusted Cleaning Service
                </h1>
                <p className="mt-4 text-gray-600 text-lg">
                    Leave the house cleaning chores to us
                </p>
                {/* Buttons */}
                <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700">
                        Book Service
                    </button>
                    <button className="bg-gray-100 text-green-600 py-2 px-6 rounded hover:bg-gray-200 border border-green-600">
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Right Content */}
            <div className="md:w-1/2 relative mt-10 md:mt-0">
                {/* Background Shape */}
                <div className="absolute inset-0 w-full h-full bg-green-100 rounded-full -z-10"></div>
                {/* Image */}
                <img
                    src="/hero-image.jpeg" // Replace with the actual image in the `public` folder
                    alt="Cleaning Service"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;