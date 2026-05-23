import { useState } from "react";
import { ChevronDown, Monitor, Palette } from "lucide-react";

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState('website');
  const [activeIndex, setActiveIndex] = useState(null);

  const tabs = [
    { id: 'website', label: 'Website', icon: Monitor },
    { id: 'design', label: 'Design', icon: Palette }
  ];

  // FAQ for Website
  const websiteFaqs = [
    {
      question: "Berapa lama pembuatan website?",
      answer: "Waktu pengerjaan biasanya 7-14 hari untuk landing page dan 10-30 hari untuk website multi-halaman, tergantung kompleksitas fitur."
    },
    {
      question: "Apakah website SEO friendly?",
      answer: "Tentu, website kami sudah dilengkapi dengan SEO on-page dasar supaya website Anda mudah muncul di Google."
    },
    {
      question: "Apakah bisa request desain custom?",
      answer: "Ya, kami menyediakan desain custom sesuai kebutuhan bisnis dan identitas brand Anda."
    },
    {
      question: "Apakah website sudah mobile friendly?",
      answer: "Semua website yang kami buat sudah responsive dan optimal di HP, tablet, dan desktop."
    },
    {
      question: "Apakah ada garansi atau support setelah website selesai?",
      answer: "Kami menyediakan support teknis setelah website selesai sesuai dengan paket yang dipilih."
    },
    {
      question: "Apakah bisa menambahkan fitur di kemudian hari?",
      answer: "Bisa. Website dirancang fleksibel sehingga fitur tambahan dapat ditambahkan kapan saja."
    }
  ];

  // FAQ for Design
  const designFaqs = [
    {
      question: "Berapa lama pengerjaan desain?",
      answer: "Tergantung kompleksitas: Flyer/Poster 1-3 hari, Banner 2-4 hari, IG Feed 3-5 hari, Logo 3-7 hari. Revisi termasuk dalam timeline."
    },
    {
      question: "Apa yang perlu saya siapkan untuk order desain?",
      answer: "Silakan siapkan: brief singkat (tujuan, target audiens), referensi visual yang disukai, logo/brand guideline (jika ada), dan konten teks/gambar yang ingin dimasukkan."
    },
    {
      question: "Apakah bisa revisi? Berapa kali?",
      answer: "Bisa. Setiap paket sudah termasuk revisi minor (2-3x) untuk penyempurnaan. Revisi mayor atau perubahan konsep awal dapat dikenakan biaya tambahan."
    },
    {
      question: "Format file apa yang akan saya terima?",
      answer: "Untuk desain cetak: PDF, PNG, JPG (300 DPI). Untuk digital: PNG, JPG, SVG. Untuk logo: AI/EPS (vector) + PNG transparan + PDF. Semua file source bisa diminta sesuai paket."
    },
    {
      question: "Apakah desain bisa untuk kebutuhan cetak & digital?",
      answer: "Ya. Kami pastikan resolusi dan color mode (CMYK untuk cetak, RGB untuk digital) sudah sesuai agar hasil optimal di kedua media."
    },
    {
      question: "Apakah hak cipta desain menjadi milik saya?",
      answer: "Ya, setelah pelunasan, hak penggunaan komersial desain sepenuhnya menjadi milik Anda. Kami hanya menyimpan portofolio untuk keperluan promosi (kecuali diminta untuk dihapus)."
    }
  ];

  const currentFaqs = activeTab === 'website' ? websiteFaqs : designFaqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="select-none py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header + Toggle */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum (FAQ)
          </h2>
          <p className="text-gray-600 mb-6">
            Temukan jawaban dari pertanyaan yang paling sering diajukan oleh pelanggan kami.
          </p>
          
          {/*  Toggle  */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-gray-200/60 p-1.5 rounded-2xl shadow-inner backdrop-blur-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setActiveIndex(null); }}
                    className={`cursor-pointer relative flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-white text-purple-700 shadow-md'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {currentFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`cursor-pointer transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}