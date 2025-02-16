import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";


const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// export const metadata: Metadata = {
//   title: "Usługi Minikoparką",
//   description: "Usługi Minikoparką. Roboty ziemne. Neonil Palii.",
// };
export const metadata: Metadata = {

  title: "Minikoparka w Częstochowie - Wykopy, Drenaże, Niwelacje",
  description: "Skozystaj z profesjonalnych usług minikoparką w Częstochowie: wykopy pod fundamenty, drenaże, odwodnienia, niwelacje terenu, usuwanie korzeni, prace ogrodowe oraz więcej. Skontaktuj się z nami już dziś! Sprawdź całą ofertę!",
  keywords: [
    "usługi minikoparką Częstochowa",
    "wykopy fundamenty Częstochowa",
    "niwelacja terenu Częstochowa",
    "drenaże Częstochowa",
    "minikoparka Częstochowa",
    "prace ogrodowe minikoparką",
    "skarpowanie pod kostkę brukową",
    "równanie terenu"
  ],
  authors: [
    { name: "Neonil Palii. Kopię. Roboty Ziemne.", url: "" },
  ],
  openGraph: {
    title: "Minikoparka w Częstochowie - Wykopy, Drenaże, Niwelacje",
    description: "Usługi minikoparką w Częstochowie: wykopy pod fundamenty, drenaże, odwodnienia, niwelacje terenu, usuwanie korzeni, prace ogrodowe oraz więcej. Skontaktuj się z nami już dziś! Sprawdź całą ofertę!",
    url: "https://www.minikoparka-wykopy.pl/",
    siteName: "Minikoparka w Częstochowie. Roboty ziemne.",
    images: [
      {
        url: "https://console.cloudinary.com/console/c-a9be88117dd307e4237e7c71ea6029/media_library/search/asset/c587ede31455c082b93a986e1edb2bf7/manage?q=&view_mode=mosaic&context=manage",
        width: 960,
        height: 1280,
        alt: "Minikoparka w Częstochowie",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: "yes"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${jetBrainsMono.variable} `}
      >
        <Header />

        <PageTransition>
          {children}
        </PageTransition>

      </body>
    </html>
  );
}
