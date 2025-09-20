import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import NavMenu from "@/components/nav/NavMenu";
import Footer from "@/components/footer/Footer";
import ParticlesBackground from "@/components/bgparticle/ParticlesBackground";
import { Box } from "@mui/material";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Share OLE777 Affiliate Football",
  description: "Created by Exequiel Vibar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ position: "relative", zIndex: 0 }}
        className={`${openSans.variable}`}
      >
        <ParticlesBackground />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          <NavMenu />
          {children}
          <Footer />
        </Box>
      </body>
    </html>
  );
}
