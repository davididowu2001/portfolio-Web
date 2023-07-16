import React from 'react';
import Buttons from './Buttons';
import selfie from './assets/selfie.jpg';
import './home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="container">
        <h1>Hi! I'm David</h1>
        <p>
        I am a passionate and driven computer science student with a strong desire to expand my knowledge and skills in the field. This portfolio website serves as a showcase of my projects, experiences, and abilities. Through my journey in computer science, I have delved into various technologies and languages, honing my problem-solving and development skills. With a curiosity for innovation and a dedication to continuous learning, I strive to make a positive impact through my work. Welcome to my portfolio, where you can explore my projects and get to know more about my journey in the world of technology.
      
      </p>
        <div>
        <Buttons />
        </div>
        <br></br>
        <div className="profile-pic">
          <img src={selfie} alt="me" />
        </div>
      </div>
    </section>
  );
}

export default Home;
