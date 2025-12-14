// App.js
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">Portfolio</div>
        <div className="nav-links">
          <a className="nav-item" href="#about">About</a>
          <a className="nav-item" href="#skill">Skill</a>
          <a className="nav-item" href="#project">Project</a>
          <a className="nav-item" href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <h1 className="heading">
          Hey, I’m <span className="name">PRARTHANA</span>
        </h1>
        <h2 className="subheading">
          I’m a <span className="bold">student</span>
        </h2>
        <p className="description">
          I'm a passionate Software Engineering undergraduate with a strong interest in UI/UX design and web development. I enjoy turning creative ideas into interactive digital experiences. Currently building my skills to match real-world industry standards, I’m eager to grow, learn, and contribute to impactful tech projects.
        </p>
        <button className="cta">Get in touch</button>
      </section>
    </div>
  );
};

export default App;

