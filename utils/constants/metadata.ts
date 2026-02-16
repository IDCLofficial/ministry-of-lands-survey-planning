import type { Metadata } from 'next';

// Site metadata that follows Next.js Metadata type
export const SITE_METADATA: Metadata = {
  metadataBase: new URL('https://lands.imo.gov.ng'),
  title: "Ministry of Lands, Survey, Housing and Urban Planning - Imo State",
  description: "Official website of the Imo State Ministry of Lands, Survey, Housing and Urban Planning. Providing efficient land administration, urban planning, and housing development services across Imo State.",
  authors: [{ name: "Imo State Government" }],
  alternates: {
    canonical: "/",
    languages: {
      'en-NG': '/en-ng',
    },
  }, 
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Lands, Survey, Housing and Urban Planning - Imo State",
    description: "Transforming land administration and urban planning in Imo State through transparency and digital innovation",
    creator: "@ImoStateGov",
    images: ["/assets/twitter-card.jpg"]
  },
  keywords: [
    "Imo State",
    "Land Administration",
    "Urban Planning",
    "Housing Development",
    "Survey Services",
    "Certificate of Occupancy",
    "Chief Barr. Enyinna Onuegbu",
    "Imo State Government",
    "Land Allocation",
    "Development Control",
    "IGIS",
    "Imo Geographic Information Service",
    "Land Use Charge",
    "Building Permits",
    "Urban Development"
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://lands.imo.gov.ng",
    siteName: "Imo State Ministry of Lands, Survey, Housing and Urban Planning",
    title: "Ministry of Lands, Survey, Housing and Urban Planning - Imo State",
    description: "Transforming land administration and urban planning in Imo State through transparency, efficiency, and digital innovation for sustainable development.",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Imo State Ministry of Lands, Survey, Housing and Urban Planning - Transforming Land Administration"
      }
    ]
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.png",
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/ng-logo.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/ng-logo.png',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4',
  },

  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#15803d' },
    { media: '(prefers-color-scheme: dark)', color: '#15803d' },
  ]
}