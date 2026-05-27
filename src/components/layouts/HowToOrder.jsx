import { useNavigate } from 'react-router-dom';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import stock1 from "../../assets/stock.jpeg";

export default function HowToOrderSection() {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasExited, setHasExited] = useState(false);

    const handleNav = (path) => {
        navigate(path);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    
                    setHasExited(false);
                    setIsVisible(true);
                } else {
                    
                    if (isVisible) {
                        setHasExited(true);
                        
                        setTimeout(() => {
                            setIsVisible(false);
                            setHasExited(false);
                        }, 400); 
                    }
                }
            },
            {
                threshold: 0.15, 
                rootMargin: '-50px 0px -50px 0px' 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isVisible]);

    
    const containerAnimation = `
        transition-all duration-500 ease-out transform
        ${isVisible && !hasExited 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }
    `;

    const cardAnimation = (delay) => `
        transition-all duration-500 ease-out transform
        ${isVisible && !hasExited 
            ? `opacity-100 translate-y-0 ${delay}` 
            : 'opacity-0 translate-y-6'
        }
    `;

    const listItemAnimation = (delay) => `
        transition-all duration-300 ease-out transform
        ${isVisible && !hasExited 
            ? `opacity-100 translate-x-0 ${delay}` 
            : 'opacity-0 -translate-x-4'
        }
    `;

    return (
        <section 
            ref={sectionRef}
            id="cara-order" 
            className={`relative py-14 px-4 rounded-t-4xl overflow-hidden select-none ${containerAnimation}`}
        >
            {/* 🔹 Background Layer */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out"
                    style={{
                        backgroundImage: `url(${stock1})`,
                        backgroundAttachment: 'fixed',
                        transform: isVisible && !hasExited ? 'scale(1.05)' : 'scale(1)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#7C3AED]/95 to-[#A855F7]/95 opacity-80 transition-opacity duration-500" />
            </div>

            {/* 🔹 Konten Utama */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-12 transition-all duration-500 ${isVisible && !hasExited ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                        Cara Memesan Layanan
                    </h2>
                    <p className="text-purple-100 mt-5 text-md leading-relaxed drop-shadow">
                        Pilih metode yang paling nyaman. Kami akan segera merespons dan memproses pesanan Anda.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* ===== WhatsApp Method ===== */}
                    <div className={cardAnimation('delay-100')}>
                        <div className="border border-white/30 rounded-xl p-6 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110">
                                    <MessageCircle className="w-5 h-5 text-gray-700" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900">Via WhatsApp</h3>
                            </div>

                            <ol className="space-y-3.5 mb-5 flex-1">
                                {[
                                    "Buka halaman <span className='text-gray-900 font-medium'>Layanan</span> untuk melihat paket.",
                                    "Pilih paket Website atau Design, lalu klik <span className='font-medium text-gray-900'>\"Pilih Paket\"</span>.",
                                    "Lengkapi form WhatsApp yang sudah tersedia template-nya.",
                                    "Kirim pesan. Admin akan membalas dan memulai proses pengerjaan."
                                ].map((text, idx) => (
                                    <li 
                                        key={idx} 
                                        className={`flex gap-3 text-sm text-gray-700 leading-relaxed ${listItemAnimation(`delay-${(idx + 2) * 100}`)}`}
                                        dangerouslySetInnerHTML={{ __html: `<span class="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">${idx + 1}</span><span>${text}</span>` }}
                                    />
                                ))}
                            </ol>

                            <button
                                onClick={() => handleNav('/services')}
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
                            >
                                <MessageCircle className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                                <span>Pesan Layanan</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                    {/* ===== Email / Form Method ===== */}
                    <div className={cardAnimation('delay-200')}>
                        <div className="border border-white/30 rounded-xl p-6 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-300">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110">
                                    <Mail className="w-5 h-5 text-gray-700" />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900">Via Email / Form</h3>
                            </div>

                            <ol className="space-y-3.5 mb-5 flex-1">
                                {[
                                    "Buka halaman <span className='text-gray-900 font-medium'>Kontak</span> untuk mengisi form resmi.",
                                    "Isi nama, kontak, jenis layanan, dan detail kebutuhan.",
                                    "Lampirkan referensi atau file pendukung (jika ada).",
                                    "Kirim form. Admin akan merespons via email dalam 1×24 jam."
                                ].map((text, idx) => (
                                    <li 
                                        key={idx} 
                                        className={`flex gap-3 text-sm text-gray-700 leading-relaxed ${listItemAnimation(`delay-${(idx + 2) * 100}`)}`}
                                        dangerouslySetInnerHTML={{ __html: `<span class="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">${idx + 1}</span><span>${text}</span>` }}
                                    />
                                ))}
                            </ol>

                            <button
                                onClick={() => handleNav('/contact')}
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer group"
                            >
                                <Mail className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
                                <span>Buka Form Kontak</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isVisible && !hasExited && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${15 + i * 15}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: `${2 + i * 0.5}s`
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}