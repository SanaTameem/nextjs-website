import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import "./custom.scss";
import ClientBootstrap from "@/components/ClientBootstrap";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Website",
  description:
    "Website offers cutting-edge software development, IT networking, and consultancy services tailored to enhance your business operations.",
  keywords:
    "software development, IT solutions, networking services, consultancy, data management",
  author: "Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <ClientBootstrap />
        <Footer />
      </body>
    </html>
  );
}
