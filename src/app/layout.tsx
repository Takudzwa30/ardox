// Libraries
import type { Metadata } from "next";

// Styles
import "@/assets/index.css";

export const metadata: Metadata = {
  title: "Ardox | Sign in",
  description: "Login form build by next and ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
