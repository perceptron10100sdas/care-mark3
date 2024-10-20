"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BookingForm() {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [generalBeds, setGeneralBeds] = useState({ available: 0, total: 10 });
  const [surgeryBeds, setSurgeryBeds] = useState({ available: 0, total: 5 });
  const [formValues, setFormValues] = useState({
    phone: "",
    uid: "",
    bedType: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    const { phone, uid, bedType } = formValues;

    // Phone Number Validation (Example: Indian format)
    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }

    // Check availability before processing booking
    if (!areBedsAvailable(bedType)) {
      alert("No beds available for this type.");
      return;
    }

    // Assuming the specific UID required for booking is "123"
    if (uid === "123" && phone === "7008789139") {
      // Increment the available bed count for General or Surgery immediately
      if (bedType === "general") {
        incrementBed(setGeneralBeds, generalBeds);
      } else if (bedType === "surgery") {
        incrementBed(setSurgeryBeds, surgeryBeds);
      }

      // Show the success alert message after updating bed count
      alert("Bed booked successfully for " + phone);
    } else {
      alert("Invalid UID / Phone Number. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const areBedsAvailable = (bedType) => {
    const bedData = bedType === "general" ? generalBeds : surgeryBeds;
    return bedData.available < bedData.total;
  };

  const incrementBed = (setBedState, bedData) => {
    if (bedData.available < bedData.total) {
      const newAvailable = bedData.available + 1;
      setBedState({ ...bedData, available: newAvailable });

      const percentageOccupied = (newAvailable / bedData.total) * 100;
      const newColor = calculateOccupiedColor(percentageOccupied);

      // Check if all beds are filled
      checkAllBedsFilled();
    } else {
      alert("No beds available for this type.");
    }
  };

  const calculateOccupiedColor = (percentage) => {
    const initialGreen = 204;
    const initialRed = 102;
    const red = Math.min(255, initialRed + Math.floor(percentage * 1.5));
    const green = Math.max(0, initialGreen - Math.floor(percentage * 1.5));
    return `rgb(${red}, ${green}, 0)`;
  };

  const checkAllBedsFilled = () => {
    const allGeneralFilled = generalBeds.available >= generalBeds.total;
    const allSurgeryFilled = surgeryBeds.available >= surgeryBeds.total;
    setIsButtonDisabled(allGeneralFilled && allSurgeryFilled);
  };

  // Example of setting the selected hospital (Simulate API response)
  const exampleHospital = {
    name: "K8 Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha 751003",
    latitude: 20.283,
    longitude: 85.7726,
  };

  const selectHospital = (hospital) => {
    setSelectedHospital(hospital);
  };

  return (
    <div>
      <Header />
      <div className="p-8 bg-gray-50 min-h-screen">
        {/* Form Section */}
        <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Book a Bed</h1>
          <form id="bookingForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold">
                Phone Number:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="w-full border-2 p-2 rounded-lg mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="uid" className="block font-semibold">
                UID:
              </label>
              <input
                type="text"
                id="uid"
                name="uid"
                value={formValues.uid}
                onChange={handleInputChange}
                className="w-full border-2 p-2 rounded-lg mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="bedType" className="block font-semibold">
                Bed Type:
              </label>
              <select
                id="bedType"
                name="bedType"
                value={formValues.bedType}
                onChange={handleInputChange}
                className="w-full border-2 p-2 rounded-lg mt-2"
                required
              >
                <option value="">Select Bed Type</option>
                <option value="general">General</option>
                <option value="surgery">Surgery</option>
              </select>
            </div>
            <button
              type="submit"
              className={`w-full bg-red-600 text-white p-2 rounded-lg mt-4 ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isButtonDisabled}
            >
              {isButtonDisabled ? "All beds are filled" : "Book Bed"}
            </button>
          </form>
        </div>

        {/* Bed Availability Section */}
        <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Bed Availability</h2>
          <div className="space-y-2">
            <p className="font-medium">
              General Beds:{" "}
              <span id="generalAvailable">
                {generalBeds.available}/{generalBeds.total}
              </span>
            </p>
            <p className="font-medium">
              Surgery Beds:{" "}
              <span id="surgeryAvailable">
                {surgeryBeds.available}/{surgeryBeds.total}
              </span>
            </p>
          </div>
        </div>

        {/* Hospital Map Section */}
        <div className="max-w-lg mx-auto mt-6 p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Selected Hospital</h2>
          <p id="selectedHospitalText" className="text-lg">
            {selectedHospital ? selectedHospital.name : "No hospital selected"}
          </p>
          <div id="hospitalMap" className="mt-4">
            {selectedHospital && (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBGLpuDsXyK3prGYgAeFCal8x0Dalo7FZ0&q=${selectedHospital.latitude},${selectedHospital.longitude}&zoom=16`}
                width="100%"
                height="300"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
