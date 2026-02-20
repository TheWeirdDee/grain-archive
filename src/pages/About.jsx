import React from 'react';
import Navbar from '../components/Navbar'; // Re-using navbar, though simpler version might be needed for non-hero pages

const About = () => {
    // For non-home pages, we might want a different navbar placement or style.
    // For now, I'll wrap it similarly or just put it at the top.
    return (
        <div className="bg-[#111] min-h-screen text-white pt-24 px-8">
            {/* We can reuse the pill navbar or create a context-aware one. 
          The current pill navbar is designed to float. 
      */}
            <Navbar />

            <div className="max-w-4xl mx-auto text-center mt-20">
                <h1 className="text-6xl font-bold mb-8">About Grain Archive</h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Independent writing on music, film, and visual culture—one deep cut at a time.
                    We explore the granular details of art that others miss.
                </p>
            </div>
        </div>
    );
};

export default About;
