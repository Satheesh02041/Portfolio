import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">

        {/* React */}
        <div className="skill-card">
          <FaReact className="skill-icon react-icon" />

          <h3>React.js</h3>

          <p className="skill-strength">
            Skill Strength : 95%
          </p>

          <p>
            Developed responsive frontend interfaces for
            E-Commerce, LMS, Portfolio, and AI-integrated applications
            using reusable React components.
          </p>

          <div className="progress-bar">
            <span style={{ width: "95%" }}></span>
          </div>
        </div>

        {/* Node */}
        <div className="skill-card">
          <FaNodeJs className="skill-icon node-icon" />

          <h3>Node.js</h3>

          <p className="skill-strength">
            Skill Strength : 90%
          </p>

          <p>
            Built scalable backend APIs, authentication systems,
            and server-side logic for MERN stack applications
            and AI-based projects.
          </p>

          <div className="progress-bar">
            <span style={{ width: "90%" }}></span>
          </div>
        </div>

        {/* MongoDB */}
        <div className="skill-card">
          <SiMongodb className="skill-icon mongo-icon" />

          <h3>MongoDB</h3>

          <p className="skill-strength">
            Skill Strength : 88%
          </p>

          <p>
            Designed and managed databases for Library Management,
            E-Commerce, LMS, and Movie Review Summarizer projects.
          </p>

          <div className="progress-bar">
            <span style={{ width: "88%" }}></span>
          </div>
        </div>

        {/* Python */}
        <div className="skill-card">
          <FaPython className="skill-icon python-icon" />

          <h3>Python & AI</h3>

          <p className="skill-strength">
            Skill Strength : 85%
          </p>

          <p>
            Worked on AI-based Movie Review Summarizer using
            Gemma and LLaMA models for sentiment analysis
            and intelligent summarization.
          </p>

          <div className="progress-bar">
            <span style={{ width: "85%" }}></span>
          </div>
        </div>

        {/* Express */}
        <div className="skill-card">
          <SiExpress className="skill-icon express-icon" />

          <h3>Express.js</h3>

          <p className="skill-strength">
            Skill Strength : 87%
          </p>

          <p>
            Developed RESTful APIs, middleware integration,
            and backend services for full-stack web applications.
          </p>

          <div className="progress-bar">
            <span style={{ width: "87%" }}></span>
          </div>
        </div>

        {/* JavaScript */}
        <div className="skill-card">
          <SiJavascript className="skill-icon js-icon" />

          <h3>JavaScript</h3>

          <p className="skill-strength">
            Skill Strength : 92%
          </p>

          <p>
            Strong understanding of ES6+, DOM manipulation,
            asynchronous programming, and frontend logic development.
          </p>

          <div className="progress-bar">
            <span style={{ width: "92%" }}></span>
          </div>
        </div>

        {/* Tailwind */}
        <div className="skill-card">
          <SiTailwindcss className="skill-icon tailwind-icon" />

          <h3>Tailwind CSS</h3>

          <p className="skill-strength">
            Skill Strength : 89%
          </p>

          <p>
            Created modern responsive UI designs with
            animations, glassmorphism, and professional layouts.
          </p>

          <div className="progress-bar">
            <span style={{ width: "89%" }}></span>
          </div>
        </div>

        {/* Git */}
        <div className="skill-card">
          <FaGitAlt className="skill-icon git-icon" />

          <h3>Git & GitHub</h3>

          <p className="skill-strength">
            Skill Strength : 84%
          </p>

          <p>
            Experienced in version control, project collaboration,
            repository management, and deployment workflows.
          </p>

          <div className="progress-bar">
            <span style={{ width: "84%" }}></span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;