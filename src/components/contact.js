import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2 className="contact-title">
        Let's Connect
      </h2>

      <div className="contact-container">

        {/* Contact Note */}

        <div className="contact-note">

          <h3>
            Get In Touch
          </h3>

          <p>
            I’m always open to discussing new projects,
            full stack development opportunities, AI-based
            solutions, collaborations, and innovative ideas.
          </p>

          <p>
            Feel free to connect with me through LinkedIn,
            Gmail, or directly through phone.
          </p>

        </div>

        {/* Contact Info */}

        <div className="contact-info">

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/satheeshkumar-l/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <FaLinkedin className="contact-icon linkedin-icon" />

            <div>
              <h3>LinkedIn</h3>

              <p>
                linkedin.com/in/satheeshkumar-l
              </p>
            </div>

          </a>

          {/* Gmail */}

          <a
            href="mailto:satheesh02041@gmail.com"
            className="contact-card"
          >

            <FaEnvelope className="contact-icon gmail-icon" />

            <div>
              <h3>Gmail</h3>

              <p>
                satheesh02041@gmail.com
              </p>
            </div>

          </a>

          {/* Phone */}

          <a
            href="tel:+916374108163"
            className="contact-card"
          >

            <FaPhoneAlt className="contact-icon phone-icon" />

            <div>
              <h3>Phone</h3>

              <p>
                +91-6374108163
              </p>
            </div>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;