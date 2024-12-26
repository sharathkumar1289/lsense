import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Head from "next/head";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "SkillScrolls - EdTech & IT Consulting Firm",
  description: "Pioneering EdTech and IT Consulting for a Data-Driven Future!",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" type="image/png" sizes="16x16" />
        </Head>

        <body className={dmSans.className}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </>
  );
}
