import React, { useEffect, useRef } from 'react';
import GrainVideo from '../assets/Grain.mp4';
import Grainbg from '../assets/Images/Grainbg.jpg';
import { gsap } from 'gsap';

const Hero = () => {
    const titleRef = useRef(null);
    const title = "Grain Archive";

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-char", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.2
            });
        }, titleRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative px-2 pb-2">
            <div className="relative w-full md:h-[85vh] h-[65vh] rounded-2xl overflow-hidden shadow-2xl">

                <img
                    src={Grainbg}
                    alt="Grain background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={GrainVideo} type="video/mp4" />
                </video>


                <div className="absolute inset-0 bg-black/20"></div>


                <div ref={titleRef} className="absolute inset-0 flex items-end justify-start z-20 px-2 pb-12 pointer-events-none">
                    <h1 className="text-[14vw] leading-none font-bold tracking-tighter text-white overflow-hidden flex flex-wrap">
                        {title.split("").map((char, index) => (
                            <span key={index} className="hero-char inline-block whitespace-pre">
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>


            </div>
        </div>
    );
};

export default Hero;
