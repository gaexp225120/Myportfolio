import React from "react";
import "./education.scss";
import "animate.css";
import NTUST from "../../assets/NTUST.png";

const Education = () => {
  return (
    <div className="my__education animate__animated animate__jackInTheBox">
      <div className="my__school">
        <div>
          <div className="__degree">
            <div className="NTUST">
              <img src={NTUST} alt="NTUST" />
            </div>
            <h4>National Taiwan University of Science and Technology</h4>
          </div>
          <div className="level">
            <h3>Bachelor</h3>
          </div>
        </div>
      </div>
      <div className="my__school ">
        <div>
          <div className="__degree">
            <div className="NTUST">
              <img src={NTUST} alt="NTUST" />
            </div>
            <h4>National Taiwan University of Science and Technology</h4>
          </div>
          <div className="level">
            <h3>Master</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
