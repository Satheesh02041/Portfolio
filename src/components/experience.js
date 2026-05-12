import { FaBriefcase } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";

function Experience() {
  return (
    <section id="experience" className="experience-section">

      <h2 className="experience-title">
        Internship & Achievements
      </h2>

      <div className="experience-container">

        {/* Internship 1 */}

        <div className="experience-card">

          <FaBriefcase className="experience-icon" />

          <h3>8Queens Software Technologies</h3>

          <h4>Mobile Application Development Intern</h4>

          <p>
            Worked on mobile application development concepts,
            UI integration, debugging, and application workflow
            implementation while collaborating with the development team.
          </p>

          <a href="https://www.linkedin.com/posts/satheeshkumar-l_fullstackdevelopment-databasemanagement-userinterfacedesign-activity-7297678352956502016-LOOY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrfVLABY0GeDKLaFbGY4OsF3WbjbNmCuBM" target="_blank" rel="noopener noreferrer" className="btn">
            View LinkedIn Post
          </a>
        </div>

        {/* Internship 2 */}

        <div className="experience-card">

          <FaBriefcase className="experience-icon" />

          <h3>Wahmi Softwares</h3>

          <h4>Web Development Intern</h4>

          <p>
            Developed responsive web interfaces and participated
            in frontend and backend integration using modern
            web technologies and REST API communication.
          </p>

          <a href="https://www.linkedin.com/posts/satheeshkumar-l_webdevelopment-wordpress-lowcode-activity-7297672194740916224-dWen?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrfVLABY0GeDKLaFbGY4OsF3WbjbNmCuBM" target="_blank" rel="noopener noreferrer" className="btn">
            View LinkedIn Post
          </a>

        </div>

        {/* Achievement */}

        <div className="achievement-card">

          <div className="trophy-container">
            <GiTrophyCup className="trophy-icon" />
          </div>

          <h3>Best Project Award</h3>

          <h4>Oracle APEX Project</h4>

          <p>
            Received the Best Project Award for developing an
            innovative Oracle APEX-based College Admission
            Management System with efficient ERP workflow integration.
          </p>

          <a href="https://drive.google.com/file/d/1pGjyp8E7Hj-0SYPGnvVzY8AGajMte4qR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
            View Certificate
          </a>

        </div>

      </div>
    </section>
  );
}

export default Experience;