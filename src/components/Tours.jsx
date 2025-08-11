import React from 'react';
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
// import img from './assets/Tours_1.png';
// import img from './assets/Tours_2.png';
// import img from './assets/Tours_3.png';
// import img from './assets/Tours_4.png';

function Tours() {
  return (
    <article className="tours" id="tours">

            <Title title="featured" subtitle="tours" />

            <div className="cards">


                    {tours.map((tour) => (
                        
                    <Tour key={tour.id} {...tour}/>
                    // <Tour key={tour.id} image={tour.image}..../>

                        )
                    )}



            </div>                    


    </article>
  );
}

export default Tours