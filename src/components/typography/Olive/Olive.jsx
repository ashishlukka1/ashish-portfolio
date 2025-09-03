import React from "react";
import "./Olive.css";
import ProjectNav from "../ProjectNav/ProjectNav";

function Olive() {
  // Helper to render an image with lazy loading & caption
  const ImageWithCaption = ({ src, alt }) => (
    <figure className="olive-image-wrapper">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{alt}</figcaption>
    </figure>
  );

  // Sidebar details
  const sidebarData = [
    { title: "Company", text: "Olive Crypto Systems" },
    { title: "Tech Stack Used", text: "React.js, Node.js, Express.js, MongoDB" },
    { title: "Duration", text: "June 2025 — July 2025" },
    { title: "Team", text: "Web Development Team" },
    { title: "Demo", link: "https://olive-skill-test.vercel.app/login" },
    { title: "GitHub", link: "https://github.com/ashishlukka1/skill-caravan" },
  ];

  // Images data
  const twoImages = [
    { src: "https://u.cubeupload.com/ashishl/Snapchat1730730912.jpg", alt: "Olive Crypto Systems Image-2" },
  ];

  const endImages = [
    { src: "https://u.cubeupload.com/ashishl/login.png", alt: "Login" },
    { src: "https://u.cubeupload.com/ashishl/register.png", alt: "Register" },
  ];

  const largeImages = [
    { src: "https://u.cubeupload.com/ashishl/userdash.png", alt: "User Dashboard" },
    { src: "https://u.cubeupload.com/ashishl/profile.png", alt: "Profile Settings" },
    { src: "https://u.cubeupload.com/ashishl/coursesuser.png", alt: "All Courses" },
    { src: "https://u.cubeupload.com/ashishl/mycoursesuser.png", alt: "My Courses" },
    { src: "https://u.cubeupload.com/ashishl/coursedetailsandunit.png", alt: "Course Details and Units Content" },
    { src: "https://u.cubeupload.com/ashishl/assessment.png", alt: "Assessment Page (For each Unit, Chossen randomly from the sets of assessments available for that unit)" },
    { src: "https://u.cubeupload.com/ashishl/assginmentblocked.png", alt: "Assessment Blocked (If the user switches the tab 3 times during the assessment)" },
    { src: "https://u.cubeupload.com/ashishl/assignmentreview.png", alt: "Progress Tracking and Assignment Review (For each Unit)" },
    { src: "https://u.cubeupload.com/ashishl/coursedetailsandunit.png", alt: "Certificate Generation (After completing all units and assessments)" },
    { src: "https://u.cubeupload.com/ashishl/mycertiificatesuser.png", alt: "My Certificates (User can download the certificate)" },
  ];

  const checkerImages = [
    { src: "https://u.cubeupload.com/ashishl/checkerdashboard.png", alt: "Checker Dashboard" },
    { src: "https://u.cubeupload.com/ashishl/checkercoursereview.png", alt: "Course Review (Checker can review the course content before it is made public)" },
  ];

  const adminImages = [
    { src: "https://u.cubeupload.com/ashishl/admindasboard.png", alt: "Admin Navigation bar with all the options" },
    { src: "https://u.cubeupload.com/ashishl/addcourse.png", alt: "Adding a Course (Admin can add a course with multiple units and assessments)" },
    { src: "https://u.cubeupload.com/ashishl/editcoursetable.png", alt: "Edit Course Table" },
    { src: "https://u.cubeupload.com/ashishl/editcoursebyid.png", alt: "Edit an Exisiting Course by ID (Admin can edit the course details, units, and assessments)" },
    { src: "https://u.cubeupload.com/ashishl/empstatus.png", alt: "Employee Status (Admin can view the status of each employee's progress)" },
    { src: "https://u.cubeupload.com/ashishl/certificate.png", alt: "Certificate Template (Admin can set the certificate template used for generating certificates)" },
  ];

  return (
    <div className="olive-page">
      {/* Banner */}
      <div className="olive-banner">
        <img
          src="https://i.postimg.cc/766fzYrG/Olive-Logo-removebg-preview.png"
          alt="Olive Crypto Systems Banner"
          className="banner-img"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="olive-content container">
        {/* Sidebar */}
        <div className="olive-sidebar">
          <img
            src="https://i.postimg.cc/766fzYrG/Olive-Logo-removebg-preview.png"
            alt="Olive Crypto Systems"
            className="company-logo"
            loading="lazy"
          />
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
        <div className="olive-main">
          <h1>Olive Crypto Systems.</h1>
          <p className="intro">
            <span className="bold-text">
              Efficiency through reuse, the art of compact coding.
            </span>{" "}
            At Olive Crypto Systems, I learned how powerful clean, reusable code
            can be. Designing components and modules for multiple features
            reduced duplication, simplified maintenance, and sped up
            development.
          </p>
          <p className="intro">
            This not only saved time but also improved{" "}
            <span className="bold-text">system stability</span> and ensured{" "}
            <span className="bold-text">consistency</span> across the platform.
            I also saw how thoughtful{" "}
            <span className="bold-text">micro-interactions</span> could make the
            user experience <span className="bold-text">smoother</span>, more{" "}
            <span className="bold-text">intuitive</span>, and{" "}
            <span className="bold-text">engaging</span>.
          </p>

          <p className="highlight">
            During my internship at Olive Crypto Systems, I developed a{" "}
            <span className="bold-text">MERN</span>-based internal training
            platform with{" "}
            <span className="bold-text">role-specific dashboards</span>, skill
            assessments, <span className="bold-text">progress tracking</span>,
            and automated certificate generation. I also built detailed logging
            features to ensure <span className="bold-text">audit-ready</span>{" "}
            compliance and uphold{" "}
            <span className="bold-text">high training standards</span>.
          </p>

          {/* Single image after highlight */}
          <div className="olive-single-image">
            <img src={twoImages[0].src} alt={twoImages[0].alt} loading="lazy" />
          </div>

          <p className="short-content mt-3">
            The daily morning meetings were a new experience — watching 20
            people share yesterday’s work and tomorrow’s plans was fascinating.
            Initially nerve-wracking, they soon became my favorite part of the
            day.
          </p>

          <p className="short-content">
            KT sessions with senior developers offered practical insights and
            deep technical knowledge far beyond textbooks.
          </p>

          <div className="bold-text olive-projects">
            Here are some images from the project I contributed to during my
            internship, showcasing the features and modules I helped build.
          </div>

          <div className="short-content">
            The training application was built for three primary roles:
            <ul>
              <li>
                <strong>Employee</strong> – Access assigned courses, track
                personal progress, complete assessments, and earn certificates.
              </li>
              <li>
                <strong>Checker</strong> – Review and verify course content for
                accuracy and quality before it is made public on the platform.
              </li>
              <li>
                <strong>Admin</strong> – Monitor each employee’s progress,
                manage users, and add, edit, or remove courses while overseeing
                overall system settings.
              </li>
            </ul>
          </div>
          <div className="short-content">
            First, here’s a look at the{" "}
            <span className="bold-text">Employee Onboarding</span> journey — from
            logging in for the first time to starting their first training
            module.
          </div>
        </div>
      </div>

      {/* Images at end */}
      <div className="olive-two-images-end">
        {endImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      <div className="olive-large-images">
        {largeImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}

        <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
          Secondly, here’s a look at the{" "}
          <span className="bold-text">Checker Onboarding</span> journey — from
          accessing the platform for the first time to efficiently managing team
          training activities.
        </div>

        {checkerImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}

        <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
          Lastly, here’s a look at the{" "}
          <span className="bold-text">Admin Onboarding</span> journey — from the
          initial login to overseeing employee progress, managing courses, and
          configuring system settings for smooth platform operation.
        </div>

        {adminImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
      <ProjectNav />
    </div>
  );
}

export default Olive;
