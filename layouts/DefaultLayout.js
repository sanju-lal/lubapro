import React, { useEffect, useState } from "react";
import Footer from "../components/pages/landing/Footer";
import HeaderV3 from "../components/common/Header";

export default function DefaultLayout({ children }) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Header */}
      <div
        className={`fixed top-[8px] md:top-5 left-0 w-full z-50 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderV3 />
      </div>

      {/* Main Content */}
      <div className="flex-grow pt-[72px] md:pt-[88px] px-2 md:px-5">
        {children}
      </div>

      {/* Footer */}
      <div className="mt-auto px-2 md:px-5">
        <Footer />
      </div>
    </div>
  );
}
