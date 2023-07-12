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
      I am currently a computer science student keen on learning and this is my portfolio website.
      
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
