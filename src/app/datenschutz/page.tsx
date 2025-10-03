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
                  Datenschutz
                </h2>
                <p className="text-gray-700">
                  Wir informieren Sie nachfolgend gemäß den gesetzlichen
                  Vorgaben des Datenschutzrechts (insb. gemäß BDSG n.F. und der
                  europäischen Datenschutz-Grundverordnung ‚DS-GVO') über die
                  Art, den Umfang und Zweck der Verarbeitung personenbezogener
                  Daten durch unser Unternehmen. Diese Datenschutzerklärung gilt
                  auch für unsere Websites und Sozial-Media-Profile. Bezüglich
                  der Definition von Begriffen wie etwa „personenbezogene Daten"
                  oder „Verarbeitung" verweisen wir auf Art. 4 DS-GVO.
                </p>
              </section>

              {/* Verantwortliche Stelle */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Name und Kontaktdaten des / der Verantwortlichen
                </h2>
                <p className="text-gray-700 mb-4">
                  Unser/e Verantwortliche/r (nachfolgend „Verantwortlicher")
                  i.S.d. Art. 4 Zif. 7 DS-GVO ist:
                </p>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p>
                    <strong>{LEGAL_INFO.legalName}</strong>
                  </p>
                  <p>{LEGAL_INFO.address}</p>
                  <p>E-Mail-Adresse: {LEGAL_INFO.email}</p>
                </div>
              </section>

              {/* Datenschutzbeauftragte/r */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Datenschutzbeauftragte/r
                </h2>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p>
                    <strong>Marian Dubowski</strong>
                  </p>
                  <p>Robinienstraße 2</p>
                  <p>17033 Neubrandenburg</p>
                  <p>marian.dubowski84@gmail.com</p>
                </div>
              </section>

              {/* Datenarten, Zwecke der Verarbeitung und Kategorien betroffener Personen */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Datenarten, Zwecke der Verarbeitung und Kategorien betroffener
                  Personen
                </h2>
                <p className="text-gray-700 mb-4">
                  Nachfolgend informieren wir Sie über Art, Umfang und Zweck der
                  Erhebung, Verarbeitung und Nutzung personenbezogener Daten.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      1. Arten der Daten, die wir verarbeiten
                    </h3>
                    <p className="text-gray-700">
                      Bestandsdaten (Name, Adresse etc.), Kontaktdaten
                      (Telefonnummer, E-Mail, Fax etc.), Zahlungsdaten
                      (Bankdaten, Kontodaten, Zahlungshistorie etc.),
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      2. Zwecke der Verarbeitung nach Art. 13 Abs. 1 c) DS-GVO
                    </h3>
                    <p className="text-gray-700">
                      Erfüllung vertraglicher Verpflichtungen, Nutzererfahrung
                      verbessern, Kundenservice und Kundenpflege, Websites mit
                      Funktionen und Inhalten bereitstellen,
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      3. Kategorien der betroffenen Personen nach Art. 13 Abs. 1
                      e) DS-GVO
                    </h3>
                    <p className="text-gray-700">
                      Besucher/Nutzer der Website,
                    </p>
                    <p className="text-gray-700 mt-2">
                      Die betroffenen Personen werden zusammenfassend als
                      „Nutzer" bezeichnet.
                    </p>
                  </div>
                </div>
              </section>

              {/* Rechtsgrundlagen der Verarbeitung */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Rechtsgrundlagen der Verarbeitung personenbezogener Daten
                </h2>
                <p className="text-gray-700 mb-4">
                  Nachfolgend Informieren wir Sie über die Rechtsgrundlagen der
                  Verarbeitung personenbezogener Daten:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Wenn wir Ihre Einwilligung für die Verarbeitung
                    personenbezogener Daten eingeholt haben, ist Art. 6 Abs. 1
                    S. 1 lit. a) DS-GVO Rechtsgrundlage.
                  </li>
                  <li>
                    Ist die Verarbeitung zur Erfüllung eines Vertrags oder zur
                    Durchführung vorvertraglicher Maßnahmen erforderlich, die
                    auf Ihre Anfrage hin erfolgen, so ist Art. 6 Abs. 1 S. 1
                    lit. b) DS-GVO Rechtsgrundlage.
                  </li>
                  <li>
                    Ist die Verarbeitung zur Erfüllung einer rechtlichen
                    Verpflichtung erforderlich, der wir unterliegen (z.B.
                    gesetzliche Aufbewahrungspflichten), so ist Art. 6 Abs. 1 S.
                    1 lit. c) DS-GVO Rechtsgrundlage.
                  </li>
                  <li>
                    Ist die Verarbeitung erforderlich, um lebenswichtige
                    Interessen der betroffenen Person oder einer anderen
                    natürlichen Person zu schützen, so ist Art. 6 Abs. 1 S. 1
                    lit. d) DS-GVO Rechtsgrundlage.
                  </li>
                  <li>
                    Ist die Verarbeitung zur Wahrung unserer oder der
                    berechtigten Interessen eines Dritten erforderlich und
                    überwiegen diesbezüglich Ihre Interessen oder Grundrechte
                    und Grundfreiheiten nicht, so ist Art. 6 Abs. 1 S. 1 lit. f)
                    DS-GVO Rechtsgrundlage.
                  </li>
                </ul>
              </section>

              {/* Weitergabe personenbezogener Daten */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Weitergabe personenbezogener Daten an Dritte und
                  Auftragsverarbeiter
                </h2>
                <p className="text-gray-700 mb-4">
                  Ohne Ihre Einwilligung geben wir grundsätzlich keine Daten an
                  Dritte weiter. Sollte dies doch der Fall sein, dann erfolgt
                  die Weitergabe auf der Grundlage der zuvor genannten
                  Rechtsgrundlagen z.B. bei der Weitergabe von Daten an
                  Online-Paymentanbieter zur Vertragserfüllung oder aufgrund
                  gerichtlicher Anordnung oder wegen einer gesetzlichen
                  Verpflichtung zur Herausgabe der Daten zum Zwecke der
                  Strafverfolgung, zur Gefahrenabwehr oder zur Durchsetzung der
                  Rechte am geistigen Eigentum.
                </p>
                <p className="text-gray-700">
                  Wir setzen zudem Auftragsverarbeiter (externe Dienstleister
                  z.B. zum Webhosting unserer Websites und Datenbanken) zur
                  Verarbeitung Ihrer Daten ein. Wenn im Rahmen einer
                  Vereinbarung zur Auftragsverarbeitung an die
                  Auftragsverarbeiter Daten weitergegeben werden, erfolgt dies
                  immer nach Art. 28 DS-GVO. Wir wählen dabei unsere
                  Auftragsverarbeiter sorgfältig aus, kontrollieren diese
                  regelmäßig und haben uns ein Weisungsrecht hinsichtlich der
                  Daten einräumen lassen. Zudem müssen die Auftragsverarbeiter
                  geeignete technische und organisatorische Maßnahmen getroffen
                  haben und die Datenschutzvorschriften gem. BDSG n.F. und
                  DS-GVO einhalten
                </p>
              </section>

              {/* Datenübermittlung in Drittstaaten */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Datenübermittlung in Drittstaaten
                </h2>
                <p className="text-gray-700">
                  Durch die Verabschiedung der europäischen
                  Datenschutz-Grundverordnung (DS-GVO) wurde eine einheitliche
                  Grundlage für den Datenschutz in Europa geschaffen. Ihre Daten
                  werden daher vorwiegend durch Unternehmen verarbeitet, für die
                  DS-GVO Anwendung findet. Sollte doch die Verarbeitung durch
                  Dienste Dritter außerhalb der Europäischen Union oder des
                  Europäischen Wirtschaftsraums stattfinden, so müssen diese die
                  besonderen Voraussetzungen der Art. 44 ff. DS-GVO erfüllen.
                  Das bedeutet, die Verarbeitung erfolgt aufgrund besonderer
                  Garantien, wie etwa die von der EU-Kommission offiziell
                  anerkannte Feststellung eines der EU entsprechenden
                  Datenschutzniveaus oder der Beachtung offiziell anerkannter
                  spezieller vertraglicher Verpflichtungen, der so genannten
                  „Standardvertragsklauseln". Bei US-Unternehmen erfüllt die
                  Unterwerfung unter das sog. „Privacy-Shield", dem
                  Datenschutzabkommen zwischen der EU und den USA, diese
                  Voraussetzungen.
                </p>
              </section>

              {/* Löschung von Daten und Speicherdauer */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Löschung von Daten und Speicherdauer
                </h2>
                <p className="text-gray-700">
                  Sofern nicht in dieser Datenschutzerklärung ausdrücklich
                  angegeben, werden Ihre personenbezogen Daten gelöscht oder
                  gesperrt, sobald der Zweck für die Speicherung entfällt, es
                  sei denn deren weitere Aufbewahrung ist zu Beweiszwecken
                  erforderlich oder dem stehen gesetzliche
                  Aufbewahrungspflichten entgegenstehen. Darunter fallen etwa
                  handelsrechtliche Aufbewahrungspflichten von Geschäftsbriefen
                  nach § 257 Abs. 1 HGB (6 Jahre) sowie steuerrechtliche
                  Aufbewahrungspflichten nach § 147 Abs. 1 AO von Belegen (10
                  Jahre). Wenn die vorgeschriebene Aufbewahrungsfrist abläuft,
                  erfolgt eine Sperrung oder Löschung Ihrer Daten, es sei denn
                  die Speicherung ist weiterhin für einen Vertragsabschluss oder
                  zur Vertragserfüllung erforderlich.
                </p>
              </section>

              {/* Automatisierte Entscheidungsfindung */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bestehen einer automatisierten Entscheidungsfindung
                </h2>
                <p className="text-gray-700">
                  Wir setzen keine automatische Entscheidungsfindung oder ein
                  Profiling ein.
                </p>
              </section>

              {/* Bereitstellung unserer Website und Erstellung von Logfiles */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Bereitstellung unserer Website und Erstellung von Logfiles
                </h2>
                <p className="text-gray-700 mb-4">
                  Wenn Sie unsere Webseite lediglich informatorisch nutzen (also
                  keine Registrierung und auch keine anderweitige Übermittlung
                  von Informationen), erheben wir nur die personenbezogenen
                  Daten, die Ihr Browser an unseren Server übermittelt. Wenn Sie
                  unsere Website betrachten möchten, erheben wir die folgenden
                  Daten:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>IP-Adresse</li>
                  <li>Internet-Service-Provider des Nutzers</li>
                  <li>Datum und Uhrzeit des Abrufs</li>
                  <li>Browsertyp</li>
                  <li>Sprache und Browser-Version</li>
                  <li>Inhalt des Abrufs</li>
                  <li>Zeitzone</li>
                  <li>Zugriffsstatus/HTTP-Statuscode</li>
                  <li>Datenmenge</li>
                  <li>Websites, von denen die Anforderung kommt</li>
                  <li>Betriebssystem</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Eine Speicherung dieser Daten zusammen mit anderen
                  personenbezogenen Daten von Ihnen findet nicht statt.
                </p>
                <p className="text-gray-700 mb-4">
                  Diese Daten dienen dem Zweck der nutzerfreundlichen,
                  funktionsfähigen und sicheren Auslieferung unserer Website an
                  Sie mit Funktionen und Inhalten sowie deren Optimierung und
                  statistischen Auswertung.
                </p>
                <p className="text-gray-700 mb-4">
                  Rechtsgrundlage hierfür ist unser in den obigen Zwecken auch
                  liegendes berechtigtes Interesse an der Datenverarbeitung nach
                  Art. 6 Abs. 1 S.1 lit. f) DS-GVO.
                </p>
                <p className="text-gray-700">
                  Wir speichern aus Sicherheitsgründen diese Daten in
                  Server-Logfiles für die Speicherdauer von Tagen. Nach Ablauf
                  dieser Frist werden diese automatisch gelöscht, es sei denn
                  wir benötigen deren Aufbewahrung zu Beweiszwecken bei
                  Angriffen auf die Serverinfrastruktur oder anderen
                  Rechtsverletzungen.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Cookies
                </h2>
                <p className="text-gray-700 mb-4">
                  Wir verwenden sog. Cookies bei Ihrem Besuch unserer Website.
                  Cookies sind kleine Textdateien, die Ihr Internet-Browser auf
                  Ihrem Rechner ablegt und speichert. Wenn Sie unsere Website
                  erneut aufrufen, geben diese Cookies Informationen ab, um Sie
                  automatisch wiederzuerkennen. Die so erlangten Informationen
                  dienen dem Zweck, unsere Webangebote technisch und
                  wirtschaftlich zu optimieren und Ihnen einen leichteren und
                  sicheren Zugang auf unsere Website zu ermöglichen. Unsere
                  Website nutzt nur Session-Cookies und persistente Cookies:
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Session-Cookies:
                    </h3>
                    <p className="text-gray-700">
                      Wir verwenden sog. Cookies zum Wiedererkennen mehrfacher
                      Nutzung eines Angebots durch denselben Nutzer (z.B. wenn
                      Sie sich eingeloggt haben zur Feststellung Ihres
                      Login-Status). Wenn Sie unsere Seite erneut aufrufen,
                      geben diese Cookies Informationen ab, um Sie automatisch
                      wiederzuerkennen. Die so erlangten Informationen dienen
                      dazu, unsere Angebote zu optimieren und Ihnen einen
                      leichteren Zugang auf unsere Seite zu ermöglichen. Wenn
                      Sie den Browser schließen oder Sie sich ausloggen, werden
                      die Session-Cookies gelöscht.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Persistente Cookies:
                    </h3>
                    <p className="text-gray-700">
                      Diese werden automatisiert nach einer vorgegebenen Dauer
                      gelöscht, die sich je nach Cookie unterscheiden kann. In
                      den Sicherheitseinstellungen Ihres Browsers können Sie die
                      Cookies jederzeit löschen.
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mt-4">
                  Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 S. lit.
                  b) DS-GVO, wenn die Cookies zur Vertragsanbahnung z.B. bei
                  Bestellungen gesetzt werden und ansonsten haben wir ein
                  berechtigtes Interesse an der effektiven Funktionalität der
                  Website, so dass in dem Falle Art. 6 Abs. 1 S. 1 lit. f)
                  DS-GVO Rechtsgrundlage ist.
                </p>

                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Widerspruch und „Opt-Out":
                  </h3>
                  <p className="text-gray-700">
                    Das Speichern von Cookies auf Ihrer Festplatte können Sie
                    allgemein verhindern, indem Sie in Ihren
                    Browser-Einstellungen „keine Cookies akzeptieren" wählen.
                    Dies kann aber eine Funktionseinschränkung unserer Angebote
                    zur Folge haben.
                  </p>
                </div>
              </section>

              {/* Abwicklung von Verträgen */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Abwicklung von Verträgen
                </h2>
                <p className="text-gray-700 mb-4">
                  Wir verarbeiten Bestandsdaten (z.B. Unternehmen,
                  Titel/akademischer Grad, Namen und Adressen sowie Kontaktdaten
                  von Nutzern, E-Mail), Vertragsdaten (z.B. in Anspruch
                  genommene Leistungen, Namen von Kontaktpersonen) und
                  Zahlungsdaten (z.B. Bankverbindung, Zahlungshistorie) zwecks
                  Erfüllung unserer vertraglichen Verpflichtungen (Kenntnis, wer
                  Vertragspartner ist; Begründung, inhaltliche Ausgestaltung und
                  Abwicklung des Vertrags; Überprüfung auf Plausibilität der
                  Daten) und Serviceleistungen (z.B. Kontaktaufnahme des
                  Kundenservice) gem. Art. 6 Abs. 1 S. 1 lit b) DS-GVO. Die in
                  Onlineformularen als verpflichtend gekennzeichneten Eingaben,
                  sind für den Vertragsschluss erforderlich.
                </p>
                <p className="text-gray-700 mb-4">
                  Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich
                  nicht, außer sie ist zur Verfolgung unserer Ansprüche (z.B.
                  Übergabe an Rechtsanwalt zum Inkasso) oder zur Erfüllung des
                  Vertrags (z.B. Übergabe der Daten an Zahlungsanbieter)
                  erforderlich oder es besteht hierzu besteht eine gesetzliche
                  Verpflichtung gem. Art. 6 Abs. 1 S. 1 lit. c) DS-GVO.
                </p>
                <p className="text-gray-700 mb-4">
                  Wir können die von Ihnen angegebenen Daten zudem verarbeiten,
                  um Sie über weitere interessante Produkte aus unserem
                  Portfolio zu informieren oder Ihnen E-Mails mit technischen
                  Informationen zukommen lassen.
                </p>
                <p className="text-gray-700">
                  Die Daten werden gelöscht, sobald sie für die Erreichung des
                  Zweckes ihrer Erhebung nicht mehr erforderlich sind. Dies ist
                  für die Bestands- und Vertragsdaten dann der Fall, wenn die
                  Daten für die Durchführung des Vertrages nicht mehr
                  erforderlich sind und keine Ansprüche mehr aus dem Vertrag
                  geltend gemacht werden können, weil diese verjährt sind
                  (Gewährleistung: zwei Jahre / Regelverjährung: drei Jahre).
                  Wir sind aufgrund handels- und steuerrechtlicher Vorgaben
                  verpflichtet, Ihre Adress-, Zahlungs- und Bestelldaten für die
                  Dauer von zehn Jahren zu speichern. Allerdings nehmen wir bei
                  Vertragsbeendigung nach drei Jahren eine Einschränkung der
                  Verarbeitung vor, d. h. Ihre Daten werden nur zur Einhaltung
                  der gesetzlichen Verpflichtungen eingesetzt. Angaben im
                  Nutzerkonto verbleiben bis zu dessen Löschung.
                </p>
              </section>

              {/* Kontaktaufnahme */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Kontaktaufnahme per Kontaktformular / E-Mail / Fax / Post
                </h2>
                <p className="text-gray-700 mb-4">
                  Bei der Kontaktaufnahme mit uns per Kontaktformular, Fax, Post
                  oder E-Mail werden Ihre Angaben zum Zwecke der Abwicklung der
                  Kontaktanfrage verarbeitet.
                </p>
                <p className="text-gray-700 mb-4">
                  Rechtsgrundlage für die Verarbeitung der Daten ist bei
                  Vorliegen einer Einwilligung von Ihnen Art. 6 Abs. 1 S. 1 lit.
                  a) DS-GVO. Rechtsgrundlage für die Verarbeitung der Daten, die
                  im Zuge einer Kontaktanfrage oder E-Mail, eines Briefes oder
                  Faxes übermittelt werden, ist Art. 6 Abs. 1 S. 1 lit. f)
                  DS-GVO. Der Verantwortliche hat ein berechtigtes Interesse an
                  der Verarbeitung und Speicherung der Daten, um Anfragen der
                  Nutzer beantworten zu können, zur Beweissicherung aus
                  Haftungsgründen und um ggf. seiner gesetzlichen
                  Aufbewahrungspflichten bei Geschäftsbriefen nachkommen zu
                  können. Zielt der Kontakt auf den Abschluss eines Vertrages
                  ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung
                  Art. 6 Abs. 1 S. 1 lit. b) DS-GVO.
                </p>
                <p className="text-gray-700 mb-4">
                  Wir können Ihre Angaben und Kontaktanfrage in unserem
                  Customer-Relationship-Management System ("CRM System") oder
                  einem vergleichbaren System speichern.
                </p>
                <p className="text-gray-700 mb-4">
                  Die Daten werden gelöscht, sobald sie für die Erreichung des
                  Zweckes ihrer Erhebung nicht mehr erforderlich sind. Für die
                  personenbezogenen Daten aus der Eingabemaske des
                  Kontaktformulars und diejenigen, die per E-Mail übersandt
                  wurden, ist dies dann der Fall, wenn die jeweilige
                  Konversation mit Ihnen beendet ist. Beendet ist die
                  Konversation dann, wenn sich aus den Umständen entnehmen
                  lässt, dass der betroffene Sachverhalt abschließend geklärt
                  ist. Anfragen von Nutzern, die über einen Account bzw. Vertrag
                  mit uns verfügen, speichern wir bis zum Ablauf von zwei Jahren
                  nach Vertragsbeendigung. Im Fall von gesetzlichen
                  Archivierungspflichten erfolgt die Löschung nach deren Ablauf:
                  Ende handelsrechtlicher (6 Jahre) und steuerrechtlicher (10
                  Jahre) Aufbewahrungspflicht.
                </p>
                <p className="text-gray-700">
                  Sie haben jederzeit die Möglichkeit, die Einwilligung nach
                  Art. 6 Abs. 1 S. 1 lit. a) DS-GVO zur Verarbeitung der
                  personenbezogenen Daten zu widerrufen. Nehmen Sie per E-Mail
                  Kontakt mit uns auf, so können Sie der Speicherung der
                  personenbezogenen Daten jederzeit widersprechen.
                </p>
              </section>

              {/* Google Maps */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Google Maps
                </h2>
                <p className="text-gray-700 mb-4">
                  Wir haben auf unserer Website Karten von „Google Maps" (Google
                  Ireland Limited, Registernr.: 368047, Gordon House, Barrow
                  Street, Dublin 4, Irland) integriert. Damit können wirden
                  Standort von Adressen und eine Anfahrtsbeschreibung direkt auf
                  unserer Website in interaktiven Karten anzeigen und Ihnen die
                  Nutzung dieses Tools ermöglichen.
                </p>
                <p className="text-gray-700 mb-4">
                  Bei dem Abruf unserer Website, wo Google Maps integriert ist,
                  wird eine Verbindung zu den Servern von Google in den USA
                  aufgebaut. Hierbei können Ihre IP und Standort an Google
                  übertragen werden. Zudem erhält Google die Information, dass
                  Sie die entsprechende Seite aufgerufen haben. Dies erfolgt
                  auch ohne Nutzerkonto bei Google. Sollten Sie in Ihren
                  Google-Account eingeloggt sein, kann Google die obigen Daten
                  Ihrem Account zuordnen. Wenn Sie dies nicht wünschen, müssen
                  Sie sich bei Ihrem Google-Account ausloggen. Google erstellt
                  aus solchen Daten Nutzerprofile und nutzt diese Daten zum
                  Zwecke der Werbung, Marktforschung oder Optimierung seiner
                  Websites.
                </p>
                <p className="text-gray-700 mb-4">
                  Rechtsgrundlage hierfür ist unser in den obigen Zwecken auch
                  liegendes berechtigtes Interesse an der Datenverarbeitung nach
                  Art. 6 Abs. 1 S.1 lit. f) DS-GVO.
                </p>
                <p className="text-gray-700 mb-4">
                  Sie haben gegenüber Google ein Widerspruchsrecht gegen die
                  Bildung von Nutzerprofilen. Bitte richten Sie sich deswegen
                  direkt an Google über die unten genannte Datenschutzerklärung.
                  Ein Opt-Out-Widerspruch hinsichtlich der Werbe-Cookies können
                  Sie hier in Ihrem Google-Account vornehmen:
                  https://adssettings.google.com/authenticated.
                </p>
                <p className="text-gray-700">
                  In den Nutzungsbedingungen von Google Maps unter
                  https://www.google.com/intl/de_de/help/terms_maps.html und in
                  der Datenschutzerklärung für Werbung von Google unter
                  https://policies.google.com/technologies/ads finden Sie
                  weitere Informationen zur Verwendung von Google Cookies und
                  deren Werbetechnologien, Speicherdauer, Anonymisierung,
                  Standortdaten, Funktionsweise und Ihre Rechte. Allgemeine
                  Datenschutzerklärung von Google:
                  https://policies.google.com/privacy.
                </p>
                <p className="text-gray-700 mt-4">
                  Google ist nach dem EU-US Privacy Shield zertifiziert
                  (https://www.privacyshield.gov/EU-US-Framework) und daher
                  verpflichtet europäisches Datenschutzrecht einzuhalten.
                </p>
              </section>

              {/* Rechte der betroffenen Person */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Rechte der betroffenen Person
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Widerspruch oder Widerruf gegen die Verarbeitung Ihrer
                      Daten
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Soweit die Verarbeitung auf Ihrer Einwilligung gemäß Art.
                      6 Abs. 1 S. 1 lit. a), Art. 7 DS-GVO beruht, haben Sie das
                      Recht, die Einwilligung jederzeit zu widerrufen. Die
                      Rechtmäßigkeit der aufgrund der Einwilligung bis zum
                      Widerruf erfolgten Verarbeitung wird dadurch nicht
                      berührt.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Soweit wir die Verarbeitung Ihrer personenbezogenen Daten
                      auf die Interessenabwägung gemäß Art. 6 Abs. 1 S. 1 lit.
                      f) DS-GVO stützen, können Sie Widerspruch gegen die
                      Verarbeitung einlegen. Dies ist der Fall, wenn die
                      Verarbeitung insbesondere nicht zur Erfüllung eines
                      Vertrags mit Ihnen erforderlich ist, was von uns jeweils
                      bei der nachfolgenden Beschreibung der Funktionen
                      dargestellt wird. Bei Ausübung eines solchen Widerspruchs
                      bitten wir um Darlegung der Gründe, weshalb wir Ihre
                      personenbezogenen Daten nicht wie von uns durchgeführt
                      verarbeiten sollten. Im Falle Ihres begründeten
                      Widerspruchs prüfen wir die Sachlage und werden entweder
                      die Datenverarbeitung einstellen bzw. anpassen oder Ihnen
                      unsere zwingenden schutzwürdigen Gründe aufzeigen,
                      aufgrund derer wir die Verarbeitung fortführen.
                    </p>
                    <p className="text-gray-700">
                      Sie können der Verarbeitung Ihrer personenbezogenen Daten
                      für Zwecke der Werbung und Datenanalyse jederzeit
                      widersprechen. Das Widerspruchsrecht können Sie kostenfrei
                      ausüben. Über Ihren Werbewiderspruch können Sie uns unter
                      folgenden Kontaktdaten informieren:
                    </p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p>
                        <strong>{LEGAL_INFO.legalName}</strong>
                      </p>
                      <p>{LEGAL_INFO.address}</p>
                      <p>E-Mail-Adresse: {LEGAL_INFO.email}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Auskunft
                    </h3>
                    <p className="text-gray-700">
                      Sie haben das Recht, von uns eine Bestätigung darüber zu
                      verlangen, ob Sie betreffende personenbezogene Daten
                      verarbeitet werden. Sofern dies der Fall ist, haben Sie
                      ein Recht auf Auskunft über Ihre bei uns gespeicherten
                      persönlichen Daten nach Art. 15 DS-GVO. Dies beinhaltet
                      insbesondere die Auskunft über die Verarbeitungszwecke,
                      die Kategorie der personenbezogenen Daten, die Kategorien
                      von Empfängern, gegenüber denen Ihre Daten offengelegt
                      wurden oder werden, die geplante Speicherdauer, die
                      Herkunft ihrer Daten, sofern diese nicht direkt bei Ihnen
                      erhoben wurden.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Berichtigung
                    </h3>
                    <p className="text-gray-700">
                      Sie haben ein Recht auf Berichtigung unrichtiger oder auf
                      Vervollständigung richtiger Daten nach Art. 16 DS-GVO.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Löschung
                    </h3>
                    <p className="text-gray-700">
                      Sie haben ein Recht auf Löschung Ihrer bei uns
                      gespeicherten Daten nach Art. 17 DS-GVO, es sei denn
                      gesetzliche oder vertraglichen Aufbewahrungsfristen oder
                      andere gesetzliche Pflichten bzw. Rechte zur weiteren
                      Speicherung stehen dieser entgegen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Einschränkung
                    </h3>
                    <p className="text-gray-700">
                      Sie haben das Recht, eine Einschränkung bei der
                      Verarbeitung Ihrer personenbezogenen Daten zu verlangen,
                      wenn eine der Voraussetzungen in Art. 18 Abs. 1 lit. a)
                      bis d) DS-GVO erfüllt ist:
                    </p>
                    <ul className="list-disc list-inside mt-2 text-gray-700">
                      <li>
                        Wenn Sie die Richtigkeit der Sie betreffenden
                        personenbezogenen für eine Dauer bestreiten, die es dem
                        Verantwortlichen ermöglicht, die Richtigkeit der
                        personenbezogenen Daten zu überprüfen;
                      </li>
                      <li>
                        die Verarbeitung unrechtmäßig ist und Sie die Löschung
                        der personenbezogenen Daten ablehnen und stattdessen die
                        Einschränkung der Nutzung der personenbezogenen Daten
                        verlangen;
                      </li>
                      <li>
                        der Verantwortliche die personenbezogenen Daten für die
                        Zwecke der Verarbeitung nicht länger benötigt, Sie diese
                        jedoch zur Geltendmachung, Ausübung oder Verteidigung
                        von Rechtsansprüchen benötigen, oder
                      </li>
                      <li>
                        wenn Sie Widerspruch gegen die Verarbeitung gemäß Art.
                        21 Abs. 1 DS-GVO eingelegt haben und noch nicht
                        feststeht, ob die berechtigten Gründe des
                        Verantwortlichen gegenüber Ihren Gründen überwiegen.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Datenübertragbarkeit
                    </h3>
                    <p className="text-gray-700">
                      Sie haben ein Recht auf Datenübertragbarkeit nach Art. 20
                      DS-GVO, was bedeutet, dass Sie die bei uns über Sie
                      gespeicherten personenbezogenen Daten in einem
                      strukturierten, gängigen und maschinenlesbaren Format
                      erhalten können oder die Übermittlung an einen anderen
                      Verantwortlichen verlangen können.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Recht auf Beschwerde
                    </h3>
                    <p className="text-gray-700">
                      Sie haben ein Recht auf Beschwerde bei einer
                      Aufsichtsbehörde. In der Regel können Sie sich hierfür an
                      die Aufsichtsbehörde insbesondere in dem Mitgliedstaat
                      ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts
                      des mutmaßlichen Verstoßes wenden.
                    </p>
                  </div>
                </div>
              </section>

              {/* Datensicherheit */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Datensicherheit
                </h2>
                <p className="text-gray-700">
                  Um alle personenbezogen Daten, die an uns übermittelt werden,
                  zu schützen und um sicherzustellen, dass die
                  Datenschutzvorschriften von uns, aber auch unseren externen
                  Dienstleistern eingehalten werden, haben wir geeignete
                  technische und organisatorische Sicherheitsmaßnahmen
                  getroffen. Deshalb werden unter anderem alle Daten zwischen
                  Ihrem Browser und unserem Server über eine sichere
                  SSL-Verbindung verschlüsselt übertragen.
                </p>
              </section>

              {/* Stand */}
              <section>
                <p className="text-sm text-gray-500 mt-8">
                  Stand: 23.02.2019
                  <br />
                  Quelle: Muster-Datenschutzerklärung von JuraForum.de
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
