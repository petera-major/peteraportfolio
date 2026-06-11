import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tera Major — Full Stack Developer",
  description:
    "Full stack developer building products people actually use. React Native, Next.js, Supabase. I ship.",
  openGraph: {
    title: "Tera Major — Full Stack Developer",
    description: "Full stack developer building products people actually use.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
