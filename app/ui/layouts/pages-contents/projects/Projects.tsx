import React from "react";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return (
    <div className="projects-section section" id="portfolio">
      <div className="projects_container container">
        <div className="projects_content content">
          <div className="section_title projects_section_title">Projects</div>
          <div className="sub_title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque
            quod ut, harum quasi exercitationem.
          </div>

          <div className="projects">
            <div className="projects_chields">
              <div className="chield_project">
                <div className="project_pic">
                  <img
                    src="../../../../../images/project1.png"
                    alt="project_pic"
                  />
                </div>
                <div className="project_desc">
                  <div className="sub-title">landing page</div>
                  <div className="title">Medical Service</div>
                  <div className="desc">
                    the most powerful software & app landing page or any of app
                    and software marketing business
                  </div>
                  <a href="#" className="view_call-action">
                    <div className="label">view case study</div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faRightLong} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="chield2 chield_project">
                <div className="project_pic">
                  <img
                    src="../../../../../images/project2.png"
                    alt="project_pic"
                  />
                </div>
                <div className="project_desc">
                  <div className="sub-title">landing page</div>
                  <div className="title">digital banking</div>
                  <div className="desc">
                    the most powerful software & app landing page or any of app
                    and software marketing business
                  </div>
                  <a href="#" className="view_call-action">
                    <div className="label">view case study</div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faRightLong} />
                    </div>
                  </a>
                </div>
              </div>
              <div className="chield_project">
                <div className="project_pic">
                  <img
                    src="../../../../../images/project3.png"
                    alt="project_pic"
                  />
                </div>
                <div className="project_desc">
                  <div className="sub-title">landing page</div>
                  <div className="title">brand.io Website</div>
                  <div className="desc">
                    the most powerful software & app landing page or any of app
                    and software marketing business
                  </div>
                  <a href="#" className="view_call-action">
                    <div className="label">view case study</div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faRightLong} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
