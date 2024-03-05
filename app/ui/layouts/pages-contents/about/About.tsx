import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./about.css";
import React from "react";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about-section section">
      <div className="about_container container">
        <div className="about_content content">
          <div className="picture">
            <img src="../../../../../images/about_pic.png" alt="about_pic" />
          </div>
          <div className="about_description">
            <div className="about_desc_content">
              <div className="section_title">About Me</div>
              <div className="desc_content">
                <div className="text text1">
                  Hello, I'm Robert, a dedicated UI/UX designer with a passion
                  for creating digital experiences that not only lock beautiful
                  but also function seamlesssly.
                </div>
                <div className="text text2">
                  my journey in the world of disign stared 2018 Since, I've been
                  on an existing quest to craft inovative and user-centered
                  solutions that make a difference.
                </div>

                <div className="text text3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta voluptas voluptatem sit omnis odio cum veritatis minus
                  deleniti placeat quia.
                </div>
              </div>
              <div className="call-actions">
                <div className="btn">Hire Me</div>
                <div className="follow_call_action">
                  <div className="label">Follow Me</div>
                  <div className="links">
                    <a href="#" className="link">
                      <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                    </a>
                    <a href="#" className="link">
                      <FontAwesomeIcon className="icon" icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
