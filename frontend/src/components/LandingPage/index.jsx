import React, { useState } from 'react';
import Navbar from '../Navbar';
import './landing.css';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const locations = ["Hyderabad", "Pune", "Andhra-Pradesh", "Odisha", "Bangalore"];

  
  const applianceProblems = [
    {
      type: "Refrigerator",
      description: "Find technicians to repair your refrigerator.",
    },
    {
      type: "Air Conditioner",
      description: "Get your air conditioner fixed by a professional.",
    },
    {
      type: "Washing Machine",
      description: "Trouble with your washing machine? Find a technician.",
    },
    {
      type: "Microwave",
      description: "Repair services for your microwave oven.",
    },
  ];

  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const filteredApplianceProblems = applianceProblems.filter((appliance) =>
    appliance.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (applianceType) => {
    
    alert(`Searching for technicians to repair: ${applianceType}`);
  };

  return (
    <div className="landing-page">
      <Navbar />
      <h1>Find a Technician</h1>

     
      <div className="search-container">
        <select>
          <option value="" disabled selected>
            Select Location
          </option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>

        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search appliance type..."
        />
      </div>

     
      <h2>Problems We Fix</h2>
      <div className="appliance-cards-container">
        {filteredApplianceProblems.map((appliance) => (
          <div className="appliance-card" key={appliance.type}>
            <h3>{appliance.type}</h3>
            <p>{appliance.description}</p>
            <button onClick={() => handleCardClick(appliance.type)}>
              Find Technicians
            </button>
          </div>
        ))}
      </div>

     
      <footer className="footer">
        <p>&copy; 2024 Appliance Repair Service. All rights reserved.</p>
        <p>Contact us: info@appliancerepair.com | Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
};

export default LandingPage;
