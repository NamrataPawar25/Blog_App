// src/pages/About.tsx
import React from "react";

const About = () => {
  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted">
          Welcome to <span className="fw-semibold text-primary">My Blog App</span> 🚀  
          — a place where ideas come to life, knowledge is shared, and creativity thrives.
        </p>
      </div>

      {/* Mission Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">✨ Our Mission</h2>
          <p className="text-muted">
            Our mission is to create a platform for curious minds to learn, share, and grow together.  
            From coding tutorials to thought-provoking blogs, we aim to empower both beginners 
            and experienced developers with valuable insights.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Mission"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "250px" }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-light p-5 rounded shadow mb-5">
        <h2 className="fw-bold mb-4 text-center">🌟 What You’ll Find Here</h2>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📘 In-depth blogs on coding & design</li>
              <li className="list-group-item">🛠 Step-by-step tutorials</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">💬 A platform to share your thoughts</li>
              <li className="list-group-item">🌍 A welcoming developer community</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Join Section */}
      <div className="text-center">
        <h2 className="fw-bold mb-3">🤝 Join the Journey</h2>
        <p className="text-muted">
          Thank you for visiting! 🙌 This blog isn’t just about posts — it’s about building 
          a community. Share your feedback, contribute your ideas, and let’s grow together!
        </p>
      </div>
    </div>
  );
};

export default About;
