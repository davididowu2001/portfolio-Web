import React from 'react';
import ProjectCard from './Projectcard';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects">
      <br></br>
     
      <h2>Projects</h2>
      <div className="project-cards">
        <ProjectCard
          title="Productivity Management System"
          description="Developed a full-stack Productivity Management web application that included an online chat system for the company and a data analysis tool to display workers' productivity."
          technologies="Express.js, JavaScript, HTML, CSS, Restful API, PHP, React, Next.js"
        />
        <ProjectCard
          title="Healthcare Chatbot"
          description="Built a basic healthcare chatbot for an A-level project, utilizing libraries such as NLTK for natural language processing and TensorFlow for machine learning."
          technologies="Python, NLTK, TensorFlow, NumPy"
        />
        <ProjectCard
          title="Weather Prediction Artificial Neural Network"
          description="Implemented a Multi-Layer Perceptron neural network in Python for target value prediction based on input features. Incorporated features such as Annealing, Weight decay, and Momentum."
          technologies="Python, NumPy, Machine Learning, ANN"
        />
        <ProjectCard
          title="Fitness App"
          description="Developed a gym app using Java and Android Studio, featuring functionalities such as searching for nearby gyms, step count, gym routines, and exercise recommendations."
          technologies="Java, Firebase, Android Studio, Google Fitness and Map API, SQL"
        />
        <ProjectCard
          title="Arduino Project"
          description="The overall goal of this project is managing and displaying channel information on an LCD shield. 
          It provides functionalities for creating and updating channel attributes, navigating between channels, and validating commands received through serial communication. 
          The program also includes features like averaging values and managing stored values for each channel"
          technologies="C/C++"
        />
         <ProjectCard
         title= 'Library Management System'
         technologies= 'Python, Tkinter, Matplotlib libraries'
         description=
           'Created a library Management System using Tkinter for the GUI and matplotlib for graphical representation for book recommendation.'
        />
         <ProjectCard
         title='Wedding Venue Booking System'
         technologies='JavaScript, HTML, PHP, CSS'
         description=
           'This project improved my skills in front end development and showed me that I preferred backend development.'
       
        />
         <ProjectCard
          title='Computer Accessories Shop'
          technologies= 'Java, Swing library'
          description=
            'Developed a Computer Accessories Shop software using Java as a programming language and Swing as the GUI.'
        
        />
        

      </div>
    </div>
  );
};

export default Projects;
