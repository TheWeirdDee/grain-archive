import React, { useEffect, useRef } from 'react';
import Grainbg from '../assets/Images/Grainbgg.jpg';
import { gsap } from 'gsap';

const ArchiveHero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const chars = titleRef.current.querySelectorAll('.archive-char');
        gsap.from(chars, {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.3
        });
    }, []);

    return (
        <div className="relative w-full pt-48 pb-12 px-8 bg-[#111] text-center overflow-hidden">

            <img
                src={Grainbg}
                alt="Grain background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20"></div>

            <h1
                ref={titleRef}
                className="relative z-10 text-[15vw] md:text-[180px] font-bold tracking-tighter leading-none text-white uppercase select-none flex justify-center overflow-hidden"
            >
                {"Archive".split("").map((char, i) => (
                    <span key={i} className="archive-char inline-block">{char}</span>
                ))}
            </h1>
        </div>
    );
};

export default ArchiveHero;
