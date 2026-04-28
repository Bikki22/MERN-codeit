import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import config from "@/config";
import { ToastContainer } from "react-toastify";
import ReducerProvider from "@/redux/provider";
import MainLayout from "@/layouts/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: config.appName,
    template: `%s | ${config.appName}`,
  },
  description: "E-commerce app for all items",
  keywords: "Online shopping in Nepal, Best online product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ReducerProvider>
          <MainLayout>
            <Header />
            <main className="min-h-[calc(100vh-4rem)]">{children}</main>
            <ToastContainer
              position="top-right"
              theme="light"
              toastClassName="!rounded-xl !shadow-lg !border !border-slate-200"
            />
          </MainLayout>
        </ReducerProvider>
      </body>
    </html>
  );
}
