import { Poppins, Geist_Mono } from "next/font/google";
import "../assets/styles/globals.css";

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
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
