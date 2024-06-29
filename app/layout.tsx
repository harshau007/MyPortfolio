"use client";
import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { RootProvider } from "fumadocs-ui/provider";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isBlogRoute = pathName.startsWith("/blogs");
  return (
    <html lang="en" className="!scroll-smooth">
      <title>Harsh Upadhyay</title>
      <link rel="icon" href="./icon.png" type="image/x-icon" />
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative ${
          isBlogRoute ? "pt-3 sm:pt-10" : "pt-28 sm:pt-36"
        } dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#78FF8D6D] absolute top-[-6rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#78FF8D6D]"></div>
        <div className="bg-[#FFC47889] absolute top-[-1rem] -z-10 left-[-30rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#FFC47889]"></div>

        <RootProvider>
          <TooltipProvider>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />

                <Toaster position="top-right" />
                <ThemeSwitch />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </TooltipProvider>
        </RootProvider>
      </body>
    </html>
  );
}
