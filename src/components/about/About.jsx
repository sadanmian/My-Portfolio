import React from "react";
import "./about.css";
import Award from "../../img/award.png";

export const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://www.freecodecamp.org/news/content/images/2022/01/ferenc-almasi-L8KQIPCODV8-unsplash.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Crafting Immersive Web Experiences: A Front-End Developer's Journey in
          React and JavaScript.
        </p>
        <p className="a-desc">
          I am a seasoned front-end developer with a strong command of
          JavaScript and a specialized focus on React. With a UX-centered
          mindset, I tackle coding challenges innovatively, ensuring seamless
          cross-browser experiences. My expertise lies in crafting responsive
          designs, optimizing code, and fostering component reusability for
          impactful web applications.
        </p>
        <div className="a-award">
          <a
            href="https://www.udemy.com/certificate/UC-6645e96d-bb07-4156-b645-f9f28156c82c/"
            target="_blank"
          >
            <img
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-6645e96d-bb07-4156-b645-f9f28156c82c.jpg"
              alt=""
              className="a-award-img"
            />
          </a>
          <div className="a-award-texts">
            <h4 className="a-award-title">
              JavaScript Proficiency Acknowledged: Udemy Certificate of
              Completion
            </h4>
            <p className="a-award-desc">
              Enhancing my skills, I've earned a Certificate of Completion in
              JavaScript from Udemy. This comprehensive course has fortified my
              understanding of core concepts, enabling me to confidently apply
              JavaScript's power to create dynamic and interactive web
              solutions.
            </p>
          </div>
        </div>
        <div className="a-award">
          <a
            href="https://www.udemy.com/certificate/UC-b25d3264-31b9-4527-8c33-063199e513bc/"
            target="_blank"
          >
            <img
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-b25d3264-31b9-4527-8c33-063199e513bc.jpg"
              alt=""
              className="a-award-img"
            />
          </a>
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Full Stack Web Developer Certification: Empowering Comprehensive
              Web Solutions
            </h4>
            <p className="a-award-desc">
              Earned a Full Stack Web Developer certification from Udemy,
              showcasing my dedication to mastering front-end and back-end
              technologies. Proficient in designing dynamic user interfaces,
              optimizing databases, and implementing robust server-side
              functions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
