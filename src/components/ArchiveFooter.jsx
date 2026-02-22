import React, { useEffect, useRef } from 'react';
import Subscribe from './Subscribe';
import { gsap } from 'gsap';

const ArchiveFooter = () => {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth;

        gsap.to(marquee, {
            x: -totalWidth / 2,
            duration: 20,
            repeat: -1,
            ease: "none",
        });
    }, []);

    const text = "End of reel · Fin · ";
    const repeatedText = new Array(10).fill(text).join("");

    return (
        <div className="w-full bg-[#111] overflow-hidden">
            <div className="py-12 relative">
                <div
                    ref={marqueeRef}
                    className="flex whitespace-nowrap"
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white opacity-80 uppercase tracking-widest px-4">
                        {repeatedText}
                    </h2>
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white opacity-80 uppercase tracking-widest px-4">
                        {repeatedText}
                    </h2>
                </div>
            </div>

            <Subscribe />
        </div>
    );
};

export default ArchiveFooter;
