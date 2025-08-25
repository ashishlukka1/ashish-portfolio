import React from "react";
import "./Draft.css";

function Draft() {
  // Reusable image with caption
  const ImageWithCaption = ({ src, alt }) => (
    <figure className="draft-image-wrapper">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <figcaption>{alt}</figcaption>
    </figure>
  );

  // Sidebar info
  const sidebarData = [
    { title: "Project", text: "Draft – Blog App" },
    {
      title: "Tech Stack Used",
      text: "React.js, Node.js, Express.js, MongoDB, Clerk Auth",
    },
    { title: "Duration", text: "2 weeks" },
    { title: "Role-based Access", text: "Admin, Author, Reader" },
    { title: "Demo", link: "https://draft-blogapp.vercel.app" },
    { title: "GitHub", link: "https://github.com/ashishlukka1/draft-blogapp" },
  ];

  // Feature images
  const featureImages = [
    {
      src: "https://u.cubeupload.com/ashishl/a36landingpage.png",
      alt: "Landing Page",
    },
    {
      src: "https://u.cubeupload.com/ashishl/72dlogin.png",
      alt: "Login Page",
    },
    {
      src: "https://u.cubeupload.com/ashishl/1d3signup.png",
      alt: "Sign Up Page",
    },
    {
      src: "https://u.cubeupload.com/ashishl/selectrole.png",
      alt: "Sign Up Role Selection",
    },
  ];

  const userImages = [
    {
      src: "https://u.cubeupload.com/ashishl/681userdash.png",
      alt: "User Dashboard (Display of all articles with search and filter)",
    },
    {
      src: "https://u.cubeupload.com/ashishl/bloguser.png",
      alt: "View Article and comment on articles",
    },
  ];

  const adminImages = [
    {
      src: "https://u.cubeupload.com/ashishl/admindash.png",
      alt: "Admin Dashboard (Option to block the users)",
    },
    {
      src: "https://u.cubeupload.com/ashishl/blockedbyadmin.png",
      alt: "User Message when blocked by admin",
    },
  ];

  const authorImages = [
    {
      src: "https://u.cubeupload.com/ashishl/authordash.png",
      alt: "Author Dashboard (All user features with Add Article feature)",
    },
    {
      src: "https://u.cubeupload.com/ashishl/editarticleauthor.png",
      alt: "Add Article",
    },
    {
      src: "https://u.cubeupload.com/ashishl/editarticle.png",
      alt: "Edit Option on published articles by the author",
    },
    {
      src: "https://u.cubeupload.com/ashishl/editarticleform.png",
      alt: "Edit published articles",
    },
  ];

  return (
    <div className="draft-page">
      {/* Banner */}
      <div className="draft-banner">
        <img
          src="https://u.cubeupload.com/ashishl/banner33.png"
          alt="Draft Blog App Banner"
          className="banner-img2"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="draft-content container">
        {/* Sidebar */}
        <div className="draft-sidebar">
          {sidebarData.map((item, idx) => (
            <React.Fragment key={idx}>
              <h4>{item.title}</h4>
              {item.link ? (
                <p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </p>
              ) : (
                <p>{item.text}</p>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Main Section */}
        <div className="draft-main">
          <h1>Draft.</h1>
          <p className="intro">
            Draft is a modern{" "}
            <span className="bold-text">full-stack blog application</span> where
            users can create, read, and interact with blog posts. It features{" "}
            <span className="bold-text">role-based access</span> for Admins,
            Authors, and Readers.
          </p>

          <p className="highlight">
            Built with the <span className="bold-text">MERN stack</span> and
            integrated with{" "}
            <span className="bold-text">Clerk Authentication</span> for secure
            login and signup.
          </p>

          <div className="bold-text dal-projects">Key Features:</div>
          <ul className="short-content">
            <li>Role Based access using Clerk Authentication</li>
            <li>Create, edit, and delete blog posts (Authors).</li>
            <li>Comment on posts and engage with the community.</li>
            <li>Admin panel for managing users.</li>
          </ul>
          <p className="features-intro mb-5">
            Below are some highlights and screenshots from Draft.
          </p>
        </div>
      </div>

      {/* Feature Images */}
      <div className="draft-feature-images">
        {featureImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* User Journey */}
      <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
        Here’s a look at the <span className="bold-text">User</span> journey — 
        from signing in to browsing blog posts, reading articles, and engaging
        with the community.
      </div>
      <div className="dal-feature-images">
        {userImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* Author Journey */}
      <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
        Here’s a look at the <span className="bold-text">Author</span> journey — 
        from logging in to creating, editing, and managing blog posts.
      </div>
      <div className="dal-feature-images">
        {authorImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* Admin Journey */}
      <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
        Here’s a look at the <span className="bold-text">Admin</span> journey — 
        from accessing the dashboard to managing users, and ensuring the smooth
        operation of the platform.
      </div>
      <div className="dal-feature-images">
        {adminImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default Draft;
