import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Map from "@/components/Map";
import { CLUB_INFO } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-primary-100">
        {/* Main Content Area with Map and Info */}
        <section className="flex items-center justify-center min-h-[calc(100vh-200px)] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Map Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Map className="h-96" />
              </div>

              {/* Club Information Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Spielgemeinschaft Snooker Neubrandenburg
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Adresse
                    </h3>
                    <p className="text-gray-700">Nonnenhofer Straße 58</p>
                    <p className="text-gray-700">17033 Neubrandenburg</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">E-Mail</h3>
                    <a
                      href={`mailto:${CLUB_INFO.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      snookertempel@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
