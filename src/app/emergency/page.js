// import Image from "next/image";
// import Header from "../components/Header";
// import { CiMedicalCase } from "react-icons/ci";
// import { LiaAmbulanceSolid } from "react-icons/lia";
// import { TfiLineDotted } from "react-icons/tfi";
// import { FaUserDoctor } from "react-icons/fa6";

// export default function Home() {
//   return (
//     <div>
//       <main className="flex flex-col bg-rose-50 px-3 space-y-4 pb-12">
//         <Header />
//         <div className="w-full px-3 flex gap-x-4">
//         <div className="w-1/2 flex flex-col gap-y-4">
//           <h1 className="text-4xl font-semibold text-red-700   overline">
//             Emergency - Find Nearby Hospitals
//           </h1>
//           <div className="h-[500px] w-full rounded-lg border-black bg-red-200"></div>
//         </div>
//         <div className="w-1/2 flex flex-col gap-y-4">
//           <h2 className="text-3xl font-sans">Nearby Hospitals</h2>
//           <ul>
// <li className="w-full bg-gray-500">
//     <div>
//         <strong>OUAT Dispensary, health care OUAT</strong>
//         <span>0.63 km away</span>
//     </div>
//     <button>Select</button>
//     <div className="hidden"></div>
//     <div className="hidden">
//         <p><strong>Contact Number: </strong><span>7855074675</span></p>
//         <form className="hidden">
//             <input type="text" placeholder="Your Name" required></input>
//             <input type="text" placeholder="Your Phone Number" required></input>
//             <button type="button" onClick={submitAlert()}></button>
//         </form>
//     </div>
// </li>
//           </ul>
//         </div>
//         </div>
//         <script src="/1script.js"></script>
//       </main>
//       <footer className="bg-rose-50 rounded-lg shadow border-t">
//         <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
//           <span className="text-sm text-gray-500 sm:text-center ">
//             © 2024{" "}
//             <a href="https://flowbite.com/" className="hover:underline">
//               Medicate
//             </a>
//             . All Rights Reserved.
//           </span>
//           <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline me-4 md:me-6">
//                 Licensing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:underline">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </footer>
//     </div>
//   );
// }
"use client"; // This tells Next.js that this file is a Client Component
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [hospitals, setHospitals] = useState([]);
  const [map, setMap] = useState(null);
  const [currentSelectedHospital, setCurrentSelectedHospital] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGLpuDsXyK3prGYgAeFCal8x0Dalo7FZ0&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        const google = window.google;
        if (google) {
          //   const mapInstance = new google.maps.Map(mapRef.current, {
          //     center: { lat: -34.397, lng: 150.644 },
          //     zoom: 8,
          //   });

          const mapInstance = new google.maps.Map(mapRef.current, {
            zoom: 15,
          });
          setMap(mapInstance);

          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const userLocation = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };

                mapInstance.setCenter(userLocation);

                new google.maps.Marker({
                  position: userLocation,
                  map: mapInstance,
                  icon: {
                    url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                  },
                  title: "Your Location",
                });

                searchHospitals(mapInstance, userLocation);
              },
              (error) => {
                console.error("Geolocation error:", error);
                handleLocationError(true, mapInstance);
              }
            );
          } else {
            handleLocationError(false, mapInstance);
          }

          // Call the function to search for hospitals once the map is initialized
          searchHospitals(mapInstance, mapInstance.getCenter());
        }
      };
    };

    loadGoogleMapsScript();
  }, []);

  const initMap = () => {
    const mapInstance = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
    });
    setMap(mapInstance);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          mapInstance.setCenter(userLocation);
          new google.maps.Marker({
            position: userLocation,
            map: mapInstance,
            icon: {
              url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            },
            title: "Your Location",
          });

          searchHospitals(mapInstance, userLocation);
        },
        (error) => {
          console.error("Geolocation error:", error);
          handleLocationError(true, mapInstance);
        }
      );
    } else {
      handleLocationError(false, mapInstance);
    }
  };

  const searchHospitals = (mapInstance, location) => {
    const service = new google.maps.places.PlacesService(mapInstance);
    const request = {
      location,
      radius: "5000",
      type: ["hospital"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const hospitalsWithDistance = results.map((place) => {
          const distance = calculateDistance(location, place.geometry.location);
          return { place, distance };
        });
        hospitalsWithDistance.sort((a, b) => a.distance - b.distance);
        setHospitals(hospitalsWithDistance);
      } else {
        console.error("Nearby search failed:", status);
      }
    });
  };

  const selectHospital = (placeId, button) => {
    if (currentSelectedHospital && currentSelectedHospital !== placeId) {
      document
        .getElementById(`details-${currentSelectedHospital}`)
        .classList.add("hidden");
      document
        .getElementById(`contact-${currentSelectedHospital}`)
        .classList.add("hidden");
    }

    const service = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const contactNumber = place.formatted_phone_number || "N/A";
        document.getElementById(`contact-number-${placeId}`).textContent =
          contactNumber;
        document
          .getElementById(`contact-${placeId}`)
          .classList.remove("hidden");
        setCurrentSelectedHospital(placeId);
      } else {
        console.error("Place details request failed:", status);
      }
    });
  };

  const calculateDistance = (loc1, loc2) => {
    const lat1 = loc1.lat;
    const lng1 = loc1.lng;
    const lat2 = loc2.lat;
    const lng2 = loc2.lng;

    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const submitAlert = (placeId) => {
    const name = document.getElementById(`user-name-${placeId}`).value;
    const phone = document.getElementById(`user-phone-${placeId}`).value;

    if (name && phone) {
      alert("Successfully Alerted the Hospital. You will be reached out soon.");
      document.getElementById(`contact-form-${placeId}`).reset();
      document.getElementById(`contact-${placeId}`).classList.add("hidden");
    } else {
      alert("Please enter both your name and phone number.");
    }
  };

  return (
    <div>
      <Header />
      <div className="flex items-start gap-x-4 p-6 bg-gray-100">
        <div className="w-full flex flex-col justify-start items-start">
          <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
            Emergency - Find Nearby Hospitals
          </h1>

          <div
            ref={mapRef}
            style={{ height: "500px", width: "100%" }}
            className="w-full max-w-4xl h-96 rounded-lg shadow-lg mb-8"
          ></div>
        </div>

        <div
          id="hospital-list"
          className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
            Nearby Hospitals
          </h2>
          <ul id="hospital-items" className="space-y-4">
            {/* {hospitals.map((hospital) => (
              <li
                key={hospital.place.place_id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <div>
                  <strong className="text-lg text-blue-600">
                    {hospital.place.name}
                  </strong>
                  <span className="text-gray-500 ml-4">
                    {hospital.distance.toFixed(2)} km away
                  </span>
                </div>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => selectHospital(hospital.place.place_id)}
                >
                  Select
                </button>
                <div
                  id={`details-${hospital.place.place_id}`}
                  className="hospital-details hidden"
                ></div>
                <div
                  id={`contact-${hospital.place.place_id}`}
                  className="hospital-contact hidden"
                >
                  <p>
                    <strong>Contact Number:</strong>{" "}
                    <span
                      id={`contact-number-${hospital.place.place_id}`}
                    ></span>
                  </p>
                  <form
                    id={`contact-form-${hospital.place.place_id}`}
                    className="hidden"
                  >
                    <input
                      type="text"
                      id={`user-name-${hospital.place.place_id}`}
                      className="block w-full p-2 mb-2 border rounded"
                      placeholder="Your Name"
                      required
                    />
                    <input
                      type="text"
                      id={`user-phone-${hospital.place.place_id}`}
                      className="block w-full p-2 mb-2 border rounded"
                      placeholder="Your Phone Number"
                      required
                    />
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => submitAlert(hospital.place.place_id)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </li>
            ))} */}
            {hospitals.map((hospital, index) => (
              <li key={index} className="w-full bg-gray-200">
                <div className="p-4 flex items-center justify-between border-l-4 border-blue-600">
                  <p>
                    <strong className="text-xl text-blue-600">
                      {hospital.place.name}
                    </strong>
                    <span className="ml-2 text-gray-700">
                      {hospital.distance.toFixed(2) || 0} km away
                    </span>
                  </p>
                  <button className="px-4 py-2 bg-red-500 rounded-md text-white font-semibold">
                    Select
                  </button>
                  <div className="hidden"></div>
                  <div className="hidden">
                    <p>
                      <strong>Contact Number: </strong>
                      <span>7855074675</span>
                    </p>
                    <form className="hidden">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                      ></input>
                      <input
                        type="text"
                        placeholder="Your Phone Number"
                        required
                      ></input>
                      <button type="button" onClick=""></button>
                    </form>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function Home() {
//   // Declare mapRef using useRef hook
//   const mapRef = useRef(null);
//   const [hospitals, setHospitals] = useState([]);

// useEffect(() => {
//   const loadGoogleMapsScript = () => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBGLpuDsXyK3prGYgAeFCal8x0Dalo7FZ0&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     document.head.appendChild(script);

//     script.onload = () => {
//       const google = window.google;
//       if (google) {
//         const mapInstance = new google.maps.Map(mapRef.current, {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 8,
//         });

//         // Call the function to search for hospitals once the map is initialized
//         searchHospitals(mapInstance, mapInstance.getCenter());
//       }
//     };
//   };

//   loadGoogleMapsScript();
// }, []);

//   const searchHospitals = (mapInstance, location) => {
//     const service = new google.maps.places.PlacesService(mapInstance);
//     const request = {
//       location,
//       radius: '5000',
//       type: ['hospital'],
//     };

//     service.nearbySearch(request, (results, status) => {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         const hospitalsWithDistance = results.map((place) => {
//           const distance = calculateDistance(location, place.geometry.location);
//           return { place, distance };
//         });
//         hospitalsWithDistance.sort((a, b) => a.distance - b.distance);
//         setHospitals(hospitalsWithDistance);
//       } else {
//         console.error("Nearby search failed:", status);
//       }
//     });
//   };

//   const calculateDistance = (loc1, loc2) => {
//     const lat1 = loc1.lat();
//     const lng1 = loc1.lng();
//     const lat2 = loc2.lat();
//     const lng2 = loc2.lng();

//     const R = 6371; // Radius of the Earth in km
//     const dLat = ((lat2 - lat1) * Math.PI) / 180;
//     const dLng = ((lng2 - lng1) * Math.PI) / 180;
//     const a =
//       Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//       Math.cos((lat1 * Math.PI) / 180) *
//         Math.cos((lat2 * Math.PI) / 180) *
//         Math.sin(dLng / 2) *
//         Math.sin(dLng / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const distance = R * c;
//     return distance;
//   };

//   return (
//     <div>
//       <h1>Hospital Locator</h1>
//       {/* Add mapRef to the div containing the map */}
//       <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>
//       <ul>
//         {hospitals.map((hospital, index) => (
//           <li key={index}>
//             {hospital.place.name} - {hospital.distance.toFixed(2)} km away
//           </li>
//         ))}
//         <li>Hello World</li>
//       </ul>
//     </div>
//   );
// }
