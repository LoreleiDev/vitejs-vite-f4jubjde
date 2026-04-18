import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isLandingSection, setIsLandingSection] = useState(false);

    useEffect(() => {
        const landingSection = document.getElementById('landing');
        if (!landingSection) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsLandingSection(entry.isIntersecting),
            { threshold: 0.5 }
        );
        observer.observe(landingSection);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300 && !isLandingSection) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility();
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, [isLandingSection]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button
                onClick={scrollToTop}
                className={`
                    fixed bottom-6 right-6 z-40 p-3 cursor-pointer rounded-full 
                    bg-linear-to-br from-[#5B23FF] to-[#7C3AED]
                    text-white shadow-lg 
                    hover:shadow-2xl hover:shadow-purple-500/30 
                    hover:scale-110 hover:-translate-y-1
                    active:scale-95
                    transition-all duration-400 ease-out
                    focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2
                    group
                    ${isVisible
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 translate-y-4 pointer-events-none'
                    }
                `}
                aria-label="Kembali ke atas"
            >
                <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1 group-active:translate-y-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
                
                <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
        </>
    );
}