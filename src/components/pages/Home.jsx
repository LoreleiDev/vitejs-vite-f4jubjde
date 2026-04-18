import Navbar from "../layouts/Navbar";
import stock1 from "../../assets/stock2.jpg";
import Footer from "../layouts/Footer";
import BackToTop from "../features/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="landing" className="pt-28 pb-20 bg-linear-to-br from-[#5B23FF] to-[#362F4F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Solusi Jasa Pembuatan Website Harga <span className="text-yellow-300">Terjangkau</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg mb-8">
            Melayani pembuatan Company Profile, Landing Page, dan Website Portofolio dengan desain modern dan fungsional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="justify-center group relative px-8 py-3 bg-white text-[#5B23FF] rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Konsultasi Gratis</span>
              <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#services"
              className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <a href="/kontak" className="block w-full">
        <section className="w-full flex items-center justify-center -mt-8 relative z-10 px-4">
          <div className="w-full max-w-7xl h-40 md:h-48 relative group cursor-pointer rounded-xl shadow-2xl overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${stock1})`,
                  backgroundAttachment: 'fixed',
                }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-r from-[#5B23FF] to-[#7C3AED] transition-all duration-300 group-hover:opacity-100 opacity-80"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="absolute w-32 h-32 bg-blue-700 rounded-full opacity-0 group-hover:opacity-40 group-hover:w-200 group-hover:h-200 transition-all duration-1000 ease-out"></div>
              <div className="absolute w-32 h-32 bg-white rounded-full opacity-0 group-hover:opacity-20 group-hover:w-150 group-hover:h-150 transition-all duration-700 ease-out delay-75"></div>
              <div className="absolute w-32 h-32 bg-green-200 rounded-full opacity-0 group-hover:opacity-10 group-hover:w-250 group-hover:h-250 transition-all duration-1300 ease-out delay-150"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
              <div className="transform transition-all duration-500 group-hover:scale-105">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  Siap Memiliki Website Profesional?
                </h2>
                <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-[#5B23FF] rounded-lg text-sm md:text-base font-semibold shadow-lg group-hover:shadow-xl transition-all group-hover:gap-3">
                  Pesan Sekarang
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </a>

      {/* Service Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilih paket dasar yang sesuai, lalu kustomisasi fitur tambahan sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

            {/* 🚀 Landing Pages */}
            <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Landing Pages</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">
                Halaman promosi tunggal yang konversif untuk campaign, product launch, atau lead generation.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["1 Halaman Utama", "Mobile Friendly", "Basic SEO"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-400 italic">+10 fitur add-on tersedia</span>
            </div>

            {/* 🏢 Company Profile */}
            <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-50 mb-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Company Profile</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">
                Website multi-halaman untuk menampilkan identitas, visi-misi, dan kredibilitas perusahaan.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["5 Halaman Standar", "Form Kontak", "Mobile Responsive"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-400 italic">+12 fitur add-on tersedia</span>
            </div>

            {/* 🎨 Portofolio Website - Popular */}
            <div className="group bg-white rounded-xl border border-purple-300 p-5 hover:shadow-lg transition-all duration-200 relative flex flex-col">
              <span className="absolute top-0 right-0 px-2 py-0.5 bg-purple-600 text-white text-[10px] font-medium rounded-bl-lg rounded-tr-xl">
                Popular
              </span>
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-purple-50 mb-3">
                <svg className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Portofolio Website</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">
                Tampilkan karya terbaik dengan galeri interaktif, ideal untuk kreatif, freelancer, atau agency.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["Galeri Portfolio", "Lightbox Preview", "SEO Optimized"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-400 italic">+8 fitur add-on tersedia</span>
            </div>

            {/* ⚙️ Custom Website */}
            <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-amber-300 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-amber-50 mb-3">
                <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Custom Website</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">
                Solusi tailor-made dengan fitur khusus, skalabilitas tinggi, dan integrasi sistem eksternal.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["Desain Full Custom", "Admin Dashboard", "Database Integration"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-400 italic">+15 fitur add-on tersedia</span>
            </div>

            {/* 🤖 Chatbot AI */}
            <div className="group bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-emerald-300 transition-all duration-200 flex flex-col">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-emerald-50 mb-3">
                <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">Chatbot AI</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">
                Asisten virtual 24/7 yang bisa jawab FAQ, bantu pelanggan, dan terintegrasi dengan website/WhatsApp.
              </p>
              <ul className="space-y-1.5 mb-4">
                {["AI FAQ Training", "Website Chat Widget", "Live Chat Handover"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <svg className="h-3.5 w-3.5 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="text-xs text-gray-400 italic">+5 fitur add-on tersedia</span>
            </div>
          </div>
          {/* Add-on Note */}
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-500">
              💡 Semua layanan bisa dikustomisasi. Fitur tambahan seperti <span className="font-medium text-gray-700">Integrasi WhatsApp, Speed Optimization, Google Analytics, dll</span> tersedia sebagai add-on. Konsultasikan kebutuhan Anda untuk paket terbaik!
            </p>
          </div>
        </div>
      </section>

      

      <Footer />
      <BackToTop />
    </>
  );
}