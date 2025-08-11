import React from 'react';
import { socialLinks } from '../data';
import SocialLink from "./SocialLink";

function SocialLinks({groupName}) {
  return (

                <ul className={groupName}>

                   {socialLinks.map((link) => (
                      <SocialLink key={link.id} {...link} />                 
                   
                  ))
                }
                </ul>


  );
}

export default SocialLinks


                    // <li className="icon-item"><a href="http://facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                    // <li className="icon-item"><a href="http://www.twitter.com"><i className="fa-brands fa-twitter"></i></a></li>
                    // <li className="icon-item"><a href="http://www.threads.com"><i className="fa-brands fa-threads"></i></a></li>

