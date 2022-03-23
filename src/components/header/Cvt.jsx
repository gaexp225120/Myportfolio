import React from "react";
import CV from "../../assets/CV.pdf";
const Cvt = () => {
  return (
    <div className="cvt">
      <a href={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default Cvt;
