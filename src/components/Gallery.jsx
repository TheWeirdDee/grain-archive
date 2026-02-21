import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import DriftFilm from "../assets/Images/HomeImages/DriftFilm.png";
import FuzzWorship from "../assets/Images/HomeImages/FuzzWorship.png";
import SoftThings from "../assets/Images/HomeImages/SoftThings.png";
import VisualCulture from "../assets/Images/HomeImages/VisualCulture.png";
import WhiteGrain from '../assets/Images/WhiteGrain.avif';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
    {
        src: DriftFilm,
        title: "Listening to Films That Drift",
        category: "Film · August 21, 2028"
    },
    {
        src: FuzzWorship,
        title: "Drowning in Delay: The Revival of Fuzz Worship",
        category: "Music · August 6, 2028"
    },
    {
        src: SoftThings,
        title: "Color, Repetition, and the Sound of Soft Things",
        category: "Film · July 11, 2028"
    },
    {
        src: VisualCulture,
        title: "Mirrors, Image Loops, and Feedback Logic of Visual Culture",
        category: "Visual · June 24, 2028"
    }
];

const Gallery = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.gallery-item');

            items.forEach((item) => {
                const img = item.querySelector('img');
                const textContainer = item.querySelector('.text-overlay');

                item.addEventListener('mouseenter', () => {
                    gsap.to(img, { scale: 1.1, filter: 'blur(5px)', duration: 0.5, ease: 'power2.out' });
                    gsap.to(textContainer, { y: -10, opacity: 1, duration: 0.5, ease: 'power2.out' });
                });

                item.addEventListener('mouseleave', () => {
                    gsap.to(img, { scale: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' });
                    gsap.to(textContainer, { y: 0, opacity: 0.9, duration: 0.5, ease: 'power2.out' });
                });

                gsap.from(textContainer, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        end: 'bottom 60%',
                        toggleActions: 'play none none reverse',
                    },
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                });
            });
        }, galleryRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative z-10 bg-[#111]">

            <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {images.map((img, index) => (
                    <div key={index} className="gallery-item relative overflow-hidden group cursor-pointer h-[75vh] w-full rounded-xl">
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform will-change-transform"
                        />
                        <div className="text-overlay absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-md rounded-lg opacity-90 transition-all duration-500">
                            <h3 className="text-white text-lg font-bold drop-shadow-md">{img.title}</h3>
                            <p className="text-gray-200 text-sm drop-shadow-md">{img.category}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center items-center py-12 relative group overflow-hidden">

                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    style={{ backgroundImage: `url(${WhiteGrain})` }}
                ></div>

                <div className="absolute inset-0 bg-orange-500 -z-10"></div>

                <Link to="/archive" className="relative z-10">
                    <button className="text-4xl font-serif italic border-b-2 border-black pb-1 px-6 py-2 text-black">
                        View all
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gallery;
