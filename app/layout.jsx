import { Poppins } from "next/font/google";
import "../assets/styles/globals.css";

import AuthProvider from "@/components/AuthProvider";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Serbia Rentals",
  description:
    "Place to find a perfect rental property for yourself, or publish your own!",
  keywords:
    "rental, property, real estate, apartments, houses, serbia rentals, serbia, belgrade, novi sad",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={`${poppins.variable} font-sans antialiased`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
