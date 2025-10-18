import "./_styles/globals.css";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";

export const metadata = {
    title: "N&T Agency",
    description: "N&T Agency",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
