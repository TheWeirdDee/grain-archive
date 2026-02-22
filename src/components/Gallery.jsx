import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ items }) => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = gsap.utils.toArray('.gallery-item');

            elements.forEach((item) => {
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
    }, [items]);

    return (
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#111]">
            {items.map((item, index) => (
                <Link
                    key={item.id || index}
                    to={`/article/${item.id}`}
                    className="gallery-item relative overflow-hidden group cursor-pointer h-[75vh] w-full rounded-xl block"
                >
                    <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform will-change-transform"
                    />
                    <div className="text-overlay absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-md rounded-lg opacity-90 transition-all duration-500">
                        <h3 className="text-white text-lg font-bold drop-shadow-md">{item.title}</h3>
                        <p className="text-gray-200 text-sm drop-shadow-md">{item.category}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Gallery;
