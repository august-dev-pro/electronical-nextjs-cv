import React from "react";
import "./intro.css";
import Image from "next/image";
const Intro = () => {
  return (
    <div className="intro-section section">
      <div className="intro_container container">
        <div className="intro_content content">
          <div className="intro_profil-intro_desc">
            <div className="intro_desc">
              <div className="hello-text">
                Hello, I&apos;m Robert a Product Disigner
              </div>
              <div className="des_text">
                A Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolore odit blanditiis dolores
              </div>
              <div className="desc_call-actions">
                <div className="get_start_btn btn">get started</div>
              </div>
            </div>
            <div className="intro_profil">
              <Image
                src="/images/intro_profil.png"
                alt="intro_profil"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="chiffres">
            <div className="chield-chiffre">
              <div className="count">12</div>
              <div className="label">Years Of Experience</div>
            </div>
            <div className="chield-chiffre">
              <div className="count">100%</div>
              <div className="label">Client On Worldwide</div>
            </div>
            <div className="chield-chiffre">
              <div className="count">769</div>
              <div className="label">Project Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
