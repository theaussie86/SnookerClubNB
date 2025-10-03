import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontakt</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-900">Adresse</p>
            <p className="text-sm text-gray-600">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-900">Telefon</p>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-900">E-Mail</p>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start">
          <svg
            className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-900">Website</p>
            <a
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
            >
              {CONTACT_INFO.website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
