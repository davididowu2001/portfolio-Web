import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
const Experience = () => {


  return (
    <div id="experience">
      <h2>Skills</h2>
      
      <div className = "experience_container">
        <div className='experience_column'>
          <h3> Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>HTML </h4>
              <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>CSS </h4>
              <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4> JavaScript </h4>
              <small className='text-light'> Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>React </h4>
              <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4> Bootstrap </h4>
              <small className='text-light'> Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>HTML </h4>
              <small className='text-light'> Experienced</small>
            </article>
            </div>

          </div>
          <div className='experience_column'>
          <h3> Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>Python </h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>R </h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>JavaScript </h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>NextJs </h4>
              <small className='text-light'>Beginner</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>SQL </h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsPatchCheckFill/>
              <h4>Java </h4>
              <small className='text-light'>Intermediate</small>
            </article>

          </div>
          </div>
        </div>

      </div >

    
  );
}

export default Experience;
