import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LEGAL_INFO, CLUB_INFO } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz - Snooker Club NB",
  description: "Datenschutzerklärung des Snooker Club NB nach DSGVO",
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Datenschutzerklärung
            </h1>

            <div className="space-y-8">
              {/* Einleitung */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Datenschutz auf einen Blick
                </h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-gray-700">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden
                    können. Ausführliche Informationen zum Thema Datenschutz
                    entnehmen Sie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.
                  </p>
                </div>
              </section>

              {/* Datenerfassung */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Wer ist verantwortlich für die Datenerfassung auf dieser
                      Website?
                    </h3>
                    <p className="text-gray-700">
                      Die Datenverarbeitung auf dieser Website erfolgt durch den
                      Websitebetreiber. Dessen Kontaktdaten können Sie dem
                      Abschnitt &ldquo;Hinweis zur Verantwortlichen
                      Stelle&rdquo; in dieser Datenschutzerklärung entnehmen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Wie erfassen wir Ihre Daten?
                    </h3>
                    <p className="text-gray-700">
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns
                      diese mitteilen. Hierbei kann es sich z. B. um Daten
                      handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="text-gray-700 mt-2">
                      Andere Daten werden automatisch oder nach Ihrer
                      Einwilligung beim Besuch der Website durch unsere
                      IT-Systeme erfasst. Das sind vor allem technische Daten
                      (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                      Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                      automatisch, sobald Sie diese Website betreten.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Wofür nutzen wir Ihre Daten?
                    </h3>
                    <p className="text-gray-700">
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie
                      Bereitstellung der Website zu gewährleisten. Andere Daten
                      können zur Analyse Ihres Nutzerverhaltens verwendet
                      werden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Welche Rechte haben Sie bezüglich Ihrer Daten?
                    </h3>
                    <p className="text-gray-700">
                      Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                      Herkunft, Empfänger und Zweck Ihrer gespeicherten
                      personenbezogenen Daten zu erhalten. Sie haben außerdem
                      ein Recht, die Berichtigung oder Löschung dieser Daten zu
                      verlangen. Wenn Sie eine Einwilligung zur
                      Datenverarbeitung erteilt haben, können Sie diese
                      Einwilligung jederzeit für die Zukunft widerrufen.
                      Außerdem haben Sie das Recht, unter bestimmten Umständen
                      die Einschränkung der Verarbeitung Ihrer personenbezogenen
                      Daten zu verlangen. Des Weiteren steht Ihnen ein
                      Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hosting */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. Hosting
                </h2>
                <p className="text-gray-700">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p>
                    <strong>Vercel Inc.</strong>
                  </p>
                  <p>340 S Lemon Ave #4133</p>
                  <p>Walnut, CA 91789</p>
                  <p>USA</p>
                </div>
                <p className="text-gray-700 mt-4">
                  Die Erfassung und Verarbeitung Ihrer Daten erfolgt
                  ausschließlich in Deutschland und unterliegt den strengen
                  deutschen und europäischen Datenschutzgesetzen.
                </p>
              </section>

              {/* Allgemeine Hinweise */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Allgemeine Hinweise und Pflichtinformationen
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Datenschutz
                    </h3>
                    <p className="text-gray-700">
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                      persönlichen Daten sehr ernst. Wir behandeln Ihre
                      personenbezogenen Daten vertraulich und entsprechend den
                      gesetzlichen Datenschutzvorschriften sowie dieser
                      Datenschutzerklärung.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Hinweis zur verantwortlichen Stelle
                    </h3>
                    <p className="text-gray-700">
                      Die verantwortliche Stelle für die Datenverarbeitung auf
                      dieser Website ist:
                    </p>
                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                      <p>
                        <strong>{LEGAL_INFO.legalName}</strong>
                      </p>
                      <p>{LEGAL_INFO.address}</p>
                      <p>Telefon: {LEGAL_INFO.phone}</p>
                      <p>E-Mail: {LEGAL_INFO.email}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Speicherdauer
                    </h3>
                    <p className="text-gray-700">
                      Soweit innerhalb dieser Datenschutzerklärung keine
                      speziellere Speicherdauer genannt wurde, verbleiben Ihre
                      personenbezogenen Daten bei uns, bis der Zweck für die
                      Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                      Löschersuchen geltend machen oder eine Einwilligung zur
                      Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                      sofern wir keine anderen rechtlich zulässigen Gründe für
                      die Speicherung Ihrer personenbezogenen Daten haben.
                    </p>
                  </div>
                </div>
              </section>

              {/* Datenerfassung auf dieser Website */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Datenerfassung auf dieser Website
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Server-Log-Dateien
                    </h3>
                    <p className="text-gray-700">
                      Der Provider der Seiten erhebt und speichert automatisch
                      Informationen in so genannten Server-Log-Dateien, die Ihr
                      Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>Browsertyp und Browserversion</li>
                      <li>verwendetes Betriebssystem</li>
                      <li>Referrer URL</li>
                      <li>Hostname des zugreifenden Rechners</li>
                      <li>Uhrzeit der Serveranfrage</li>
                      <li>IP-Adresse</li>
                    </ul>
                    <p className="text-gray-700 mt-2">
                      Eine Zusammenführung dieser Daten mit anderen Datenquellen
                      wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt
                      auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Kontaktformular
                    </h3>
                    <p className="text-gray-700">
                      Diese Website verwendet kein Kontaktformular. Für die
                      Kontaktaufnahme nutzen Sie bitte die angegebenen
                      Kontaktdaten.
                    </p>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Cookies
                </h2>
                <p className="text-gray-700">
                  Diese Website verwendet keine Cookies. Es werden keine
                  personenbezogenen Daten gespeichert oder verarbeitet.
                </p>
              </section>

              {/* Rechte der betroffenen Person */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Rechte der betroffenen Person
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Auskunftsrecht
                    </h3>
                    <p className="text-gray-700">
                      Sie haben das Recht, jederzeit von uns unentgeltliche
                      Auskunft über die von uns zu Ihrer Person gespeicherten
                      Daten sowie über Herkunft, Empfänger und Zweck der
                      Datenverarbeitung zu erhalten.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Berichtigung
                    </h3>
                    <p className="text-gray-700">
                      Sie haben das Recht, die Berichtigung unrichtiger oder die
                      Vervollständigung unvollständiger Daten zu verlangen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Löschung
                    </h3>
                    <p className="text-gray-700">
                      Sie haben das Recht, die Löschung Ihrer bei uns
                      gespeicherten personenbezogenen Daten zu verlangen, soweit
                      nicht die Verarbeitung zur Ausübung des Rechts auf freie
                      Meinungsäußerung und Information, zur Erfüllung einer
                      rechtlichen Verpflichtung, aus Gründen des öffentlichen
                      Interesses oder zur Geltendmachung, Ausübung oder
                      Verteidigung von Rechtsansprüchen erforderlich ist.
                    </p>
                  </div>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Kontakt
                </h2>
                <p className="text-gray-700">
                  Bei Fragen zum Datenschutz wenden Sie sich bitte an:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p>
                    <strong>{LEGAL_INFO.legalName}</strong>
                  </p>
                  <p>{CLUB_INFO.address}</p>
                  <p>Telefon: {CLUB_INFO.phone}</p>
                  <p>E-Mail: {CLUB_INFO.email}</p>
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
