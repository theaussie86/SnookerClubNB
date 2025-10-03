"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAVIGATION_ITEMS, CLUB_INFO } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 relative">
                <Image
                  src="/red-snooker-ball.png"
                  alt="Snooker Ball"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
              <div className="ml-3">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-white">
                  <span className="hidden sm:inline">
                    Spielgemeinschaft Snooker Neubrandenburg
                  </span>
                  <span className="sm:hidden">Snooker NB</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
