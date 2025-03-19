"use client"; // Mark this as a client component
import Head from "next/head";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/main.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Loader from "@/components/ui/Loader";
import "aos/dist/aos.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden"; 

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; 
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/loader-img.png" />
      </Head>
      <body>
        {loading ? (
          <Loader />
        ) : (
          <>
            <AnimateOnScroll />
            <Navbar />
            <main>{children}</main>
            <section className="care-wrap">
              <Footer />
            </section>
          </>
        )}
      </body>
    </html>
  );
}
