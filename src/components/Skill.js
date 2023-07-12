import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import './skill.css';
import in2scienceLogo from './assets/in2science.png';
import pwcLogo from './assets/pwc.png';
import rocheLogo from './assets/Screenshot 2023-07-12 024046.png';

const Skill = () => {
  const jobs = [
    {
      logo: rocheLogo,
      title: 'Data Science Placement',
      company: 'Roche',
      date: 'June 2023 - Present',
      description: 'Intern in the TechX team. Worked on projects using R, R-shiny, and SAS to process client data. Collaborated with statisticians and data delivery scientists to automate their work. Developed libraries and packages used in data collection and processing.',
    },
    {
      logo: pwcLogo,
      title: 'Digital Insight Programme',
      company: 'PwC',
      date: 'July 2020',
      description: 'Learnt the core values of PwC. Gained experience in learning how encoding and decoding works in Cybersecurity. Learnt how AI is being used in an office system and the possible opportunities in the future.',
    },
    {
      logo: in2scienceLogo,
      title: 'Summer Internship',
      company: 'In2Science UK',
      date: 'August 2020',
      description: 'In2science is a charity organization that aims to increase diversity in STEM. Learnt about Machine Learning in AI, which inspired me to make a chatbot for my A levels Computer Science project. Learnt about AI being used in the Health Sector to detect Cancer. Python programming.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % jobs.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + jobs.length) % jobs.length);
  };

  const currentJob = jobs[currentIndex];

  return (
    <div id="skill">
      <h2>Experience</h2>
      <div className="slideshow-container">
        <div className="slideshow">
          <div className="job">
            <div className="company-logo">
              <img src={currentJob.logo} alt={currentJob.company} />
            </div>
            <h3>{currentJob.title}</h3>
            <h4>{currentJob.company}</h4>
            <p>{currentJob.date}</p>
            <ul>
              <li>{currentJob.description}</li>
            </ul>
          </div>
        </div>
        <button className="prev" onClick={goToPrevSlide}>&#10094;</button>
        <button className="next" onClick={goToNextSlide}>&#10095;</button>
        <div className="dots-container">
          {jobs.map((_, index) => (
            <FaCircle
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
