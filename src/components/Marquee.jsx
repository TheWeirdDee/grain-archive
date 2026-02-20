import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Grainbg from '../assets/Images/Grainbg.jpg';

const Marquee = () => {
    const marqueeRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const textWidth = textRef.current.clientWidth;

            gsap.to(textRef.current, {
                x: -textWidth / 2,
                duration: 20,
                ease: "none",
                repeat: -1,
            });
        }, marqueeRef);

        return () => ctx.revert();
    }, []);

    const text = "Independent writing on music, film, and visual culture—one deep cut at a time.  ";

    return (
        <div ref={marqueeRef} className="relative w-full overflow-hidden py-2 text-gray-400 text-sm uppercase tracking-widest">

            <img
                src={Grainbg}
                alt="Grain background"
                className="absolute inset-0 w-full h-full object-cover -z-20 opacity-70"
            />

            <div className="absolute inset-0 bg-black/50 -z-10 pointer-events-none"></div>

            <div ref={textRef} className="whitespace-nowrap flex text-[10px] md:text-xs relative z-20">
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
                <span className="px-4">{text}</span>
            </div>
        </div>
    );
};

export default Marquee;
