import React, { useState } from 'react';
import './AnalysisPage.css';

const AnalysisPage = () => {
  const [algorithm, setAlgorithm] = useState('Algorithm 1');

  const handleAlgorithmChange = (selectedAlgorithm) => {
    setAlgorithm(selectedAlgorithm);
  };

  return (
    <div className="analysis-page">
      <div className="algorithm-buttons">
        <button onClick={() => handleAlgorithmChange('Algorithm 1')}>Algorithm 1</button>
        <button onClick={() => handleAlgorithmChange('Algorithm 2')}>Algorithm 2</button>
        <button onClick={() => handleAlgorithmChange('Algorithm 3')}>Algorithm 3</button>
      </div>

      <div className="algorithm-section">
        <h2>{algorithm}</h2>
        <div className="station-select">
          <div className="station-input">
            <label>Starting Station</label>
            <select>
              <option>Select station</option>
              <option>Station 1</option>
              <option>Station 2</option>
              <option>Station 3</option>
            </select>
          </div>

          <div className="station-input">
            <label>Destination Station</label>
            <select>
              <option>Select station</option>
              <option>Station 1</option>
              <option>Station 2</option>
              <option>Station 3</option>
            </select>
          </div>
        </div>
        
        {/* Submit Button */}
        {/* <button className="submit-button">Submit</button>
      </div> */}
      <div className="submit-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>

      <div className="output-section">
        Here will be the output from the backend, and the Map
      </div>
    </div>
  );
};

export default AnalysisPage;
