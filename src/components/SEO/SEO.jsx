import { Helmet } from 'react-helmet-async'

export default function SEO({
    title = 'Averant Team',
    description = 'Jasa pembuatan website profesional & harga terjangkau di Surabaya',
    url = typeof window !== 'undefined' ? window.location.href : 'https://averantteam.com',
    noindex = false
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Averant Team",
        "description": description,
        "url": typeof window !== 'undefined' ? window.location.origin : 'https://averantteam.com',
        "sameAs": ["https://www.instagram.com/averanteam.official/"],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Surabaya",
            "addressRegion": "Jawa Timur",
            "addressCountry": "ID"
        },
        "priceRange": "$$"
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
            <link rel="canonical" href={url} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    )
}