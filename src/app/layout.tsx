import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";
import { Mukta } from "next/font/google";

const mukta = Mukta({
  weight: ["200","300","400","500","600","700","800"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={`${mukta.className} w-full h-full m-0`}>{children}</body>
      </html>
    </AuthProvider>
  );
}
