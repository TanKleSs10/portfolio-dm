import { Unbounded, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${unbounded.variable} ${IBMPlexSans.variable} antialiased font-ibmPlex text-platinum-100 p-5 relative`}
      >
        {children}
      </body>
    </html>
  );
}
