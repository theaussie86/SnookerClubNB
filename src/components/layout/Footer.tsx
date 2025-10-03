import Link from "next/link";
import { CLUB_INFO, LEGAL_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{CLUB_INFO.name}</h3>
            <p className="text-gray-300 mb-4">{CLUB_INFO.description}</p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                <span className="font-medium">Adresse:</span>{" "}
                {CLUB_INFO.address}
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-medium">Telefon:</span>{" "}
                <a
                  href={`tel:${CLUB_INFO.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {CLUB_INFO.phone}
                </a>
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-medium">E-Mail:</span>{" "}
                <a
                  href={`mailto:${CLUB_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CLUB_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <span className="font-medium">Verein:</span>{" "}
                {LEGAL_INFO.legalName}
              </p>
              <p>
                <span className="font-medium">Verantwortlich:</span>{" "}
                {LEGAL_INFO.responsiblePerson}
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href={CLUB_INFO.website}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CLUB_INFO.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {LEGAL_INFO.legalName}. Alle Rechte
              vorbehalten.
            </p>
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
          </div>
        </div>
      </div>
    </footer>
  );
}
