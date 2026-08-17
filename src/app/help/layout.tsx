import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DocentBase Help Center — Operations Guides, Knowledge Base & Troubleshooting",
  description: "Complete operational blueprints, step-by-step guides, bKash fee automation, attendance syncing, and 24/7 white-glove engineering support for DocentBase.",
  keywords: [
    "DocentBase help",
    "coaching management help",
    "tuition fee setup bKash",
    "biometric attendance troubleshooting",
    "join code coaching guide",
    "DocentBase admin guide",
    "DocentBase student app",
  ],
  openGraph: {
    title: "DocentBase Help & Operations Knowledge Base",
    description: "Precision documentation, interactive troubleshooters, and blueprints for coaching admins and students.",
    url: "https://docentbase.com/help",
    siteName: "DocentBase",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocentBase Help Center & Diagnostic Desk",
    description: "Instant guided resolution workflows and comprehensive documentation for DocentBase educators and students.",
  },
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
