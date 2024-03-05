import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons/faCopyright";
import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="contact-section section">
      <div className="contact_container container">
        <div className="contact_content content">
          <div className="title_block">
            <div className="section_title">let's work together</div>
            <div className="talk_btn btn">let's talk</div>
          </div>
          <div className="info_block">
            <div className="info_block_1">
              <div className="site_links">
                <a href="#home" className="link">
                  home
                </a>
                <a href="#about" className="link">
                  about
                </a>
                <a href="#projects" className="link">
                  projects
                </a>
                <a href="#experience" className="link">
                  experience
                </a>
                <a href="#contact" className="link">
                  contact
                </a>
              </div>
              <div className="contact_info">
                <div className="phone">phone: +255 057 477 588 9</div>
                <div className="slash">|</div>
                <a href="" className="mail">
                  email: augustinselete01@gmail.com
                </a>
              </div>
            </div>
            <hr />
            <div className="info_block_2">
              <div className="maker_name">Augustin Selete</div>
              <div className="copyright">
                CopyRight{"  "}
                <FontAwesomeIcon className="icon" icon={faCopyright} /> |{"  "}
                Robert. all rights reserve
              </div>
              <div className="follow_link">
                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                <FontAwesomeIcon className="icon" icon={faGithubSquare} />
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
