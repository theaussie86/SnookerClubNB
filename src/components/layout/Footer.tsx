import Link from "next/link";
import { CLUB_INFO, LEGAL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Spielgemeinschaft Snooker
              Neubrandenburg
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/impressum"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
          <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
            <p className="text-sm text-gray-400">
              <Link
                href="https://cweissteiner.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Created by Christoph Weissteiner
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
