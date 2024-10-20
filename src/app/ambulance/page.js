"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLoadScript } from "@react-google-maps/api";
import { ImCross } from "react-icons/im";
import Footer from "../components/Footer";
import Header from "../components/Header";

const libraries = ["places"];

export default function Home() {
  const [map, setMap] = useState(null);
  const [fromAutocomplete, setFromAutocomplete] = useState(null);
  const [toAutocomplete, setToAutocomplete] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [ambulanceType, setAmbulanceType] = useState("BLS");
  const [ambulanceDetails, setAmbulanceDetails] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      "AIzaSyBGLpuDsXyK3prGYgAeFCal8x0Dalo7FZ0&libraries=places&callback=initMap",
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      initMap();
    }
  }, [isLoaded]);

  const initMap = () => {
    const mapInstance = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.5937, lng: 78.9629 }, // Default location: India
      zoom: 5,
    });
    setMap(mapInstance);

    const directionsServiceInstance = new google.maps.DirectionsService();
    const directionsRendererInstance = new google.maps.DirectionsRenderer();
    directionsRendererInstance.setMap(mapInstance);
    setDirectionsService(directionsServiceInstance);
    setDirectionsRenderer(directionsRendererInstance);

    const fromInput = document.getElementById("fromLocation");
    const toInput = document.getElementById("toLocation");

    setFromAutocomplete(new google.maps.places.Autocomplete(fromInput));
    setToAutocomplete(new google.maps.places.Autocomplete(toInput));

    detectLocation(mapInstance);
  };

  const detectLocation = (mapInstance) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        mapInstance.setCenter(userLocation);
        mapInstance.setZoom(15);

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: userLocation }, (results, status) => {
          if (status === "OK" && results[0]) {
            setFromLocation(results[0].formatted_address);
          }
        });
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const findAmbulances = () => {
    if (fromLocation && toLocation && directionsService) {
      const request = {
        origin: fromLocation,
        destination: toLocation,
        travelMode: "DRIVING",
      };

      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);

          const distance = result.routes[0].legs[0].distance.text;
          const duration = result.routes[0].legs[0].duration.text;
          const price = ambulanceType === "BLS" ? 500 : 1200;

          setAmbulanceDetails({ distance, duration, price });
        } else {
          alert("Could not find a route.");
        }
      });
    } else {
      alert("Please enter both current and destination hospitals.");
    }
  };

  const calculatePrice = (ambulanceType, distanceInMeters) => {
    const distanceInKm = distanceInMeters / 1000;
    return ambulanceType === "BLS" ? 500 : 1200;
  };

  const displayAmbulanceDetails = (distance, duration, price) => {
    setAmbulanceDetails(
      <>
        <h3 className="text-3xl font-bold text-blue-700">Ambulance Details</h3>
        <p>Type: {ambulanceType}</p>
        <p>Distance: {distance}</p>
        <p>Estimated Travel Time: {duration}</p>
        <p>Price: ₹{price.toFixed(0)}</p>
        {ambulances.map((ambulance, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 my-4 rounded-lg shadow-md"
          >
            <h3 className="font-bold">{ambulance.name}</h3>
            <p>Driver: {ambulance.driver}</p>
            <p>Vehicle: {ambulance.vehicle}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
              onClick={() => callDriver(ambulance.phone)}
            >
              Call Now
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded mt-2 ml-2 hover:bg-green-600"
              onClick={() => bookDriver(ambulance.phone)}
            >
              Book Now
            </button>
          </div>
        ))}
      </>
    );
  };

  const callDriver = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const bookDriver = (phoneNumber) => {
    alert(`Booking ambulance with phone number ${phoneNumber}`);
  };

  const ambulances = [
    {
      name: "Ambulance 1",
      driver: "Adarsh Swain",
      vehicle: "OD-14B-0395",
      phone: "7008789139",
    },
    {
      name: "Ambulance 2",
      driver: "Sandeep Ekka",
      vehicle: "OD-14B-0143",
      phone: "6371305386",
    },
    {
      name: "Ambulance 3",
      driver: "Manas Bhai-(mansi)",
      vehicle: "OD-14B-0282",
      phone: "9437521136",
    },
    {
      name: "Ambulance 4",
      driver: "Amlan",
      vehicle: "OD-14B-0987",
      phone: "9348917870",
    },
    {
      name: "Ambulance 5",
      driver: "Aditya",
      vehicle: "OD-14B-0969",
      phone: "7846996822",
    },
    {
      name: "Ambulance 6",
      driver: "Vaishnavi",
      vehicle: "OD-14B-0125",
      phone: "9348659546",
    },
  ];

  const clearInput = (setter) => {
    setter("");
  };

  const renderAmbulances = () => {
    return (
      <>
        {ambulances.map((ambulance, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 my-4 rounded-lg shadow-md flex flex-col md:flex-row items-start md:items-center justify-between"
          >
            <div className="mb-2 md:mb-0">
              <h3 className="font-bold text-xl">{ambulance.name}</h3>
              <p>Driver: {ambulance.driver}</p>
              <p>Vehicle: {ambulance.vehicle}</p>
            </div>
            <div className="flex space-x-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                onClick={() => callDriver(ambulance.phone)}
              >
                Call Now
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => bookDriver(ambulance.phone)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen bg-rose-50">
        <div className="flex justify-center space-x-4 py-4">
          <div className="relative">
            <input
              type="text"
              id="fromLocation"
              placeholder="Enter Current Hospital or Location"
              className="px-4 py-2 pr-8 w-72 border rounded-lg shadow-md truncate"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            />
            <ImCross className="absolute top-3 right-3 text-lg cursor-pointer text-gray-400" onClick={() => clearInput(setFromLocation)}/>
          </div>

          <div className="relative">
            <input
              type="text"
              id="toLocation"
              placeholder="Enter Destination Hospital"
              className="px-4 py-2 pr-8 w-72 border rounded-lg shadow-md truncate"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            />
            <ImCross className="absolute top-3 right-3 text-lg cursor-pointer text-gray-400" onClick={() => clearInput(setToLocation)}/>
          </div>

          <select
            id="ambulanceType"
            className="p-2 border rounded-lg"
            value={ambulanceType}
            onChange={(e) => setAmbulanceType(e.target.value)}
          >
            <option value="BLS">BLS Ambulance</option>
            <option value="ALS">ALS Ambulance</option>
          </select>

          <button
            className="px-4 py-2 font-semibold bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={findAmbulances}
          >
            Find Ambulances
          </button>
        </div>

        <div className="flex h-full space-x-4 p-4">
          <div className="w-1/2 h-full border rounded-lg">
            <div id="map" className="h-full"></div>
          </div>

          <div className="w-1/2 bg-white p-4 rounded-lg shadow-lg overflow-y-auto">
            {ambulanceDetails && (
              <div>
                <h3 className="text-3xl font-bold text-blue-700">Ambulance Details</h3>
                <p className="text-lg"><strong>Type:</strong> {ambulanceType}</p>
                <p className="text-lg"><strong>Distance:</strong> {ambulanceDetails.distance}</p>
                <p className="text-lg"><strong>Estimated Travel Time:</strong> {ambulanceDetails.duration}</p>
                <p className="text-lg"><strong>Price:</strong> ₹{ambulanceDetails.price}</p>

                <h3 className="mt-4 text-xl font-semibold">
                  Available Ambulances
                </h3>
                {renderAmbulances()}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
