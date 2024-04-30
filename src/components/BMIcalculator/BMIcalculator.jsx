import React, { useState } from 'react';
import "./BMIcalculator.css";
import backgroundImage from "../../assets/back.jpg"; // Import your image file here

function BMIcalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="BMIcalculator">
      <div className="image-background" >
        {/* If you want to overlay the image with a semi-transparent color, you can add a div here */}
      </div>
      <div className="content">
        <h2>BMI Calculator</h2>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Height (m):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
        </div>
        <button onClick={calculateBMI}>Calculate BMI</button>
        {bmi && <p>Your BMI is: {bmi}</p>}
      </div>
    </div>
  );
}

export default BMIcalculator;
