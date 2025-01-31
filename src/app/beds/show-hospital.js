import { useEffect, useState } from 'react';

const HospitalMap = ({ hospital }) => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  // Function to update the hospital information and map
  useEffect(() => {
    if (hospital) {
      setSelectedHospital(hospital);
    }
  }, [hospital]);

  // Function to generate the Google Maps embed URL
  const getMapUrl = (lat, lng) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=16`;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-700 mb-4" id="hospitalName">
        {selectedHospital ? selectedHospital.name : 'No hospital selected'}
      </h2>
      <div id="hospitalMap" className="w-full h-96 rounded-lg overflow-hidden border border-gray-300">
        {selectedHospital ? (
          <iframe
            src={getMapUrl(selectedHospital.latitude, selectedHospital.longitude)}
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          <p className="text-gray-500">No hospital selected yet</p>
        )}
      </div>
    </div>
  );
};

export default HospitalMap;
