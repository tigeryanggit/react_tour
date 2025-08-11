import React from 'react'
import Title from "./Title";

function Servicespart( {className,title}) {
  return (

            
        <>

            <div className="service-title">
                <i className={className}></i>
                <h3>{title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, laboriosam?</p>
            </div>


        </>

  );
}

export default Servicespart


// "fa-solid fa-wallet"
// "fa-solid fa-tree"
// "fa-solid fa-socks"