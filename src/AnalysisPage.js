import React, { useState } from 'react';
import './AnalysisPage.css';

const AnalysisPage = () => {
  const [algorithm, setAlgorithm] = useState('Algorithm 1');
  const [startingStation, setStartingStation] = useState('');
  const [destinationStation, setDestinationStation] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAlgorithmChange = (selectedAlgorithm) => {
    setAlgorithm(selectedAlgorithm);
  };

  const handleSubmit = async () => {
    if (!startingStation || !destinationStation) {
      setResult('Please select both starting and destination stations.');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

  
    try {
      // const response = await fetch(`https://delhi-metro-qcvp.onrender.com/api/findRoute?startStopId=${startingStation}&endStopId=${destinationStation}&choice=${getAlgorithmChoice()}`, {
        const response = await fetch(`https://metro-api-f46u.onrender.com/api/findRoute?startStopId=${startingStation}&endStopId=${destinationStation}&choice=${getAlgorithmChoice()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (!response.ok) {
        const errorMessage = await response.text(); // Get error message from response
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }
    
      const data = await response.text();
      setResult(data);
    } catch (err) {
      console.log(err);
      console.error('Fetch error:', err); // Log error to console
      setError('Error occurred while calculating the route. Please try again.');
    } finally {
      setLoading(false);
    }    
  };

  const getAlgorithmChoice = () => {
    switch (algorithm) {
      case 'Algorithm 1':
        return 1;
      case 'Algorithm 2':
        return 2;
      case 'Algorithm 3':
        return 3;
      case 'Algorithm 4':
        return 4;
      default:
        return 1;
    }
  };

  // Station data array with both stop_id and stop_name
  const stationData = [
    { id: 1, name: "Dilshad Garden" },
    { id: 2, name: "Jhilmil" },
    { id: 3, name: "Mansrover Park" },
    { id: 4, name: "Shahdara" },
    { id: 5, name: "Welcome" },
    { id: 6, name: "Seelam Pur" },
    { id: 7, name: "Shastri Park" },
    { id: 8, name: "Kashmere Gate" },
    { id: 9, name: "Tis Hazari" },
    { id: 10, name: "Pul Bangash" },
    { id: 11, name: "Pratap Nagar" },
    { id: 12, name: "Shastri Nagar" },
    { id: 13, name: "Inderlok" },
    { id: 14, name: "Kanhaiya Nagar" },
    { id: 15, name: "Keshav Puram" },
    { id: 16, name: "Netaji Subash Place" },
    { id: 17, name: "Kohat Enclave" },
    { id: 18, name: "Pitampura" },
    { id: 19, name: "Rohini East" },
    { id: 20, name: "Rohini West" },
    { id: 21, name: "Rithala" },
    { id: 22, name: "Mundka" },
    { id: 23, name: "Rajdhani Park" },
    { id: 24, name: "Nangloi Railway Station" },
    { id: 25, name: "Nangloi" },
    { id: 26, name: "Maharaja Surajmal Stadium" },
    { id: 27, name: "Udyog Nagar" },
    { id: 28, name: "Peera Garhi" },
    { id: 29, name: "Paschim Vihar (West)" },
    { id: 30, name: "Paschim Vihar (East)" },
    { id: 31, name: "Madipur" },
    { id: 32, name: "Shivaji Park" },
    { id: 33, name: "Punjabi Bagh" },
    { id: 34, name: "Ashok Park Main" },
    { id: 35, name: "Satguru Ram Singh Marg" },
    { id: 36, name: "Samaypur Badli" },
    { id: 37, name: "Rohini Sector 18-19" },
    { id: 38, name: "Haiderpur Badli Mor" },
    { id: 39, name: "Jahangirpuri" },
    { id: 40, name: "Adarsh Nagar" },
    { id: 41, name: "Azadpur" },
    { id: 42, name: "Model Town" },
    { id: 43, name: "Guru Tegh Bahadur Nagar" },
    { id: 44, name: "Vishwavidyalaya" },
    { id: 45, name: "Vidhan Sabha" },
    { id: 46, name: "Civil Lines" },
    { id: 47, name: "Chandni Chowk" },
    { id: 48, name: "Chawri Bazar" },
    { id: 49, name: "New Delhi" },
    { id: 50, name: "Rajiv Chowk" },
    { id: 51, name: "Patel Chowk" },
    { id: 52, name: "Central Secretariat" },
    { id: 53, name: "Udyog Bhawan" },
    { id: 54, name: "Lok Kalyan Marg" },
    { id: 55, name: "Jorbagh" },
    { id: 56, name: "Dilli Haat - INA" },
    { id: 57, name: "AIIMS" },
    { id: 58, name: "Green Park" },
    { id: 59, name: "Hauz Khas" },
    { id: 60, name: "Malviya Nagar" },
    { id: 61, name: "Saket" },
    { id: 62, name: "Qutab Minar" },
    { id: 63, name: "Chhattarpur" },
    { id: 64, name: "Sultanpur" },
    { id: 65, name: "Ghitorni" },
    { id: 66, name: "Arjan Garh" },
    { id: 67, name: "Gurudronacharya" },
    { id: 68, name: "Sikanderpur" },
    { id: 69, name: "MG Road" },
    { id: 70, name: "IFFCO Chowk" },
    { id: 71, name: "Huda City Centre" },
    { id: 72, name: "Vaishali" },
    { id: 73, name: "Kaushambi" },
    { id: 74, name: "Anand Vihar" },
    { id: 75, name: "Karkarduma" },
    { id: 76, name: "Preet Vihar" },
    { id: 77, name: "Nirman Vihar" },
    { id: 78, name: "Laxmi Nagar" },
    { id: 79, name: "Noida City Centre" },
    { id: 80, name: "Golf Course" },
    { id: 81, name: "Botanical Garden" },
    { id: 82, name: "Noida Sec -18" },
    { id: 83, name: "Noida Sec -16" },
    { id: 84, name: "Noida Sec -15" },
    { id: 85, name: "New Ashok Nagar" },
    { id: 86, name: "Mayur Vihar Ext" },
    { id: 87, name: "Mayur Vihar-I" },
    { id: 88, name: "Akshardham" },
    { id: 89, name: "Yamuna Bank" },
    { id: 90, name: "Indraprastha" },
    { id: 91, name: "Supreme Court" },
    { id: 92, name: "Mandi House" },
    { id: 93, name: "Barakhamba" },
    { id: 94, name: "RK Ashram Marg" },
    { id: 95, name: "Jhandewalan" },
    { id: 96, name: "Karol Bagh" },
    { id: 97, name: "Rajendra Place" },
    { id: 98, name: "Patel Nagar" },
    { id: 99, name: "Shadipur" },
    { id: 100, name: "Kirti Nagar" },
    { id: 101, name: "Moti Nagar" },
    { id: 102, name: "Ramesh Nagar" },
    { id: 103, name: "Rajouri Garden" },
    { id: 104, name: "Tagore Garden" },
    { id: 105, name: "Subash Nagar" },
    { id: 106, name: "Tilak Nagar" },
    { id: 107, name: "Janak Puri East" },
    { id: 108, name: "Janak Puri West" },
    { id: 109, name: "Uttam Nagar East" },
    { id: 110, name: "Uttam Nagar West" },
    { id: 111, name: "Nawada" },
    { id: 112, name: "Dwarka Mor" },
    { id: 113, name: "Dwarka" },
    { id: 114, name: "Dwarka Sector - 14" },
    { id: 115, name: "Dwarka Sector - 13" },
    { id: 116, name: "Dwarka Sector - 12" },
    { id: 117, name: "Dwarka Sector - 11" },
    { id: 118, name: "Dwarka Sector - 10" },
    { id: 119, name: "Dwarka Sector - 9" },
    { id: 120, name: "Dwarka Sector - 8" },
    { id: 121, name: "Dwarka Sector - 21" },
    { id: 122, name: "ITO" },
    { id: 123, name: "Janpath" },
    { id: 124, name: "Khan Market" },
    { id: 125, name: "Jawahar Lal Nehru Stadium" },
    { id: 126, name: "Jangpura" },
    { id: 127, name: "Lajpat Nagar" },
    { id: 128, name: "Moolchand" },
    { id: 129, name: "Kailash Colony" },
    { id: 130, name: "Nehru Place" },
    { id: 131, name: "Kalkaji Mandir" },
    { id: 132, name: "Govind Puri" },
    { id: 133, name: "Okhla" },
    { id: 134, name: "Jasola" },
    { id: 135, name: "Sarita Vihar" },
    { id: 136, name: "Mohan Estate" },
    { id: 137, name: "Tughlakabad" },
    { id: 138, name: "Badarpur Border" },
      { id: 139, name: "Sarai" },
      { id: 140, name: "NHPC Chowk" },
      { id: 141, name: "Mewala Maharajpur" },
      { id: 142, name: "Sector-28" },
      { id: 143, name: "Badkal Mor" },
      { id: 144, name: "Old Faridabad" },
      { id: 145, name: "Neelam Chowk Ajronda" },
      { id: 146, name: "Bata Chowk" },
      { id: 147, name: "Escorts Mujesar" },
      { id: 148, name: "Sikanderpur (Rapid Metro)" },
      { id: 149, name: "Phase 2 (Rapid Metro)" },
      { id: 150, name: "Belvedere Towers (Rapid Metro)" },
      { id: 151, name: "Cyber City (Rapid Metro)" },
      { id: 152, name: "Moulsari Avenue (Rapid Metro)" },
      { id: 153, name: "Phase 3 (Rapid Metro)" },
      { id: 154, name: "IGI Airport" },
      { id: 155, name: "Delhi Aerocity" },
      { id: 156, name: "Dhaula Kuan" },
      { id: 157, name: "Shivaji Stadium" },
      { id: 158, name: "Delhi Gate" },
      { id: 159, name: "Jama Masjid" },
      { id: 160, name: "Lal Quila" },
      { id: 161, name: "Okhla Bird Sanctuary" },
      { id: 162, name: "Kalindi Kunj" },
      { id: 163, name: "Jasola Vihar Shaheen Bagh" },
      { id: 164, name: "Okhla Vihar" },
      { id: 165, name: "Jamia Millia Islamia" },
      { id: 166, name: "Sukhdev Vihar" },
      { id: 167, name: "Okhla NSIC" },
      { id: 168, name: "Phase-I (Rapid Metro)" },
      { id: 169, name: "Sector 42-43 (Rapid Metro)" },
      { id: 170, name: "Sector 53-54 (Rapid Metro)" },
      { id: 171, name: "Sector 54 Chowk (Rapid Metro)" },
      { id: 172, name: "Sector 55-56 (Rapid Metro)" },
      { id: 173, name: "Majlis Park" },
      { id: 174, name: "Shalimar Bagh" },
      { id: 175, name: "Shakurpur" },
      { id: 176, name: "Punjabi Bagh West" },
      { id: 177, name: "ESI Basai Darapur" },
      { id: 178, name: "Mayapuri" },
      { id: 179, name: "Naraina Vihar" },
      { id: 180, name: "Delhi Cantt." },
      { id: 181, name: "Durgabai Deshmukh South Campus" },
      { id: 182, name: "Nehru Enclave" },
      { id: 183, name: "Greater Kailash" },
      { id: 184, name: "Chirag Delhi" },
      { id: 185, name: "Panchsheel Park" },
      { id: 186, name: "IIT" },
      { id: 187, name: "RK Puram" },
      { id: 188, name: "Munirka" },
      { id: 189, name: "Vasant Vihar" },
      { id: 190, name: "Shankar Vihar" },
      { id: 191, name: "Terminal 1- IGI Airport" },
      { id: 192, name: "Sadar Bazar Contonment" },
      { id: 193, name: "Palam" },
      { id: 194, name: "Dashrath Puri" },
      { id: 195, name: "Dabri Mor - Janakpuri South" },
      { id: 196, name: "Mundka Industrial Area (M.I.A)" },
      { id: 197, name: "Ghevra Metro station" },
      { id: 198, name: "Tikri Kalan" },
      { id: 199, name: "Tikri Border" },
      { id: 200, name: "Pandit Shree Ram Sharma" },
      { id: 201, name: "Bahadurgarh City" },
      { id: 202, name: "Brigadier Hoshiyar Singh" },
      { id: 203, name: "Sir Vishweshwaraiah Moti Bagh" },
      { id: 204, name: "Bhikaji Cama Place" },
      { id: 205, name: "Sarojini Nagar" },
      { id: 206, name: "South Extension" },
      { id: 207, name: "Trilokpuri Sanjay Lake" },
      { id: 208, name: "East Vinod Nagar - Mayur Vihar-II" },
      { id: 209, name: "Mandawali - West Vinod Nagar" },
      { id: 210, name: "IP Extension" },
      { id: 211, name: "Karkarduma Court" },
      { id: 212, name: "Krishna Nagar" },
      { id: 213, name: "East Azad Nagar" },
      { id: 214, name: "Jafrabad" },
      { id: 215, name: "Maujpur - Babarpur" },
      { id: 216, name: "Gokulpuri" },
      { id: 217, name: "Johri Enclave" },
      { id: 218, name: "Shiv Vihar" },
      { id: 219, name: "Sant Surdas (Sihi)" },
      { id: 220, name: "Raja Nahar Singh" },
      { id: 221, name: "Vinobapuri" },
      { id: 222, name: "Ashram" },
      { id: 223, name: "Sarai Kale Khan - Nizamuddin" },
      { id: 224, name: "Mayur Vihar Pocket 1" },
      { id: 225, name: "Shaheed Sthal (New Bus Adda)" },
      { id: 226, name: "Hindon River" },
      { id: 227, name: "Arthala" },
      { id: 228, name: "Mohan Nagar" },
      { id: 229, name: "Shyam Park" },
      { id: 230, name: "Major Mohit Sharma Rajender Nagar" },
      { id: 231, name: "Raj Bagh" },
      { id: 232, name: "Shaheed Nagar" },
      { id: 233, name: "Noida Sec-34" },
      { id: 234, name: "Noida Sec-52" },
      { id: 235, name: "Noida Sec-61" },
      { id: 236, name: "Noida Sec-59" },
      { id: 237, name: "Noida Sec-62" },
      { id: 238, name: "Noida Electronic City" },
      { id: 239, name: "Nangli" },
      { id: 240, name: "Najafgarh" },
      { id: 241, name: "Dhansa Bus Stand" },
      { id: 500, name: "Noida Sector 51" },
      { id: 501, name: "Noida Sector 50" },
      { id: 502, name: "Noida Sector 76" },
      { id: 503, name: "Noida Sector 101" },
      { id: 504, name: "Noida Sector 81" },
      { id: 505, name: "NSEZ" },
      { id: 506, name: "Noida Sector 83" },
      { id: 507, name: "Noida Sector 137" },
      { id: 508, name: "Noida Sector 142" },
      { id: 509, name: "Noida Sector 143" },
      { id: 510, name: "Noida Sector 144" },
      { id: 511, name: "Noida Sector 145" },
      { id: 512, name: "Noida Sector 146" },
      { id: 513, name: "Noida Sector 147" },
      { id: 514, name: "Noida Sector 148" },
      { id: 515, name: "Knowledge Park" },
      { id: 516, name: "Pari Chowk" },
      { id: 517, name: "Alpha 1" },
      { id: 518, name: "Delta 1" },
      { id: 519, name: "GNIDA Office" },
      { id: 520, name: "Depot Station" } 
];


  return (
    <div className="analysis-page">
      <div className="algorithm-buttons">
        <button onClick={() => handleAlgorithmChange('Algorithm 1')}>Dijkstra (Distance)</button>
        <button onClick={() => handleAlgorithmChange('Algorithm 2')}>Dijkstra (Time)</button>
        <button onClick={() => handleAlgorithmChange('Algorithm 3')}>BFS</button>
        <button onClick={() => handleAlgorithmChange('Algorithm 4')}>DFS</button>
      </div>

      <div className="algorithm-section">
        <h2>{algorithm}</h2>
        <div className="station-select">
          <div className="station-input">
            <label>Starting Station</label>
            <select value={startingStation} onChange={(e) => setStartingStation(e.target.value)}>
              <option value="">Select station</option>
              {stationData.map((station) => (
                <option key={station.id} value={station.id}>
                  {station.id} - {station.name}
                </option>
              ))}
            </select>
          </div>

          <div className="station-input">
            <label>Destination Station</label>
            <select value={destinationStation} onChange={(e) => setDestinationStation(e.target.value)}>
              <option value="">Select station</option>
              {stationData.map((station) => (
                <option key={station.id} value={station.id}>
                  {station.id} - {station.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="submit-container">
          <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

      <div className="output-section">
        {loading ? (
          <p>Loading...</p>
        ) : (
          (error ? <p className="error-message">{error}</p> : <p>{result}</p>)
        )}
      </div>
    </div>
  );
};

export default AnalysisPage;
