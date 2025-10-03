import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactInfo from "@/components/ContactInfo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { CLUB_INFO } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Willkommen beim{" "}
                <span className="text-primary-600">{CLUB_INFO.name}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {CLUB_INFO.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${CLUB_INFO.phone}`}
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Jetzt anrufen
                </a>
                <a
                  href={`mailto:${CLUB_INFO.email}`}
                  className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  E-Mail senden
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Über unseren Club
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Der {CLUB_INFO.name} ist Ihr Ansprechpartner für Snooker in
                  der Region. Wir bieten eine moderne Anlage mit mehreren
                  professionellen Snooker-Tischen und freuen uns über Spieler
                  aller Leistungsklassen.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Professionelle Snooker-Tische
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">Regelmäßige Turniere</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Training für Anfänger und Fortgeschrittene
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-primary-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">
                      Gemütliche Club-Atmosphäre
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">SC</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Snooker Club NB
                </h3>
                <p className="text-gray-600">
                  Seit {CLUB_INFO.foundingYear} Ihr vertrauensvoller Partner für
                  Snooker in der Region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Was wir bieten
              </h2>
              <p className="text-lg text-gray-600">
                Alles was Sie für Ihr Snooker-Erlebnis brauchen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <CardTitle>Moderne Anlage</CardTitle>
                  <CardDescription>
                    Professionelle Snooker-Tische in gepflegter Umgebung
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Regelmäßige Turniere</CardTitle>
                  <CardDescription>
                    Spannende Wettkämpfe für alle Leistungsklassen
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <CardTitle>Training & Coaching</CardTitle>
                  <CardDescription>
                    Professionelle Betreuung für Anfänger und Fortgeschrittene
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Kontakt aufnehmen
              </h2>
              <p className="text-lg text-gray-600">
                Wir freuen uns auf Ihren Besuch
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
