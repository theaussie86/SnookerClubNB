"use client";

import { useEffect, useRef, useState } from "react";

interface MapProps {
  className?: string;
}

// Google Maps Types
declare global {
  interface Window {
    google: any;
    initMap?: () => void;
  }
}

export default function Map({ className = "" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    console.log(
      "useEffect ausgeführt - isClient:",
      isClient,
      "mapRef.current:",
      mapRef.current
    );

    if (!isClient || !mapRef.current) return;

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    console.log("API Key:", apiKey ? "vorhanden" : "fehlt");

    if (!apiKey || apiKey === "YOUR_GOOGLE_MAPS_API_KEY") {
      setMapError("Google Maps API Key ist nicht konfiguriert");
      return;
    }

    // Prüfen ob Google Maps bereits geladen ist
    if (window.google && window.google.maps) {
      initializeMap();
      return;
    }

    // Prüfen ob Script bereits existiert
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existingScript) {
      // Script existiert bereits, warten bis es geladen ist
      const checkGoogleMaps = () => {
        if (window.google && window.google.maps) {
          initializeMap();
        } else {
          setTimeout(checkGoogleMaps, 100);
        }
      };
      checkGoogleMaps();
      return;
    }

    // Google Maps Script laden
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap&loading=async`;
    script.async = true;
    script.defer = true;

    // Callback für nach dem Laden
    window.initMap = () => {
      console.log("Google Maps API geladen");
      // Kleine Verzögerung, um sicherzustellen, dass alles bereit ist
      setTimeout(() => {
        initializeMap();
      }, 100);
    };

    script.onerror = (error) => {
      console.error("Fehler beim Laden der Google Maps API:", error);
      setMapError(
        "Fehler beim Laden der Google Maps API. Bitte prüfen Sie Ihren API Key und die Internetverbindung."
      );
    };

    script.onload = () => {
      console.log("Google Maps Script geladen");
    };

    document.head.appendChild(script);

    // Timeout als Fallback
    timeoutRef.current = setTimeout(() => {
      if (!mapLoaded && !mapError) {
        console.error("Google Maps Timeout");
        console.log("Debug Info:", {
          apiKey: apiKey ? "vorhanden" : "fehlt",
          googleMapsLoaded: !!window.google,
          mapRef: !!mapRef.current,
          scriptLoaded: !!document.querySelector(
            'script[src*="maps.googleapis.com"]'
          ),
        });
        setMapError("Timeout beim Laden der Google Maps API");
      }
    }, 15000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (window.initMap) {
        delete window.initMap;
      }
    };
  }, [isClient]);

  const initializeMap = () => {
    console.log("initializeMap aufgerufen");
    console.log("mapRef.current:", mapRef.current);
    console.log("window.google:", window.google);

    if (!mapRef.current) {
      console.error("mapRef.current ist null");
      setMapError("Karten-Container nicht gefunden");
      return;
    }

    if (!window.google || !window.google.maps) {
      console.error("Google Maps API nicht verfügbar");
      setMapError("Google Maps API nicht verfügbar");
      return;
    }

    try {
      const lat = parseFloat(
        process.env.NEXT_PUBLIC_CLUB_LATITUDE || "52.520008"
      );
      const lng = parseFloat(
        process.env.NEXT_PUBLIC_CLUB_LONGITUDE || "13.404954"
      );

      console.log("Erstelle Karte mit Koordinaten:", { lat, lng });

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 15,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
      });

      console.log("Karte erstellt:", map);

      // Marker für den Snooker Club hinzufügen (klassischer Marker)
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: "Snooker Club NB",
        icon: {
          url: "/red-snooker-ball.png",
          scaledSize: new window.google.maps.Size(40, 40),
          anchor: new window.google.maps.Point(20, 20),
        },
      });

      console.log("Marker erstellt:", marker);
      setMapLoaded(true);
      console.log(
        "Karte erfolgreich geladen - mapLoaded wird auf true gesetzt"
      );

      // Timeout löschen, da Karte erfolgreich geladen wurde
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
        console.log("Timeout gelöscht - Karte erfolgreich geladen");
      }
    } catch (error) {
      console.error("Fehler beim Initialisieren der Karte:", error);
      setMapError(
        `Fehler beim Initialisieren der Karte: ${
          error instanceof Error ? error.message : "Unbekannter Fehler"
        }`
      );
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Map Container - immer rendern */}
      <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />

      {/* Loading Overlay */}
      {!isClient && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Google Maps</p>
            <p className="text-sm text-gray-500 mt-2">Karte wird geladen...</p>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {mapError && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-red-50 rounded-lg border border-red-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-red-600 font-medium">Kartenfehler</p>
            <p className="text-sm text-red-500 mt-2">{mapError}</p>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isClient && !mapLoaded && !mapError && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-gray-600 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Google Maps</p>
            <p className="text-sm text-gray-500 mt-2">Karte wird geladen...</p>
          </div>
        </div>
      )}

      {/* Fullscreen Icons - nur anzeigen wenn Karte geladen */}
      {mapLoaded && (
        <>
          <div className="absolute top-4 right-4">
            <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

          <div className="absolute bottom-4 right-4">
            <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
