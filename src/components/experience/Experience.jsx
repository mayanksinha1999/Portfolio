import React from 'react';
import './Experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Reactjs</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Material UI</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>PHP</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>SQL</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Reactjs</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill/>
              <h4>Material UI</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience