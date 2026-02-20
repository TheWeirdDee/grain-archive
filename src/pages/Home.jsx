import React from 'react';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
// import Footer from '../components/Footer';
import FeaturedAlbum from '../components/FeaturedAlbum';
import CinemaSelects from '../components/CinemaSelects';
import Subscribe from '../components/Subscribe';
import Grainbg from '../assets/Images/Grainbg.avif'; // your grain texture

const Home = () => {
    return (
        <div className="relative min-h-screen text-white font-sans pb-12">

            {/* Grain Background at the back */}
            <img
                src={Grainbg}
                alt="Grain background"
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            {/* Page Content */}
            <div className="relative z-20 bg-transparent">

                <Marquee />

                <Hero />

                <Gallery />

                <FeaturedAlbum />

                <CinemaSelects />

                <Subscribe />
            </div>

        </div>
    );
};

export default Home;
