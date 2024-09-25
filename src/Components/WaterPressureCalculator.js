import React, { useState } from 'react';

const WaterPressureCalculator = () => {
  // State to hold the input values
  const [density, setDensity] = useState('');
  const [gravity, setGravity] = useState('');
  const [depth, setDepth] = useState('');
  // State to hold the result
  const [pressure, setPressure] = useState(null);

  // Function to calculate the water pressure
  const calculatePressure = () => {
    // Convert input values to floats
    const rho = parseFloat(density);
    const g = parseFloat(gravity);
    const h = parseFloat(depth);

    // Check if inputs are valid numbers
    if (isNaN(rho) || isNaN(g) || isNaN(h) || rho <= 0 || g <= 0 || h <= 0) {
      alert('Please enter valid positive numbers for all inputs.');
      return;
    }

    // Calculate pressure in pounds per square foot (lbf/ft²)
    const pressureLbfFt2 = rho * g * h;

    // Convert pressure to pounds per square inch (psi)
    const pressurePsi = pressureLbfFt2 / 144;

    // Set the result
    setPressure(pressurePsi.toFixed(2));
  };

  return (
    <div className='container text-white bg-dark'>
      <h1>Water Pressure Calculator</h1>
      <div>
        <label>
          Density (ρ) in lb/ft³:
          <input
            type="number"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Acceleration due to Gravity (g) in ft/s²:
          <input
            type="number"
            value={gravity}
            onChange={(e) => setGravity(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Depth (h) in feet:
          <input
            type="number"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculatePressure}>Calculate Pressure</button>
      {pressure !== null && (
        <div>
          <h2>Water Pressure: {pressure} psi</h2>
        </div>
      )}
    </div>
  );
};

export default WaterPressureCalculator;
