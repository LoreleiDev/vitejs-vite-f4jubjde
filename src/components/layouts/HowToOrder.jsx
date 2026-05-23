import { useNavigate } from 'react-router-dom';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import stock1 from "../../assets/stock.jpeg";

export default function HowToOrderSection() {
    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    };

    return (
        <section id="cara-order" className="relative py-14 px-4 rounded-t-4xl overflow-hidden select-none">
            {/* 🔹 Background Layer */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${stock1})`,
                        backgroundAttachment: 'fixed',
                    }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-r from-[#7C3AED]/95 to-[#A855F7]/95 opacity-80" />
            </div>

            {/* 🔹 Konten Utama */}
            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Cara Memesan Layanan
                    </h2>
                    <p className="text-purple-100 mt-5 text-md leading-relaxed">
                        Pilih metode yang paling nyaman. Kami akan segera merespons dan memproses pesanan Anda.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* ===== WhatsApp Method ===== */}
                    <div className="border border-white/30 rounded-xl p-6 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-300">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                <MessageCircle className="w-5 h-5 text-gray-700" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900">Via WhatsApp</h3>
                        </div>

                        <ol className="space-y-3.5 mb-5 flex-1">
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">1</span>
                                <span>Buka halaman <span className="text-gray-900 font-medium">Layanan</span> untuk melihat paket.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">2</span>
                                <span>Pilih paket Website atau Design, lalu klik <span className="font-medium text-gray-900">"Pilih Paket"</span>.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">3</span>
                                <span>Lengkapi form WhatsApp yang sudah tersedia template-nya.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">4</span>
                                <span>Kirim pesan. Admin akan membalas dan memulai proses pengerjaan.</span>
                            </li>
                        </ol>

                        <button
                            onClick={() => handleNav('/services')}
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                        >
                            <MessageCircle className="w-4 h-4" />
                            <span>Pesan Layanan</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>

                    {/* ===== Email / Form Method ===== */}
                    <div className="border border-white/30 rounded-xl p-6 bg-white/95 backdrop-blur-sm shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-purple-300">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                <Mail className="w-5 h-5 text-gray-700" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-900">Via Email / Form</h3>
                        </div>

                        <ol className="space-y-3.5 mb-5 flex-1">
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">1</span>
                                <span>Buka halaman <span className="text-gray-900 font-medium">Kontak</span> untuk mengisi form resmi.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">2</span>
                                <span>Isi nama, kontak, jenis layanan, dan detail kebutuhan.</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">3</span>
                                <span>Lampirkan referensi atau file pendukung (jika ada).</span>
                            </li>
                            <li className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                                <span className="shrink-0 w-5 h-5 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-[11px] font-semibold">4</span>
                                <span>Kirim form. Admin akan merespons via email dalam 1×24 jam.</span>
                            </li>
                        </ol>

                        <button
                            onClick={() => handleNav('/contact')}
                            className="flex items-center justify-center gap-2 w-full py-2.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-500/30 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Buka Form Kontak</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}