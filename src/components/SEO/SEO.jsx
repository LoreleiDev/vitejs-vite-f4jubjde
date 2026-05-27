import { Helmet } from 'react-helmet-async'

export default function SEO({
    title = 'Averant Team - Jasa Website & Desain Grafis Profesional Surabaya',
    description = 'Jasa pembuatan website dan desain grafis profesional di Surabaya. Landing page, company profile, logo, flyer & sosial media. Harga terjangkau, hasil berkualitas. Konsultasi gratis!',
    image = '/logo.webp',
    url = 'https://averantteam.com',
    noindex = false,
    keywords = 'jasa website surabaya, jasa desain grafis, pembuatan landing page, desain logo, company profile, flyer design, instagram feed, jasa web developer, digital agency surabaya',
    serviceName = 'Jasa Website & Desain Grafis',
    serviceArea = 'Surabaya, Jawa Timur, Indonesia'
}) {
    const mainSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Averant Team",
        "description": description,
        "image": image,
        "priceRange": "$$",
        "areaServed": {
            "@type": "Place",
            "name": serviceArea
        },
        "serviceType": serviceName,
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `Layanan ${serviceName}`,
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Layanan Website",
                    "itemListElement": [
                        { "@type": "Service", "name": "Landing Pages", "serviceType": "Website Development" },
                        { "@type": "Service", "name": "Company Profile", "serviceType": "Website Development" },
                        { "@type": "Service", "name": "Portofolio Website", "serviceType": "Website Development" },
                        { "@type": "Service", "name": "Custom Website", "serviceType": "Website Development" }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Layanan Desain Grafis",
                    "itemListElement": [
                        { "@type": "Service", "name": "Design Logo", "serviceType": "Graphic Design" },
                        { "@type": "Service", "name": "Flyer & Poster", "serviceType": "Print Design" },
                        { "@type": "Service", "name": "Banner Design", "serviceType": "Digital Advertising" },
                        { "@type": "Service", "name": "IG Feed & Story", "serviceType": "Social Media Design" }
                    ]
                }
            ]
        },
        "sameAs": [
            "https://www.instagram.com/averanteam.official/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Indonesian", "English"],
            "areaServed": "ID"
        }
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://averanteam.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": serviceName,
                "item": "https://averanteam.com/services"
            }
        ]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Apakah Averant Team melayani ${serviceName.toLowerCase()}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Ya! Kami melayani ${serviceName.toLowerCase()} profesional. Semua hasil dibuat custom sesuai kebutuhan brand Anda.`
                }
            },
            {
                "@type": "Question",
                "name": "Berapa lama waktu pengerjaan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Timeline bervariasi tergantung kompleksitas: Website 3-30 hari, Desain Grafis 1-5 hari kerja."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah bisa konsultasi gratis sebelum order?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tentu! Kami menyediakan konsultasi gratis via WhatsApp untuk membahas kebutuhan, budget, dan rekomendasi paket."
                }
            }
        ]
    }

    return (
        <Helmet>
            {/* 🔹 Primary Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <meta name="author" content="Averant Team" />
            <meta name="service" content={serviceName} />
            <meta name="geo.region" content="ID-JI" />
            <meta name="geo.placename" content="Surabaya" />

            {/* 🔹 Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="Averant Team" />
            <meta property="og:locale" content="id_ID" />
            {url && <meta property="og:url" content={url} />}

            {/* 🔹 Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* 🔹 Canonical URL */}
            {url && url !== 'https://averanteam.com' && (
                <link rel="canonical" href={url} />
            )}

            {/* 🔹 Structured Data / JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(mainSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Helmet>
    )
}