import React from "react";
import "./experience.scss";
import { AiFillCheckCircle } from "react-icons/ai";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I have</h5>
      <h2>My SKILL</h2>
      <div className="my__skill">
        <div className="Skill">
          <AiFillCheckCircle color="#4D4C60" />
          <h4>Python：(NumPy、Pandas、TensorFlow、OpenCV、Flask)</h4>
        </div>
        <div className="Skill">
          <AiFillCheckCircle color="#4D4C60" />
          <h4>JavaScript:(Express)、TypeScript、React、ReactNative</h4>
          <h4>HMTL、CSS：(Bootstrap、Tailwind)</h4>
        </div>
        <div className="Skill">
          <AiFillCheckCircle color="#4D4C60" />
          <h4>Docker、K8S、RESTful APIs、Postman</h4>
          <h4>SQL：(MySQL、PostgreSQL、MongoDb) </h4>
        </div>

        <div className="Skill">
          <AiFillCheckCircle color="#4D4C60" />
          <h4>OS：Linux(Ubuntu、CentOS)、Windows Git：GitHub</h4>
        </div>
      </div>
    </section>
  );
};

export default Experience;
