import { useState } from "react";
import { ChevronDown, Monitor, Palette, Calendar, Video, FileCheck, Wallet, Package } from "lucide-react";

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState('website');
  const [activeStep, setActiveStep] = useState(0);

  const whatsappNumbers = {
    website: "6285174116973",
    design: "6285708079312"
  };

  const whatsappMessages = {
    website: `Halo Averant Team! 

Saya ingin konsultasi tentang proses pengerjaan *Website*.

Detail Kebutuhan:
• Tujuan Website: 
• Fitur yang dibutuhkan: 
• Referensi website (jika ada): 
• Framework/Platform yang diinginkan (jika ada): 
• Deadline (Minimal pesanan 3 hari sebelum tanggal deadline): 
• Budget estimasi: 

Mohon informasikan langkah selanjutnya. Terima kasih! `,
    design: `Halo Averant Team! 

Saya ingin konsultasi tentang proses pengerjaan *Desain Grafis*.

Detail Kebutuhan:
• Tujuan Desain: 
• Ukuran/Format yang dibutuhkan: 
• Referensi desain (jika ada): 
• Deadline:  

Mohon informasikan langkah selanjutnya. Terima kasih! `
  };

  const tabs = [
    { id: 'website', label: 'Website', icon: Monitor, activeColor: 'text-blue-700' },
    { id: 'design', label: 'Design', icon: Palette, activeColor: 'text-purple-700' }
  ];

  const colors = {
    border: activeTab === 'website' ? 'border-blue-300' : 'border-purple-300',
    bg: activeTab === 'website' ? 'bg-blue-50/50' : 'bg-purple-50/50',
    iconBg: activeTab === 'website' ? 'bg-blue-600' : 'bg-purple-600',
    titleText: activeTab === 'website' ? 'text-blue-900' : 'text-purple-900',
  };

  const websiteSteps = [
    {
      icon: Wallet,
      title: "DP Minimal 50% & Konfirmasi Order",
      description: "Lakukan pembayaran DP minimal 50% sebagai tanda jadi. Setelah pembayaran dikonfirmasi, kami akan mengirimkan invoice resmi dan menjadwalkan sesi meeting awal. Progress pengerjaan akan diupdate setiap hari via WhatsApp/Email."
    },
    {
      icon: Video,
      title: "Sesi Meeting Klien (Online/Offline)",
      description: "Kami akan mengadakan sesi diskusi mendalam untuk memahami kebutuhan, target audiens, referensi desain, dan fitur yang diinginkan. Bisa dilakukan via Google Meet/Zoom atau tatap muka (area Surabaya & sekitarnya)."
    },
    {
      icon: Monitor,
      title: "Pengerjaan & Update Harian",
      description: "Tim kami mulai mengerjakan website sesuai brief. Anda akan menerima update progress setiap hari berupa screenshot, link staging, atau video preview. Revisi dapat diajukan selama masa pengerjaan."
    },
    {
      icon: FileCheck,
      title: "Demo Project & Penjelasan Fungsi",
      description: "Setelah website selesai, kami akan mengadakan sesi demo untuk menjelaskan seluruh fitur, cara mengelola konten, dashboard admin, SEO basics, dan tips maintenance. Anda bisa mencoba langsung dan memberikan feedback terakhir."
    },
    {
      icon: Package,
      title: "Pelunasan & Serah Terima Project",
      description: "Setelah Anda menyetujui hasil akhir, lakukan pelunasan. Kami akan mengirimkan seluruh file project (source code ZIP, database, dokumentasi teknis), akses hosting/domain, serta panduan lengkap penggunaan website."
    }
  ];

  const designSteps = [
    {
      icon: Wallet,
      title: "DP Minimal 50% & Konfirmasi Order",
      description: "Lakukan pembayaran DP minimal 50% sebagai tanda jadi. Setelah pembayaran dikonfirmasi, kami akan mengirimkan invoice resmi dan menjadwalkan sesi briefing. Progress pengerjaan akan diupdate setiap hari via WhatsApp/Email."
    },
    {
      icon: Calendar,
      title: "Sesi Briefing Kreatif (Online/Offline)",
      description: "Diskusi mendalam untuk memahami brand identity, target audiens, mood & tone, referensi visual, dan deliverables yang dibutuhkan. Bisa via Google Meet/Zoom atau tatap muka (area Surabaya & sekitarnya)."
    },
    {
      icon: Palette,
      title: "Proses Desain & Update Harian",
      description: "Tim desainer kami mulai membuat konsep sesuai brief. Anda akan menerima preview progress setiap hari berupa mockup atau draft. Revisi dapat diajukan selama masa pengerjaan sesuai paket yang dipilih."
    },
    {
      icon: FileCheck,
      title: "Presentasi Final & Revisi Terakhir",
      description: "Setelah desain selesai, kami akan mempresentasikan hasil final beserta penjelasan konsep, pilihan warna, tipografi, dan aplikasi desain. Anda dapat memberikan feedback terakhir sebelum file diserahkan."
    },
    {
      icon: Package,
      title: "Pelunasan & Serah Terima File",
      description: "Setelah Anda menyetujui hasil akhir, lakukan pelunasan. Kami akan mengirimkan seluruh file source (AI/PSD/PDF), file export (PNG/JPG/SVG), brand guideline mini, serta dokumentasi penggunaan aset desain."
    }
  ];

  const currentSteps = activeTab === 'website' ? websiteSteps : designSteps;
  const sectionTitle = activeTab === 'website' ? 'Proses Pengerjaan Website' : 'Proses Pengerjaan Desain';
  
  const currentWhatsappLink = `https://wa.me/${whatsappNumbers[activeTab]}?text=${encodeURIComponent(whatsappMessages[activeTab])}`;

  return (
    <section className="py-16 px-4 bg-white select-none">
      <div className="max-w-5xl mx-auto">
        
        {/* Header + Toggle */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {sectionTitle}
            </h2>
            <p className="text-gray-600 mt-5 max-w-xl">
              Transparan, terstruktur, dan komunikatif. Kami pastikan Anda selalu update di setiap tahapan.
            </p>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="inline-flex bg-gray-200/60 p-1.5 rounded-2xl shadow-inner backdrop-blur-sm">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setActiveStep(0); }}
                    className={`cursor-pointer relative flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${
                      isActive
                        ? `bg-white ${tab.activeColor} shadow-md`
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

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side - CTA Card */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100/50 rounded-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Butuh konsultasi sebelum mulai?
            </h3>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Tim kami siap membantu Anda memilih paket yang tepat dan menjawab semua pertanyaan seputar proses pengerjaan.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${activeTab === 'website' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                  <span className={`text-xs font-bold ${activeTab === 'website' ? 'text-blue-600' : 'text-purple-600'}`}>✓</span>
                </div>
                <span className="text-sm text-gray-600">Konsultasi gratis via WhatsApp</span>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${activeTab === 'website' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                  <span className={`text-xs font-bold ${activeTab === 'website' ? 'text-blue-600' : 'text-purple-600'}`}>✓</span>
                </div>
                <span className="text-sm text-gray-600">Penjelasan detail alur kerja & timeline</span>
              </div>
              <div className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${activeTab === 'website' ? 'bg-blue-100' : 'bg-purple-100'}`}>
                  <span className={`text-xs font-bold ${activeTab === 'website' ? 'text-blue-600' : 'text-purple-600'}`}>✓</span>
                </div>
                <span className="text-sm text-gray-600">Rekomendasi paket sesuai budget & kebutuhan</span>
              </div>
            </div>

            <a
              href={currentWhatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-white font-medium rounded-lg transition-colors duration-200 ${
                activeTab === 'website' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              <span>Hubungi via WhatsApp</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>

          {/* Right Side - Accordion Steps */}
          <div className="space-y-2">
            {currentSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                    isActive
                      ? `${colors.border} ${colors.bg} shadow-sm`
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="p-4 flex items-start gap-3">
                    {/* Step Number + Icon */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? colors.iconBg : 'bg-gray-200 text-gray-600'
                    } ${isActive ? 'text-white' : ''}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`font-medium text-sm md:text-base transition-colors ${
                          isActive ? colors.titleText : 'text-gray-900'
                        }`}>
                          {index + 1}. {step.title}
                        </h3>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                            isActive ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-800 flex items-start gap-2">
            <span className="text-lg">💡</span>
            <span>
              <strong>Catatan:</strong> Timeline pengerjaan bervariasi tergantung kompleksitas project. 
              Untuk website: 3-14 hari kerja. Untuk desain: 1-5 hari kerja. 
              Revisi diluar paket dapat dikenakan biaya tambahan.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}