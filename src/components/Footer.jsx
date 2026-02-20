import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0a0a0a] text-white pt-16 pb-8 px-6 md:px-1 font-sans relative">
            {/* Grain Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none grain-bg"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">

                {/* Brand Section */}
                <div className="md:col-span-8 flex flex-col">
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4">
                        Grain<br />Archive
                    </h1>
                </div>

                {/* Navigation Columns */}
                <div className="md:col-span-4 grid grid-cols-2 gap-8">

                    {/* Links */}
                    <div className="flex flex-col space-y-4">
                        <div className="text-[10px] tracking-[0.2em] font-bold uppercase border border-white/20 rounded-full px-3 py-1 w-fit mb-2">
                            Links
                        </div>
                        <nav className="flex flex-col space-y-2">
                            <Link to="/" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Home</Link>
                            <Link to="/archive" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Archive</Link>
                            <Link to="/about" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">About</Link>
                            <Link to="/article" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Article</Link>
                        </nav>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col space-y-4">
                        <div className="text-[10px] tracking-[0.2em] font-bold uppercase border border-white/20 rounded-full px-3 py-1 w-fit mb-2">
                            Connect
                        </div>
                        <div className="flex flex-col space-y-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Instagram</a>
                            <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Threads</a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">YouTube</a>
                            <a href="mailto:hello@grainarchive.com" className="text-xl hover:text-[#ff4d00] transition-colors border-b border-transparent hover:border-[#ff4d00] w-fit">Email</a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Credits */}
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-4 text-xs md:text-sm text-gray-400">
                <div className="flex flex-col items-end w-full">
                    <p>©2025 Grain Archive</p>
                    <p className="tracking-wide">Words, images, and signals from the edge</p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .grain-bg {
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
                }
            `}} />
        </footer>
    );
};

export default Footer;
