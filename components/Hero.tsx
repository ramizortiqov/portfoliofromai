import React, { useState, useEffect } from 'react';

const roles = ["Full-stack Developer", "Front-end Developer"];

const Hero: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === roles[index].length ? 1000 : 150, Math.random() * 350));

        return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subIndex, index, reverse]);
    
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-brand-bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
        <div className="text-center z-10 px-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-text-primary">
                Рамиз Ортиков
            </h1>
            <p className="text-2xl md:text-4xl mt-4 text-brand-accent font-semibold">
                <span>{`${roles[index].substring(0, subIndex)}`}</span>
                <span className={`transition-opacity duration-300 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-brand-text-secondary leading-relaxed">
                Создаю современные веб-приложения с акцентом на производительность, UX и чистый код.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <a
                    href="#projects"
                    className="bg-brand-accent text-brand-bg-dark font-bold py-3 px-8 rounded-full hover:bg-brand-accent-light hover:shadow-lg hover:shadow-brand-accent/50 transition-all duration-300 transform hover:scale-105"
                >
                    Посмотреть Проекты
                </a>
                <a
                    href="/resume.pdf"
                    download
                    className="bg-transparent border-2 border-brand-accent text-brand-accent font-bold py-3 px-8 rounded-full hover:bg-brand-accent hover:text-brand-bg-dark hover:shadow-lg hover:shadow-brand-accent/50 transition-all duration-300 transform hover:scale-105"
                >
                    Скачать Резюме
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;