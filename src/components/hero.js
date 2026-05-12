import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hi, I'm Satheesh Kumar</h1>

      <h2>
        <ReactTyped
          strings={[
            "Full Stack Developer",
            "MERN Stack Developer",
            "AI Enthusiast",
            "React Developer"
          ]}
          typeSpeed={80}
          backSpeed={50}
          loop
        />
      </h2>

      <p>
        Building modern web apps and AI powered solutions.
      </p>

      <div className="hero-btns">
        <a href="https://drive.google.com/file/d/1kRm3Tp7gLwKNu4vFkGXUNg99DEIDiTZ8/view?usp=sharing" className="btn2">View Resume</a>
      </div>
    </section>
  );
}

export default Hero;