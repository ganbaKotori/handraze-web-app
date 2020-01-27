import React from "react";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">one hand can do so much</h1>
          <p className="lead"></p>
          <div className="buttons">
            <a href="register.html" className="btn btn-primary">
              About
            </a>
            <a href="login.html" className="btn btn-danger">
              Get Started
            </a>
            <a href="login.html" className="btn btn-dark">
              User's Guide
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
