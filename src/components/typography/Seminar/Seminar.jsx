import React from "react";
import "./Seminar.css";
import ProjectNav from "../ProjectNav/ProjectNav";

import landingPage from "../../../assets/seminar/landing.webp";
import loginPage from "../../../assets/seminar/login page.webp";
import forgotPassword from "../../../assets/seminar/forgot password.webp";

// ✅ Faculty images
import userDash1 from "../../../assets/seminar/user dash-1.webp";
import chooseDateUser from "../../../assets/seminar/choose date -user.webp";
import timeSlotUserDash from "../../../assets/seminar/time slot -usre dash.webp";
import userManageBookings from "../../../assets/seminar/user -managebookings.webp";
import userSettings from "../../../assets/seminar/user- settings.webp";

// ✅ Club images
import clubRegistration from "../../../assets/seminar/club registration.webp";
import clubReg1 from "../../../assets/seminar/club reg-1.webp";
import clubReg2 from "../../../assets/seminar/club reg-2.webp";
import clubReg3 from "../../../assets/seminar/club reg-3.webp";

// ✅ Admin images
import adminDash from "../../../assets/seminar/admin dash.webp";
import adminBookingCalender from "../../../assets/seminar/admin booking calender.webp";
import adminBookingReq from "../../../assets/seminar/admin - booking req.webp";
import adminClubReq from "../../../assets/seminar/admin club req.webp";
import banner from "../../../assets/seminar/banner.webp";

function Seminar() {
  // Reusable image with caption
  const ImageWithCaption = ({ src, alt }) => (
    <figure className="seminar-image-wrapper">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <figcaption>{alt}</figcaption>
    </figure>
  );

  // Sidebar info
  const sidebarData = [
    { title: "Project", text: "Seminar Hall Booking System" },
    {
      title: "Tech Stack Used",
      text: "React.js, Node.js, Express.js, MongoDB, EmailJS, Firebase",
    },
    { title: "Duration", text: "3 weeks" },
    {
      title: "Role-based Access",
      text: "Clubs, Director(Admin), Users(Faculties)",
    },
    { title: "Demo", link: "https://vnrvjiet-seminar-hall.vercel.app" },
    {
      title: "GitHub",
      link: "https://github.com/Janjirala-Srikar/Seminar_Hall",
    },
  ];

  // Feature images
  const featureImages = [
  { src: landingPage, alt: "Landing Page" },
  { src: loginPage, alt: "Login Page for all users" },
  { src: forgotPassword, alt: "Forgot Password Page" },
];

const facultyImages = [
  { src: userDash1, alt: "User – Dashboard (Display of all seminar halls)" },
  {
    src: chooseDateUser,
    alt: "Detailed view of a seminar hall (Choose date and time slot)",
  },
  {
    src: timeSlotUserDash,
    alt: "Fill the details and time slot to book the hall",
  },
  {
    src: userManageBookings,
    alt: "User – Manage Bookings (View, cancel bookings)",
  },
  { src: userSettings, alt: "User – Settings (Update profile and password)" },
];

const clubImages = [
  { src: clubRegistration, alt: "Club – Registration Page" },
  { src: clubReg1, alt: "Club registration step 1" },
  { src: clubReg2, alt: "Club registration step 2" },
  { src: clubReg3, alt: "Club registration step 3" },
];

const adminImages = [
  { src: adminDash, alt: "Admin Dashboard – Overview of bookings and halls" },
  {
    src: adminBookingCalender,
    alt: "Calendar view of all bookings with option to filter based on the hall names",
  },
  {
    src: adminBookingReq,
    alt: "Seminar hall booking requests with options to approve/reject",
  },
  {
    src: adminClubReq,
    alt: "Club registration requests with options to approve/reject",
  }
];

  return (
    <div className="seminar-page">
      {/* Banner */}
      <div className="seminar-banner">
        <img
          src="https://cdn.brandfetch.io/idD_5AfN3y/w/329/h/303/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B"
          alt="Seminar Hall Booking Banner"
          className="banner-img3"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="seminar-content container">
        {/* Sidebar */}
        <div className="seminar-sidebar">
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
        <div className="seminar-main">
          <h1>Campus Hall Scheduler. </h1>
          <p className="intro">
            A{" "}
            <span className="bold-text">
              real-time seminar hall booking system{" "}
            </span>
            designed for faculties, clubs, and administrators to streamline the
            process of booking, approving, and managing seminar halls.
          </p>

          <p className="highlight">
            Developed with the <span className="bold-text">MERN stack</span> and
            integrated with <span className="bold-text">EmailJS</span> for
            instant booking notifications.
          </p>

          <div className="bold-text seminar-projects">Key Features:</div>
          <ul className="short-content">
            <li>
              Role-based access (Director, Transport Manager, Faculties, Clubs).
            </li>
            <li>Real-time seminar hall booking calendar.</li>
            <li>Email notifications for approvals/rejections.</li>
            <li>Admin dashboards for approval and hall management.</li>
          </ul>
          <p className="features-intro mb-5">
            Below are some highlights and screenshots from the system.
          </p>
        </div>
      </div>

      {/* Feature Images */}
      <div className="seminar-feature-images">
        {featureImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* Club Journey */}
      <div
        className="short-content olive-main ss"
        style={{ maxWidth: "700px" }}
      >
        This flow shows how a <span className="bold-text">club </span> submits
        its registration details on the platform. Once approved by the admin,
        the <span className="bold-text">login credentials</span> are shared with
        the club to access the booking system.
      </div>
      <div className="dal-feature-images">
        {clubImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* Faculty Journey */}
      <div
        className="short-content olive-main ss"
        style={{ maxWidth: "700px" }}
      >
        The user flow covers{" "}
        <span className="bold-text">booking a seminar hall</span>, managing{" "}
        <span className="bold-text">existing reservations</span>, and updating
        profile details.
      </div>
      <div className="dal-feature-images">
        {facultyImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>

      {/* Admin Journey */}
      <div
        className="short-content olive-main ss"
        style={{ maxWidth: "700px" }}
      >
        The <span className="bold-text">admin</span> flow includes viewing the
        booking calendar for an overview of hall usage, handling{" "}
        <span className="bold-text">booking requests</span>, and{" "}
        <span className="bold-text">
          approving or rejecting club registration requests
        </span>
        .
      </div>
      <div className="dal-feature-images">
        {adminImages.map((img, idx) => (
          <ImageWithCaption key={idx} src={img.src} alt={img.alt} />
        ))}
      </div>
      <ProjectNav />
    </div>
  );
}

export default Seminar;
