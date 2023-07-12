import React from 'react';
import ProjectCard from './Projectcard';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects">
      <br></br>
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
      </div>
    </div>
  );
};

export default Projects;
