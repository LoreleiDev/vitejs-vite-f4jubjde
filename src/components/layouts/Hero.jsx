import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section id="landing" className="relative select-none pt-24 pb-24 overflow-hidden bg-linear-to-br from-[#5B23FF] via-[#4A25B8] to-[#362F4F] text-white">
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-extrabold mb-6 leading-tight tracking-tight">
                    Wujudkan <span className="text-yellow-300">Website & Desain </span><br className="hidden md:block" />
                    impian anda!
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl mx-auto text-white/85 text-lg md:text-xl mb-10 leading-relaxed">
                    Kami merancang website responsif & identitas visual yang tidak hanya memukau, tapi juga dioptimalkan untuk meningkatkan konversi. Cepat, terpercaya, dan siap bersaing di era digital.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/services?section=website#website"
                        className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-[#5B23FF] font-semibold font-poppins rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Layanan Website</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>

                    <Link
                        to="/services?section=design#design"
                        className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span>Layanan Desain Grafis</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}