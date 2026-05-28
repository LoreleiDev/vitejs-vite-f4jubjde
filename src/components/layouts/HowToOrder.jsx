import { useNavigate } from 'react-router-dom';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import stock1 from "../../assets/stock.webp";

const LIST_DELAYS = ['delay-200', 'delay-300', 'delay-500', 'delay-700'];

export default function HowToOrderSection() {
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleNav = (path) => {
        navigate(path);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    };

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="cara-order"
            className="relative py-14 px-4 rounded-t-4xl overflow-hidden select-none"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-700 ease-out ${isVisible ? 'scale-105' : 'scale-100'
                        }`}
                    style={{ backgroundImage: `url(${stock1})` }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#7C3AED]/95 to-[#A855F7]/95 opacity-80" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-12 transition duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                        Cara Memesan Layanan
                    </h2>
                    <p className="text-purple-100 mt-5 text-md leading-relaxed drop-shadow">
                        Pilih metode yang paling nyaman. Kami akan segera merespons dan memproses pesanan Anda.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card
                        isVisible={isVisible}
                        delay="delay-100"
                        icon={<MessageCircle className="w-5 h-5 text-gray-700" />}
                        title="Via WhatsApp"
                        steps={[
                            { text: "Buka halaman ", highlight: "Layanan", suffix: " untuk melihat paket." },
                            { text: "Pilih paket Website atau Design, lalu klik ", highlight: "\"Pilih Paket\"", suffix: "." },
                            { text: "Lengkapi form WhatsApp yang sudah tersedia template-nya." },
                            { text: "Kirim pesan. Admin akan membalas dan memulai proses pengerjaan." }
                        ]}
                        buttonText="Pesan Layanan"
                        onButtonClick={() => handleNav('/services')}
                        buttonIcon={MessageCircle}
                    />

                    <Card
                        isVisible={isVisible}
                        delay="delay-200"
                        icon={<Mail className="w-5 h-5 text-gray-700" />}
                        title="Via Email / Form"
                        steps={[
                            { text: "Buka halaman ", highlight: "Kontak", suffix: " untuk mengisi form resmi." },
                            { text: "Isi nama, kontak, jenis layanan, dan detail kebutuhan." },
                            { text: "Lampirkan referensi atau file pendukung (jika ada)." },
                            { text: "Kirim form. Admin akan merespons via email dalam 1×24 jam." }
                        ]}
                        buttonText="Buka Form Kontak"
                        onButtonClick={() => handleNav('/contact')}
                        buttonIcon={Mail}
                    />
                </div>
            </div>

            {/* Floating Dots - Hanya Desktop */}
            {isVisible && (
                <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${18 + i * 16}%`,
                                top: `${22 + (i % 3) * 24}%`,
                                animationDelay: `${i * 0.4}s`,
                                animationDuration: `${2.5 + i * 0.3}s`
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}


function Card({ isVisible, delay, icon, title, steps, buttonText, onButtonClick, buttonIcon: BtnIcon }) {
    return (
        <div className={`transition duration-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            } ${delay}`}>
            <div className="border border-white/30 rounded-xl p-6 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col h-full
                          transition duration-300 
                          md:hover:shadow-xl md:hover:-translate-y-1.5 md:hover:border-purple-300">
                <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm transition duration-300 md:hover:scale-110">
                        {icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                </div>

                <ol className="space-y-3.5 mb-5 flex-1">
                    {steps.map((step, idx) => (
                        <li
                            key={idx}
                            className={`flex gap-3 text-sm text-gray-700 leading-relaxed transition duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                } ${LIST_DELAYS[idx] || 'delay-700'}`}
                        >
                            <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">
                                {idx + 1}
                            </span>
                            <span>
                                {step.text}
                                {step.highlight && <span className="font-medium text-gray-900">{step.highlight}</span>}
                                {step.suffix}
                            </span>
                        </li>
                    ))}
                </ol>

                <button
                    onClick={onButtonClick}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-500/30
                               transition duration-300 active:translate-y-0 cursor-pointer group
                               md:hover:from-purple-700 md:hover:to-purple-800 md:hover:shadow-lg md:hover:shadow-purple-600/40 md:hover:-translate-y-0.5"
                >
                    <BtnIcon className="w-4 h-4 transition duration-300 md:group-hover:-translate-x-0.5" />
                    <span>{buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition duration-300 md:group-hover:translate-x-1" />
                </button>
            </div>
        </div>
    );
}