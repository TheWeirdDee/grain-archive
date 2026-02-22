import React from 'react';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import FeaturedAlbum from '../components/FeaturedAlbum';
import CinemaSelects from '../components/CinemaSelects';
import Subscribe from '../components/Subscribe';
import Grainbg from '../assets/Images/Grainbg.avif';
import { articles } from '../data/articles';
import WhiteGrain from '../assets/Images/WhiteGrain.avif';
import { Link } from 'react-router-dom';

const Home = () => {
    const homeImages = articles.slice(0, 4);
    return (
        <div className="relative min-h-screen text-white font-sans pb-12">

            <img
                src={Grainbg}
                alt="Grain background"
                className="absolute inset-0 w-full h-full object-cover -z-20"
            />


            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            <div className="relative z-20 bg-transparent">

                <Marquee />

                <Hero />

                <Gallery items={homeImages} />

                <div className="w-full flex justify-center items-center py-12 relative group overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                        style={{ backgroundImage: `url(${WhiteGrain})` }}
                    ></div>
                    <div className="absolute inset-0 bg-orange-500 -z-10"></div>
                    <Link to="/archive" className="relative z-10">
                        <button className="text-4xl font-serif italic border-b-2 border-black pb-1 px-6 py-2 text-black cursor-pointer">
                            View all
                        </button>
                    </Link>
                </div>

                <FeaturedAlbum />

                <CinemaSelects />

                <Subscribe />
            </div>

        </div>
    );
};

export default Home;
