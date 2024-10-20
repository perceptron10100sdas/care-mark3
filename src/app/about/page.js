"use client";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function AboutUs() {
    return (
        <div>
            <Header />
          <main className="flex flex-col bg-gradient-to-br from-rose-50 to-pink-100 p-12 space-y-16 min-h-screen">
            
            {/* Section Title */}
            <section className="text-center space-y-6">
              <h1 className="text-7xl font-bold text-red-600 drop-shadow-lg">About Us</h1>
              <p className="text-2xl font-light text-gray-700 max-w-3xl mx-auto italic">
                Revolutionizing emergency healthcare with real-time data, seamless coordination, and patient-first solutions.
              </p>
            </section>
    
            {/* Challenges Section */}
            <section className="p-8 bg-white bg-opacity-50 shadow-2xl border-t-4 border-red-500 space-y-8">
              <h2 className="text-5xl font-bold text-red-600 text-center">Challenges in Healthcare</h2>
              <ul className="text-left space-y-4 text-lg font-medium list-disc list-inside px-6 leading-relaxed">
                <li>Difficulty managing emergencies and internal hospital transfers.</li>
                <li>Lack of seamless communication between emergency services and hospitals.</li>
                <li>Operational inefficiencies in bed availability and resource management.</li>
                <li>Delayed care for patients in remote or cut-off areas.</li>
                <li>Miscommunication and risk during internal patient transfers.</li>
              </ul>
            </section>
    
            {/* Our Solution Section */}
            <section className="p-8 bg-white bg-opacity-50 shadow-2xl border-t-4 border-red-500 space-y-8">
              <h2 className="text-5xl font-bold text-red-600 text-center">Our Solution</h2>
              <ul className="text-left space-y-4 text-lg font-medium list-disc list-inside px-6 leading-relaxed">
                <li>Integrates emergency services with real-time hospital updates.</li>
                <li>Provides a unified platform for effective communication between response teams and hospitals.</li>
                <li>Automates internal transfers to ensure operational efficiency.</li>
                <li>Reduces errors, speeds up transfers, and enhances patient safety.</li>
                <li>Facilitates routing of patients to the most appropriate facilities quickly, especially in remote areas.</li>
              </ul>
            </section>
    
            {/* Bed Management Section */}
            <section className="p-8 bg-white bg-opacity-50 shadow-2xl border-t-4 border-red-500 space-y-8">
              <h2 className="text-5xl font-bold text-red-600 text-center">Bed Management & Physician Dashboard</h2>
              <ul className="text-left space-y-4 text-lg font-medium list-disc list-inside px-6 leading-relaxed">
                <li>Real-time bed availability system for instant access to hospital capacity across departments.</li>
                <li>Eliminates manual checks, ensuring accurate, up-to-date information on available resources.</li>
                <li>Physician dashboard offers patient history, current medications, diagnoses, and ongoing treatments at a glance.</li>
                <li>Enhances decision-making speed for doctors, ensuring continuity of care.</li>
              </ul>
            </section>
    
            {/* Mission Section */}
            <section className="p-8 bg-white bg-opacity-50 shadow-2xl border-t-4 border-red-500 space-y-8">
              <h2 className="text-5xl font-bold text-red-600 text-center">Our Mission</h2>
              <ul className="text-left space-y-4 text-lg font-medium list-disc list-inside px-6 leading-relaxed">
                <li>Developed by The Outbreakers, our solution integrates emergency services, internal hospital transfers, and patient care.</li>
                <li>Provides a seamless, real-time data platform to improve efficiency and patient safety.</li>
                <li>Ensures hospitals are equipped to handle critical care scenarios and manage resources effectively.</li>
                <li>Sets a new standard for hospital management systems, offering unmatched responsiveness.</li>
              </ul>
            </section>
    
          </main>
          <Footer />
        </div>
      );
}
