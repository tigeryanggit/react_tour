import React from 'react'

function Tours() {
  return (
    <article className="tours" id="tours">

            <h2>features <span className="text-secondary">tours</span></h2>

            <div className="cards">

                {/* <!-- card X 4 --> */}
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/Tours_1.png" alt=""/>
                        <p>1 Aug 2025</p>
                    </div>

                    <div className="card-content">
                        <h3>adventure</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <ul>
                            <li><i className="fa-solid fa-map"></i>china</li>
                            <li>6 Days</li>
                            <li>From $2100</li>
                        </ul>
                        
                    </div>                    
                </div>
                {/* <!-- card X 4 --> */}
                {/* <!-- card X 4 --> */}
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/Tours_2.png" alt=""/>
                        <p>2 Aug 2025</p>
                    </div>
                    <div className="card-content">
                        <h3>adventure</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <ul>
                            <li><i className="fa-solid fa-map"></i>china</li>
                            <li>8 Days</li>
                            <li>From $2300</li>
                        </ul>
                        
                    </div>                    
                </div>
                {/* <!-- card X 4 --> */}
                {/* <!-- card X 4 --> */}
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/Tours_3.png" alt=""/>
                        <p>3 Aug 2025</p>
                    </div>
                    <div className="card-content">
                        <h3>adventure</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <ul>
                            <li><i className="fa-solid fa-map"></i>china</li>
                            <li>10 Days</li>
                            <li>From $4000</li>
                        </ul>
                        
                    </div>                    
                </div>
                {/* <!-- card X 4 --> */}
  
            </div>

    </article>
  );
}

export default Tours