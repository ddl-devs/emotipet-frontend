import "./globals.css";
import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200","300","400","700","800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mukta.className}>{children}</body>
    </html>
  );
}
