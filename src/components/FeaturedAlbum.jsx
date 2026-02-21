import React from 'react';
import FeaturedAlbumBg from '../assets/Images/HomeImages/FeaturedAlbum.png';
import FalseMemoryImg from '../assets/Images/HomeImages/FalseMemory.png';

const FeaturedAlbum = () => {
    return (
        <div className="relative w-full md:min-h-[120vh] min-h-[35vh] bg-[#111] text-white overflow-hidden px-2 md:px-4 flex flex-col justify-center items-center">

            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <img
                    src={FeaturedAlbumBg}
                    alt="Featured Album Background"
                    className="w-full h-full object-cover object-center opacity-40"
                />
            </div>

            <div className="absolute top-10 left-4 md:top-20 md:left-12 z-0 pointer-events-none select-none leading-[0.8]">
                <h1 className="text-[14vw] md:text-[100px] font-bold text-white uppercase tracking-tighter opacity-100 drop-shadow-lg mix-blend-overlay md:mix-blend-normal">
                    Featured <br /> Album
                </h1>
            </div>

            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 cursor-pointer mt-15 md:mt-39">
                <img
                    src={FalseMemoryImg}
                    alt="False Memory Album Art"
                    className="w-[70vw] md:w-[55vw] max-h-[90vh] object-cover rounded-sm"
                />
            </div>

            <div className="relative w-full px-4 text-center md:bottom-2 bottom-10 mt-0 md:mt-6">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-xl pb-2">
                    False Memory by Artifact
                </h3>
                <button className="inline-flex mb-3 items-center justify-center gap-3 text-sm md:text-base uppercase tracking-widest hover:text-gray-300 transition-colors border-b border-white pb-1">
                    <span className="text-[12px]">▶</span> Listen now
                </button>
            </div>

        </div>
    );
};

export default FeaturedAlbum;
