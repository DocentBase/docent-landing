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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#18181B] antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
