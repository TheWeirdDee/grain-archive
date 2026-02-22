import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import ArchiveFooter from '../components/ArchiveFooter';

const Article = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === id);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#111] text-white flex items-center justify-center p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                    <Link to="/archive" className="text-orange-500 hover:underline">Return to Archive</Link>
                </div>
            </div>
        );
    }

    // Get 3 random related stories (excluding current)
    const moreStories = articles
        .filter(a => a.id !== article.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <div className="bg-[#111] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
            {/* Header / Hero Section */}
            <div className="pt-48 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h1 className="text-[12vw] md:text-[80px] font-bold leading-[0.9] tracking-tighter mb-6 uppercase">
                    {article.title}
                </h1>
                <p className="text-2xl md:text-4xl font-serif italic text-white/60 mb-12">
                    {article.category} · {article.date}
                </p>

                {/* Featured Image */}
                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl relative">
                    <img
                        src={article.src}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            </div>

            {/* Content Section - Light Background */}
            <div className="bg-[#f2f2f2] text-[#1a1a1a] py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Intro / Excerpt */}
                    <p className="text-xl md:text-2xl font-medium leading-relaxed mb-12 border-l-4 border-orange-500 pl-8">
                        {article.excerpt}
                    </p>

                    {/* Main Content */}
                    <div
                        className="prose prose-xl prose-orange max-w-none 
                        [&>h3]:text-3xl [&>h3]:font-bold [&>h3]:mt-12 [&>h3]:mb-6 
                        [&>p]:text-lg [&>p]:leading-relaxed [&>p]:mb-8 [&>p]:opacity-90"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Social/Footer divider */}
                    <div className="mt-24 pt-12 border-t border-black/10 flex justify-center gap-8 opacity-40">
                        <span className="hover:opacity-100 cursor-pointer transition-opacity">Instagram</span>
                        <span className="hover:opacity-100 cursor-pointer transition-opacity">Twitter</span>
                        <span className="hover:opacity-100 cursor-pointer transition-opacity">Share</span>
                    </div>
                </div>
            </div>

            {/* More Stories Section */}
            <div className="bg-[#111] py-24 px-4 md:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 uppercase tracking-tighter">More Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {moreStories.map((story) => (
                            <Link
                                key={story.id}
                                to={`/article/${story.id}`}
                                className="group block"
                            >
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img
                                        src={story.src}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <h3 className="text-lg font-bold leading-tight group-hover:text-orange-500 transition-colors mb-2">
                                    {story.title}
                                </h3>
                                <p className="text-sm text-white/40 uppercase tracking-widest">
                                    {story.category} · {story.date}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <ArchiveFooter />
        </div>
    );
};

export default Article;
