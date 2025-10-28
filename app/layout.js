import "@/app/styles/globals.css";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import {AppProvider} from "@/app/_context/AppContext";
import Popup from "@/app/_components/popup/Popup";

export const metadata = {
    title: "N&T Agency — Digital Solutions and Design",
    description: "N&T Agency — your trusted partner in branding, design, and digital solutions.",
    openGraph: {
        title: "N&T Agency",
        description: "Creative digital agency providing branding, design, and development services.",
        url: "https://n-t-agency.vercel.app/",
        siteName: "N&T Agency",
        images: [
            {
                url: "/n-t-agency-preview.png",
                width: 1200,
                height: 1200,
                alt: "N&T Agency preview image",
            },
        ],
        locale: "ru_RU",
        type: "website",
    },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <AppProvider>
          <Header />
          <Popup />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
