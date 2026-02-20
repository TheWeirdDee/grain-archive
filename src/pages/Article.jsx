import React from 'react';
import Navbar from '../components/Navbar';

const Article = () => {
    return (
        <div className="bg-[#111] min-h-screen text-white pt-24 px-8">
            <Navbar />
            <div className="max-w-3xl mx-auto mt-20">
                <span className="text-sm text-[#ff4d00] font-bold tracking-widest uppercase mb-4 block">Featured Article</span>
                <h1 className="text-5xl font-bold mb-8 leading-tight">The Analog Renaissance in a Digital Age</h1>
                <div className="h-96 bg-gray-800 rounded-xl mb-8 w-full"></div>
                <p className="text-gray-300 mb-6 leading-screen">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-gray-300 mb-6 leading-screen">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>
    );
};

export default Article;
