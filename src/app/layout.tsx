import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/theme.css";
import { Header } from "@/components/header";

const jost = Jost({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
