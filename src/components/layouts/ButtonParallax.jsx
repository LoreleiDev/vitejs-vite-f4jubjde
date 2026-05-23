import stock1 from "../../assets/stock2.jpg";
import { Link } from 'react-router-dom';

export default function ButtonParallax() {
    return (
        <>
            <section className="w-full flex items-center justify-center -mt-8 relative z-10 px-4">
                <div className="w-full max-w-7xl h-44 md:h-52 relative flex cursor-pointer rounded-xl shadow-2xl overflow-hidden">

                    {/* ===== LEFT HALF - Website ===== */}
                    <Link to="/contact" className="select-none flex-1 relative group overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${stock1})`,
                                    backgroundAttachment: 'fixed',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-blue-400 transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
                        </div>

                        {/* Orbit Animation */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            {/* Main expanding circle */}
                            <div className="absolute w-28 h-28 bg-blue-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-96 group-hover:h-96 transition-all duration-1000 ease-out"></div>
                            {/* Orbit ring 1 */}
                            <div className="absolute w-20 h-20 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-60 group-hover:scale-[5] roup-hover:rotate-360 transition-all duration-2000 ease-out delay-100"></div>
                            {/* Orbit ring 2 */}
                            <div className="absolute w-20 h-20 border border-white/20 rounded-full opacity-0 group-hover:opacity-40 group-hover:scale-[6] group-hover:-rotate-270 transition-all duration-2500 ease-out delay-200"></div>
                            {/* Small orbiting dot 1 */}
                            <div className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:translate-x-24 group-hover:-translate-y-10 group-hover:scale-100 transition-all duration-1500 ease-out delay-300"></div>
                            {/* Small orbiting dot 2 */}
                            <div className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-0 group-hover:opacity-70 group-hover:-translate-x-20 group-hover:translate-y-14 transition-all duration-1800 ease-out delay-500"></div>
                            {/* Small orbiting dot 3 */}
                            <div className="absolute w-2.5 h-2.5 bg-green-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:translate-x-16 group-hover:translate-y-12 transition-all duration-2200 ease-out delay-400"></div>
                            {/* Inner white circle */}
                            <div className="absolute w-24 h-24 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-72 group-hover:h-72 transition-all duration-700 ease-out delay-75"></div>
                            {/* Inner green circle */}
                            <div className="absolute w-20 h-20 bg-green-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-96 group-hover:h-96 transition-all duration-1300 ease-out delay-150"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full text-center px-3">
                            <div className="transform transition-all duration-500 group-hover:scale-105">
                                <svg className="w-7 h-7 mx-auto text-white mb-1 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <h2 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">
                                    Jasa Pembuatan Website
                                </h2>

                                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#5B23FF] rounded-lg text-xs md:text-sm font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:gap-2.5 hover:bg-blue-600 hover:text-white">
                                    Pesan Sekarang
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* ===== DIVIDER ===== */}
                    <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/20 -translate-x-1/2 z-20 pointer-events-none"></div>

                    {/* ===== RIGHT HALF - Design ===== */}
                    <Link to="/contact" className="select-none flex-1 relative group overflow-hidden">
                        {/* Background */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${stock1})`,
                                    backgroundAttachment: 'fixed',
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-purple-400 transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
                        </div>

                        {/* Orbit Animation */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                            {/* Main expanding circle */}
                            <div className="absolute w-28 h-28 bg-purple-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-96 group-hover:h-96 transition-all duration-1000 ease-out"></div>
                            {/* Orbit ring 1 */}
                            <div className="absolute w-20 h-20 border-2 border-white/30 rounded-full opacity-0 group-hover:opacity-60 group-hover:scale-[5] group-hover:rotate-360 transition-all duration-2000 ease-out delay-100"></div>
                            {/* Orbit ring 2 */}
                            <div className="absolute w-20 h-20 border border-white/20 rounded-full opacity-0 group-hover:opacity-40 group-hover:scale-[6] group-hover:-rotate-270 transition-all duration-2500 ease-out delay-200"></div>
                            {/* Small orbiting dot 1 */}
                            <div className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-80 group-hover:-translate-x-22 group-hover:translate-y-8 group-hover:scale-100 transition-all duration-1500 ease-out delay-300"></div>
                            {/* Small orbiting dot 2 */}
                            <div className="absolute w-2 h-2 bg-purple-300 rounded-full opacity-0 group-hover:opacity-70 group-hover:translate-x-18 group-hover:-translate-y-16 transition-all duration-1800 ease-out delay-500"></div>
                            {/* Small orbiting dot 3 */}
                            <div className="absolute w-2.5 h-2.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-60 group-hover:-translate-x-14 group-hover:-translate-y-10 transition-all duration-2200 ease-out delay-400"></div>
                            {/* Inner white circle */}
                            <div className="absolute w-24 h-24 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-72 group-hover:h-72 transition-all duration-700 ease-out delay-75"></div>
                            {/* Inner green circle */}
                            <div className="absolute w-20 h-20 bg-green-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-96 group-hover:h-96 transition-all duration-1300 ease-out delay-150"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 flex items-center justify-center h-full text-center px-3">
                            <div className="transform transition-all duration-500 group-hover:scale-105">
                                <svg className="w-7 h-7 mx-auto text-white mb-1 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                                <h2 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1 leading-tight">
                                    Jasa Desain Grafis
                                </h2>
                                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-[#7C3AED] rounded-lg text-xs md:text-sm font-semibold shadow-lg group-hover:shadow-xl transition-all group-hover:gap-2.5">
                                    Pesan Sekarang
                                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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