import React from 'react';


function SocialLink({href, itemName}) {
  return (

                    <li className="icon-item">
                      <a href={href}>
                        <i className={itemName}>
                          </i></a></li>

  );
}

export default SocialLink



                    // <li className="icon-item"><a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                    // <li className="icon-item"><a href="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                    // <li className="icon-item"><a href="http://www.threads.com"><i className="fa-brands fa-threads"></i></a></li>

                    