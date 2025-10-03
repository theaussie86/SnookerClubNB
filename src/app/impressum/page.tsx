import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
              {/* Vereinsangaben */}
              <section>
                <div className="space-y-3">
                  <p>
                    <strong>1. Snookerclub Neubrandenburg e.V.</strong>
                  </p>
                  <p>Nonnenhoferstraße 60</p>
                  <p>17033 Neubrandenburg</p>
                  <p>Telefon: +49 395 4213767</p>
                  <p>E-Mail: snookertempel@gmail.com</p>
                </div>
              </section>

              {/* Vertreten durch */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Vertreten durch:
                </h2>
                <div className="space-y-2">
                  <p>Marian Dubowski</p>
                  <p>Robert Taggesell</p>
                  <p>Gerd Habeck</p>
                </div>
              </section>

              {/* Online-Streitbeilegungs-Verordnung */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Hinweis gemäß Online-Streitbeilegungs-Verordnung
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Nach geltendem Recht sind wir verpflichtet, Verbraucher auf
                    die Existenz der Europäischen
                    Online-Streitbeilegungs-Plattform hinzuweisen, die für die
                    Beilegung von Streitigkeiten genutzt werden kann, ohne dass
                    ein Gericht eingeschaltet werden muss. Für die Einrichtung
                    der Plattform ist die Europäische Kommission zuständig. Die
                    Europäische Online-Streitbeilegungs-Plattform ist hier zu
                    finden:{" "}
                    <a
                      href="http://ec.europa.eu/odr"
                      className="text-blue-600 hover:text-blue-800 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://ec.europa.eu/odr
                    </a>
                    . Unsere E-Mail lautet: snookertempel@gmail.com
                  </p>
                  <p className="text-gray-700">
                    Wir weisen aber darauf hin, dass wir nicht bereit sind, uns
                    am Streitbeilegungsverfahren im Rahmen der Europäischen
                    Online-Streitbeilegungs-Plattform zu beteiligen. Nutzen Sie
                    zur Kontaktaufnahme bitte unsere obige E-Mail und
                    Telefonnummer.
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Disclaimer – rechtliche Hinweise
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      § 1 Warnhinweis zu Inhalten
                    </h3>
                    <p className="text-gray-700">
                      Die kostenlosen und frei zugänglichen Inhalte dieser
                      Webseite wurden mit größtmöglicher Sorgfalt erstellt. Der
                      Anbieter dieser Webseite übernimmt jedoch keine Gewähr für
                      die Richtigkeit und Aktualität der bereitgestellten
                      kostenlosen und frei zugänglichen journalistischen
                      Ratgeber und Nachrichten. Namentlich gekennzeichnete
                      Beiträge geben die Meinung des jeweiligen Autors und nicht
                      immer die Meinung des Anbieters wieder. Allein durch den
                      Aufruf der kostenlosen und frei zugänglichen Inhalte kommt
                      keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
                      Anbieter zustande, insoweit fehlt es am
                      Rechtsbindungswillen des Anbieters.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      § 2 Externe Links
                    </h3>
                    <p className="text-gray-700">
                      Diese Website enthält Verknüpfungen zu Websites Dritter
                      ("externe Links"). Diese Websites unterliegen der Haftung
                      der jeweiligen Betreiber. Der Anbieter hat bei der
                      erstmaligen Verknüpfung der externen Links die fremden
                      Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße
                      bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
                      ersichtlich. Der Anbieter hat keinerlei Einfluss auf die
                      aktuelle und zukünftige Gestaltung und auf die Inhalte der
                      verknüpften Seiten. Das Setzen von externen Links bedeutet
                      nicht, dass sich der Anbieter die hinter dem Verweis oder
                      Link liegenden Inhalte zu Eigen macht. Eine ständige
                      Kontrolle der externen Links ist für den Anbieter ohne
                      konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei
                      Kenntnis von Rechtsverstößen werden jedoch derartige
                      externe Links unverzüglich gelöscht.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      § 3 Urheber- und Leistungsschutzrechte
                    </h3>
                    <p className="text-gray-700">
                      Die auf dieser Website veröffentlichten Inhalte
                      unterliegen dem deutschen Urheber- und
                      Leistungsschutzrecht. Jede vom deutschen Urheber- und
                      Leistungsschutzrecht nicht zugelassene Verwertung bedarf
                      der vorherigen schriftlichen Zustimmung des Anbieters oder
                      jeweiligen Rechteinhabers. Dies gilt insbesondere für
                      Vervielfältigung, Bearbeitung, Übersetzung,
                      Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten
                      in Datenbanken oder anderen elektronischen Medien und
                      Systemen. Inhalte und Rechte Dritter sind dabei als solche
                      gekennzeichnet. Die unerlaubte Vervielfältigung oder
                      Weitergabe einzelner Inhalte oder kompletter Seiten ist
                      nicht gestattet und strafbar. Lediglich die Herstellung
                      von Kopien und Downloads für den persönlichen, privaten
                      und nicht kommerziellen Gebrauch ist erlaubt.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Die Darstellung dieser Website in fremden Frames ist nur
                      mit schriftlicher Erlaubnis zulässig.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      § 4 Besondere Nutzungsbedingungen
                    </h3>
                    <p className="text-gray-700">
                      Soweit besondere Bedingungen für einzelne Nutzungen dieser
                      Website von den vorgenannten Paragraphen abweichen, wird
                      an entsprechender Stelle ausdrücklich darauf hingewiesen.
                      In diesem Falle gelten im jeweiligen Einzelfall die
                      besonderen Nutzungsbedingungen.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quelle */}
              <section>
                <p className="text-sm text-gray-500 italic">
                  Quelle: Impressum Vorlage von JuraForum.de
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
