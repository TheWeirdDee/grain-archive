import React, { useEffect, useRef } from 'react';
import WhiteGrain from '../assets/Images/WhiteGrain.avif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const films = [
    { title: "Static Bloom", year: "2004", mood: "Hazy, melancholic", why: "For the light leaks and long silences" },
    { title: "Glass Rerun", year: "1998", mood: "Dreamlike, looping", why: "Feels like déjà vu on VHS" },
    { title: "Cold Century", year: "2024", mood: "Stark, restrained", why: "A political breakup wrapped in fog" },
    { title: "Wires in the Grass", year: "1988", mood: "Pastoral, eerie", why: "Folk horror meets sci-fi" },
    { title: "Blue Minor", year: "2001", mood: "Intimate, jazzy", why: "Mood-driven editing and a killer score" },
    { title: "False Dawn", year: "2025", mood: "Bleak, slow burn", why: "A sunrise that never delivers" },
    { title: "Hyperfield", year: "1993", mood: "Lush, glitchy", why: "The glitch is the emotion" },
    { title: "Nocturne Number 5", year: "1980", mood: "Slow, romantic", why: "A love story told entire at night" },
];

const CinemaSelects = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cinema-char", {
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out"
            });

            gsap.from(".film-header", {
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.from(".film-row", {
                scrollTrigger: {
                    trigger: listRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const title = "Cinema Selects";

    return (
        <div ref={containerRef} className="w-full py-8 px-0 md:px-2 font-sans">
            <div className="relative rounded-sm overflow-hidden py-0 px-4 md:px-8 text-black">

                <div
                    className="absolute inset-0 z-0 opacity-100 pointer-events-none"
                    style={{
                        backgroundImage: `url(${WhiteGrain})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                ></div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 ref={titleRef} className="text-5xl md:text-9xl font-bold tracking-tighter md:mb-16 mb-6 mt-8 uppercase leading-none overflow-hidden">
                        {title.split("").map((char, index) => (
                            <span key={index} className="cinema-char inline-block whitespace-pre">
                                {char}
                            </span>
                        ))}
                    </h2>

                    <div ref={listRef}>

                        <div className="film-header grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-black/20 pb-4 mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
                            <div className="md:col-span-3">Film</div>
                            <div className="md:col-span-1">Year</div>
                            <div className="md:col-span-3">Mood</div>
                            <div className="md:col-span-5 text-right">Why watch</div>
                        </div>

                        <div className="space-y-6">
                            {films.map((film, index) => (
                                <div key={index} className="film-row grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 border-b border-black/10 pb-6 group cursor-pointer hover:bg-black/5 transition-colors p-2 rounded-lg">
                                    <div className="md:col-span-3 font-bold text-xl md:text-2xl">{film.title}</div>
                                    <div className="md:col-span-1 text-gray-600 font-mono">{film.year}</div>
                                    <div className="md:col-span-3 text-gray-800 italic">{film.mood}</div>
                                    <div className="md:col-span-5 text-gray-700 md:text-right">{film.why}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CinemaSelects;
