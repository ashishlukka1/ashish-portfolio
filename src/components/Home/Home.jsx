import React from "react";
import { Github, ExternalLink, Mail, ArrowRight } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="portfolio-container ">
      {/* Hero Section */}
      <div className="container">
        <div className="hero-section">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-7 mb-5 mt-5 mb-md-0">
              <h1 className="hero-title">Hello, I am Ashish Lukka</h1>
              <div className="status-badge">
                <span className="d-flex align-items-center">
                  <span className="status-dot"></span>
                  MERN STACK DEVELOPER | OPEN TO WORK
                </span>
              </div>
              <p className="lead text-light-grey hero-description">
                I'm a Full-Stack Developer skilled in MERN stack, building innovative web apps from AI tools to
                dynamic, scalable platforms. Passionate about crafting
                impactful, user-centric solutions.
              </p>
              <div className="hero-cta mt-4 mb-2">
                <a
                  href="https://drive.google.com/file/d/19DOrqBt6M33FIKEJ9PGICzueeEZM6oND/view?usp=sharing"
                  className="primary-btn me-2"
                  target="_blank"
                >
                  Resume
                  <ArrowRight size={20} className="ms-2" />
                </a>
                <a className="secondary-btn" onClick={() => {navigate('/work')}}>
                  View All Projects
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-md-5 d-flex justify-content-center justify-content-md-end">
              <div className="profile-image-container">
                <img
                  src="https://i.postimg.cc/YC4m4zKT/Chat-GPT-Image-Mar-30-2025-03-50-35-PM-removebg-preview-removebg-preview-2-1.png"
                  alt="Ashish Lukka"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Heading */}
      <div className="container mt-2">
        <h1 className="section-title ">Explore Featured Projects</h1>
      </div>

      {/* Project Cards */}
      <div className="container pb-4">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12">
            <div className="project-card">
              <div className="card-background bg-image1">
                <div className="container py-4 px-4">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-content">
                        <div>
                          <div className="tech-tags mb-5">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">Bootstrap</span>
                            <span className="tech-tag">Clerk</span>
                          </div>
                          <h3 className="project-title mb-4">LUMORA</h3>
                          <p className="project-description mb-4">
                            Lumora is a curated platform offering high-quality
                            tutorials and projects on HTML, CSS, JavaScript, and
                            the MERN stack. With Clerk authentication, it
                            ensures exclusive access for verified college
                            students, promoting structured, practical learning.
                          </p>
                          <div className="project-stats">
                            <div className="stat-item">
                              <span className="stat-label">
                                Number of Lectures
                              </span>
                              <span className="stat-value">65+</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">
                                Number of Users
                              </span>
                              <span className="stat-value">200+</span>
                            </div>
                          </div>
                        </div>
                        <div className="project-buttons">
                          <a
                            href="https://lumora-web.netlify.app/"
                            className="view-project"
                            target="_blank"
                          >
                            <span>View Project</span>
                            <ExternalLink size={16} />
                          </a>
                          <a
                            href="https://github.com/ashishlukka1/lumora"
                            className="github-repo"
                            target="_blank"
                          >
                            <Github size={16} />
                            <span>GitHub Repo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="project-image-container">
                        <img
                          src="https://i.postimg.cc/rsFdr90G/dbad510e-637f-4b91-a96d-c6f35425b7fc.png"
                          alt="Project 1"
                          className="project-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12">
            <div className="project-card">
              <div className="card-background bg-image2">
                <div className="container py-4 px-4">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-content">
                        <div>
                          <div className="tech-tags mb-5">
                            <span className="tech-tag">React.js</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">Clerk</span>
                          </div>
                          <h3 className="project-title mb-4">
                            Draft - Blog App
                          </h3>
                          <p className="project-description mb-4">
                            Draft is a full-featured blog application providing
                            an intuitive platform for writing, sharing, and
                            interacting with blog posts. With role-based
                            authentication (Admin, Author, Reader), it ensures a
                            personalized and engaging user experience through a
                            clean and responsive interface.
                          </p>
                          <div className="project-stats">
                            <div className="stat-item">
                              <span className="stat-label">
                                User Engagement
                              </span>
                              <span className="stat-value">+75%</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">
                                Blog Posts Created
                              </span>
                              <span className="stat-value">200+</span>
                            </div>
                          </div>
                        </div>
                        <div className="project-buttons">
                          <a
                            href="https://draft-blogapp.vercel.app/"
                            className="view-project"
                            target="_blank"
                          >
                            <span>View Project</span>
                            <ExternalLink size={16} />
                          </a>
                          <a
                            href="https://github.com/ashishlukka1/draft-blogapp"
                            className="github-repo"
                            target="_blank"
                          >
                            <Github size={16} />
                            <span>GitHub Repo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="project-image-container">
                        <img
                          src="https://i.postimg.cc/v8VNB1pK/cb9f3930-cb09-4d2b-9949-a96d9aa02776.png"
                          alt="Project 2"
                          className="project-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12">
            <div className="project-card">
              <div className="card-background bg-image3">
                <div className="container py-4 px-4">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="card-content">
                        <div>
                          <div className="tech-tags mb-5">
                            <span className="tech-tag">React.js</span>
                            <span className="tech-tag">Bootstrap</span>
                            <span className="tech-tag">MongoDB</span>
                            <span className="tech-tag">Clerk</span>
                            <span className="tech-tag">Express.js</span>
                          </div>
                          <h3 className="project-title mb-4">Seminar Hall Booking System</h3>
                          <p className="project-description mb-4">
                          Developed a Seminar Hall Booking System with role-based access control, streamlined bookings, and approval workflows using React and Node.js.  
                          Implemented a centralized dashboard for Directors and Transport Managers to manage, approve, and track bookings efficiently.
                          </p>
                          <div className="project-stats">
                            <div className="stat-item">
                              <span className="stat-label">
                                User engagement
                              </span>
                              <span className="stat-value">+65%</span>
                            </div>
                            <div className="stat-item">
                              <span className="stat-label">Booking Efficiency Improvement</span>
                              <span className="stat-value">+75%</span>
                            </div>
                          </div>
                        </div>
                        <div className="project-buttons">
                          <a href="https://stalwart-cat-1329d9.netlify.app/" className="view-project" target="_blank">
                            <span>View Project</span>
                            <ExternalLink size={16} />
                          </a>
                          <a href="https://github.com/Janjirala-Srikar/Seminar_Hall" className="github-repo" target="_blank">
                            <Github size={16} />
                            <span>GitHub Repo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="project-image-container">
                        <img
                          src="https://i.postimg.cc/TYJTSnJB/Screenshot-2025-03-31-145942-1.png"
                          alt="Project 2"
                          className="project-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-5">
          <a href="#" className="view-all-projects" onClick={()=>{navigate('/work')}}>
            <span>View All Projects</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
