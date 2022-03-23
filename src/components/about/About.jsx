import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <h5>Know Me</h5>
      <h1>About me</h1>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <div className="about__title">
                <AiOutlineStar className="about__icon" />
                <h5>Institute for Information Industry</h5>
                <h4>Intern</h4>
                <small>Jul 2019 - Jan 2020 · 7 mosJul</small>
                <hr class="solid"></hr>
              </div>
              <div className="about__paragraph">
                <p>
                  * Building a face recognition system and apply it in the
                  situation of entering and exiting,
                </p>
                <p>
                  * Building a face recognition system and apply it in the
                  situation of entering and exiting,
                </p>
                <p>
                  * After internship, we cooperated remotely for a period of
                  time to complete the construction of the rest of the system*
                  After internship, we cooperated remotely for a period of time
                  to complete the construction of the rest of the system
                </p>
              </div>
            </div>
            <div className="about__card">
              <div className="about__title">
                <AiOutlineStar className="about__icon" />
                <h5>Microsoft Vendor</h5>
                <h4>Intern</h4>
                <small>Sep 2020 - Jul 2021 · 11 mos</small>
                <hr class="solid"></hr>
              </div>
              <div className="about__paragraph">
                <p>* Python web crawler to collect Data from college</p>
                <p>* Using NumPy、Pandas etc...library for data processing</p>
                <p>* Writing document</p>
              </div>
            </div>

            <div className="about__card">
              <div className="about__title">
                <AiOutlineStar className="about__icon" />
                <h5>TSMC</h5>
                <h4>Intern</h4>
                <small>Jul 2021 - Sep 2021 · 3 mos</small>
                <hr class="solid"></hr>
              </div>
              <div className="about__paragraph">
                <p>* Software Engineer</p>
                <p>
                  * Build Tensorflow Model (Python),Which is used to detect
                  defect on wafer and decide which lane it should go.
                </p>
                <p>
                  * Helping department to build Infra setting like MySQL、Redis
                  with Docker on Linux VM
                </p>
                <p>
                  * Building Flask Application to help department record problem
                </p>
                <p>
                  * Get return offer but I want to seek for other opportunity
                </p>
              </div>
            </div>

            <div className="about__card">
              <div className="about__title">
                <AiOutlineStar className="about__icon" />
                <h5>Telecom technology center</h5>
                <h4>Intern</h4>
                <small>Jan 2022 - Feb 2022 · 2 mos</small>
                <hr class="solid"></hr>
              </div>
              <div className="about__paragraph">
                <p>* Software Engineer</p>
                <p>* Helping building React,Express based web</p>
                <p>
                  * monitor data sent from the base station to the simulated
                  user device
                </p>
                <p>* building K8S cluster, deployed on Local machine, GCP</p>
              </div>
            </div>
          </div>
          <div className="contact__me">
            <a href="#contact" className="contact__btn btn btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
