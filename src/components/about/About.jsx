import React from 'react';
import './About.css';
import ME from '../../assets/mayank.jpg';
import {BsAwardFill} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {AiFillFolderOpen} from 'react-icons/ai';



const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="My Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>2 Years Working Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>2 clients</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small>3</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti itaque praesentium, 
            accusamus voluptates excepturi, vitae nobis, nam voluptatibus illum ex dicta maxime maiores 
            quia totam? Deleniti iusto maxime sint.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About