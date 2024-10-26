// import React from 'react';

// const About = () => {
//   return (
//     <div className="about-page">
//       <h1>About Us</h1>
//       <p>This page provides more information about the Delhi Metro project.</p>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvUrl = 'my-app/src/Mahakresume.pdf'; // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Mahak_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-container">
      <h2>About me</h2>
      <p>
        Hey, I'm Mahak, a second-year B.Tech student in Computer Science and AI at Indira Gandhi Delhi Technical University for Women. This Metro Network Graph project is a culmination of my passion for data structures and algorithms, specifically in applying graph theory to solve real-world problems. By using algorithms like Dijkstra, BFS, A*, and more, I've mapped out the Delhi Metro network, allowing users to explore efficient routes, calculate travel times, and visualize station connections across the city. My goal with this project is to bridge academic concepts with practical applications, making metro travel easier while showcasing the power of data and algorithms in optimizing everyday experiences. This project has been an incredible journey in learning how technology can drive smarter transit solutions and improve accessibility for everyone.
      </p>
      <button className="download-btn" onClick={handleDownloadCV}>Download CV</button>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="twitter-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="github-icon">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:your-email@example.com" className="mail-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  );
};

export default About;

