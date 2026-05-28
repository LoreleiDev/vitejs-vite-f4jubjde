import stock1 from "../../assets/stock2.webp";
import { Link } from 'react-router-dom';

export default function ButtonParallax() {
    return (
        <>
            <section className="w-full flex items-center justify-center -mt-8 relative z-10 px-4">
                
                <div
                    className="w-full max-w-7xl h-44 md:h-52 relative flex cursor-pointer rounded-xl shadow-2xl overflow-hidden
                                bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
                    style={{ backgroundImage: `url(${stock1})` }}
                >

                    {/* ===== LEFT HALF - Website ===== */}
                    <Link to="/contact" className="select-none flex-1 relative group">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-700/70 to-blue-600/85 
                                        transition-opacity duration-300 group-hover:opacity-95 z-0"></div>

                        {/* Rings - Mobile: 2 Rings, Desktop: 4 Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1">
                            {/* Ring 1 */}
                            <div className="absolute w-16 h-16 md:w-32 md:h-32 border-2 border-cyan-300/40 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-150"></div>
                            
                            {/* Ring 2 */}
                            <div className="absolute w-52 h-52 md:w-64 md:h-64 border border-blue-300/30 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-300"></div>

                            {/* Desktop Extra Rings */}
                            <div className="hidden md:block absolute w-96 h-96 border border-indigo-300/20 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-500"></div>
                            <div className="hidden md:block absolute w-lg h-128 border border-white/10 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-700"></div>
                            
                            {/* 🎨 Paint Splatter Effect - White Drops */}
                            <div className="absolute top-10 left-14 w-1.5 h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200"></div>
                            <div className="absolute top-24 right-12 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-350"></div>
                            <div className="hidden md:block absolute top-6 left-1/3 w-1 h-1 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-150"></div>
                            <div className="hidden md:block absolute bottom-20 left-24 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-450"></div>
                            <div className="absolute bottom-16 right-20 w-1.5 h-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-250"></div>
                            <div className="absolute bottom-28 right-10 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-400"></div>
                            <div className="hidden md:block absolute top-1/2 left-16 w-2.5 h-2.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-500"></div>
                            <div className="hidden md:block absolute top-16 right-16 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-300"></div>
                        </div>

                        <div className="relative z-10 flex items-center justify-center h-full text-center px-3">
                            <div className="transform transition-transform duration-500 group-hover:scale-105">
                                <svg className="w-7 h-7 mx-auto text-white mb-1 opacity-80 group-hover:opacity-100 transition-opacity"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <h2 className="text-sm md:text-base lg:text-lg font-poppins font-bold text-white mb-1 leading-tight">
                                    Jasa Website
                                </h2>
                                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#5B23FF] rounded-lg 
                                                text-xs md:text-sm font-poppins font-semibold shadow-lg 
                                                group-hover:shadow-xl transition-all duration-300 group-hover:gap-2.5">
                                    Pesan Sekarang
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* ===== DIVIDER ===== */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/40 -translate-x-1/2 z-20 pointer-events-none"></div>

                    {/* ===== RIGHT HALF - Design ===== */}
                    <Link to="/contact" className="select-none flex-1 relative group">
                        <div className="absolute inset-0 bg-linear-to-r from-purple-700/70 to-purple-600/85 
                                        transition-opacity duration-300 group-hover:opacity-95 z-0"></div>

                        {/* Rings - Purple Variant */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-1">
                            <div className="absolute w-16 h-16 md:w-32 md:h-32 border-2 border-pink-300/40 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-150"></div>
                            
                            <div className="absolute w-52 h-52 md:w-64 md:h-64 border border-purple-300/30 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-300"></div>

                            <div className="hidden md:block absolute w-96 h-96 border border-fuchsia-300/20 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-500"></div>
                            <div className="hidden md:block absolute w-lg h-128 border border-white/10 rounded-full opacity-0 
                                            group-hover:opacity-100 transition-all duration-700 ease-out delay-700"></div>

                            {/* 🎨 Paint Splatter Effect - White Drops (Mirrored Layout) */}
                            <div className="absolute top-10 right-14 w-1.5 h-1.5 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200"></div>
                            <div className="absolute top-24 left-12 w-2 h-2 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-350"></div>
                            <div className="hidden md:block absolute top-6 right-1/3 w-1 h-1 bg-white/70 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-150"></div>
                            <div className="hidden md:block absolute bottom-20 right-24 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-450"></div>
                            <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-250"></div>
                            <div className="absolute bottom-28 left-10 w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-400"></div>
                            <div className="hidden md:block absolute top-1/2 right-16 w-2.5 h-2.5 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-500"></div>
                            <div className="hidden md:block absolute top-16 left-16 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-300"></div>
                        </div>

                        <div className="relative z-10 flex items-center justify-center h-full text-center px-3">
                            <div className="transform transition-transform duration-500 group-hover:scale-105">
                                <svg className="w-7 h-7 mx-auto text-white mb-1 opacity-80 group-hover:opacity-100 transition-opacity"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                                <h2 className="text-sm md:text-base lg:text-lg font-poppins font-bold text-white mb-1 leading-tight">
                                    Jasa Desain Grafis
                                </h2>
                                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#7C3AED] rounded-lg 
                                                text-xs md:text-sm font-poppins font-semibold shadow-lg 
                                                group-hover:shadow-xl transition-all duration-300 group-hover:gap-2.5">
                                    Pesan Sekarang
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </section>
        </>
    );
}