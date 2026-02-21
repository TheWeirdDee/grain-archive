import React from 'react';
import Subscribebg from '../assets/Images/HomeImages/Subscribebg.png';
import SubscribeImage from '../assets/Images/HomeImages/SubscribeImage.png';

const Subscribe = () => {
    return (
        <section className="relative w-full h-[150px] md:h-[500px] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${Subscribebg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 w-[90%] md:w-[80%] max-w-[1000px]  aspect-[21/9] md:aspect-[3/1] flex flex-col items-center justify-center text-center px-6 md:px-12">
                <img
                    src={SubscribeImage}
                    alt="Subscribe background"
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />

                <div className="relative z-20 flex flex-col items-center">
                    <h2
                        className="text-4xl md:text-7xl mt-8 italic"
                        style={{ fontFamily: "'Playfair Display', serif", color: "#000" }}
                    >
                        Tune into the signal
                    </h2>
                    <p className="text-black text-xs md:text-sm font-medium mb-6 md:mb-6 max-w-[280px] md:max-w-none">
                        No noise—just deep cuts on music, film, and culture
                    </p>
                    <button className="bg-black text-white px-8 md:px-12 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors shadow-lg mb-9">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
