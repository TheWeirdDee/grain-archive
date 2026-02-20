import React from 'react';
import Navbar from '../components/Navbar';

const Archive = () => {
    return (
        <div className="bg-[#111] min-h-screen text-white">
            <Navbar />
            <div className="pt-32 px-8">
                <h1 className="text-6xl font-bold mb-8">Archive</h1>
                <p className="text-xl text-gray-400">This is the archive page.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="h-64 bg-gray-800 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Archive;
