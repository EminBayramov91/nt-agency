import "@/app/styles/globals.css";
import dynamic from "next/dynamic";

import Header from "@/app/_components/header/Header";
const Footer  = dynamic(() => import("@/app/_components/footer/Footer"));
const Popup  = dynamic(() => import("@/app/_components/popup/Popup"));

import {AppProvider} from "@/app/_context/AppContext";

export const metadata = {
    metadataBase: new URL("https://nt-agency.cloud"),
    title: "N&T Agency — UX/UI дизайн и разработка сайтов | Минск, СНГ",
    description:
        "N&T Agency — дизайн-агентство из Минска. Разрабатываем дизайн, брендинг, мобильные интерфейсы и сайты под ключ для компаний из Беларуси и СНГ. Чистый визуал, понятная логика, digital-решения, которые работают.",
    openGraph: {
        title: "N&T Agency — UX/UI, брендинг и разработка сайтов",
        description:
            "Дизайн-агентство из Минска: UX/UI дизайн, брендинг и создание сайтов под ключ для бизнеса в Беларуси и СНГ.",
        url: "https://nt-agency.cloud/",
        siteName: "N&T Agency",
        images: [
            {
                url: "https://nt-agency.cloud/nt-agency-preview.png",
                width: 1200,
                height: 630,
                alt: "UX/UI и брендинг от N&T Agency — Минск",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "N&T Agency — UX/UI дизайн и digital-разработка",
        description:
            "Создаём сайты и бренды для компаний в Беларуси и СНГ. UX/UI, брендинг, дизайн под ключ.",
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
