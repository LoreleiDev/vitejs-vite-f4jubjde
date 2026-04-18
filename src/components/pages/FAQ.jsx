import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Apakah harus miliki website?",
    a: "Kalau mau keliatan serius di bisnis, ya butuh. Biar gak keliatan abal."
  },
  {
    q: "Apakah saya bisa update konten sendiri?",
    a: "Bisa. Kita sediain dashboard biar lu gak ngandelin orang terus."
  },
  {
    q: "Jika saya kesulitan update konten apakah nanti bisa di pandu?",
    a: "Bisa. Kita bantu, tapi jangan tiap menit nanya 😭"
  },
  {
    q: "Apa saja yang perlu saya siapkan jika ingin memesan jasa?",
    a: "Konten, logo, gambaran desain. Sisanya kita gasin."
  },
  {
    q: "Saya sudah punya domain dan hosting, apakah bisa pakai jasa kalian?",
    a: "Bisa banget. Tinggal lanjut, gak usah ribet."
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        FAQ Jasa Pembuatan Website
      </h2>

      <div className="max-w-5xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-xl p-6 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">{item.q}</p>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* ANIMATED CONTENT */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open === i
                  ? "grid-rows-[1fr] opacity-100 mt-3"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-black text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}