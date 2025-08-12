import React from 'react';
import Title from "./Title";
import Service from "./Service";
import { service } from '../data';


function Services() {
  return (
        <main className="services" id="services">
            
        <Title title="our" subtitle="services" />

        <div className="services-content">
        {/* not use components */}
                   {service.map((ser) => (
                      <div className="service-title" key={ser.id}>
                          <i className={ser.itemName}></i>
                          <h3>{ser.title}</h3>
                          <p>{ser.text}</p>
                      </div>
                   
                  ))
                }

        </div>
    </main>
  );
}

export default Services