import React from 'react'

function About() {
  return (
    <section className="about" id="about">
        <h2>about <span className="text-secondary"> us</span></h2>
        <div className="about-content">
            
            <div className="about-img">
                <img src="/src/assets/about.png" alt="about"/>
            </div>
        
            <div className="about-text">
                <h3>explore the differences</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda </p>
                <a href="#" className="btn-about">read more</a>
            </div>
        </div>
    </section>
  );
}

export default About