import React from 'react';
import img from '../assets/about.png';
import Title from "./Title";

function About() {
  return (
    <section className="about" id="about">

        <Title title="about" subtitle="us" />
        {/* <h2>about <span className="text-secondary"> us</span></h2> */}
        <div className="about-content">
            
            <div className="about-img">
                <img src={img} alt="about"/>
            </div>
        
            <div className="about-text">
                <h3>explore the differences</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda </p>
                <a href="#home" className="btn-about">read more</a>
            </div>
        </div>
    </section>
  );
}

export default About