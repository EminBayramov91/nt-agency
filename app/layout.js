import "@/app/styles/globals.css";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";
import {AppProvider} from "@/app/_context/AppContext";
import Popup from "@/app/_components/popup/Popup";

export const metadata = {
    title: "N&T Agency",
    description: "N&T Agency",
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
