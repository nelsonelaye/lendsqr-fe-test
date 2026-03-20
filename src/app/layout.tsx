import type { Metadata } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Lendsqr",
  description: "Lendsqr | Empowering the smartest lenders",
};

import { Work_Sans, Roboto } from "next/font/google";
import Providers from "@/components/Providers/Providers";
import { Toaster } from "sonner";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${workSans.variable} ${roboto.variable}`}>
        <Providers>
          <Toaster position="top-right" duration={4000} richColors />
          {children}
        </Providers>
      </body>
    </html>
  );
}
