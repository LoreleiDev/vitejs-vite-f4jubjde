import stock1 from "../../assets/stock2.webp";
import { Link } from 'react-router-dom';

export default function ButtonParallaxAbout() {
    return (
        <>
            <Link to="/contact" className="select-none block w-full pb-5">
                <section className="w-full flex items-center justify-center -mt-8 relative z-10 px-4">
                    <div className="w-full max-w-7xl h-40 md:h-48 relative group cursor-pointer rounded-xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${stock1})` }}
                            ></div>
                            <div className="absolute inset-0 bg-linear-to-r from-[#5B23FF] to-[#7C3AED] transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            <div className="absolute w-32 h-32 bg-blue-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-200 group-hover:h-200 transition-all duration-1000 ease-out"></div>
                            <div className="absolute w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-150 group-hover:h-150 transition-all duration-700 ease-out delay-75"></div>
                            <div className="absolute w-32 h-32 bg-green-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-250 group-hover:h-250 transition-all duration-1300 ease-out delay-150"></div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-3 md:px-4 py-2">
                            <div className="transform transition-all duration-500 group-hover:scale-105">
                                <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight">
                                    Siap Membangun Kebutuhan Digital Anda?
                                </h2>
                                <p className="text-white/90 mb-2 md:mb-3 text-xs md:text-sm leading-snug">
                                    Konsultasikan kebutuhan digital Anda bersama kami.
                                </p>
                                <div className="inline-flex items-center gap-1.5 px-4 py-2 md:px-6 md:py-2.5 bg-white text-[#5B23FF] rounded-lg text-xs md:text-sm font-semibold shadow-lg group-hover:shadow-xl transition-all group-hover:gap-3">
                                    Mulai Sekarang
                                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Link>
        </>
    );
}