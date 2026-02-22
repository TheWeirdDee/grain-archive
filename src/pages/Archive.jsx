import React from 'react';
import ArchiveHero from '../components/ArchiveHero';
import Gallery from '../components/Gallery';
import ArchiveFooter from '../components/ArchiveFooter';
import { articles } from '../data/articles';

const Archive = () => {
    return (
        <div className="bg-[#111] min-h-screen text-white font-sans">
            <ArchiveHero />
            <Gallery items={articles} />
            <ArchiveFooter />
        </div>
    );
};

export default Archive;
