function Projects() {
  const projects = [
    {
      title: "Movie Review Summarizer",
      tech: "React.js • Node.js • Python • Gemma • LLaMA • MongoDB",
      description:
        "AI-powered movie review summarizer that analyzes positive and negative reviews using Gemma and LLaMA models to generate intelligent summarized insights.",
      link: "https://satheesh02041.github.io/movie_review_summarizer/",
    },

    {
      title: "E-Commerce Website",
      tech: "MERN Stack • JWT • MongoDB • Express.js",
      description:
        "Full-stack Amazon-inspired e-commerce platform with authentication, product management, shopping cart, and admin functionalities.",
      link: "https://github.com/Satheesh02041/E-commerce",
    },

    {
      title: "Library Management System",
      tech: "React.js • Node.js • MongoDB • Express.js",
      description:
        "Web-based library management application for managing books, users, issue tracking, and digital library operations efficiently.",
      link: "https://github.com/Satheesh02041/E-book-library-application",
    },

    {
      title: "Learning Management System",
      tech: "MERN Stack • REST API • Authentication",
      description:
        "Complete LMS platform for course management, learning resources, and student interactions with responsive UI and backend integration.",
      link: "https://github.com/priyan03/LMS-PRO1",
    },

    {
      title: "College Admission Management",
      tech: "Oracle APEX • SQL • PL/SQL",
      description:
        "ERP-based admission management system developed using Oracle APEX for handling student admissions and academic workflows.",
      link: "https://github.com/Satheesh02041/College-Admission-Management-System",
    },

    {
      title: "Ocean Gardens",
      tech: "HTML • CSS • JavaScript",
      description:
        "Interactive website focused on ocean ecosystems and marine phytoplankton awareness with videos and ocean conservation donation support.",
      link: "https://github.com/Satheesh02041/Ocean_Garden",
    },

    {
      title: "To-Do Work List",
      tech: "MERN Stack • CRUD Operations",
      description:
        "Task management application allowing users to add, edit, update, and delete daily tasks with efficient CRUD functionality.",
      link: "https://github.com/Satheesh02041/To-Do",
    },

    {
      title: "VirtuCard AR Business Card",
      tech: "Unity 6 • Vuforia • AR",
      description:
        "Augmented Reality business card application that dynamically displays digital content including text, videos, URLs, and 3D models.",
      link: "https://github.com/Satheesh02041/MyWebAR",
    },
  ];

  return (
    <section id="projects" className="projects-section">

      <h2 className="projects-title">
        My Projects
      </h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            key={index}
          >

            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="tech-stack">
                {project.tech}
              </p>

              <p className="project-description">
                {project.description}
              </p>

            </div>

          </a>
        ))}

      </div>
    </section>
  );
}

export default Projects;
