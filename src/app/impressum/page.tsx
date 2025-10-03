import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LEGAL_INFO, CLUB_INFO } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum - Snooker Club NB",
  description: "Impressum und rechtliche Informationen des Snooker Club NB",
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="space-y-8">
              {/* Angaben nach § 5 TMG */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Angaben nach § 5 TMG
                </h2>
                <div className="space-y-3">
                  <p>
                    <strong>Verein:</strong> {LEGAL_INFO.legalName}
                  </p>
                  <p>
                    <strong>Anschrift:</strong> {LEGAL_INFO.address}
                  </p>
                  <p>
                    <strong>Telefon:</strong> {LEGAL_INFO.phone}
                  </p>
                  <p>
                    <strong>E-Mail:</strong> {LEGAL_INFO.email}
                  </p>
                </div>
              </section>

              {/* Verantwortlich für den Inhalt */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p>{LEGAL_INFO.responsiblePerson}</p>
                <p>{LEGAL_INFO.address}</p>
              </section>

              {/* Haftungsausschluss */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Haftungsausschluss
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Haftung für Inhalte
                    </h3>
                    <p className="text-gray-700">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                      eigene Inhalte auf diesen Seiten nach den allgemeinen
                      Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                      Diensteanbieter jedoch nicht unter der Verpflichtung,
                      übermittelte oder gespeicherte fremde Informationen zu
                      überwachen oder nach Umständen zu forschen, die auf eine
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Haftung für Links
                    </h3>
                    <p className="text-gray-700">
                      Unser Angebot enthält Links zu externen Websites Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Urheberrecht
                    </h3>
                    <p className="text-gray-700">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                      Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Datenschutz */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Datenschutz
                </h2>
                <p className="text-gray-700">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                  personenbezogener Daten möglich. Soweit auf unseren Seiten
                  personenbezogene Daten (beispielsweise Name, Anschrift oder
                  eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich,
                  stets auf freiwilliger Basis. Diese Daten werden ohne Ihre
                  ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                </p>
                <p className="text-gray-700 mt-4">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet
                  (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken
                  aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                  Zugriff durch Dritte ist nicht möglich.
                </p>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kontakt
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Snooker Club NB</strong>
                  </p>
                  <p>{CLUB_INFO.address}</p>
                  <p>Telefon: {CLUB_INFO.phone}</p>
                  <p>E-Mail: {CLUB_INFO.email}</p>
                  <p>Website: {CLUB_INFO.website}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
