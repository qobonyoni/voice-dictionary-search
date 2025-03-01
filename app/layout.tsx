import type { Metadata } from "next";
import { Bellefair,Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const BelleFair = Bellefair({ subsets: ["latin"], weight: "400"  });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"], fallback: ['Arial', 'sans-serif'], });


export const metadata: Metadata = {
  title: "Dictionary",
  description: "A Dictionary App - NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en" suppressHydrationWarning>
      <body
        className={`${barlowCondensed.className} ${BelleFair.className} antialiased flex flex-col h-screen dark:bg-main bg-light text-black dark:text-white duration-[205]`}
      >
        <Header />
        <div className="h-screen mt-[5rem] p-4 flex-1 overflow-y-auto container mx-auto max-w-[768px] scroller" >
        {children}
        </div>
        
      
       
      </body>
    </html>
  );
}


