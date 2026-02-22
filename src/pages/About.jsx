import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Subscribe from '../components/Subscribe';

// About Images
import Cassette from '../assets/Images/About/Casette.png';
import FloppyDisk from '../assets/Images/About/Floppydisk.png';
import Paperscrap from '../assets/Images/About/Paperscrap.png';
import Polaroid from '../assets/Images/About/Polaroid.png';
import Postcard from '../assets/Images/About/Postcard.png';
import Telegram from '../assets/Images/About/Telegram.png';
import VHStape from '../assets/Images/About/VHStape.png';
import VinylRecord from '../assets/Images/About/Vinylrecord.png';
import ContactImage from '../assets/Images/About/Image.png';

const marqueeImages = [
    Cassette, FloppyDisk, Paperscrap, Polaroid,
    Postcard, Telegram, VHStape, VinylRecord
];

const About = () => {
    const marqueeRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const totalWidth = marquee.scrollWidth;


        gsap.to(marquee, {
            x: -totalWidth / 2,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        const chars = titleRef.current.querySelectorAll('.about-char');
        gsap.from(chars, {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.2
        });
    }, []);

    return (
        <div className="bg-[#111] min-h-screen text-white font-sans selection:bg-orange-500 overflow-x-hidden">

            <header className="pt-40 pb-20 px-8 text-center">
                <h1
                    ref={titleRef}
                    className="text-[15vw] md:text-[12rem] font-bold leading-none tracking-tighter uppercase flex justify-center overflow-hidden"
                >
                    {"About".split("").map((char, i) => (
                        <span key={i} className="about-char inline-block">{char}</span>
                    ))}
                </h1>
            </header>

            <div className="py-20 overflow-hidden">
                <div
                    ref={marqueeRef}
                    className="flex items-center gap-12 md:gap-24 whitespace-nowrap"
                >
                    {[...marqueeImages, ...marqueeImages].map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Archive item ${index}`}
                            className="h-40 md:h-64 lg:h-80 w-auto object-contain hover:scale-105 transition-transform duration-500 cursor-crosshair opacity-80 hover:opacity-100"
                        />
                    ))}
                </div>
            </div>

            {/* Backstory Section */}
            <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-12">
                <div className="md:col-span-4">
                    <h2 className="text-xl font-medium text-white/40 uppercase tracking-widest md:ml-20 ml-0">
                        Why this exists
                    </h2>
                </div>
                <div className="md:col-span-8">
                    <p className="text-xl leading-tight font-medium">
                        Grain Archive is a running record of the fuzz, fragments, and found moments in music, film, and visual culture. From washed-out shoegaze to sun-faded celluloid, we document the tones that don't always get clean airtime. Not everything needs to be polished to mean something. Independently built by me, <span className="text-orange-500">Divine Dilibe</span>, and updated at the mercy of mood, memory, and whatever's looping at 3am, no seriously:).
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-900 shadow-2xl group">
                        <img
                            src={ContactImage}
                            alt="Contact Visual"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                        />
                    </div>

                    {/* Right: Contact Details */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Contact</h2>
                            <p className="text-xl text-white/60 leading-relaxed mb-8">
                                Got a dusty VHS, a lost record, or a film no one talks about?
                                We're always looking for new fragments to archive.
                            </p>
                            <p className="text-xl text-white/60 leading-relaxed">
                                Send recs, love letters, or questions to:
                            </p>
                            <a
                                href="mailto:mail@grainarchive.com"
                                className="text-2xl md:text-3xl font-bold text-white hover:text-orange-500 transition-colors pb-1"
                            >
                                mail@grainarchive.com
                            </a>
                        </div>

                        <div className="pt-12 flex gap-8 text-white/40 uppercase text-sm tracking-widest font-bold">
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">Twitter</a>
                            <a href="#" className="hover:text-white transition-colors">RSS</a>
                        </div>
                    </div>
                </div>
            </section>

            <Subscribe />
        </div>
    );
};

export default About;
