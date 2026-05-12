import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

function About() {
  return (
    <section id="about" className="about-section">

      {/* Floating Tech Icons */}
      <div className="floating-icons">
        <FaReact className="icon react" />
        <FaNodeJs className="icon node" />
        <SiMongodb className="icon mongo" />
        <SiExpress className="icon express" />
        <FaDatabase className="icon db" />
        <FaPython className="icon python" />
        <SiJavascript className="icon js" />
      </div>

      <div className="about-container">

        <h2 className="about-title">
          About Me
        </h2>

        <div className="about-card">

          <p>
            Full Stack Developer specializing in the MERN stack
            with a strong passion for building scalable and modern
            web applications.
          </p>

          <p>
            Experienced in developing end-to-end applications
            including E-Commerce platforms, Library Management
            Systems, and Learning Management Systems (LMS).
          </p>

          <p>
            Skilled in creating responsive user interfaces and
            robust backend architectures using MongoDB,
            Express.js, React.js, and Node.js.
          </p>

          <p>
            Passionate about integrating Artificial Intelligence
            into full-stack applications to create smarter and
            more efficient solutions.
          </p>

          <p>
            Developed an AI-powered Movie Review Summarizer
            using advanced LLMs including Gemma and LLaMA models.
          </p>

          <p>
            Experienced in combining AI capabilities with web
            technologies to enhance user experience and automation.
          </p>

          <p>
            Strong understanding of REST APIs, authentication
            systems, database management, and modern UI/UX principles.
          </p>

          <p>
            Dedicated to writing clean, maintainable, and efficient
            code while continuously learning emerging technologies.
          </p>

          <p>
            Enthusiastic about solving real-world problems through
            innovative software solutions and intelligent systems.
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;