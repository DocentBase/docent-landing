import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docent — The Calm Operating System for Coaching Centers & Teachers",
  description: "Frictionless tuition fee management, biometric & QR attendance, 10-point daily homework tracking, and automated parent SMS reports. Powered by 24/7 on-site data entry and physical support.",
  keywords: [
    "coaching center software",
    "tuition fee management",
    "teacher attendance app",
    "student tracking",
    "fingerprint attendance for coaching",
    "SMS parent notifications",
    "Docent",
    "DocentBase"
  ],
  authors: [{ name: "Docent Technologies" }],
  openGraph: {
    title: "Docent — The Friction-Free Coaching Management Cockpit",
    description: "Automate monthly fee collections, biometrics & QR attendance, 10-point homework tracking, and parent SMS reports with 24/7 on-site physical support.",
    url: "https://docentbase.com",
    siteName: "DocentBase",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Docent — Frictionless Operating System for Educators",
    description: "Stop wasting hours on bookkeeping, fee chasing, and manual roll-calls. Let Docent handle the friction while you focus purely on teaching.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#18181B] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
