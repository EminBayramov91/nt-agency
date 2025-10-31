import "@/app/styles/globals.css";
import dynamic from "next/dynamic";

import Header from "@/app/_components/header/Header";
const Footer  = dynamic(() => import("@/app/_components/footer/Footer"));
const Popup  = dynamic(() => import("@/app/_components/popup/Popup"));

import {AppProvider} from "@/app/_context/AppContext";

export const metadata = {
    metadataBase: new URL("https://nt-agency.cloud"),
    title: "N&T Agency — Digital Solutions and Design",
    description: "N&T Agency — креативное digital-агентство, которое создаёт брендинг, дизайн и сайты под ключ.",
    openGraph: {
        title: "N&T Agency",
        description: "N&T Agency — креативное digital-агентство, которое создаёт брендинг, дизайн и сайты под ключ.",
        url: "https://nt-agency.cloud/",
        siteName: "N&T Agency",
        images: [
            {
                url: "https://nt-agency.cloud/nt-agency-preview.png",
                width: 1200,
                height: 630,
                alt: "N&T Agency preview image",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "N&T Agency",
        description: "Creative digital agency providing branding, design, and development services.",
        images: ["https://nt-agency.cloud/nt-agency-preview.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="ru">
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "N&T Agency",
                        url: "https://nt-agency.cloud",
                        logo: "https://nt-agency.cloud/logo.png",
                        sameAs: [
                            "https://www.linkedin.com/company/n-and-t-agency/",
                            "https://t.me/tatibr_dsgn",
                            "https://wa.me/375291805662",
                        ]
                    }),
                }}
            />
        </head>
        <body>
        <AppProvider>
            <Header/>
            <Popup/>
            <main>{children}</main>
            <Footer/>
        </AppProvider>
        </body>
        </html>
    );
}
