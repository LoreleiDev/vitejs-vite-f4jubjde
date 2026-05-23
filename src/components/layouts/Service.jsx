import { useState } from 'react';
import {
    Monitor,
    Building2,
    Image,
    Palette,
    FileImage,
    ImagePlus,
    Smartphone,
    PenTool,
} from "lucide-react";
import { Link } from 'react-router-dom';

export default function Service() {
    const [activeTab, setActiveTab] = useState('website');

    const tabs = [
        { id: 'website', label: 'Website' },
        { id: 'design', label: 'Design' }
    ];

    const servicesData = {
        website: [
            { icon: Monitor, color: 'purple', bg: 'bg-purple-50', title: 'Landing Pages', desc: 'Halaman promosi tunggal yang konversif untuk campaign, product launch, atau lead generation.', features: ['1 Halaman Utama', 'Mobile Friendly', 'Basic SEO'], addons: '+10 fitur add-on tersedia', popular: false },
            { icon: Building2, color: 'blue', bg: 'bg-blue-50', title: 'Company Profile', desc: 'Website multi-halaman untuk menampilkan identitas, visi-misi, dan kredibilitas perusahaan.', features: ['5 Halaman Standar', 'Form Kontak', 'Mobile Responsive'], addons: '+12 fitur add-on tersedia', popular: false },
            { icon: Image, color: 'purple', bg: 'bg-purple-50', title: 'Portofolio Website', desc: 'Tampilkan karya terbaik dengan galeri interaktif, ideal untuk kreatif, freelancer, atau agency.', features: ['Galeri Portfolio', 'Lightbox Preview', 'SEO Optimized'], addons: '+8 fitur add-on tersedia', popular: true },
            { icon: Palette, color: 'amber', bg: 'bg-amber-50', title: 'Custom Website', desc: 'Solusi tailor-made dengan fitur khusus, skalabilitas tinggi, dan integrasi sistem eksternal.', features: ['Desain Full Custom', 'Admin Dashboard', 'Database Integration'], addons: '+15 fitur add-on tersedia', popular: false },
        ],
        design: [
            { icon: FileImage, color: 'pink', bg: 'bg-pink-50', title: 'Design Flyer & Poster', desc: 'Materi promosi cetak & digital yang eye-catching untuk event, promo, atau branding bisnis.', features: ['Resolusi Print & Digital', 'Revisi 2x', 'Format Siap Cetak'], addons: '+5 ukuran custom tersedia', popular: false },
            { icon: ImagePlus, color: 'blue', bg: 'bg-blue-50', title: 'Design Banner', desc: 'Spanduk digital atau cetak dengan komposisi visual menarik untuk iklan, pameran, atau header web.', features: ['Layout High-Impact', 'Responsive Web/Offline', 'Quick Turnaround'], addons: '+8 template premium', popular: false },
            { icon: Smartphone, color: 'purple', bg: 'bg-purple-50', title: 'IG Feed & Story', desc: 'Konten visual konsisten & engaging untuk meningkatkan engagement dan brand awareness di Instagram.', features: ['Template Konsisten', 'Story Highlight Cover', 'Panduan Visual IG'], addons: '+15 konten bulanan', popular: true },
            { icon: PenTool, color: 'amber', bg: 'bg-amber-50', title: 'Design Logo', desc: 'Identitas visual unik, profesional, dan mudah diingat yang merepresentasikan nilai brand Anda.', features: ['3 Konsep Awal', 'File Vector (AI/SVG)', 'Brand Guideline Mini'], addons: '+6 varian aplikasi', popular: false }
        ]
    };

    const currentData = servicesData[activeTab];

    return (
        <section id="services" className="select-none py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-gray-200/60 p-1.5 rounded-2xl shadow-inner backdrop-blur-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`cursor-pointer relative px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-white text-purple-700 shadow-md'
                                        : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {activeTab === 'website' ? 'Layanan Website' : 'Layanan Desain Grafis'}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {activeTab === 'website'
                            ? 'Pilih paket dasar yang sesuai, lalu kustomisasi fitur tambahan sesuai kebutuhan bisnis Anda.'
                            : 'Visual yang kuat adalah kunci branding. Pilih kategori desain yang Anda butuhkan, kami eksekusi dengan presisi.'}
                    </p>
                </div>

                <div 
                    key={activeTab} 
                    className={`grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
                        activeTab === 'website' ? 'xl:grid-cols-4' : 'xl:grid-cols-4'
                    } transition-all duration-500 ease-out`}
                >
                    {currentData.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div 
                                key={idx} 
                                className={`cursor-pointer group bg-white rounded-xl border p-5 hover:shadow-lg transition-all duration-200 flex flex-col ${
                                    item.popular 
                                        ? 'border-purple-300 ring-1 ring-purple-100' 
                                        : 'border-gray-200 hover:border-purple-200'
                                }`}
                            >
                                <div className={`w-11 h-11 flex items-center justify-center rounded-lg ${item.bg} mb-3`}>
                                    <Icon className={`h-5 w-5 text-${item.color}-600`} />
                                </div>
                                <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                                <p className="text-gray-500 text-xs mb-3 flex-1">{item.desc}</p>
                                <ul className="space-y-1.5 mb-4">
                                    {item.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-1.5 text-xs text-gray-600">
                                            <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-xs text-gray-400 italic">{item.addons}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-sm text-gray-500">
                        💡 Semua layanan bisa dikustomisasi. {activeTab === 'website' 
                            ? 'Fitur tambahan seperti Integrasi WhatsApp, Speed Optimization, Google Analytics tersedia sebagai add-on.' 
                            : 'Pilihan warna custom, revisi tambahan, dan format file premium tersedia sebagai add-on.'} 
                        <span className="font-medium text-gray-700"> Konsultasikan kebutuhan Anda untuk paket terbaik!</span>
                    </p>
                </div>

                <div className="mt-6 flex flex-col items-center gap-4">
                    <Link
                        to={activeTab === 'website' ? '/services?section=website#website' : '/services?section=design#design'}
                        className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-200 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                        <span>Lihat Selengkapnya</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <span className="text-xs text-gray-400">
                        {activeTab === 'website' ? '5 layanan utama · 50+ add-on' : '4 layanan utama · 30+ template premium'} · Custom request
                    </span>
                </div>
            </div>
        </section>
    );
}