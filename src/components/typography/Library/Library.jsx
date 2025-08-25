import React from "react";
import "./Library.css";

function DigitalAcademicLibrary() {
  // Helper to render an image with lazy loading & caption (same as Olive)
  const ImageWithCaption = ({ src, alt }) => (
    <figure className="dal-image-wrapper">
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{alt}</figcaption>
    </figure>
  );

  // Sidebar data
  const sidebarData = [
    { title: "Project", text: "Digital Academic Library" },
    { title: "Event", text: "Webathon 3.0 By ACM VNRVJIET" },
    {
      title: "Tech Stack Used",
      text: "React.js, Node.js, Express.js, MongoDB, WebSockets, Twilio, Gemini AI",
    },
    { title: "Duration", text: "24 Hours (Hackathon)" },
    {
      title: "Team Members",
      members: [
        {
          name: "Ashish Lukka",
          link: "https://www.linkedin.com/in/ashishlukka",
        },
        {
          name: "Srikar Janjirala",
          link: "https://www.linkedin.com/in/srikar-janjirala/",
        },
        {
          name: "Swaroop Mallidi",
          link: "https://www.linkedin.com/in/swaroop-mallidi/",
        },
        {
          name: "Shaik Afzal Elahi",
          link: "https://www.linkedin.com/in/shaik-afzal-elahi/",
        },
        {
          name: "Abhinav Cheruku",
          link: "https://www.linkedin.com/in/abhinav-cheruku-46a224304/",
        },
      ],
    },
    { title: "Demo", link: "https://digital-academic-library.vercel.app/" },
    {
      title: "GitHub",
      link: "https://github.com/ashishlukka1/digital-academic-library",
    },
  ];

  // Images grouped for easier mapping
  const featureImages = [
    {
      src: "https://u.cubeupload.com/ashishl/landingpage.png",
      alt: "Landing Page",
    },
    {
      src: "https://u.cubeupload.com/ashishl/guest.png",
      alt: "Guest Search to check the availability of books without login",
    },
    {
      src: "https://u.cubeupload.com/ashishl/signin.png",
      alt: "Login Page with Google Authentication",
    },
    {
      src: "https://u.cubeupload.com/ashishl/signup.png",
      alt: "Signup Page with Google Authentication and Role Selection",
    },
    {
      src: "https://u.cubeupload.com/ashishl/chatbotaaa.png",
      alt: "Gemini AI Chatbot for answering student queries",
    },
  ];

  const facultyImages = [
    {
      src: "https://u.cubeupload.com/ashishl/facultyloginpage.png",
      alt: "Faculty Landing Page after Login",
    },
    {
      src: "https://u.cubeupload.com/ashishl/requestedbooksfacult.png",
      alt: "List of Requested Books by Students",
    },
    {
      src: "https://u.cubeupload.com/ashishl/publishbookfaculty.png",
      alt: "Publish the book to the digital library based on the request",
    },
  ];

  const studentImages = [
    {
      src: "https://u.cubeupload.com/ashishl/studentloginpage.png",
      alt: "Student Landing Page after Login",
    },
    {
      src: "https://u.cubeupload.com/ashishl/studentdash.png",
      alt: "Student Dashboard with Book Search",
    },
    {
      src: "https://u.cubeupload.com/ashishl/coursematerialsdispl.png",
      alt: "View Course Materials and Book Details with Notes",
    },
    {
      src: "https://u.cubeupload.com/ashishl/requestabookstudent.png",
      alt: "Request a book from the library if not available",
    },
    {
      src: "https://u.cubeupload.com/ashishl/offlinebookservice.png",
      alt: "Office Book Service for Students (Select the book)",
    },
    {
      src: "https://u.cubeupload.com/ashishl/bookconfirmation.png",
      alt: "Time Confirmation for taking the book from the library",
    },
    {
      src: "https://u.cubeupload.com/ashishl/confirmationonbookwi.png",
      alt: "Book Confirmation with Twilio SMS Notification",
    },
    {
      src: "https://u.cubeupload.com/ashishl/discusionforums.png",
      alt: "Discussion Forums for Real-time Communication between Students with Similar Interests",
    },
    {
      src: "https://u.cubeupload.com/ashishl/joinavailabeorcreate.png",
      alt: "Join Available or Create New Discussion Forum",
    },
    {
      src: "https://u.cubeupload.com/ashishl/createanewchatroom2.png",
      alt: "New Chat Room Creation",
    },
    {
      src: "https://u.cubeupload.com/ashishl/chatroom.png",
      alt: "Chat Room",
    },
    {
      src: "https://u.cubeupload.com/ashishl/chatroommoderation.png",
      alt: "Chat Room Moderation by deleting the chat room if inappropriate messages are sent",
    },
  ];

  return (
    <div className="dal-page">
      {/* Banner */}
      <div className="dal-banner">
        <img
          src="https://u.cubeupload.com/ashishl/digitalbanner.png"
          alt="Digital Academic Library Banner"
          className="banner-img1"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="dal-content container">
        {/* Sidebar */}
        <div className="dal-sidebar">
          {sidebarData.map((item, idx) => (
            <React.Fragment key={idx}>
              <h4>{item.title}</h4>
              {item.members ? (
                <ul className="team-list">
                  {item.members.map((member, i) => (
                    <li key={i}>
                      <a
                        href={member.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {member.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : item.link ? (
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
        <div className="dal-main">
          <h1>Digital Academic Library.</h1>
          <p className="intro">
            <span className="bold-text">A 24-hour hackathon project</span> built
            for Webathon 3.0, this platform serves as a{" "}
            <span className="bold-text">centralized hub</span> for students and
            faculty to store, access, and share academic resources in real time.
          </p>
          <p className="intro">
            This was the 2nd and<span className="bold-text"> final round</span>{" "}
            of the event, following the first round — an{" "}
            <span className="bold-text">Ideation Round </span>where we pitched
            our ideas to mentors for other problem statement.
          </p>

          <p className="highlight">
            Built with the <span className="bold-text">MERN stack</span> and
            integrated with <span className="bold-text">Gemini AI</span>, the
            platform offers a{" "}
            <span className="bold-text">wide collection of books</span> from the
            college library, an{" "}
            <span className="bold-text">AI-powered chatbot</span> to answer any
            queries, and <span className="bold-text">WebSockets</span> for
            real-time communication between students with similar interests on a
            topic. Students can request books and faculty can publish them to
            the digital library. The system also provides{" "}
            <span className="bold-text">reminder notifications</span> via{" "}
            <span className="bold-text">Twilio</span> to ensure books are
            returned within the required time.
          </p>

          {/* Win Section */}
          <div className="dal-win-section">
            <p>
              Our{" "}
              <span className="bold-text">
                approach to the problem statement
              </span>{" "}
              went beyond its original scope, exploring innovative solutions
              that added real value.
            </p>
            <p>
              Combined with strong{" "}
              <span className="bold-text">team collaboration</span>, this helped
              us become the{" "}
              <span className="bold-text">WINNERS OF WEBATHON 3.0</span>.
            </p>

            <img
              src="https://u.cubeupload.com/ashishl/1744132148860.jpg"
              alt="Our Team Winning Webathon 3.0"
              className="dal-win-image"
              loading="lazy"
            />
          </div>

          {/* Features intro */}
          <div className="bold-text dal-projects">Key Features:</div>
          <ul className="short-content">
            <li>
              AI-powered chatbot to answer student queries about academic
              resources.
            </li>
            <li>
              Real-time moderated chat rooms between students with similar
              interests.
            </li>
            <li>Live document uploads with instant sync across devices.</li>
            <li>Automated SMS alerts reminding return of books.</li>
            <li>Role-based access for Students, Faculty.</li>
          </ul>
          <p className="features-intro">
            Below are some highlights and screenshots from our platform.
          </p>
          <p className="features-intro mb-5">
            These images showcase the core features that made our project stand
            out.
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="dal-feature-images">
        {featureImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
        Here’s a look at the <span className="bold-text">Student Login</span>{" "}
        journey — from accessing the platform for the first time to exploring
        and using all available academic resources.
      </div>

      <div className="dal-feature-images">
        {studentImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      <div className="short-content olive-main ss" style={{ maxWidth: "700px" }}>
        Here’s a look at the <span className="bold-text">Faculty Login</span>{" "}
        journey — from accessing the platform for the first time to publishing
        resources, managing student requests, and overseeing the digital
        library.
      </div>

      <div className="dal-feature-images">
        {facultyImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
}

export default DigitalAcademicLibrary;
